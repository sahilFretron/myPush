const cls = require("cls-hooked");
const uuidv4 = require("uuid/v4");
const clsNamespace = cls.createNamespace("app");

const clsMiddleware = (req, res, next) => {
  // req and res are event emitters. We want to access CLS (Continuation Local Storage) context inside of their event callbacks

  clsNamespace.bind(req);
  clsNamespace.bind(res);
  var oldSendFunction = res.send;
  const traceID = uuidv4();
  res.send = function () {
    let stack = clsNamespace.get("errorStack");
    if (stack) {
      arguments[0].logStack = stack;
    }
    oldSendFunction.apply(this, arguments);
  };

  clsNamespace.run(() => {
    clsNamespace.set("traceID", traceID);
    if (req.query.includeLog == "true") {
      clsNamespace.set("errorStack", []);
    } else {
      clsNamespace.set("errorStck", null);
    }

    next();
  });
};

const insertTokenInfo = function (req, res, next) {
  var tokenInfo = {};
  var token = req.headers.authorization;
  if (token) {
    let infoFromToken = _parseJwt(token.split(" ")[1]);
    tokenInfo = { ...infoFromToken, token: token };
    req["tokenInfo"] = tokenInfo;
  }
  next();
};

function _parseJwt(token) {
  var base64Url = token.split(".")[1];
  return JSON.parse(Buffer.from(base64Url, "base64").toString());
}

module.exports = {
  insertTokenInfo: insertTokenInfo,
  clsNamespace:clsNamespace,
  clsMiddleware: clsMiddleware,
};
