const fs = require('fs');

const objectsArray = [
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "f6ffd23c-8e4f-450a-8158-cdb5d90412ea",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0038942"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "b82e883b-17c4-414c-8d6d-076b93dc02d3",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0039063"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "c8d5a43e-7913-412b-94b7-a77c06377050",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0040747"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "89553178-7033-4569-ae80-1b6263a36d16",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042243"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "5a444554-f9d6-41d7-a929-5b4861bf45ff",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042936"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a67e1c8d-c8cc-42bf-bc5c-3b2ce6097640",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042545"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "cfd4b544-d973-4e0b-a7ea-0ddfe7841ed9",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044016"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "f12794a9-bc87-4b4f-a3d3-27150026255a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044452"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "5e85912a-4aff-401f-bd75-3d52cea3cae1",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0045231"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "1477a1eb-6821-4b26-ab9f-470d82ad0571",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0045241"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "5c59c3f8-13dc-41ce-a90f-99e5905e2610",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0053823"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "7f52d150-db92-4203-84d5-ab58de226d30",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0055525"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "21e51008-5c7b-43e1-83ff-8b32a932cfd8",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057455"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "b6def814-97ef-40e2-9088-19ecd56a2202",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0060580"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "cf69fe56-fdbf-46b3-b205-0ce409c22b55",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0062065"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "fab90193-f2f8-4ba4-9fcd-bc9dc023c0a2",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064969"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "d0e4425c-418b-4b71-af6f-e256f4ce1195",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0058984"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "d8bc1006-db6b-4e26-90c4-e7e55e109dcd",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064192"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "0da05e73-abe4-4578-898e-cc5e487fe774",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042270"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "35efe730-a61b-40f8-8fae-cf678286798e",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0055608"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "18a03fbf-63da-4743-9fe4-a3d991adfe7a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044963"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "31c060c8-f3dc-4719-844e-ea5aac0ebd66",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0065114"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "20ba8fff-b1fa-4f92-983d-9722baefb5e0",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0041924"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "90560920-0b90-448f-b0d3-ddfb3ce52426",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0069226"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "f2acfdda-c805-485d-9132-6d562c95b5f7",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042021"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a57bb927-a230-45e2-bf07-9b87afbda3e9",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057065"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "71d383d0-72c6-49b0-8d3b-bb6f97bbd116",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0071920"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e2e31396-fe7d-4ae7-92dc-052abcdc694a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0063316"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "7c89819c-29ae-44ae-8327-3140154038f9",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0059521"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "3dcb8c95-7a90-4e4c-b94a-04c94b40e417",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044307"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "83a3e433-93af-4ec0-97fa-c00a385046a8",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0069580"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "2effafa5-786e-434d-af1d-d860c296199a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057433"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "9c88ee89-af50-46b9-866c-0745bf11e48b",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0065420"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "c9ca91e2-f481-4875-9e51-e3ac45278796",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0072217"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "abb483a2-008f-4e67-9e8a-3447c0833118",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064565"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "b2974a6b-769b-441a-a3c6-d08416a82f73",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0040767"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "5f73157a-c2d0-45cf-8cc3-d85708cbe35a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0043389"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "50979c66-3ccf-4909-8d87-1c7efeccafd8",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0070706"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e9a482d1-fc77-44e2-97b7-00ae625cca65",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0037543"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "84ddf381-6c34-4b04-8873-aa86729a4cdb",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0054057"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "85e00e01-fee2-492e-9492-08fbde949fe2",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0037627"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "87c8cb01-6dd7-4cfc-9962-c83edb009cb0",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0058641"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "28fa8893-5558-4e65-ab57-018751edeb6d",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0041128"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e69eee40-0b1c-45bf-9e69-240089acaa8b",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0040257"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "5e6c06c1-fc5f-4791-8308-c283b2205433",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0039864"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "6a6b5ca6-bc4d-4ca8-adf6-3de8fe700d82",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0040744"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "0ab80043-19f3-4723-a9f3-db6fc414191d",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0037814"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "d552ef1e-0d5c-45e3-a468-45f26872d43c",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0040263"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "ccf9c9ae-8450-4db5-ae3a-49b729fe1cf8",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0056962"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "17bcd113-ded1-476d-8c51-a92036c28f0e",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057281"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "c870618c-d3e4-473e-a876-c212e9d11e5f",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0058668"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "bd7d510b-428f-49c9-a69e-d4f8db95441c",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0040265"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "80951551-6376-4d45-a3d7-09c0e4461b6a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0043835"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "8ffb5137-9ffd-458e-982d-dec277d10859",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044795"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "5043cff9-e805-4a10-8a51-b2f857a821fb",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044324"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "58aef561-8218-4343-b5a1-dcb00ea07ec2",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0045099"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e28b6c19-b9b3-4476-83fa-7e406ec5fce0",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044751"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "437e4d8a-ae4e-47af-b975-3674a8bed6ef",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044572"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "18ebd7aa-601c-436d-a498-e431d06ac8bc",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0060269"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a006b2e3-b5ee-41b7-83bc-c561ea6f95c3",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0060968"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a4d2141e-3ec1-4940-ada2-abf8fe8c4216",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0062087"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "52a7adbc-be60-4fd1-a134-b4f731d23a09",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0060425"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "701cbaa5-6cf6-4e38-af2e-feb9bf59f20a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0062190"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "47a18e3d-c94f-4fa0-b463-41c87ca44b0a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0062862"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "38023132-6cd1-4d0c-a682-546db8c20e9b",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064448"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "042a69c1-2f31-40ed-8bf4-694e628157be",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064803"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "d0a25f3e-0c79-4563-8dc0-55ac6c1c2de8",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0066423"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a03969e1-8afd-47d5-ab96-c2ed8eee0503",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057415"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "c5f0ffd7-3413-40ac-ad5e-f53aa055bef6",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0054769"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "cbcae243-327a-42aa-8049-bfc7faf1d2c3",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0066609"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "c41b387c-c221-4df5-a5c3-e4b6a973b897",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0054196"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e8e553be-2f9b-49e0-b798-a9ed4440c5cd",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0069405"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "b1d244b5-31d0-46b7-a6b2-905a589c0878",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0062086"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "6ae82558-2c94-426d-ae83-f000f0b8864a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064734"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "16f8963e-0682-4d47-b1b6-ea0f1eba7a54",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0061906"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "cf77c75f-6d2e-486c-9cfe-f8a24351f1ec",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0072631"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a35dd87e-0fea-4a3a-97f1-1b10f1279a00",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0073167"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "5619d7f8-33e9-4e63-b15d-b54126f70dbc",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0043188"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "bbb2a804-45cb-4c2f-9198-5975a8d05ebd",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0054089"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "35d3f846-b430-4070-b7c8-cc8ebe6dc19e",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0061504"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "6cd27ae9-4edc-47d2-b424-8e1b7f02e372",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0056547"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "c53f8eb0-3e04-45d8-bf77-0e95c072fd53",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0054812"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "cf47c4ff-ed19-4379-9d66-09eb9cdb843e",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0041127"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "90fe1f47-9ce6-4f6b-878e-38f53df09d59",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042546"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "471a0b29-252e-4b9d-8710-967faa1149c5",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0059733"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "fb51c772-be81-462f-818c-131aa3d3b21a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0053821"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "7c400846-8bbc-407d-b54c-e16f05b6ab69",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057216"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "d4152f7a-d637-4cf8-af68-6c3b56a3905f",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0040572"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "3cf397f0-cd2d-4bbd-9d8b-d072c06387f9",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042811"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "94ccac97-a648-4e32-b185-f485ab653f98",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044074"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "8a96ebf7-dab1-487e-af07-4cb60b939d18",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044965"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "c97db40a-cf63-4da5-b99b-91dd7a9bd5eb",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044892"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "13081895-8716-47bd-91d9-29d1cbba1461",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057213"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "c9ed8447-8960-4378-afae-17c5cbcc5f96",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057036"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "1b6ad846-f286-4b57-b6bd-7f9239610c7c",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057800"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a8ff501a-799f-423f-91e0-109d82c99fd2",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0058367"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "b2df28ef-6355-4aee-9005-e8d9abdc1f12",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0056340"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "f8f3736d-c2e2-4060-91c1-b8afcead3dee",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0059317"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "90cf0108-68fe-4dc9-893b-c29db648762b",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0059770"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "4dd59fdf-6071-485a-88e3-fcf4f083fbb9",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0060909"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "7483fc94-06f5-454c-82df-46d552aa8fd3",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0059974"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "58916804-c17a-42c4-81c4-ad02a7f0db3d",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0061769"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "c3c1890d-3c8e-4f03-a26b-d075a5d5822d",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0043076"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "5ab76906-5c5f-45ef-a398-83938d305ae2",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0061409"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "ff85a249-4050-4721-a6d8-2a83751ff8bc",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0062325"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "b0c304e5-16b0-4341-97a3-a78a6e5aff60",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0060422"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "d7144262-4fb0-48a3-a679-dd833d8eb9ae",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0056587"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a55dc417-95e6-486f-b853-47f73810cd49",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0065069"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "5a044fda-bd88-40ab-92eb-25c29ea2844f",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064263"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e185e0e5-f0ef-45f7-9c31-159d7d79187b",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064489"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e01d5a2f-e347-4e93-a417-c00ce7ae91eb",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0065674"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "182eb9d4-3c1b-419a-80f9-770e64e36582",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0066261"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "0c3ac4ce-2e75-40e1-920f-1dd5a90e13ef",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0059402"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "7566e788-9748-40bb-9814-de5acd8110c2",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0070772"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "52fa0a5d-957a-4fd3-8382-3f58d6ead9ac",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0071463"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "ffd42e3d-dd25-4a89-a486-8e0d68f7343a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064555"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "31c118c7-fe8d-4f88-b1b0-c612ab1651ab",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042573"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "6e57d79e-737e-4a28-b76c-5845a16f7e65",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0039297"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "51d62681-dc01-437c-8c6b-1bcf43941432",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0038833"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "64700bb3-82b6-4d84-b525-d40d95a63210",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0038098"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "19b6d648-36e4-4f86-b958-40c539178005",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0066914"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "db10bb13-d2ed-4dba-a55a-b864b7e41c68",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0070337"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a5f37907-d181-405c-be0b-03034fe59cc7",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0060460"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "2d7c5f71-2a34-4099-8946-8b72a9cd13d5",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0040266"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "49321d0e-9009-4765-a3e9-4a224367e8fc",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057217"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "68d66bf9-bbd7-4c62-a1ad-6d2679003dea",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0054054"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a51fc219-8356-470b-a30e-a0768d23712a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0039858"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "7b97dc53-3341-4704-bb26-acf832e7331a",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0043075"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "c4a54e91-4f52-445b-b523-094d452ec4cd",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0061979"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "f372dca6-851f-4093-9cc3-f3481129293e",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0055571"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "474960ca-1e4b-4b36-893d-ff9d4e6148bf",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0054059"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "03a9e339-18ee-49bc-8550-4b2fb21563fc",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0043074"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "7428da13-3e68-4357-a301-6af9b482a2f6",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0039049"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "17fe04f5-24d4-49c6-b1c2-fe63fc47f6f0",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0037751"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "917ea333-de6b-491d-a3c5-75e8253a55fd",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044681"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "16d0c5a2-e38b-47ea-958c-342c34bbe11d",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044994"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "02a8ae92-ef4c-42aa-9d82-1e7d297c4b9e",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0053485"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "877fd5ea-3cb3-44e9-92bc-76e0656a59ac",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044966"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "805a416c-dea7-489c-8751-4d53f2785761",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0055449"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e139ff57-671f-4e57-9300-7fe832e4167d",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057747"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "1d10df6d-6f1c-4c12-9ad1-8b700bfb10b2",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057790"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "d3e6c1e8-1935-482d-a225-84034474ca73",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0058248"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "8234ec91-c640-4c7e-a708-824bca449373",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0059053"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "d62d5d87-c3b5-4abf-b8d6-ff42644639ea",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0040270"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "fe57be0b-416a-48d2-b113-777ee4a7aedb",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0040268"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "da334517-7d05-46e7-9ad2-ccc0924f9b8f",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0040566"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "bc8076b0-76dc-40bb-9c61-5bbf570c818c",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0061907"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "45112340-6432-4919-9cb9-3ad50c5438e7",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0059829"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a3e35bb3-d8e0-4b31-bdcf-6fbd9795a250",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0056371"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "3e2445dc-f2fb-4ab6-a7b5-a309126b1340",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057397"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "7b9bd463-4078-46b6-a8f2-a26304fe634b",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0062063"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "152e3ddd-6567-4bc3-af41-cefed3d549a2",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064533"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a10686a1-97ec-4508-9381-0f072ef4b998",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042266"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "7b321771-ff09-4bc1-9ed5-f6ae8c66a808",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057371"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "c2bb53dc-1e37-4ab9-9a7d-38ee532f0637",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0066310"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "617863a3-e840-4c98-bfe0-fb4948183a39",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0060211"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a599b0b1-4744-485d-8a1d-883287f3c6e4",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064230"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e3d899ca-9496-4d4e-bac7-c5b1aede7857",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0068068"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "7f54608b-cd87-4ad1-a2dc-1e46a6af479f",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0059934"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "4d95c1b5-1b6b-4e2c-a205-0b1085330ad1",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0062807"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e07118b1-9eb6-4d1f-8a20-7e9f0fe0aab5",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0056118"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "3d3d2f21-4bad-410a-a757-fb28fc8faaf5",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0043294"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "baef8682-9d48-4cff-8f30-f688aef20946",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0071140"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e5500eb3-2318-48a3-a679-4165a5db46d5",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042723"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "48c94019-2532-4b8b-b03c-61d223dfcbd5",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0073140"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "1df288dc-a3b0-4e3c-bdb3-ec751ddc37a4",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0045181"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e42ea9f4-e993-4dcc-a0d9-500b8b6e599d",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0038067"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "d232e8ee-b502-4514-ad89-3ebff473f27b",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0054378"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "fa625e6b-561a-4fba-8403-c7372db44830",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0041437"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "ea18b258-c351-4f62-9960-e8eb892497bd",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0043134"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "28971945-5983-47bb-b36e-5dba184d1de7",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0053496"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "7ca53bb6-a65d-4e35-9eb3-25a318b82607",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0053512"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "465b957a-13f3-48bc-ae5c-edcac119ba95",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0040267"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "56344436-21cd-4df7-b820-479729a64633",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0056367"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "43ee82eb-a26a-4336-ba1b-a0d83e10382c",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0058385"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "9a2dbe6e-796a-4308-86c9-27ed59fb236e",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0038328"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "9769ff80-4dcd-428c-837e-95fe6bfc7839",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0038734"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "b2a1abea-aafc-4eed-912b-46b37b0702e9",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042804"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "fc074185-3836-467c-9f52-c12138cff8fe",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0043683"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "6dbf1549-9c8a-41b9-ac01-dcdab94ce0fa",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044964"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "11f4651c-875b-4983-9daf-1417789fe439",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0044782"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "be99315c-4025-445b-b917-75eabcb4ed3c",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0054086"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "5a571596-0a10-4074-aae9-92f5ef158b6d",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0054085"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "86cf0d19-0c1b-48f8-a87a-eec263fb630c",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0053515"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "551ad6e1-1071-41cf-8820-fad12da836e9",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0045124"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "d4e34c99-55ab-4cd1-8464-dbfd71301a5c",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0038148"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "f71a6a38-5e11-4365-ab15-5db71731ae7f",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057344"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "f92cb4fe-d01a-4ecf-b292-845857440654",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0062785"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "a9699612-9f36-4469-8f83-64acf8080dcd",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057367"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "26187e1b-4994-474e-9cd6-5e9a80ca2bb8",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0063182"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "774e8cdf-672c-43dd-9da9-530b37219aa4",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064254"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "bba43782-4823-421c-aeab-76dde0fd3012",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0043128"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "7660bbd6-0bdb-433e-b556-548f470865ae",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0064566"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "9b7afd46-388c-4e6c-9fea-6338f4ec9047",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0065242"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "63ca8ae8-2d80-4e55-a7df-6a13decc9b58",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0045078"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "6170e576-c4cd-4b11-8a37-a745c5533939",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0065071"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "f1dd4555-3230-4326-a2ed-8ca417350125",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0058760"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e13be48d-93a7-4702-a20c-c88459fec935",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0065595"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "e365a6a5-4361-431d-b54d-163f1257fec6",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0062669"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "221c306b-4c0f-45fb-85d6-31a59f115854",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0068095"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "4ad08590-9d9b-4532-9867-ae23648b1e5c",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0070099"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "1e0e3c55-5144-4153-a8d6-fd0d1e7ad483",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0069298"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "8007a508-6323-438e-9692-87c3eddb82a2",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057377"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "34435512-92e2-4984-81d8-35812cd781cc",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057435"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "2d29088f-45c8-4f75-bc2e-8894188acc33",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057351"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "c04a41e8-cf63-4494-a21d-bb30d9f58fe2",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0058215"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "2d066c85-513f-4fc4-95b3-3760a1114eb8",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0060962"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "b9dc0026-8732-43f7-a205-0a16644ee7dc",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0057356"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "8c9e2093-8360-44f0-b2df-197a191df974",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0060815"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "575373ee-20d9-4516-b7f7-cd3f614b2936",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0062259"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "f82c9af6-5941-480c-b03f-5f00b78fbbe9",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0043613"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "53b3311f-0378-495a-b9f7-bcc3538dbe10",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0069108"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "675804ed-ba73-438d-adbf-d8479914ef91",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0069227"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "d7570188-e4a4-4ac5-ac9c-bdbdb8861c93",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0043158"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "2ae045f8-c2f9-4a93-b4d9-8ba70978a64c",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042080"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "5fffa881-c5c7-4c4b-b619-761dbf96f0cc",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0037905"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "fa113b86-2f00-45c6-8654-2e0eb16832da",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0055602"
    }
  },
  {
    "_index": "shipments_v2",
    "_type": "kafka-connect",
    "_id": "d0c8f49f-2d84-4955-85df-7fc42842aaec",
    "_score": 2.0,
    "_source": {
      "shipmentNumber": "FRETSH0042132"
    }
  }
]

const uuids = objectsArray.map(obj => obj._source.shipmentNumber);

// Convert the array to JSON format
const uuidsArrayContent = JSON.stringify(uuids, null, 2); // Pretty format with indentation

// Write the uuids array to a file
fs.writeFile("uuids_array.json", uuidsArrayContent, (err) => {
  if (err) {
    console.error("Error writing to file:", err);
  } else {
    console.log("UUIDs array has been successfully written to the file");
  }
});