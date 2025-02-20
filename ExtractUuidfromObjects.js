const fs = require('fs');

const objectsArray = [
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ae1b71b8-8d3d-4462-9a07-9bead3fa9f96",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ae1b71b8-8d3d-4462-9a07-9bead3fa9f96"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fa399a63-828a-442f-86bd-25748e28e309",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fa399a63-828a-442f-86bd-25748e28e309"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ae67ee77-a852-46fd-ad6e-0eaa7f8d952c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ae67ee77-a852-46fd-ad6e-0eaa7f8d952c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "06c40616-7838-47ec-9cb0-b89254726657",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "06c40616-7838-47ec-9cb0-b89254726657"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3f8b93cd-ef82-4026-bfe9-2948dac0981a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3f8b93cd-ef82-4026-bfe9-2948dac0981a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ef865fde-bb4a-4990-b202-a29f39601a52",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ef865fde-bb4a-4990-b202-a29f39601a52"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ea5459a9-f84f-4c99-b521-cde59b282a8f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ea5459a9-f84f-4c99-b521-cde59b282a8f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9d36c4c7-ea69-46f1-ac94-8ea8bbb4e3dc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9d36c4c7-ea69-46f1-ac94-8ea8bbb4e3dc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eff75094-8f96-4ae2-9b4f-6eb4c72d16d4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eff75094-8f96-4ae2-9b4f-6eb4c72d16d4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "132e1229-7ded-4cc9-86dc-7e3308338f14",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "132e1229-7ded-4cc9-86dc-7e3308338f14"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "65af210f-f57f-4ca0-97a6-c5ec0ea76c0d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "65af210f-f57f-4ca0-97a6-c5ec0ea76c0d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "507057ed-fcd9-4762-ae07-bec190b0d032",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "507057ed-fcd9-4762-ae07-bec190b0d032"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4c197379-0d52-4fdf-9cc2-c3469341d3f9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4c197379-0d52-4fdf-9cc2-c3469341d3f9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "982b877b-df0c-4667-8452-b6a23958e663",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "982b877b-df0c-4667-8452-b6a23958e663"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "33d52029-04c9-4cce-809b-183703674b8b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "33d52029-04c9-4cce-809b-183703674b8b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "998dcd65-7aee-4007-bbf1-b148afc1aa64",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "998dcd65-7aee-4007-bbf1-b148afc1aa64"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7155ba04-4f03-4762-86a3-107b6e553e5c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7155ba04-4f03-4762-86a3-107b6e553e5c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6b1767b5-f25b-4e54-9453-5094669b42f1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6b1767b5-f25b-4e54-9453-5094669b42f1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "da2f7f9e-c46f-4dcd-b93a-197fca19ee03",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "da2f7f9e-c46f-4dcd-b93a-197fca19ee03"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fd8326b8-70ba-45c4-a45d-b458b07e68bd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fd8326b8-70ba-45c4-a45d-b458b07e68bd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8f2fc35c-5297-4073-a946-72aa8dd0ac00",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8f2fc35c-5297-4073-a946-72aa8dd0ac00"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2bda1941-b395-45d9-b0a9-05c0ca52371c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2bda1941-b395-45d9-b0a9-05c0ca52371c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "acff956a-861b-4f3a-a1ac-e941ecb57bfc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "acff956a-861b-4f3a-a1ac-e941ecb57bfc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0bcfbf4b-07a8-4358-8f5a-8706c0db8807",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0bcfbf4b-07a8-4358-8f5a-8706c0db8807"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "84a3bf76-e5e3-46cf-be69-09cf946c61bd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "84a3bf76-e5e3-46cf-be69-09cf946c61bd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e648bc92-4d27-43f7-9cf9-0f689da2d49b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e648bc92-4d27-43f7-9cf9-0f689da2d49b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f9afcf2e-3790-47d8-bbb2-92dc3ccefa0a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f9afcf2e-3790-47d8-bbb2-92dc3ccefa0a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6981b370-2d09-4503-a3e7-92c2cf51a2ea",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6981b370-2d09-4503-a3e7-92c2cf51a2ea"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d6d062bc-a3ae-469e-9e46-3cfb147c8fbf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d6d062bc-a3ae-469e-9e46-3cfb147c8fbf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7164d9b6-990e-47d9-9dcc-a4c734c7e06d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7164d9b6-990e-47d9-9dcc-a4c734c7e06d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "72751b8b-9a8a-4233-95a3-85a8fdbd3027",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "72751b8b-9a8a-4233-95a3-85a8fdbd3027"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8533f888-f03f-46e9-a698-bc81dfcf1cc0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8533f888-f03f-46e9-a698-bc81dfcf1cc0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e67effcb-02bb-47da-893a-eaa034edcd44",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e67effcb-02bb-47da-893a-eaa034edcd44"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5ee9581d-eadf-485b-ba2c-f0d08cf08e9e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5ee9581d-eadf-485b-ba2c-f0d08cf08e9e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2773fe02-9af1-49f0-8b56-144866466cf6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2773fe02-9af1-49f0-8b56-144866466cf6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bc633bdd-6527-4d44-b40e-77caf9fd44d2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bc633bdd-6527-4d44-b40e-77caf9fd44d2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f038b4bd-cdab-41ae-824e-c7f5bdfdbf24",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f038b4bd-cdab-41ae-824e-c7f5bdfdbf24"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ce5d07c0-aaa5-4b41-9880-b5fd5c71477f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ce5d07c0-aaa5-4b41-9880-b5fd5c71477f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fcb85881-5e5b-41ef-93b5-2fce5c136bb5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fcb85881-5e5b-41ef-93b5-2fce5c136bb5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2e410c04-a0b5-4e39-82ca-1da7b563c612",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2e410c04-a0b5-4e39-82ca-1da7b563c612"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "19dbf1f0-02a4-45bb-81e8-041b4b5df986",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "19dbf1f0-02a4-45bb-81e8-041b4b5df986"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3f897a40-2b18-4d86-851b-6443356b1c1b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3f897a40-2b18-4d86-851b-6443356b1c1b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f68d3baf-a52d-4137-b363-cadac5da0518",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f68d3baf-a52d-4137-b363-cadac5da0518"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4946e9dd-d563-44c9-9a1a-e715fa1dc74f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4946e9dd-d563-44c9-9a1a-e715fa1dc74f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3944d3db-4222-4775-919b-52ac10a1add3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3944d3db-4222-4775-919b-52ac10a1add3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bb58604f-e2a8-4433-86fd-cded6425c325",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bb58604f-e2a8-4433-86fd-cded6425c325"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cbef5b81-1b11-4fba-a0f6-7621fe1da7da",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cbef5b81-1b11-4fba-a0f6-7621fe1da7da"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "09c912c8-079d-4a8d-9d7f-d0ce10fa50a7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "09c912c8-079d-4a8d-9d7f-d0ce10fa50a7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5778561a-8fbc-4222-8e16-1a0e1679353c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5778561a-8fbc-4222-8e16-1a0e1679353c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1a7f9835-17c1-479f-854f-018620fb2839",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1a7f9835-17c1-479f-854f-018620fb2839"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "990a8647-62e7-4782-a0dd-544ee64fc5d1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "990a8647-62e7-4782-a0dd-544ee64fc5d1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "387269dd-8e73-48fa-8b41-2227c5373f61",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "387269dd-8e73-48fa-8b41-2227c5373f61"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "03903ad5-b2e4-42a5-8c34-88d5b98b8996",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "03903ad5-b2e4-42a5-8c34-88d5b98b8996"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "47888b65-329a-4a93-bd54-4a2a90c41199",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "47888b65-329a-4a93-bd54-4a2a90c41199"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "59d79f4a-f47c-4c24-b860-b0b3d078cc0d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "59d79f4a-f47c-4c24-b860-b0b3d078cc0d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "adb5e1b3-a819-4e99-9ee7-3854c380c116",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "adb5e1b3-a819-4e99-9ee7-3854c380c116"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b0956f94-f8e0-4678-ac99-7578f4b964ac",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b0956f94-f8e0-4678-ac99-7578f4b964ac"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e9a2f529-f581-4fcb-bf80-405d1069c6c1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e9a2f529-f581-4fcb-bf80-405d1069c6c1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3fa14313-c783-492e-b80b-2ea251ac66ff",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3fa14313-c783-492e-b80b-2ea251ac66ff"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "33485554-dcaf-4ea5-977d-6d54d5e9ccde",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "33485554-dcaf-4ea5-977d-6d54d5e9ccde"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0ccf38d6-f93f-4658-8689-ab2652279b3f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0ccf38d6-f93f-4658-8689-ab2652279b3f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8fb61f23-8d7b-4ffa-9105-43fa791102ef",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8fb61f23-8d7b-4ffa-9105-43fa791102ef"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "513d089c-b691-458f-8823-13353b8f88a9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "513d089c-b691-458f-8823-13353b8f88a9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cabece1d-d438-4e95-bba0-4ff201c20445",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cabece1d-d438-4e95-bba0-4ff201c20445"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8a546076-1bbd-4ef7-87fd-90c4e93efe40",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8a546076-1bbd-4ef7-87fd-90c4e93efe40"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3337e4ff-71e2-4a84-9f6f-4529d3d54487",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3337e4ff-71e2-4a84-9f6f-4529d3d54487"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6796879b-c73c-4c87-a247-2b8833beb0c5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6796879b-c73c-4c87-a247-2b8833beb0c5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "14a5cbcf-fe20-4e65-8d25-d365b7129541",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "14a5cbcf-fe20-4e65-8d25-d365b7129541"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "78c5dbf3-7464-44b3-8a0b-548e6f35df2f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "78c5dbf3-7464-44b3-8a0b-548e6f35df2f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8cede58c-6fea-4af8-a0dd-ec2a3f57301e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8cede58c-6fea-4af8-a0dd-ec2a3f57301e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4e86d1c3-f26c-4a0f-9ca3-7ff1f4b23f53",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4e86d1c3-f26c-4a0f-9ca3-7ff1f4b23f53"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bbf9aefd-c0f7-4a56-b082-d3ec5c95d08e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bbf9aefd-c0f7-4a56-b082-d3ec5c95d08e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cee5eb0b-7671-4693-ab79-2680a07fce27",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cee5eb0b-7671-4693-ab79-2680a07fce27"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a4601753-d4e8-418d-b15c-b1fa129ea30f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a4601753-d4e8-418d-b15c-b1fa129ea30f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "91247e60-84e7-4028-8883-2a79e35e5ad9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "91247e60-84e7-4028-8883-2a79e35e5ad9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8cdcb954-d360-4ab9-ad9d-c5b155c71109",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8cdcb954-d360-4ab9-ad9d-c5b155c71109"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3b2521f9-6e0b-4899-ba5a-8d194233b493",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3b2521f9-6e0b-4899-ba5a-8d194233b493"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ac57ef50-f405-4a2f-bf8c-825f1c5cdec6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ac57ef50-f405-4a2f-bf8c-825f1c5cdec6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "182951b0-b93e-4135-98a7-29453d0f310d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "182951b0-b93e-4135-98a7-29453d0f310d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "585f0568-01e1-40bc-a63a-b2f5f05bc7e9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "585f0568-01e1-40bc-a63a-b2f5f05bc7e9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1e86d9d0-1508-411f-b4da-bf20a9569423",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1e86d9d0-1508-411f-b4da-bf20a9569423"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8065e6ef-95a6-4cf0-ba68-c96631705b65",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8065e6ef-95a6-4cf0-ba68-c96631705b65"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "017d96e6-792f-4f3a-bb18-7ff66c545268",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "017d96e6-792f-4f3a-bb18-7ff66c545268"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e22a5e71-5e0a-4c12-87f5-731d406d66f6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e22a5e71-5e0a-4c12-87f5-731d406d66f6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6c0b38f6-ad58-464b-bca3-30fdc49aa9df",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6c0b38f6-ad58-464b-bca3-30fdc49aa9df"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "84b4e3f4-6cd9-49f8-98a3-d05eb2c49fb0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "84b4e3f4-6cd9-49f8-98a3-d05eb2c49fb0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2f63b5a-e783-4ea9-8f0a-2cdcb7824779",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2f63b5a-e783-4ea9-8f0a-2cdcb7824779"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "08a0eb3d-4d8d-4ec9-bb0f-3144e66460af",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "08a0eb3d-4d8d-4ec9-bb0f-3144e66460af"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "708097a4-992f-48c5-8a5e-f857c7cedd32",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "708097a4-992f-48c5-8a5e-f857c7cedd32"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fd2cfde0-34e7-427d-b093-5d502d71b33c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fd2cfde0-34e7-427d-b093-5d502d71b33c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d28e459e-e954-499e-bcc6-a47d14526eb4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d28e459e-e954-499e-bcc6-a47d14526eb4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f2a41a5a-2797-4f79-8d81-ba634f7bfdfb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f2a41a5a-2797-4f79-8d81-ba634f7bfdfb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d3ff6fe6-8a22-4c30-8d3c-900abbadf2b0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d3ff6fe6-8a22-4c30-8d3c-900abbadf2b0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "93b371da-7bf8-46ab-bb7c-d71ad29e3494",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "93b371da-7bf8-46ab-bb7c-d71ad29e3494"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dcb4deba-2533-41da-aa5f-c06002385a48",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dcb4deba-2533-41da-aa5f-c06002385a48"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "881f64b3-f622-4b80-a71c-d1f06f9b9471",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "881f64b3-f622-4b80-a71c-d1f06f9b9471"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b747578f-bcd7-4c5c-b340-2c4fed6fb82a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b747578f-bcd7-4c5c-b340-2c4fed6fb82a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "79f0bf34-4460-4603-b30e-ae9a81b5407d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "79f0bf34-4460-4603-b30e-ae9a81b5407d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9d9a3464-fb53-4a0e-a6ac-1905ba143491",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9d9a3464-fb53-4a0e-a6ac-1905ba143491"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a2a68da3-9e1a-4740-b07f-8744a4115531",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a2a68da3-9e1a-4740-b07f-8744a4115531"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cfc768b0-554f-4ded-a8c5-76a39d45fee9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cfc768b0-554f-4ded-a8c5-76a39d45fee9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7d105f2c-c954-41f0-9e93-e9fea73fa041",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7d105f2c-c954-41f0-9e93-e9fea73fa041"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0c7ea147-4569-49af-9bef-9de7b51bec86",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0c7ea147-4569-49af-9bef-9de7b51bec86"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f849821e-736b-475a-8e7a-32ecf202368e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f849821e-736b-475a-8e7a-32ecf202368e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "34d2fdbd-f095-43a3-a318-0f06ac2343f0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "34d2fdbd-f095-43a3-a318-0f06ac2343f0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ad52b6b8-f1e5-4e5c-ada9-c92af03fe6a7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ad52b6b8-f1e5-4e5c-ada9-c92af03fe6a7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6a3edca1-4a99-48f7-baf4-bb6b11c2cdfd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6a3edca1-4a99-48f7-baf4-bb6b11c2cdfd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5e435aae-8df9-454c-859c-1d74e53cb36e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5e435aae-8df9-454c-859c-1d74e53cb36e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4f2e085a-4990-42aa-8441-f4b3df53bbb9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4f2e085a-4990-42aa-8441-f4b3df53bbb9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "45b34ada-37d3-4e3c-932b-158101a5a10b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "45b34ada-37d3-4e3c-932b-158101a5a10b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c8ac5a2c-412e-4259-8e23-6e0b55e76a9b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c8ac5a2c-412e-4259-8e23-6e0b55e76a9b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "20d8dfee-9f16-4ca4-89f6-dc442051b543",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "20d8dfee-9f16-4ca4-89f6-dc442051b543"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2cd11f51-f9ca-47f4-b751-bee2a42e6df2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2cd11f51-f9ca-47f4-b751-bee2a42e6df2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b00652e9-184c-42f2-8968-903d237f74a9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b00652e9-184c-42f2-8968-903d237f74a9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6ab64d59-9912-4b9d-a4b8-8ba58bc5df15",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6ab64d59-9912-4b9d-a4b8-8ba58bc5df15"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "40c33ee8-1a6d-4525-b840-90e48dba1240",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "40c33ee8-1a6d-4525-b840-90e48dba1240"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "be7a8fb7-5a29-4ab2-9e90-3b9ab541c30f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "be7a8fb7-5a29-4ab2-9e90-3b9ab541c30f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3bee4875-5f88-440d-9c15-a3191afdff90",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3bee4875-5f88-440d-9c15-a3191afdff90"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5d0dfb17-ac76-495e-a890-620332a37029",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5d0dfb17-ac76-495e-a890-620332a37029"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "91d86586-bcb6-4d38-b1a7-22ff0d829c75",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "91d86586-bcb6-4d38-b1a7-22ff0d829c75"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ea0219cb-9edc-448d-93de-c91977c3f786",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ea0219cb-9edc-448d-93de-c91977c3f786"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "600ff1d2-ab04-4663-b6c2-9cf723584b9c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "600ff1d2-ab04-4663-b6c2-9cf723584b9c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "71bb5e1b-89c3-4bb2-81c0-8ea7a73958d5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "71bb5e1b-89c3-4bb2-81c0-8ea7a73958d5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "134fcdcf-c6a5-4870-a9c7-5c14153467f9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "134fcdcf-c6a5-4870-a9c7-5c14153467f9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e045928e-765f-419f-97b1-4de03bd52dbd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e045928e-765f-419f-97b1-4de03bd52dbd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "895ce02a-aae7-42f9-a098-20e484d553d8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "895ce02a-aae7-42f9-a098-20e484d553d8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4a0964a3-002a-40b5-8bb8-b529539e26ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4a0964a3-002a-40b5-8bb8-b529539e26ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "94a812f1-0144-4d34-b4e7-8173c7fef15f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "94a812f1-0144-4d34-b4e7-8173c7fef15f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e3bfaeea-7bff-4c36-a795-401748db5de0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e3bfaeea-7bff-4c36-a795-401748db5de0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "db8fa8a8-269d-4477-9699-b8e1ca8cc342",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "db8fa8a8-269d-4477-9699-b8e1ca8cc342"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f8daa9ae-e1ff-47d4-922d-74a9e4269961",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f8daa9ae-e1ff-47d4-922d-74a9e4269961"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c9a24971-1642-47a6-ac42-9b1b8ac88282",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c9a24971-1642-47a6-ac42-9b1b8ac88282"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "27a6cb41-d9fe-4ba8-810f-e16333418da8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "27a6cb41-d9fe-4ba8-810f-e16333418da8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cb8f4f60-a085-4820-8296-4b14f54342e9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cb8f4f60-a085-4820-8296-4b14f54342e9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4853c156-00fb-4ccd-90e8-bb5137908ca0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4853c156-00fb-4ccd-90e8-bb5137908ca0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1a22aa01-613a-485f-99ce-85748e091bd0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1a22aa01-613a-485f-99ce-85748e091bd0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a581ad29-35f5-48e2-a900-aab77b9e3d6b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a581ad29-35f5-48e2-a900-aab77b9e3d6b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f93df1cd-ebf0-4e62-867b-ad80bac4fcfe",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f93df1cd-ebf0-4e62-867b-ad80bac4fcfe"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5800beb6-39b5-43c0-9564-3b247740c5ed",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5800beb6-39b5-43c0-9564-3b247740c5ed"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e67f602e-9c27-4715-b43b-88c490672a15",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e67f602e-9c27-4715-b43b-88c490672a15"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "501ab15b-45e8-4863-b719-9eec1c474506",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "501ab15b-45e8-4863-b719-9eec1c474506"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e5d8165d-5e37-40bd-9e4d-a0e368315d32",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e5d8165d-5e37-40bd-9e4d-a0e368315d32"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "22ff0ce3-1421-414e-8176-fb2d94e4b37d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "22ff0ce3-1421-414e-8176-fb2d94e4b37d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "44f8656e-885c-461a-bd87-ac524f755382",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "44f8656e-885c-461a-bd87-ac524f755382"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "95df8beb-af80-4069-9b1c-8e3079b896fb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "95df8beb-af80-4069-9b1c-8e3079b896fb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4a804d0f-4b81-49c7-a80a-5bf82b4c7694",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4a804d0f-4b81-49c7-a80a-5bf82b4c7694"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1e18d3f2-a61c-4789-b3f9-e0097bdc1e64",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1e18d3f2-a61c-4789-b3f9-e0097bdc1e64"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d66cc2a7-07e1-439b-89b9-238cec695b94",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d66cc2a7-07e1-439b-89b9-238cec695b94"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6904607e-10cb-409d-be7f-bdfe453d2b36",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6904607e-10cb-409d-be7f-bdfe453d2b36"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8a5a920d-3c0a-4f83-97c6-e233c015c816",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8a5a920d-3c0a-4f83-97c6-e233c015c816"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2a71992d-54f2-4224-a373-feef5b74a072",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2a71992d-54f2-4224-a373-feef5b74a072"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "32dc1d6a-e572-457f-8251-5c06a7518285",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "32dc1d6a-e572-457f-8251-5c06a7518285"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c3bcbb10-01fc-4d3f-b36c-03007f718f72",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c3bcbb10-01fc-4d3f-b36c-03007f718f72"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "776cc4d7-f589-426b-919a-87185e051679",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "776cc4d7-f589-426b-919a-87185e051679"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a043dd33-828d-4e26-b6f6-4263c6e35de7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a043dd33-828d-4e26-b6f6-4263c6e35de7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "743d5104-99be-4069-be45-78bc9904b1fd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "743d5104-99be-4069-be45-78bc9904b1fd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "89538873-ff2a-4ced-96ac-24f3d72ccf56",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "89538873-ff2a-4ced-96ac-24f3d72ccf56"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b1d8e370-f68e-4a1f-9aaa-4a33e1a50c5d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b1d8e370-f68e-4a1f-9aaa-4a33e1a50c5d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f44efeed-d0fe-4ea4-9952-e434708945a9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f44efeed-d0fe-4ea4-9952-e434708945a9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "febbe78a-a397-40ac-98ba-a9ca57f92300",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "febbe78a-a397-40ac-98ba-a9ca57f92300"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6affcada-99a2-4218-9425-6fed89d28e54",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6affcada-99a2-4218-9425-6fed89d28e54"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3b33da25-74b3-47fa-8c9d-5eab143d79aa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3b33da25-74b3-47fa-8c9d-5eab143d79aa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "732b8f68-7b62-4030-98bd-934b3f2fa6ca",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "732b8f68-7b62-4030-98bd-934b3f2fa6ca"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f6f2c40c-ed01-4599-b78e-e87e890ad47a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f6f2c40c-ed01-4599-b78e-e87e890ad47a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ee25bb58-8359-4888-82b5-f2b4c75cdf08",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ee25bb58-8359-4888-82b5-f2b4c75cdf08"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "33640da6-3a4b-4a34-b8cf-e2ea6b6f6c4d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "33640da6-3a4b-4a34-b8cf-e2ea6b6f6c4d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8b9e3385-fda1-49c5-913b-fcb24ca33945",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8b9e3385-fda1-49c5-913b-fcb24ca33945"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "28da6647-0f0b-4d81-a1ed-cdc971b41404",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "28da6647-0f0b-4d81-a1ed-cdc971b41404"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4fd2d071-b941-4445-8701-559e18bf0725",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4fd2d071-b941-4445-8701-559e18bf0725"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1bb01566-5c89-4e85-a8e5-7ba6de404cf3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1bb01566-5c89-4e85-a8e5-7ba6de404cf3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9500f3b2-c567-4569-aa44-90a721881bd1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9500f3b2-c567-4569-aa44-90a721881bd1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b46eaecd-e15b-4b50-84e4-f7638ea20b7d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b46eaecd-e15b-4b50-84e4-f7638ea20b7d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "93a8cf10-e1a7-4451-85b3-af1437e8e610",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "93a8cf10-e1a7-4451-85b3-af1437e8e610"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "39e8b221-b20a-41e7-966c-ca6df799db45",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "39e8b221-b20a-41e7-966c-ca6df799db45"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "31002388-0b32-4a34-8539-5321f428eb8b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "31002388-0b32-4a34-8539-5321f428eb8b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5671c896-e69a-4ff2-b953-b9d2d0c9880a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5671c896-e69a-4ff2-b953-b9d2d0c9880a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0cbefe90-ad8e-4097-a427-f45609d06669",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0cbefe90-ad8e-4097-a427-f45609d06669"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ec1b4504-d4f3-4012-b96b-a9373073d186",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ec1b4504-d4f3-4012-b96b-a9373073d186"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a109da1f-dc26-46bb-8b90-e7427d1312cb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a109da1f-dc26-46bb-8b90-e7427d1312cb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6db15b55-a9d9-4bca-a59f-8a5963dcbb64",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6db15b55-a9d9-4bca-a59f-8a5963dcbb64"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "853dc9c6-06f6-47f7-9608-2fda65fb777e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "853dc9c6-06f6-47f7-9608-2fda65fb777e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b5e6558c-df25-49ac-ac83-42ba00dd17a9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b5e6558c-df25-49ac-ac83-42ba00dd17a9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "33b3a63a-33f1-4fd9-a3cd-1220781c71c0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "33b3a63a-33f1-4fd9-a3cd-1220781c71c0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f9c3e89e-9973-41e7-9a25-bab23d5da1eb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f9c3e89e-9973-41e7-9a25-bab23d5da1eb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "674f4f74-4039-436a-bf20-e3b722c8878d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "674f4f74-4039-436a-bf20-e3b722c8878d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2a12cba7-6cc0-4a18-bd94-b9864f229659",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2a12cba7-6cc0-4a18-bd94-b9864f229659"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "253ef082-3122-4e4e-afd1-0ebbe37ae9b5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "253ef082-3122-4e4e-afd1-0ebbe37ae9b5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "da0bd1cc-3253-48e7-a5da-2360f518c529",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "da0bd1cc-3253-48e7-a5da-2360f518c529"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4ec0489b-6c96-42a1-ae67-757bc7e426df",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4ec0489b-6c96-42a1-ae67-757bc7e426df"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c38ba8f1-d0dc-4d7d-a9b8-6ddb45fb20a6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c38ba8f1-d0dc-4d7d-a9b8-6ddb45fb20a6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "38204560-cb5b-4a15-9317-ef7982209995",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "38204560-cb5b-4a15-9317-ef7982209995"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f2f78d6f-16cd-40be-96cc-21aba012a49b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f2f78d6f-16cd-40be-96cc-21aba012a49b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4d33133b-8546-466c-9340-0218739abf6b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4d33133b-8546-466c-9340-0218739abf6b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a48ef355-3386-4463-bcde-b138c990b3a4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a48ef355-3386-4463-bcde-b138c990b3a4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e3df2e00-4b7c-4c9d-8500-0029e40fd5da",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e3df2e00-4b7c-4c9d-8500-0029e40fd5da"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ea66ed67-8082-45b1-a9af-ff3eadc7a121",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ea66ed67-8082-45b1-a9af-ff3eadc7a121"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "02e4ab84-4bb9-416c-86f4-361cf264a5f3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "02e4ab84-4bb9-416c-86f4-361cf264a5f3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "72895ca7-2ce4-4cc7-8c14-a79a7bf1d2e3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "72895ca7-2ce4-4cc7-8c14-a79a7bf1d2e3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b9df39b3-c1dd-4f66-aa1d-405f8d0b6e36",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b9df39b3-c1dd-4f66-aa1d-405f8d0b6e36"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8623f418-6264-4fd0-afb2-5cfbe30e421d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8623f418-6264-4fd0-afb2-5cfbe30e421d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e1146843-686d-423d-9c43-87391c0a93eb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e1146843-686d-423d-9c43-87391c0a93eb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "08577617-6001-49b4-855d-8e09105719af",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "08577617-6001-49b4-855d-8e09105719af"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e6c23ad3-ef94-467b-aaad-3aa58462410c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e6c23ad3-ef94-467b-aaad-3aa58462410c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fc2f06b1-378a-430b-8991-4ecb03f8fbec",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fc2f06b1-378a-430b-8991-4ecb03f8fbec"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "359819e2-1161-48c1-8f9a-2c5f82b2b0f4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "359819e2-1161-48c1-8f9a-2c5f82b2b0f4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3dc4585a-cbe9-45a9-aae0-9591efafd1f1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3dc4585a-cbe9-45a9-aae0-9591efafd1f1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e3bda8cb-f7a3-4d44-a131-b9ff183826c8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e3bda8cb-f7a3-4d44-a131-b9ff183826c8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "04e4dde6-5619-460a-87c0-8ce9058965d9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "04e4dde6-5619-460a-87c0-8ce9058965d9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "05fc8e99-2c42-4902-a8c1-55f763eca9e9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "05fc8e99-2c42-4902-a8c1-55f763eca9e9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ed9a24dd-156c-47b4-81c3-cd7a0463f8ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ed9a24dd-156c-47b4-81c3-cd7a0463f8ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9c91f4df-047a-4717-b5db-fcb058192491",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9c91f4df-047a-4717-b5db-fcb058192491"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "488a3f43-f7f2-4a56-aab3-31fc90536146",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "488a3f43-f7f2-4a56-aab3-31fc90536146"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f8fb2e4-4bcf-46da-a1b0-71d67374a033",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f8fb2e4-4bcf-46da-a1b0-71d67374a033"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d0906b74-00b7-4030-81d9-ce7a97f7c5c9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d0906b74-00b7-4030-81d9-ce7a97f7c5c9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d59c6a9e-7f47-4d2c-8125-bd052748076c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d59c6a9e-7f47-4d2c-8125-bd052748076c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0f1fdd63-bfed-463d-84ed-c16f727a29b2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0f1fdd63-bfed-463d-84ed-c16f727a29b2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "607e4ddc-26ce-4988-b3fc-e6bc159eaa79",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "607e4ddc-26ce-4988-b3fc-e6bc159eaa79"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "acde2c58-73f3-444f-94b3-baeb000ce1bd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "acde2c58-73f3-444f-94b3-baeb000ce1bd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f9b51cc5-ef20-47ea-b1bc-5fe8cd9910da",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f9b51cc5-ef20-47ea-b1bc-5fe8cd9910da"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9672f84e-09b9-4455-9320-5f6427bd210d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9672f84e-09b9-4455-9320-5f6427bd210d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "726e0f1a-0bd8-41a2-a675-a6e529fcdd07",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "726e0f1a-0bd8-41a2-a675-a6e529fcdd07"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "21fa2765-4431-48d7-ab6f-3e1c47100a61",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "21fa2765-4431-48d7-ab6f-3e1c47100a61"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "59a59f4a-d4dd-409b-b794-0bc38fe3af30",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "59a59f4a-d4dd-409b-b794-0bc38fe3af30"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f742ac51-769b-46f6-b9b3-2033342a33ed",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f742ac51-769b-46f6-b9b3-2033342a33ed"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fb229e03-3cc3-4cdc-9c9e-869b9c1f282f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fb229e03-3cc3-4cdc-9c9e-869b9c1f282f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4e2aebe7-9273-40fa-b02d-682809dafe67",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4e2aebe7-9273-40fa-b02d-682809dafe67"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "af045959-f39a-4fd0-b4e0-5dda03db6a72",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "af045959-f39a-4fd0-b4e0-5dda03db6a72"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4ace9e99-1ec8-4096-8374-16a2e753e4dc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4ace9e99-1ec8-4096-8374-16a2e753e4dc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9fa6a9fd-1848-4133-829f-aca7337379c5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9fa6a9fd-1848-4133-829f-aca7337379c5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "221fd4aa-bed9-42b0-8f38-43d86b313c87",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "221fd4aa-bed9-42b0-8f38-43d86b313c87"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a5e882a8-8da0-4e5e-ae95-8ad706e2651c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a5e882a8-8da0-4e5e-ae95-8ad706e2651c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "87efa597-4d99-4861-8922-ee6d49fe95fb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "87efa597-4d99-4861-8922-ee6d49fe95fb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fbbb4ff2-41e6-49b2-bed5-9b4d45c67536",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fbbb4ff2-41e6-49b2-bed5-9b4d45c67536"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "679b527f-af51-483f-bf5e-ec99cfb9f619",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "679b527f-af51-483f-bf5e-ec99cfb9f619"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9fb21356-b751-438a-a684-7023985e2a64",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9fb21356-b751-438a-a684-7023985e2a64"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "13fe760e-02b0-4fa8-b308-b9dd01d934cb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "13fe760e-02b0-4fa8-b308-b9dd01d934cb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "88dbd583-d7e1-46fa-bb08-4a24654df7e7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "88dbd583-d7e1-46fa-bb08-4a24654df7e7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b6181ab3-22dd-4397-acb6-2cb7003008ff",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b6181ab3-22dd-4397-acb6-2cb7003008ff"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5cddd23d-0078-46e1-b21d-47efa6944b22",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5cddd23d-0078-46e1-b21d-47efa6944b22"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "52f94cfd-9aea-4918-8003-6105eafd8110",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "52f94cfd-9aea-4918-8003-6105eafd8110"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "02983185-4c97-427a-a156-d91895d8670e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "02983185-4c97-427a-a156-d91895d8670e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "10bde1e4-f3ff-4e0f-8519-36f32a70a65c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "10bde1e4-f3ff-4e0f-8519-36f32a70a65c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "963190ce-f7ba-44c3-b3bc-7b3ac1b744c5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "963190ce-f7ba-44c3-b3bc-7b3ac1b744c5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fee623c2-166a-4fe7-a7d4-b3fedfc65fd8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fee623c2-166a-4fe7-a7d4-b3fedfc65fd8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0cc0f9b9-d983-4fce-a9c7-561265b87162",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0cc0f9b9-d983-4fce-a9c7-561265b87162"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "212a1cdc-0274-429d-b423-135f1769aa03",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "212a1cdc-0274-429d-b423-135f1769aa03"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b5d1c3ce-b3e2-48e3-99d4-7139e167d2d9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b5d1c3ce-b3e2-48e3-99d4-7139e167d2d9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f35b4a7c-0a47-4020-b1f4-d553a4efd30d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f35b4a7c-0a47-4020-b1f4-d553a4efd30d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "22d5a1f0-4df3-483f-a228-f94e9d55c83f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "22d5a1f0-4df3-483f-a228-f94e9d55c83f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7cd45c79-72ee-4df5-93be-ccd858745fc2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7cd45c79-72ee-4df5-93be-ccd858745fc2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "53855154-bf61-4d2d-80b8-0ca6ade8a6ab",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "53855154-bf61-4d2d-80b8-0ca6ade8a6ab"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ca178cc6-acc4-4490-b587-8b9f3debaa4f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ca178cc6-acc4-4490-b587-8b9f3debaa4f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6a83545d-2d31-45d2-9676-f2384a4e0888",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6a83545d-2d31-45d2-9676-f2384a4e0888"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "60717824-4c2e-49a6-b654-773282d5ac3f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "60717824-4c2e-49a6-b654-773282d5ac3f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "599ef5be-202f-4d7b-96d0-0a121358cdf0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "599ef5be-202f-4d7b-96d0-0a121358cdf0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b367fbd6-e423-464e-9520-ecd8eda5ded6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b367fbd6-e423-464e-9520-ecd8eda5ded6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d7ecdbd0-03fc-4e80-afff-8f73bf54311e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d7ecdbd0-03fc-4e80-afff-8f73bf54311e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1aca76e0-99e6-43a0-8552-dafeae2dc439",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1aca76e0-99e6-43a0-8552-dafeae2dc439"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f4eb0c89-8adb-4d15-b5cc-2ac711389d43",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f4eb0c89-8adb-4d15-b5cc-2ac711389d43"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0a8e0442-1a1d-4630-9c39-dc37ec12bc97",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0a8e0442-1a1d-4630-9c39-dc37ec12bc97"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5951ef81-6968-49a2-aca7-58516b9e202f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5951ef81-6968-49a2-aca7-58516b9e202f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8a1a61a1-67cb-49c6-b7d3-6e02b3d9d440",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8a1a61a1-67cb-49c6-b7d3-6e02b3d9d440"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2676c11-d617-4ead-bb48-38c200fb7b38",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2676c11-d617-4ead-bb48-38c200fb7b38"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "43590006-af99-41c5-a64a-a81c19e877e3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "43590006-af99-41c5-a64a-a81c19e877e3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b99c7300-a533-4be2-b9dc-33bb70460438",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b99c7300-a533-4be2-b9dc-33bb70460438"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "10353633-f8ef-419c-9318-30019802df58",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "10353633-f8ef-419c-9318-30019802df58"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f5e92c0a-0efe-4973-9853-160c35f9cea2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f5e92c0a-0efe-4973-9853-160c35f9cea2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ce755e5e-c55f-422c-aa27-df0e1b3a9d3c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ce755e5e-c55f-422c-aa27-df0e1b3a9d3c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8b99fd27-a82f-481b-babb-f87c62329a47",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8b99fd27-a82f-481b-babb-f87c62329a47"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "06e4d93f-4b72-4b07-bf62-d1b3734ea44c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "06e4d93f-4b72-4b07-bf62-d1b3734ea44c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "27995318-5831-49c0-8e63-3e0970eac29a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "27995318-5831-49c0-8e63-3e0970eac29a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a4412ded-446f-4420-b810-1419b7134fdd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a4412ded-446f-4420-b810-1419b7134fdd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "645b7848-4ce2-4dbc-9524-c24881c84f8a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "645b7848-4ce2-4dbc-9524-c24881c84f8a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fc3f53cd-12eb-466b-a9ab-82d45a4d5d98",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fc3f53cd-12eb-466b-a9ab-82d45a4d5d98"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5ae1951d-9dce-4c56-9017-fc2b9b2cb4f6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5ae1951d-9dce-4c56-9017-fc2b9b2cb4f6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6af328f3-0b18-4b91-980f-a88d171e2fca",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6af328f3-0b18-4b91-980f-a88d171e2fca"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9b8b617f-f596-4385-a548-b5ae84582bac",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9b8b617f-f596-4385-a548-b5ae84582bac"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4a3866da-5c90-4a9b-826d-0403ce1e7764",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4a3866da-5c90-4a9b-826d-0403ce1e7764"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a58afccd-b237-4ea3-b764-d8c1596b7c8c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a58afccd-b237-4ea3-b764-d8c1596b7c8c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a5ef77b9-e836-4923-a269-7c4f6846bc1f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a5ef77b9-e836-4923-a269-7c4f6846bc1f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b52dd323-a0b1-4734-bbbd-11e15690db73",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b52dd323-a0b1-4734-bbbd-11e15690db73"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d8aa8824-d810-43e7-aa4e-a4b2f7ade020",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d8aa8824-d810-43e7-aa4e-a4b2f7ade020"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3ce57c0a-ca42-4ad5-b706-b8186078823d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3ce57c0a-ca42-4ad5-b706-b8186078823d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4a848c92-8086-4eb8-8747-c8a317a2e6bd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4a848c92-8086-4eb8-8747-c8a317a2e6bd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f6a052b-418d-401a-b22c-7f23dd499e49",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f6a052b-418d-401a-b22c-7f23dd499e49"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "644cadcc-f701-4f1e-a31c-32c1f6d43098",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "644cadcc-f701-4f1e-a31c-32c1f6d43098"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "076ba755-adc5-4bdf-81fd-f69f52ab13b8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "076ba755-adc5-4bdf-81fd-f69f52ab13b8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "35ee36d8-f9c3-48e8-a23b-3965f49dcf46",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "35ee36d8-f9c3-48e8-a23b-3965f49dcf46"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "55f0220b-32ff-48ce-b169-734436e2e26b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "55f0220b-32ff-48ce-b169-734436e2e26b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "209df53e-5c05-4821-b2f0-333347ffcc78",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "209df53e-5c05-4821-b2f0-333347ffcc78"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7dfd338d-b0b7-4661-97fc-5695ea20603d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7dfd338d-b0b7-4661-97fc-5695ea20603d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5c5e4f46-7def-4b15-88f7-58615283a11c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5c5e4f46-7def-4b15-88f7-58615283a11c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6b2317a3-74c4-4561-9767-c46c98aa07d5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6b2317a3-74c4-4561-9767-c46c98aa07d5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "491ff5e3-1376-4aa7-b59b-b3dfb3aa1565",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "491ff5e3-1376-4aa7-b59b-b3dfb3aa1565"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "527dd9f6-f547-4b48-8c85-9eb638302f98",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "527dd9f6-f547-4b48-8c85-9eb638302f98"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a940cbb5-312a-49d8-9a21-51430d1dc643",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a940cbb5-312a-49d8-9a21-51430d1dc643"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "58f134e4-0ef4-4734-9aff-b0a4ad62539e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "58f134e4-0ef4-4734-9aff-b0a4ad62539e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "df4acc56-25d8-4417-b6ca-06a319b1b2b2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "df4acc56-25d8-4417-b6ca-06a319b1b2b2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "da7e0c85-a832-4421-b308-7fab41a50c5d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "da7e0c85-a832-4421-b308-7fab41a50c5d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "281d75f6-a86d-427e-bbbf-e1264382a76a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "281d75f6-a86d-427e-bbbf-e1264382a76a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "528f2ead-312c-4763-bb0d-6a11d1706b48",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "528f2ead-312c-4763-bb0d-6a11d1706b48"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3f67f32c-da46-41bb-8d58-c150e832d003",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3f67f32c-da46-41bb-8d58-c150e832d003"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eeac8f60-27f6-4f47-be27-12e44124b74b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eeac8f60-27f6-4f47-be27-12e44124b74b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1777a71b-c174-444a-bd15-650d61dd8281",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1777a71b-c174-444a-bd15-650d61dd8281"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c917c9ea-3514-4974-bd95-2b8341d0fec5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c917c9ea-3514-4974-bd95-2b8341d0fec5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3c42c5f6-aaeb-488f-8048-1a93e442c74b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3c42c5f6-aaeb-488f-8048-1a93e442c74b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2c6c12a7-8ffd-40f0-a377-13e68823f218",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2c6c12a7-8ffd-40f0-a377-13e68823f218"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f39c5f67-2802-41d6-b574-8389737977e2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f39c5f67-2802-41d6-b574-8389737977e2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "67765647-b143-4af0-b096-fa46b7a31cf2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "67765647-b143-4af0-b096-fa46b7a31cf2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "68f21d0f-b581-44a6-999c-c3211d74c467",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "68f21d0f-b581-44a6-999c-c3211d74c467"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "827b702b-9d5f-4495-bbc0-456833492848",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "827b702b-9d5f-4495-bbc0-456833492848"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cac43c7f-424c-48a9-bdf5-ed06297a6f57",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cac43c7f-424c-48a9-bdf5-ed06297a6f57"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "243c843e-081f-4008-8c99-fc6974ef2f7b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "243c843e-081f-4008-8c99-fc6974ef2f7b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ba3d9fe7-a5cf-40a7-a604-52664275e15b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ba3d9fe7-a5cf-40a7-a604-52664275e15b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ab671ee3-cadf-4713-a768-b2fa54b1f1ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ab671ee3-cadf-4713-a768-b2fa54b1f1ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b030bed1-a6ed-4979-b184-7407de73989d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b030bed1-a6ed-4979-b184-7407de73989d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "649a7497-1f58-42cf-9307-0e435ba56b70",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "649a7497-1f58-42cf-9307-0e435ba56b70"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9dbf1c1d-a963-49bd-9dfd-5ac8f53b2284",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9dbf1c1d-a963-49bd-9dfd-5ac8f53b2284"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e7b5a63a-aba1-48b8-9916-b3a8e643b1d9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e7b5a63a-aba1-48b8-9916-b3a8e643b1d9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7ff1367d-7054-43ac-bddc-a1f7ee9f38fb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7ff1367d-7054-43ac-bddc-a1f7ee9f38fb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3b179570-8387-4549-8ea9-cfcac66158df",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3b179570-8387-4549-8ea9-cfcac66158df"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8b94e60a-0799-49c2-b83c-88cbc947cd92",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8b94e60a-0799-49c2-b83c-88cbc947cd92"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "937716f3-fd82-45c4-a445-719056286256",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "937716f3-fd82-45c4-a445-719056286256"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "242b3f80-1ab9-493d-92cd-a97c7a4ef9f7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "242b3f80-1ab9-493d-92cd-a97c7a4ef9f7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "951a0f87-63f2-4231-9680-367de282db90",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "951a0f87-63f2-4231-9680-367de282db90"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dc05d6dd-9fc7-4bd7-b8e1-467c8a724871",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dc05d6dd-9fc7-4bd7-b8e1-467c8a724871"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6278f396-0677-49ab-8c2c-52671bb92c29",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6278f396-0677-49ab-8c2c-52671bb92c29"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6a525e30-c71d-427b-a9ec-8bdc82811dc8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6a525e30-c71d-427b-a9ec-8bdc82811dc8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fec00669-64cf-41e5-94ac-f08501452c09",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fec00669-64cf-41e5-94ac-f08501452c09"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "03c976de-e4f4-4bd6-99f8-d13f7939d2f8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "03c976de-e4f4-4bd6-99f8-d13f7939d2f8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "54ee5eba-320a-47cd-8af6-0ff51de8c9e6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "54ee5eba-320a-47cd-8af6-0ff51de8c9e6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "230ccee5-16e3-40b7-8bc7-6decc98ea208",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "230ccee5-16e3-40b7-8bc7-6decc98ea208"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "61f2e760-43a0-48a9-b5e5-31398072f360",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "61f2e760-43a0-48a9-b5e5-31398072f360"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5e5fc005-eb9f-4ff1-8936-142840dd12ba",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5e5fc005-eb9f-4ff1-8936-142840dd12ba"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5e7ccdf2-c001-41bf-8530-2267ffc1a6d5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5e7ccdf2-c001-41bf-8530-2267ffc1a6d5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2f2416f-f84d-4939-bd04-85e939c34dc5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2f2416f-f84d-4939-bd04-85e939c34dc5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e12dcd23-6ff0-4807-ab1f-52177830c668",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e12dcd23-6ff0-4807-ab1f-52177830c668"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e13ed244-85e3-4e4b-8b15-5b550e46803d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e13ed244-85e3-4e4b-8b15-5b550e46803d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ea44d839-8257-4b55-8397-11851ea86a3b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ea44d839-8257-4b55-8397-11851ea86a3b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "96c6d385-fd54-4eaf-af67-9f521c95e7ad",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "96c6d385-fd54-4eaf-af67-9f521c95e7ad"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d0975e12-07ea-4bf3-905b-2db292bcd535",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d0975e12-07ea-4bf3-905b-2db292bcd535"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "208a2c28-bded-45b7-827a-67d0fdc2e4ed",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "208a2c28-bded-45b7-827a-67d0fdc2e4ed"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4440c901-99a0-437f-a94e-19769628cc22",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4440c901-99a0-437f-a94e-19769628cc22"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "85c37729-abab-4e40-905c-143a9e86c29c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "85c37729-abab-4e40-905c-143a9e86c29c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "26ca3498-5cca-4bd2-a1ba-3533e9672d16",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "26ca3498-5cca-4bd2-a1ba-3533e9672d16"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a3f35938-7a86-446e-9048-4141028b0c76",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a3f35938-7a86-446e-9048-4141028b0c76"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0f43b6ed-3a45-4e75-8514-ff9c2b295c04",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0f43b6ed-3a45-4e75-8514-ff9c2b295c04"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3ea9656e-ee35-4d83-8cab-a65fe19306c3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3ea9656e-ee35-4d83-8cab-a65fe19306c3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fd860f9e-452a-4cb4-9ad4-605480cb0638",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fd860f9e-452a-4cb4-9ad4-605480cb0638"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "95d3aa96-1377-4ef2-95ef-c320628c6f64",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "95d3aa96-1377-4ef2-95ef-c320628c6f64"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "69258466-6587-4a94-9d93-b4ab2fc4c744",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "69258466-6587-4a94-9d93-b4ab2fc4c744"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7eb03108-5633-44b3-b600-1248ccee1a51",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7eb03108-5633-44b3-b600-1248ccee1a51"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5b87b64b-574f-424a-8f6a-cdbd9408b1ad",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5b87b64b-574f-424a-8f6a-cdbd9408b1ad"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f6b0176f-ce0b-4abd-b935-9396606bc97f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f6b0176f-ce0b-4abd-b935-9396606bc97f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "833c6a71-03d5-4250-8325-6052c68dd68f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "833c6a71-03d5-4250-8325-6052c68dd68f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f86c2aa1-da5d-4301-8177-d39118ff04b7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f86c2aa1-da5d-4301-8177-d39118ff04b7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a8485f7e-302b-4615-b908-5e3d46be4de1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a8485f7e-302b-4615-b908-5e3d46be4de1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a87ef977-b6ae-4c20-aaac-ff998c8a1d9c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a87ef977-b6ae-4c20-aaac-ff998c8a1d9c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "64bfb689-f8ca-4105-942e-919467e8328b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "64bfb689-f8ca-4105-942e-919467e8328b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fe7dae68-6aa7-447a-a60a-60c935a9fc7f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fe7dae68-6aa7-447a-a60a-60c935a9fc7f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f614536f-31c4-4fc1-a5cb-4759dcd326a0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f614536f-31c4-4fc1-a5cb-4759dcd326a0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0c61e291-46b4-413c-a7f1-0f586d2be27d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0c61e291-46b4-413c-a7f1-0f586d2be27d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a0cc30b0-8923-4b51-9d49-d3896301fcf9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a0cc30b0-8923-4b51-9d49-d3896301fcf9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "145be80c-f2d3-4945-8dc5-23408f6aaa2e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "145be80c-f2d3-4945-8dc5-23408f6aaa2e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2d2daa42-6ea1-4687-923f-2acee39d4887",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2d2daa42-6ea1-4687-923f-2acee39d4887"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bcf1d9f9-0764-4363-abb8-8615e978d174",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bcf1d9f9-0764-4363-abb8-8615e978d174"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e77c3e23-b269-4615-8016-989bf4045523",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e77c3e23-b269-4615-8016-989bf4045523"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "80a2e96a-d4db-4910-a0e1-057bf044e7e4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "80a2e96a-d4db-4910-a0e1-057bf044e7e4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7b344012-c0fc-4b9b-89c5-fc143bd45723",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7b344012-c0fc-4b9b-89c5-fc143bd45723"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "66ea88f3-3115-4f28-8357-2e8ed1480ebd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "66ea88f3-3115-4f28-8357-2e8ed1480ebd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dd8d2d53-5e18-47c9-8387-286bec381300",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dd8d2d53-5e18-47c9-8387-286bec381300"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b7213c90-937b-4505-b16f-4195812e01a9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b7213c90-937b-4505-b16f-4195812e01a9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "05902175-85c5-42fa-8869-9b0d93243cbc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "05902175-85c5-42fa-8869-9b0d93243cbc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e904734f-2417-479c-a68c-c593d69f8ee6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e904734f-2417-479c-a68c-c593d69f8ee6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "34166e5d-ea9a-4d14-b615-71be53d551d4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "34166e5d-ea9a-4d14-b615-71be53d551d4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4743d1f4-9c71-44ec-a253-b791c0943180",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4743d1f4-9c71-44ec-a253-b791c0943180"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5581f3d2-898e-4f57-9d5a-af020334ff12",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5581f3d2-898e-4f57-9d5a-af020334ff12"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "89bb5e45-25d8-4586-ae24-7529472a3e76",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "89bb5e45-25d8-4586-ae24-7529472a3e76"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f41a25b-5c25-4605-9289-5bea3741d75f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f41a25b-5c25-4605-9289-5bea3741d75f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d48021e8-ce3c-4985-9ae2-192c5c0da9ad",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d48021e8-ce3c-4985-9ae2-192c5c0da9ad"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "976bba31-f175-4209-b3db-53fc51ef976d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "976bba31-f175-4209-b3db-53fc51ef976d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "67847eeb-6e82-4c21-8532-47f57eda20c2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "67847eeb-6e82-4c21-8532-47f57eda20c2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3202c8b9-cd71-4f85-b8bb-625ab999df84",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3202c8b9-cd71-4f85-b8bb-625ab999df84"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5b17e51e-290d-4b59-8151-6b195addf24b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5b17e51e-290d-4b59-8151-6b195addf24b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5735984e-6ef4-4edf-8541-c85a3aaba658",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5735984e-6ef4-4edf-8541-c85a3aaba658"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "28039530-d5f2-4df3-b82e-16a25c06ce4b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "28039530-d5f2-4df3-b82e-16a25c06ce4b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "39d3a63d-c2fa-493f-8896-0984efc288cc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "39d3a63d-c2fa-493f-8896-0984efc288cc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4370dc31-90b5-4fd5-8437-dd55d87abf01",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4370dc31-90b5-4fd5-8437-dd55d87abf01"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f23679ef-52b4-446b-97f4-4a18a30f0643",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f23679ef-52b4-446b-97f4-4a18a30f0643"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2fac4d56-cb9a-4cfd-b742-b516e4e3ef1b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2fac4d56-cb9a-4cfd-b742-b516e4e3ef1b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "48d0cfe3-28c7-460d-8455-aa726097a3f6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "48d0cfe3-28c7-460d-8455-aa726097a3f6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d81ecb43-75d5-4e2a-8e2e-dc3a44195911",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d81ecb43-75d5-4e2a-8e2e-dc3a44195911"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2c9722df-9639-41e3-b27c-575076fd224f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2c9722df-9639-41e3-b27c-575076fd224f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2cf1ec0f-911a-4960-bbd6-d6c7e19f49bd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2cf1ec0f-911a-4960-bbd6-d6c7e19f49bd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1da4152c-58b4-4e3f-b6e8-22cecb85866f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1da4152c-58b4-4e3f-b6e8-22cecb85866f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a0f31d00-4bda-464c-9a3b-16875f1f2d25",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a0f31d00-4bda-464c-9a3b-16875f1f2d25"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "888794e1-518a-4ad8-bdcf-ab2b5a3d2ccc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "888794e1-518a-4ad8-bdcf-ab2b5a3d2ccc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fcf9a0c8-b40f-4807-9741-1121335be7ab",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fcf9a0c8-b40f-4807-9741-1121335be7ab"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9b383e9a-3b8a-4545-9eab-df2b9cce86b9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9b383e9a-3b8a-4545-9eab-df2b9cce86b9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fb0e3c0b-2907-418b-976b-579c076c0e5d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fb0e3c0b-2907-418b-976b-579c076c0e5d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7370acb6-4f3b-46b1-884c-3e8e96dcd168",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7370acb6-4f3b-46b1-884c-3e8e96dcd168"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c39d9694-2687-4cfa-ab7b-e2d26c23159e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c39d9694-2687-4cfa-ab7b-e2d26c23159e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7e8dba30-1a61-4682-9ddd-22dc573aa2bf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7e8dba30-1a61-4682-9ddd-22dc573aa2bf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "124d3c8b-6023-450e-8004-5a35c017a32b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "124d3c8b-6023-450e-8004-5a35c017a32b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0adc87ca-05f1-43c1-818f-6d59d3e97e76",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0adc87ca-05f1-43c1-818f-6d59d3e97e76"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4d248541-cbf1-46a7-a056-a89a64c770ea",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4d248541-cbf1-46a7-a056-a89a64c770ea"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "39e9186f-b709-4437-b4fa-f79e9d85c51c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "39e9186f-b709-4437-b4fa-f79e9d85c51c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2c4d27f-9fcf-40c9-9660-5bda966bf761",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2c4d27f-9fcf-40c9-9660-5bda966bf761"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fc900685-f6ca-4055-bb3f-9ef90cdf0c58",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fc900685-f6ca-4055-bb3f-9ef90cdf0c58"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "faf145e6-4768-4eac-8c84-99fa42b56f86",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "faf145e6-4768-4eac-8c84-99fa42b56f86"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e0d611cc-c184-4ac5-b039-9eba0b70165c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e0d611cc-c184-4ac5-b039-9eba0b70165c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "411ef201-651d-43e6-9927-6532ecb1d5e0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "411ef201-651d-43e6-9927-6532ecb1d5e0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a75f138e-1a1c-43f9-94f2-2217c56b3f30",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a75f138e-1a1c-43f9-94f2-2217c56b3f30"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "01852c0e-8343-4f33-95a2-1fa96a43a1be",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "01852c0e-8343-4f33-95a2-1fa96a43a1be"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d338a832-4bf8-41f4-ad92-0faf36708cd7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d338a832-4bf8-41f4-ad92-0faf36708cd7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "00db15f8-2ba8-4ad3-82b8-a280638e6b65",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "00db15f8-2ba8-4ad3-82b8-a280638e6b65"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ec304599-3ba8-48db-a7f0-826bec19c6e8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ec304599-3ba8-48db-a7f0-826bec19c6e8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a24c7060-1fae-43eb-978d-c9ee132d15e7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a24c7060-1fae-43eb-978d-c9ee132d15e7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3d862f59-960b-4d86-b58a-da66a4ec4b0c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3d862f59-960b-4d86-b58a-da66a4ec4b0c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fdfeb71f-8d0a-49d2-ad82-a65ab5a80c2e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fdfeb71f-8d0a-49d2-ad82-a65ab5a80c2e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c3b926c3-6acc-410b-8227-2d33b1967dfb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c3b926c3-6acc-410b-8227-2d33b1967dfb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6dc318be-358b-4d92-b068-8a3267e8cabe",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6dc318be-358b-4d92-b068-8a3267e8cabe"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f3beb858-5be6-4433-a4db-7ab4b3a40571",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f3beb858-5be6-4433-a4db-7ab4b3a40571"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "699c061c-c523-48b6-8643-8f34ffbbd11d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "699c061c-c523-48b6-8643-8f34ffbbd11d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f495ba4-1c8d-4b01-b60d-4c9c3781e793",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f495ba4-1c8d-4b01-b60d-4c9c3781e793"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "70c642f2-9b4a-431c-b082-9d2319635ee5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "70c642f2-9b4a-431c-b082-9d2319635ee5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1346b3e5-d523-4301-b529-efd8a3d9a886",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1346b3e5-d523-4301-b529-efd8a3d9a886"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bdca656b-a410-4d86-8535-454a3eae6052",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bdca656b-a410-4d86-8535-454a3eae6052"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2eec45df-d6b2-4e8b-bb83-e29448a8f410",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2eec45df-d6b2-4e8b-bb83-e29448a8f410"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b27a47b7-1a90-43c8-bf2c-4a4cac8b05ce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b27a47b7-1a90-43c8-bf2c-4a4cac8b05ce"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d9d9e016-0bf1-46b6-bfed-b2c8b915e13b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d9d9e016-0bf1-46b6-bfed-b2c8b915e13b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7ba3e046-597a-4167-ba36-aef7df1f4b53",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7ba3e046-597a-4167-ba36-aef7df1f4b53"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7b494897-0bb6-4af8-833e-e7bbba351024",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7b494897-0bb6-4af8-833e-e7bbba351024"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cc967446-691e-4467-85fb-edadead787dc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cc967446-691e-4467-85fb-edadead787dc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d740946d-6caa-46aa-a2f6-41cc821083e0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d740946d-6caa-46aa-a2f6-41cc821083e0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "439e47f6-3752-4cdd-a06c-078f743fce40",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "439e47f6-3752-4cdd-a06c-078f743fce40"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0d99a7ae-c735-4e65-9785-a3015b7db829",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0d99a7ae-c735-4e65-9785-a3015b7db829"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d41e56fd-aafb-4678-8521-65c76bd31073",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d41e56fd-aafb-4678-8521-65c76bd31073"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "452b7a08-c853-45f8-a6f6-d1df2b9a6164",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "452b7a08-c853-45f8-a6f6-d1df2b9a6164"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "774e9053-71f5-46c9-ac3b-006061585a7c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "774e9053-71f5-46c9-ac3b-006061585a7c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "af2e8d58-6e7f-41c2-9c41-642cc663bcbe",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "af2e8d58-6e7f-41c2-9c41-642cc663bcbe"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4afbd834-e265-45ed-b678-168ca411e5d4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4afbd834-e265-45ed-b678-168ca411e5d4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9254315f-8f44-4285-911e-422bd22a72e0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9254315f-8f44-4285-911e-422bd22a72e0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "528b6acd-3d3f-4477-b8ea-a2e088fefd75",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "528b6acd-3d3f-4477-b8ea-a2e088fefd75"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5b3a1acc-8d50-44dd-85ba-b404f27074d8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5b3a1acc-8d50-44dd-85ba-b404f27074d8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "107c47e4-61d6-4b53-9447-01c52b2b08d1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "107c47e4-61d6-4b53-9447-01c52b2b08d1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "57230472-562f-467b-9f87-e32d8eab1f21",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "57230472-562f-467b-9f87-e32d8eab1f21"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b915dad1-e5a1-4f33-8bbc-d71e7bbbdfdb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b915dad1-e5a1-4f33-8bbc-d71e7bbbdfdb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "50294a36-b185-428c-9bfa-b6111af5e6c4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "50294a36-b185-428c-9bfa-b6111af5e6c4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "17e30773-75e1-4b44-b836-a1cc809af49c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "17e30773-75e1-4b44-b836-a1cc809af49c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8933f4c9-a825-492e-b95a-ece327420045",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8933f4c9-a825-492e-b95a-ece327420045"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9ce4451a-6fde-4778-b108-8394b8529cc6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9ce4451a-6fde-4778-b108-8394b8529cc6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "89c3c40f-30f9-4821-bb3e-e49bb53753d9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "89c3c40f-30f9-4821-bb3e-e49bb53753d9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2e2beb24-70cd-4f50-9ca6-abb4d8761cbf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2e2beb24-70cd-4f50-9ca6-abb4d8761cbf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8b7b40d0-9d56-42ac-b478-4c1542008615",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8b7b40d0-9d56-42ac-b478-4c1542008615"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e4acd855-dec4-4817-a031-056ccc5207c2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e4acd855-dec4-4817-a031-056ccc5207c2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "74358c3f-77ec-438c-8bc7-ecb88e513843",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "74358c3f-77ec-438c-8bc7-ecb88e513843"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7bb5ec98-e488-4e60-bc39-1f572c66a4c8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7bb5ec98-e488-4e60-bc39-1f572c66a4c8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c9e63399-3f2d-4666-9717-f8cc69d90700",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c9e63399-3f2d-4666-9717-f8cc69d90700"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2035fb13-643f-4be1-bc00-bec18beb8539",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2035fb13-643f-4be1-bc00-bec18beb8539"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "58468eeb-4942-4e3a-9291-40d749fd42ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "58468eeb-4942-4e3a-9291-40d749fd42ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "94f52c97-d4a0-452f-8551-45bf84320e0a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "94f52c97-d4a0-452f-8551-45bf84320e0a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b782bdb2-a0f9-4f44-b3f7-453960d1fe21",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b782bdb2-a0f9-4f44-b3f7-453960d1fe21"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6d2c918f-7009-44bf-ab24-f1f42f39949b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6d2c918f-7009-44bf-ab24-f1f42f39949b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1c7b8438-5dfc-499e-961f-c158334197a3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1c7b8438-5dfc-499e-961f-c158334197a3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "373c9d31-2057-46c3-823c-d7c109020784",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "373c9d31-2057-46c3-823c-d7c109020784"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "56143f75-bc04-400b-8988-0f9056c8ed17",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "56143f75-bc04-400b-8988-0f9056c8ed17"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "751bdeca-4643-446d-923b-dc151639d4aa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "751bdeca-4643-446d-923b-dc151639d4aa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "75fc14ae-bbd9-48fe-813a-a354e7415574",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "75fc14ae-bbd9-48fe-813a-a354e7415574"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3c3bbc76-64cd-4d00-bc02-2ba31a8781c6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3c3bbc76-64cd-4d00-bc02-2ba31a8781c6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d3524549-5e50-4144-b8db-50af65ccc3da",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d3524549-5e50-4144-b8db-50af65ccc3da"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cc04f7ff-868a-4bed-8474-259d3713614a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cc04f7ff-868a-4bed-8474-259d3713614a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d0d5c566-8f08-428e-8d21-ee6beafd3289",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d0d5c566-8f08-428e-8d21-ee6beafd3289"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "16dd8d2d-2eb1-427f-9417-c29e932b2b93",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "16dd8d2d-2eb1-427f-9417-c29e932b2b93"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b5ce1db0-435d-4882-8d2a-6290f9741d2e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b5ce1db0-435d-4882-8d2a-6290f9741d2e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "85061b19-4ae8-4be8-a08a-0ed47780f592",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "85061b19-4ae8-4be8-a08a-0ed47780f592"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "29db09ab-6aa6-4104-9a78-c9a450eb0fe2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "29db09ab-6aa6-4104-9a78-c9a450eb0fe2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "35ed5bd4-c38e-4647-9ac1-0b31af9516f9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "35ed5bd4-c38e-4647-9ac1-0b31af9516f9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "188b8f4d-c985-41ff-a0bf-36317380fb6c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "188b8f4d-c985-41ff-a0bf-36317380fb6c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c2c9ac93-35c6-4f37-99d7-8ac11eb8a968",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c2c9ac93-35c6-4f37-99d7-8ac11eb8a968"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "58ad50b1-e384-4ac0-9706-2dc39ff5e59b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "58ad50b1-e384-4ac0-9706-2dc39ff5e59b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "34d269b1-bc89-4f02-a03f-5fd889e436ff",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "34d269b1-bc89-4f02-a03f-5fd889e436ff"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9b51af47-31da-4bb5-8e47-1bce25034a3d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9b51af47-31da-4bb5-8e47-1bce25034a3d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "21d12721-90ff-478f-80c9-740c5bafcc0c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "21d12721-90ff-478f-80c9-740c5bafcc0c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eaceb282-8865-4717-87fd-449bbd9efda7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eaceb282-8865-4717-87fd-449bbd9efda7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ced32aac-eb0b-4065-ba81-72e9b0ca8281",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ced32aac-eb0b-4065-ba81-72e9b0ca8281"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c39568dc-809a-48df-b406-dab74574345a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c39568dc-809a-48df-b406-dab74574345a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9af579e9-5d7f-4ff8-bd75-7e0e7f95d3ae",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9af579e9-5d7f-4ff8-bd75-7e0e7f95d3ae"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "16e418b2-2b60-42dd-b0e4-126d6e008f5c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "16e418b2-2b60-42dd-b0e4-126d6e008f5c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d706f1b4-c1c7-4c1f-ba60-f2c3c26ccd12",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d706f1b4-c1c7-4c1f-ba60-f2c3c26ccd12"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f3299ea4-cd0a-4b6e-b75e-cc1122a40809",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f3299ea4-cd0a-4b6e-b75e-cc1122a40809"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5922aed2-15b2-47ae-ab3c-14aa94ed5d85",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5922aed2-15b2-47ae-ab3c-14aa94ed5d85"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d06f1435-8d5f-4dd6-a304-15137440053d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d06f1435-8d5f-4dd6-a304-15137440053d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f8e0e5f-bd66-4198-8495-5666b0e17cd0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f8e0e5f-bd66-4198-8495-5666b0e17cd0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "02cb106c-38aa-462c-9647-fc37f3bb0f36",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "02cb106c-38aa-462c-9647-fc37f3bb0f36"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2b9c566f-db92-4f0c-8cc4-6e12542ceedb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2b9c566f-db92-4f0c-8cc4-6e12542ceedb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c12e3f30-8e4c-467d-be67-ae0d85bdc826",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c12e3f30-8e4c-467d-be67-ae0d85bdc826"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "15b153ea-c4ed-47aa-b00d-69202942895c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "15b153ea-c4ed-47aa-b00d-69202942895c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1d2d92b2-eb1e-4ef4-9171-fb42375b4689",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1d2d92b2-eb1e-4ef4-9171-fb42375b4689"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8fc7e676-bd49-4851-a641-f38780a29d59",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8fc7e676-bd49-4851-a641-f38780a29d59"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1785461b-dea7-46d8-a6e6-41fb3c155e26",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1785461b-dea7-46d8-a6e6-41fb3c155e26"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b5f2ab36-9e4b-4c5c-8836-4ceac2a1a362",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b5f2ab36-9e4b-4c5c-8836-4ceac2a1a362"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "644b379d-53ae-4006-a25c-ca82716b48e1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "644b379d-53ae-4006-a25c-ca82716b48e1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "39306337-31e7-4299-aa27-ad354ffcde82",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "39306337-31e7-4299-aa27-ad354ffcde82"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d94eff01-4658-43be-8d24-9522af2876ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d94eff01-4658-43be-8d24-9522af2876ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "70f9d944-8dc0-4c60-a28b-fd13cf10465a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "70f9d944-8dc0-4c60-a28b-fd13cf10465a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "771fbbcf-b918-4857-877d-58fabd8357d9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "771fbbcf-b918-4857-877d-58fabd8357d9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1eb75e06-1124-41ff-9e0b-24919b909eed",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1eb75e06-1124-41ff-9e0b-24919b909eed"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "72ec5915-e722-4cd1-b777-5c981ee9cd99",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "72ec5915-e722-4cd1-b777-5c981ee9cd99"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "810d946c-b063-4f95-9518-33d03ce330ae",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "810d946c-b063-4f95-9518-33d03ce330ae"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dc31c1d1-c381-4838-9572-fa568b6d4ddb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dc31c1d1-c381-4838-9572-fa568b6d4ddb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a1bab79e-f6d6-4b3d-8258-864ec074c5bc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a1bab79e-f6d6-4b3d-8258-864ec074c5bc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fbfc37f8-ba14-4283-aa36-e1636c695635",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fbfc37f8-ba14-4283-aa36-e1636c695635"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1e3c99db-ff0d-4df0-9103-fe90357da713",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1e3c99db-ff0d-4df0-9103-fe90357da713"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f2054937-703b-4d0d-a107-c45f3d3439d4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f2054937-703b-4d0d-a107-c45f3d3439d4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "be3694ae-130e-4886-a42a-2c9958bf5686",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "be3694ae-130e-4886-a42a-2c9958bf5686"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "91552ec7-6720-46de-a397-d4f962be0d9f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "91552ec7-6720-46de-a397-d4f962be0d9f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d009da92-00c2-4e92-8e05-10bee3b2ac6b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d009da92-00c2-4e92-8e05-10bee3b2ac6b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3a358bba-efcc-4a83-b707-fbcf0e97e9a2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3a358bba-efcc-4a83-b707-fbcf0e97e9a2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "055da3ad-bb90-4233-976b-71a5d62ec1f7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "055da3ad-bb90-4233-976b-71a5d62ec1f7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0f32e39d-5bfc-477f-87b1-40aeddf07462",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0f32e39d-5bfc-477f-87b1-40aeddf07462"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a53ae6a6-72e0-49ac-b786-eedec99014be",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a53ae6a6-72e0-49ac-b786-eedec99014be"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fba3f0e7-83ab-4180-975d-5cb2a3445204",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fba3f0e7-83ab-4180-975d-5cb2a3445204"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9fe108ed-fd8b-4d93-bd4b-f2aefe305a69",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9fe108ed-fd8b-4d93-bd4b-f2aefe305a69"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "77d86ea7-1005-43ee-9710-78502b99069d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "77d86ea7-1005-43ee-9710-78502b99069d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "03d08855-759a-43ce-813f-fa644fd6b88e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "03d08855-759a-43ce-813f-fa644fd6b88e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "debc08d1-8182-4f62-9307-9905bb8bc8da",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "debc08d1-8182-4f62-9307-9905bb8bc8da"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "74256319-77a8-4866-a4e0-8676f97a3515",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "74256319-77a8-4866-a4e0-8676f97a3515"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "170650b9-f419-4e42-96e1-aca46293d31d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "170650b9-f419-4e42-96e1-aca46293d31d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "411c008a-baf0-42cd-836d-708a960cce00",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "411c008a-baf0-42cd-836d-708a960cce00"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d2905ae5-4821-48ec-82f1-c499ac94de31",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d2905ae5-4821-48ec-82f1-c499ac94de31"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "139ba74f-ef3b-4f60-9212-2a6930aba95e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "139ba74f-ef3b-4f60-9212-2a6930aba95e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7bb74a3b-cb17-46e9-8897-822d0d6a3843",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7bb74a3b-cb17-46e9-8897-822d0d6a3843"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4efd3129-825c-4357-9130-a8f3146abca4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4efd3129-825c-4357-9130-a8f3146abca4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6c973302-0b6f-4df0-b4b0-23c636792ef9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6c973302-0b6f-4df0-b4b0-23c636792ef9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a9b539d1-cab7-4c36-8065-4733e36543d3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a9b539d1-cab7-4c36-8065-4733e36543d3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "30c3c309-f6a2-41e0-b6ac-db532c3a88e5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "30c3c309-f6a2-41e0-b6ac-db532c3a88e5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "451ffa8b-d544-4fbf-b8a9-5508420b01f6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "451ffa8b-d544-4fbf-b8a9-5508420b01f6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e95d94a0-0fd2-41ec-886d-701a8f9bee92",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e95d94a0-0fd2-41ec-886d-701a8f9bee92"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2ac6af98-cd8d-45b4-a3da-4837d2a8adde",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2ac6af98-cd8d-45b4-a3da-4837d2a8adde"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b41d8c9c-ea03-493e-aca6-b8fcdcb5d4a6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b41d8c9c-ea03-493e-aca6-b8fcdcb5d4a6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a2c59b08-2727-420f-9fa6-d328b29b41f6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a2c59b08-2727-420f-9fa6-d328b29b41f6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5076e9d9-1a45-4da2-a64b-f170358182d0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5076e9d9-1a45-4da2-a64b-f170358182d0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "70b61653-aad1-47ab-a3bc-b8fd5e95d816",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "70b61653-aad1-47ab-a3bc-b8fd5e95d816"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "32d6c234-76ec-44da-bcb0-5b315adacd79",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "32d6c234-76ec-44da-bcb0-5b315adacd79"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6cbbc4d7-3b08-4d38-8a0d-61210af35be9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6cbbc4d7-3b08-4d38-8a0d-61210af35be9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1162bebf-97db-43de-a510-18e4cc097ae4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1162bebf-97db-43de-a510-18e4cc097ae4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8d0172ca-6297-4f0c-9153-67cafc0ac7ad",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8d0172ca-6297-4f0c-9153-67cafc0ac7ad"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1cc41315-cab4-4e87-9c24-37b59e435edb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1cc41315-cab4-4e87-9c24-37b59e435edb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "51880057-c63d-4856-a202-89c4d30aea76",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "51880057-c63d-4856-a202-89c4d30aea76"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "be4e7b1f-e60b-41d5-9b66-548322fba785",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "be4e7b1f-e60b-41d5-9b66-548322fba785"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "548738c7-405f-48da-b9af-6f866c603bc8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "548738c7-405f-48da-b9af-6f866c603bc8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3e2b28ea-e36d-48aa-bce7-0df8c08a2b2c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3e2b28ea-e36d-48aa-bce7-0df8c08a2b2c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "07b8cf99-c0f3-4adf-8190-a45dc69909b0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "07b8cf99-c0f3-4adf-8190-a45dc69909b0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "57ea045c-640d-4405-8f98-4cd8f3bf69fd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "57ea045c-640d-4405-8f98-4cd8f3bf69fd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "07c50ad0-7abc-4a51-8810-49480ed6ee24",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "07c50ad0-7abc-4a51-8810-49480ed6ee24"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bf5dfc9b-a416-4b1d-956c-6a6d5e219129",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bf5dfc9b-a416-4b1d-956c-6a6d5e219129"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c0c4d3e0-7ad9-482a-8428-1e3d0d6c37ff",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c0c4d3e0-7ad9-482a-8428-1e3d0d6c37ff"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2fd0765-3451-4bb2-a013-8183f3e78c22",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2fd0765-3451-4bb2-a013-8183f3e78c22"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7be2b9ce-7f9c-4ed8-9c84-9ad140872912",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7be2b9ce-7f9c-4ed8-9c84-9ad140872912"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3c1b6242-ff91-4639-b780-180486578cf1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3c1b6242-ff91-4639-b780-180486578cf1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "536ff1ac-8b66-4263-ab4c-352dac9bc422",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "536ff1ac-8b66-4263-ab4c-352dac9bc422"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "41e8773d-e4b1-48f1-bbc8-d8ce40e6b610",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "41e8773d-e4b1-48f1-bbc8-d8ce40e6b610"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bcb94725-e375-4238-b2f2-2628d59e02eb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bcb94725-e375-4238-b2f2-2628d59e02eb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b7ddb3a4-2cd1-4ced-b607-09368f0391b1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b7ddb3a4-2cd1-4ced-b607-09368f0391b1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3c901c65-a484-45dc-a35a-c82e97f36e97",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3c901c65-a484-45dc-a35a-c82e97f36e97"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f4a3e001-4267-4191-8400-7789129f1463",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f4a3e001-4267-4191-8400-7789129f1463"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "38911772-ebd6-4caf-a592-99b40d8da09b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "38911772-ebd6-4caf-a592-99b40d8da09b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3b02b73f-3eba-473a-abf5-e0c7f3138570",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3b02b73f-3eba-473a-abf5-e0c7f3138570"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2b96edcf-bcc5-439c-ae7e-7219f0a3f0e2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2b96edcf-bcc5-439c-ae7e-7219f0a3f0e2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7427ed5c-3bbf-460c-baac-4590d5cdecdd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7427ed5c-3bbf-460c-baac-4590d5cdecdd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f7d25600-2562-48f4-b907-9ddba25407fb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f7d25600-2562-48f4-b907-9ddba25407fb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e4db200a-9334-4cb3-b839-3c30ca052be9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e4db200a-9334-4cb3-b839-3c30ca052be9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7ddc266f-504f-4f2c-8414-c5fb19effdf8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7ddc266f-504f-4f2c-8414-c5fb19effdf8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "068005bf-6022-4401-8a19-41b7da228d74",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "068005bf-6022-4401-8a19-41b7da228d74"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "16e3fb3a-88b2-411a-bf57-b48041ece458",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "16e3fb3a-88b2-411a-bf57-b48041ece458"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "83de6c4f-b559-48d8-b040-1b1a9dbc3f55",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "83de6c4f-b559-48d8-b040-1b1a9dbc3f55"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "38d84557-c9ff-4493-82f7-daaf43bf376b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "38d84557-c9ff-4493-82f7-daaf43bf376b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1054237c-e4dc-4ce4-a417-c160cabb44fd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1054237c-e4dc-4ce4-a417-c160cabb44fd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dafa25c9-03bf-4e9b-b9aa-7fd7d9961c29",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dafa25c9-03bf-4e9b-b9aa-7fd7d9961c29"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d64bf916-2374-4447-8345-f87e42217c38",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d64bf916-2374-4447-8345-f87e42217c38"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2b96b92-6165-4351-9de3-9ab8533c32df",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2b96b92-6165-4351-9de3-9ab8533c32df"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ff8889eb-2543-41c8-a76b-6d39db601d86",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ff8889eb-2543-41c8-a76b-6d39db601d86"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "93342c4d-9612-4812-a87d-6688e1ca6152",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "93342c4d-9612-4812-a87d-6688e1ca6152"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f9d1648-d99d-4fa0-8bf2-9558992caac7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f9d1648-d99d-4fa0-8bf2-9558992caac7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eb112583-4d15-483b-ad5b-939dfd353043",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eb112583-4d15-483b-ad5b-939dfd353043"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "56df5ecc-3ed8-4226-8518-8cf01c2d394c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "56df5ecc-3ed8-4226-8518-8cf01c2d394c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "00438b68-1b02-41e9-9b09-6640712a6a74",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "00438b68-1b02-41e9-9b09-6640712a6a74"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7c2911f4-8aa5-4f7b-b711-219f550caeb7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7c2911f4-8aa5-4f7b-b711-219f550caeb7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bf0f8f1b-81a5-4b64-971b-248c8003a13b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bf0f8f1b-81a5-4b64-971b-248c8003a13b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "03eca121-a72c-4fd6-8f2d-5ad6ed871ccc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "03eca121-a72c-4fd6-8f2d-5ad6ed871ccc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f072f414-9087-4c40-8195-7be4f1e60d5f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f072f414-9087-4c40-8195-7be4f1e60d5f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f9d50944-260e-4f43-ad47-2bfda6f6c318",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f9d50944-260e-4f43-ad47-2bfda6f6c318"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b84e7801-1fb0-45d9-9671-401ff8547beb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b84e7801-1fb0-45d9-9671-401ff8547beb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0ff17fea-4c4f-4192-9c82-fb3e61ff6c11",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0ff17fea-4c4f-4192-9c82-fb3e61ff6c11"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6a849afa-cddd-420f-adff-2ab0c7357ea4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6a849afa-cddd-420f-adff-2ab0c7357ea4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9f58df42-5726-4be0-ac6a-31ca0bcd2671",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9f58df42-5726-4be0-ac6a-31ca0bcd2671"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d37faa55-5617-4161-a9aa-7b9e21017b2f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d37faa55-5617-4161-a9aa-7b9e21017b2f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1e3a2904-d5f9-40ce-ba6e-fab313a30c66",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1e3a2904-d5f9-40ce-ba6e-fab313a30c66"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e1f01292-5adf-40c8-98eb-986e771567b5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e1f01292-5adf-40c8-98eb-986e771567b5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f3b08d1c-2583-4bf8-b80d-ca796dc778c9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f3b08d1c-2583-4bf8-b80d-ca796dc778c9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "69a9578d-616c-48fb-9e75-4264c89f477a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "69a9578d-616c-48fb-9e75-4264c89f477a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fb2deb7b-0e0c-4232-b25e-a1378e8a9b53",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fb2deb7b-0e0c-4232-b25e-a1378e8a9b53"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7968da6d-e327-41e0-bb3d-4ec469e638f9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7968da6d-e327-41e0-bb3d-4ec469e638f9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a3b5f860-20c5-478e-bb85-d46cb56331d6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a3b5f860-20c5-478e-bb85-d46cb56331d6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1925cb38-5e16-4061-882e-8e30ad207d57",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1925cb38-5e16-4061-882e-8e30ad207d57"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7ce82503-98e0-45a8-ae49-893dae4b4431",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7ce82503-98e0-45a8-ae49-893dae4b4431"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3d09eca9-11a8-4333-a853-a64737e718b9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3d09eca9-11a8-4333-a853-a64737e718b9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8c433e6c-ad5a-45b3-b9a2-eb2f50345b16",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8c433e6c-ad5a-45b3-b9a2-eb2f50345b16"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "102effb3-7288-4aa9-a006-1f8c4648ee59",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "102effb3-7288-4aa9-a006-1f8c4648ee59"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "19893fb6-57ea-4c30-9928-0e0ff9d16a18",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "19893fb6-57ea-4c30-9928-0e0ff9d16a18"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d631f04a-28dd-462c-955d-244dd1626660",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d631f04a-28dd-462c-955d-244dd1626660"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f46e21ca-d5b5-44ca-ab27-d50ff6961931",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f46e21ca-d5b5-44ca-ab27-d50ff6961931"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0450ed6e-4025-48c5-ba80-8ee3782405d2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0450ed6e-4025-48c5-ba80-8ee3782405d2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4db76e93-2c76-47c3-90ef-d74f78e2666c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4db76e93-2c76-47c3-90ef-d74f78e2666c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2bda8797-ed7b-47f7-8611-6dfea3fedae7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2bda8797-ed7b-47f7-8611-6dfea3fedae7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "54904c82-27d9-4dbd-a4cb-0d15c6ddf92f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "54904c82-27d9-4dbd-a4cb-0d15c6ddf92f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1a07c6a6-a7d4-458f-a84d-8d0620adfacd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1a07c6a6-a7d4-458f-a84d-8d0620adfacd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d595ebb6-9b3a-4abd-9067-af306b8068ce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d595ebb6-9b3a-4abd-9067-af306b8068ce"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4ef32245-5680-4920-8e87-02245bee69bc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4ef32245-5680-4920-8e87-02245bee69bc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e89906a8-5d3d-42cf-9b34-962892a7b754",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e89906a8-5d3d-42cf-9b34-962892a7b754"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "467a5798-642f-4c85-89a5-17e1a70e0a13",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "467a5798-642f-4c85-89a5-17e1a70e0a13"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b7ddffc1-b627-4489-be58-73f08b508d3f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b7ddffc1-b627-4489-be58-73f08b508d3f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "87da7c31-f7be-4cdd-8aff-7ea4c5c40130",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "87da7c31-f7be-4cdd-8aff-7ea4c5c40130"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7a15e5ad-dbf7-4ddc-8fd3-b0fdaf09bdb4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7a15e5ad-dbf7-4ddc-8fd3-b0fdaf09bdb4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "48cb018f-a603-4b8e-858b-f816d82012d2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "48cb018f-a603-4b8e-858b-f816d82012d2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "69c7669e-3c50-44ce-9f2e-6aaa1bfbe931",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "69c7669e-3c50-44ce-9f2e-6aaa1bfbe931"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "96dc29dd-9714-4e18-811a-73da78231881",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "96dc29dd-9714-4e18-811a-73da78231881"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a9e341d9-d8e6-4045-a311-3834e87b6281",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a9e341d9-d8e6-4045-a311-3834e87b6281"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "14a5e153-14fe-4ce9-af02-c8dc5886ee6e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "14a5e153-14fe-4ce9-af02-c8dc5886ee6e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2df1ca9f-0f5c-4bf1-81c2-54c933ec1037",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2df1ca9f-0f5c-4bf1-81c2-54c933ec1037"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "867665d7-0bd1-4129-8497-8a7819d367ac",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "867665d7-0bd1-4129-8497-8a7819d367ac"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c2ba9fd5-f54b-456b-99e4-144ac159ed39",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c2ba9fd5-f54b-456b-99e4-144ac159ed39"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c6ed9cef-facc-458e-9849-e3a80993abe2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c6ed9cef-facc-458e-9849-e3a80993abe2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e7378d3f-d1f9-4071-9195-c5cfaef069e0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e7378d3f-d1f9-4071-9195-c5cfaef069e0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "04a34bb4-7bd2-45b9-bba4-4014d44ee640",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "04a34bb4-7bd2-45b9-bba4-4014d44ee640"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7dbf301e-268f-430e-9d3a-37d7bb9dcf37",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7dbf301e-268f-430e-9d3a-37d7bb9dcf37"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5eb6541d-f7ce-4be8-8963-08afeeddf8d8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5eb6541d-f7ce-4be8-8963-08afeeddf8d8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e379c0a9-5c78-487c-aaf2-d6132c1736ac",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e379c0a9-5c78-487c-aaf2-d6132c1736ac"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c85cd936-4df9-4d82-89e9-1d607f358962",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c85cd936-4df9-4d82-89e9-1d607f358962"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aca10286-e4bc-4988-9ccc-53010d2106fa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aca10286-e4bc-4988-9ccc-53010d2106fa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "75d16b23-2582-49a5-95f0-645a87c04d6e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "75d16b23-2582-49a5-95f0-645a87c04d6e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2237e23b-aea8-49e6-bafc-c38d3217b596",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2237e23b-aea8-49e6-bafc-c38d3217b596"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "97bf1aac-4450-4ef5-a74e-4914534a3e65",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "97bf1aac-4450-4ef5-a74e-4914534a3e65"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ca765758-6447-4059-9225-013d7649ef13",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ca765758-6447-4059-9225-013d7649ef13"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ad2f080f-b4a8-4f18-ba16-e17a42a2f4de",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ad2f080f-b4a8-4f18-ba16-e17a42a2f4de"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4cde3ff6-b241-4258-b2d8-b219444ae178",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4cde3ff6-b241-4258-b2d8-b219444ae178"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d56c1104-29b7-4566-b96d-013b9a773b49",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d56c1104-29b7-4566-b96d-013b9a773b49"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7bac0991-9517-4a75-a77a-015d42607aba",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7bac0991-9517-4a75-a77a-015d42607aba"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "27b2f334-85f1-4e32-a2f6-aeadd858579b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "27b2f334-85f1-4e32-a2f6-aeadd858579b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "982ca577-a200-4d86-a6db-a29436f2e33d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "982ca577-a200-4d86-a6db-a29436f2e33d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "527e4123-f13d-4bc4-ae60-52eeaed98ab9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "527e4123-f13d-4bc4-ae60-52eeaed98ab9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b1dfc2ab-e143-4393-9d64-f07c8ac197a0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b1dfc2ab-e143-4393-9d64-f07c8ac197a0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a9664dfe-b990-467d-9b1f-a1b3e5f53e87",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a9664dfe-b990-467d-9b1f-a1b3e5f53e87"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e9444eae-aac5-47fd-a534-22613ca274ac",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e9444eae-aac5-47fd-a534-22613ca274ac"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a41d2261-b324-477c-94ba-e38517934e9c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a41d2261-b324-477c-94ba-e38517934e9c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "39421d28-e442-4e25-b557-a308f533cb7a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "39421d28-e442-4e25-b557-a308f533cb7a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f1a04754-b940-486b-b905-8ee80a79a1f8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f1a04754-b940-486b-b905-8ee80a79a1f8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "79f2e05f-5e1a-4893-8d19-c5014e412271",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "79f2e05f-5e1a-4893-8d19-c5014e412271"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "884adc35-a131-46ce-8b5d-f24b7b38f505",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "884adc35-a131-46ce-8b5d-f24b7b38f505"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c8f7ef10-d929-4d3a-91f9-ee85beabfda9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c8f7ef10-d929-4d3a-91f9-ee85beabfda9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "baef6951-bc0f-41ea-a9c4-254f6b9d1bee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "baef6951-bc0f-41ea-a9c4-254f6b9d1bee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0cfdb9ce-842a-4d57-9b33-b3c2619644a4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0cfdb9ce-842a-4d57-9b33-b3c2619644a4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "574275ba-2c33-4475-92c9-38e2e7bd3ef5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "574275ba-2c33-4475-92c9-38e2e7bd3ef5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ed9a089b-9654-45e9-8804-ed95298539c5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ed9a089b-9654-45e9-8804-ed95298539c5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "20144365-80bc-444d-91ad-c0e422f22c7e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "20144365-80bc-444d-91ad-c0e422f22c7e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ef791453-b73b-4d99-aac0-916e54907c4e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ef791453-b73b-4d99-aac0-916e54907c4e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2164232-7ef6-4cf8-a4f5-04ef1ab18a0a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2164232-7ef6-4cf8-a4f5-04ef1ab18a0a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e2e65cbc-ddf1-4d43-9e36-7401cdcca879",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e2e65cbc-ddf1-4d43-9e36-7401cdcca879"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7c016b93-29f0-4711-bd2b-879dc120f9ae",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7c016b93-29f0-4711-bd2b-879dc120f9ae"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d404f03f-8c68-4647-ba3b-05d24e102a02",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d404f03f-8c68-4647-ba3b-05d24e102a02"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "36d52363-e085-4cd0-9247-20b97296b890",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "36d52363-e085-4cd0-9247-20b97296b890"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aec5db6c-3ea2-4783-8999-961e5766f04d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aec5db6c-3ea2-4783-8999-961e5766f04d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "21d41848-e65e-4e99-89a2-6d6a19537f3c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "21d41848-e65e-4e99-89a2-6d6a19537f3c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5a3fcba6-29a5-4af6-8d9a-34a54056d784",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5a3fcba6-29a5-4af6-8d9a-34a54056d784"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1149f3b1-502b-4c31-9707-6f0efe6cdd30",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1149f3b1-502b-4c31-9707-6f0efe6cdd30"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "49bf717b-9852-4dc9-811a-e24b1aa4c68b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "49bf717b-9852-4dc9-811a-e24b1aa4c68b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "44edef6a-86cd-4cbf-a039-6a629c52c13c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "44edef6a-86cd-4cbf-a039-6a629c52c13c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d1585f4f-d951-4f1a-9094-89bca6d4d60a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d1585f4f-d951-4f1a-9094-89bca6d4d60a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "054c036d-ff25-4022-a17f-26a8ac7ccd8e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "054c036d-ff25-4022-a17f-26a8ac7ccd8e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "24b5b1f8-fb95-4392-a4f2-2c7ca7a93b8a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "24b5b1f8-fb95-4392-a4f2-2c7ca7a93b8a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fadb4756-bb11-40d0-b8cc-84e5d89f202d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fadb4756-bb11-40d0-b8cc-84e5d89f202d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "68f41c6f-b12e-473b-a0d2-a43f4f71102e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "68f41c6f-b12e-473b-a0d2-a43f4f71102e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5030e8e1-4129-4a67-b145-cd1b1f10bc8d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5030e8e1-4129-4a67-b145-cd1b1f10bc8d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "56baef2e-5b3e-491e-a7e7-77b78ba96d16",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "56baef2e-5b3e-491e-a7e7-77b78ba96d16"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "99c873cc-d575-4ea2-ab35-9cff149e96f1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "99c873cc-d575-4ea2-ab35-9cff149e96f1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7ede66e6-d3ea-4b20-8a8f-e1a59e7c5598",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7ede66e6-d3ea-4b20-8a8f-e1a59e7c5598"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7b11df8f-efdd-4fc3-a65f-5d05e5c7a50c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7b11df8f-efdd-4fc3-a65f-5d05e5c7a50c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a2b5f0b7-fac0-45cc-9c2a-fac5a1661177",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a2b5f0b7-fac0-45cc-9c2a-fac5a1661177"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7cb3cd80-f21d-4353-84de-6fc5aa2854eb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7cb3cd80-f21d-4353-84de-6fc5aa2854eb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "45101ebf-bedb-40a5-bd70-de2f2c7d7921",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "45101ebf-bedb-40a5-bd70-de2f2c7d7921"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "03aabb06-c4e3-4dc3-afe3-fbbe6e77ac02",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "03aabb06-c4e3-4dc3-afe3-fbbe6e77ac02"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "36af8d33-8d21-4c56-92a0-53b384b78eab",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "36af8d33-8d21-4c56-92a0-53b384b78eab"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2215bbd4-6f51-4986-86ca-275b4ef1faa4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2215bbd4-6f51-4986-86ca-275b4ef1faa4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c49677c7-bd1e-4211-9c4d-2dec97b65b32",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c49677c7-bd1e-4211-9c4d-2dec97b65b32"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8930e516-d6c3-49c5-8d25-c8b50b7c5965",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8930e516-d6c3-49c5-8d25-c8b50b7c5965"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fa5bd5df-1ccb-4488-aa42-621b6b6291c3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fa5bd5df-1ccb-4488-aa42-621b6b6291c3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "67320ce2-08cb-4e23-bfcb-669590562871",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "67320ce2-08cb-4e23-bfcb-669590562871"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "52398e82-223e-4e28-96fb-d3d0d1dc80ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "52398e82-223e-4e28-96fb-d3d0d1dc80ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0fdeb28e-80e5-48f3-936d-337c358a2a02",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0fdeb28e-80e5-48f3-936d-337c358a2a02"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "101bb38e-0bc0-4583-a304-3e9f957448af",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "101bb38e-0bc0-4583-a304-3e9f957448af"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a08baeee-c0ef-4b11-8226-fb6cd84edcb0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a08baeee-c0ef-4b11-8226-fb6cd84edcb0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "622f224e-e858-41f5-a27c-3012b522a3d9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "622f224e-e858-41f5-a27c-3012b522a3d9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "afeaa420-989a-43e6-8dfe-70bbee345789",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "afeaa420-989a-43e6-8dfe-70bbee345789"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "95bcd044-5c53-4666-971a-7c6bcefc7bd6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "95bcd044-5c53-4666-971a-7c6bcefc7bd6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0d4d0216-afae-4aae-861e-0501027b3314",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0d4d0216-afae-4aae-861e-0501027b3314"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b447672c-e990-433a-a4b6-1fe5b703afcc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b447672c-e990-433a-a4b6-1fe5b703afcc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6e106394-89db-43a0-a3f5-d9968444daf7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6e106394-89db-43a0-a3f5-d9968444daf7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2e1c2d15-f7c0-4178-8679-859ece8c0885",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2e1c2d15-f7c0-4178-8679-859ece8c0885"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2f75403d-c919-4683-bfe6-91091b16fe5e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2f75403d-c919-4683-bfe6-91091b16fe5e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5cbb4660-bd78-4e69-a3d4-a55e653ddb6d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5cbb4660-bd78-4e69-a3d4-a55e653ddb6d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "afb6ad3b-e86f-4bdb-ac6e-8478dfc5d16c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "afb6ad3b-e86f-4bdb-ac6e-8478dfc5d16c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9e2d3740-b034-476b-a251-4b65fe470d3d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9e2d3740-b034-476b-a251-4b65fe470d3d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8497922d-47a2-447a-8de6-8af91796e734",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8497922d-47a2-447a-8de6-8af91796e734"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "69c0da5d-7364-4008-ba96-5d5661721ca0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "69c0da5d-7364-4008-ba96-5d5661721ca0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "148b9210-492e-4a19-9947-1cf938245da4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "148b9210-492e-4a19-9947-1cf938245da4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2a3e058-6667-40df-a485-58250a526103",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2a3e058-6667-40df-a485-58250a526103"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "86ae238f-ac8d-41af-8b52-2c47fa1c4c61",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "86ae238f-ac8d-41af-8b52-2c47fa1c4c61"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1fe8ca6d-3566-4aba-ac85-a517dbd2e897",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1fe8ca6d-3566-4aba-ac85-a517dbd2e897"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5e29e4f7-337a-436a-a037-ca51d7e37267",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5e29e4f7-337a-436a-a037-ca51d7e37267"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "10746339-6a98-4bcc-b2b9-d4fef4e98548",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "10746339-6a98-4bcc-b2b9-d4fef4e98548"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aa2ec931-709d-48cc-bd87-6b0a0459d598",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aa2ec931-709d-48cc-bd87-6b0a0459d598"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "561d225e-3781-48a8-ab6b-bca3efbbbf3a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "561d225e-3781-48a8-ab6b-bca3efbbbf3a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a23e0c21-360b-4999-a6e9-051ba77d5b58",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a23e0c21-360b-4999-a6e9-051ba77d5b58"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9b631522-0775-4c8f-9f6b-f6b6d8796548",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9b631522-0775-4c8f-9f6b-f6b6d8796548"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "031cbe1a-22b7-42e2-95d1-a10ea850007f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "031cbe1a-22b7-42e2-95d1-a10ea850007f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6c36b732-8aa1-4dab-8bc3-c58abc3aa9a4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6c36b732-8aa1-4dab-8bc3-c58abc3aa9a4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c4a63f5b-52d8-4d94-8702-9d34df46732b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c4a63f5b-52d8-4d94-8702-9d34df46732b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d6a4f337-450b-4974-b0de-305f51891d9b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d6a4f337-450b-4974-b0de-305f51891d9b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "077258a1-032c-4655-bef1-c9c01b7be114",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "077258a1-032c-4655-bef1-c9c01b7be114"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f241d3a8-3718-4b80-8f54-812089e43bdf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f241d3a8-3718-4b80-8f54-812089e43bdf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "98912589-1f7e-4231-8b98-71c3147f70fc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "98912589-1f7e-4231-8b98-71c3147f70fc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1ac0a15d-a80f-4fb3-b2c3-a5c21f4fce76",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1ac0a15d-a80f-4fb3-b2c3-a5c21f4fce76"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "50b500a9-a87b-4109-96ec-c356155b2cd4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "50b500a9-a87b-4109-96ec-c356155b2cd4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "85ee43aa-c9b3-4021-a34d-22d1d54a09f7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "85ee43aa-c9b3-4021-a34d-22d1d54a09f7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1f8a7016-2478-4c4b-b7e9-4269bcc8a221",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1f8a7016-2478-4c4b-b7e9-4269bcc8a221"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "38156e02-cc44-4731-9d0b-adf58778ed91",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "38156e02-cc44-4731-9d0b-adf58778ed91"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3a7e9699-30aa-4f2b-a4eb-3ba4d9f73d47",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3a7e9699-30aa-4f2b-a4eb-3ba4d9f73d47"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4ab4e7ad-38c6-41a7-9d69-c4803b811d35",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4ab4e7ad-38c6-41a7-9d69-c4803b811d35"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9cd1ddd0-d850-4f50-9a9f-c5f2db8a9af2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9cd1ddd0-d850-4f50-9a9f-c5f2db8a9af2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8a31d8ac-d33e-4aee-adb6-7752e19b0f81",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8a31d8ac-d33e-4aee-adb6-7752e19b0f81"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2447a30-a994-4dc2-95ac-a3db03240576",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2447a30-a994-4dc2-95ac-a3db03240576"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "06f3f137-9ef7-4742-ba28-461d595c9138",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "06f3f137-9ef7-4742-ba28-461d595c9138"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aa65b031-bed2-4a06-a93a-b772a3947b4f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aa65b031-bed2-4a06-a93a-b772a3947b4f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1fa10dec-ab26-4d51-93d9-5ab1c1f35200",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1fa10dec-ab26-4d51-93d9-5ab1c1f35200"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8bc150a9-a2f4-4c38-add9-f2236fd53304",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8bc150a9-a2f4-4c38-add9-f2236fd53304"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d7d55516-55d7-47d0-b613-e32af0ecb271",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d7d55516-55d7-47d0-b613-e32af0ecb271"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d52bf6f7-ecbc-4464-869b-8911af6b7b33",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d52bf6f7-ecbc-4464-869b-8911af6b7b33"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e1ddae29-3e25-4ec5-a854-2f42e83be164",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e1ddae29-3e25-4ec5-a854-2f42e83be164"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5bf2018a-25bd-4e16-ae93-aad0417ad4d6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5bf2018a-25bd-4e16-ae93-aad0417ad4d6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "10f030d9-9915-4b01-af16-b5526f03c2d7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "10f030d9-9915-4b01-af16-b5526f03c2d7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dc4f6a78-0c3b-43e6-8bf0-edc57e347f79",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dc4f6a78-0c3b-43e6-8bf0-edc57e347f79"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "43f013ef-1642-47b1-9bf2-06ca1d64a359",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "43f013ef-1642-47b1-9bf2-06ca1d64a359"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6e04906f-3354-410a-8de2-3e9d4ac70853",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6e04906f-3354-410a-8de2-3e9d4ac70853"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "99070c65-a8d1-4d64-824b-de732c4af8eb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "99070c65-a8d1-4d64-824b-de732c4af8eb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ab1f914a-4311-4014-8201-296a0b54fb42",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ab1f914a-4311-4014-8201-296a0b54fb42"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4edea0d1-5b11-4b6e-bef0-a584bd1b16b4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4edea0d1-5b11-4b6e-bef0-a584bd1b16b4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7f9515c6-e568-4554-83b9-c86e3a923caa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7f9515c6-e568-4554-83b9-c86e3a923caa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6c384a69-88fe-4638-979a-7fce7799ddc2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6c384a69-88fe-4638-979a-7fce7799ddc2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1fd73ab6-6de7-45be-940c-9ac7268ef63c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1fd73ab6-6de7-45be-940c-9ac7268ef63c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "97d6af1a-a0c5-4869-b41f-2da476cbc267",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "97d6af1a-a0c5-4869-b41f-2da476cbc267"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dba9d833-2799-4a8c-8476-088c0cb83f80",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dba9d833-2799-4a8c-8476-088c0cb83f80"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "78f03728-3d17-4eff-b9a1-094bd4d0bf05",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "78f03728-3d17-4eff-b9a1-094bd4d0bf05"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f8347b4c-a5b6-42c9-b9d1-eb3d9aec382a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f8347b4c-a5b6-42c9-b9d1-eb3d9aec382a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "652f81f1-62ef-4467-8781-b28efccc0f8c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "652f81f1-62ef-4467-8781-b28efccc0f8c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fd8e7a9a-e02f-4c40-9e67-1acfc0a74e0d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fd8e7a9a-e02f-4c40-9e67-1acfc0a74e0d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7d49ee7c-d9e0-432f-9c0a-38f869bb0518",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7d49ee7c-d9e0-432f-9c0a-38f869bb0518"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8ef633f0-dea9-4b50-8e1d-06aa80f2d8ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8ef633f0-dea9-4b50-8e1d-06aa80f2d8ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9dd48b23-438b-44d9-98c2-e35ac9e22927",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9dd48b23-438b-44d9-98c2-e35ac9e22927"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "af8c7c47-6a9f-4c5e-9b31-4c523709d22d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "af8c7c47-6a9f-4c5e-9b31-4c523709d22d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9cabb9d9-4bb7-4c71-8256-c84ee040e3dd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9cabb9d9-4bb7-4c71-8256-c84ee040e3dd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "97e77cb8-afe5-4a27-ab8d-603cd1831ad2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "97e77cb8-afe5-4a27-ab8d-603cd1831ad2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "364592d8-f727-4874-b1b6-47940ec7d3bf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "364592d8-f727-4874-b1b6-47940ec7d3bf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d96bafd5-980c-466b-a4ed-87524f91c3e2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d96bafd5-980c-466b-a4ed-87524f91c3e2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a1777dcb-2184-4cbf-b7c4-e93fcd43880d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a1777dcb-2184-4cbf-b7c4-e93fcd43880d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e3c85216-d62f-4e68-be9d-e62e2393856b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e3c85216-d62f-4e68-be9d-e62e2393856b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "07a4d6a7-f099-4f7f-b7a9-8532ae36b5a0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "07a4d6a7-f099-4f7f-b7a9-8532ae36b5a0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "98160009-4aca-4167-9ba2-fe6e5f961476",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "98160009-4aca-4167-9ba2-fe6e5f961476"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ebbdeaa1-72a9-4637-b2bc-abf8b6aa299b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ebbdeaa1-72a9-4637-b2bc-abf8b6aa299b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "369cf708-1578-4b84-8b71-feff5dded43a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "369cf708-1578-4b84-8b71-feff5dded43a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c4ba7f59-7a37-4df4-a660-f72835e158db",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c4ba7f59-7a37-4df4-a660-f72835e158db"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1d461b29-e540-4f86-b8e3-16ac201246d2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1d461b29-e540-4f86-b8e3-16ac201246d2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "857e4138-5225-4826-8bf9-236531aa7577",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "857e4138-5225-4826-8bf9-236531aa7577"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e58ce7dd-3a57-4132-b695-c7c8805ae160",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e58ce7dd-3a57-4132-b695-c7c8805ae160"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fff6549a-bc8f-4438-94b9-84c7ae18e0e5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fff6549a-bc8f-4438-94b9-84c7ae18e0e5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5e9636f1-6fae-44d0-88e1-a55ed65bdb50",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5e9636f1-6fae-44d0-88e1-a55ed65bdb50"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0ae9bec9-ca14-43eb-8bd5-d50fb3453fa7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0ae9bec9-ca14-43eb-8bd5-d50fb3453fa7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fa3a47a0-2ab6-49b6-980b-a4b2bf5497b5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fa3a47a0-2ab6-49b6-980b-a4b2bf5497b5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "08c68b11-a782-48a9-b7c0-15a1d1497b12",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "08c68b11-a782-48a9-b7c0-15a1d1497b12"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b18ddfc9-a98c-4837-8867-822b1d90b208",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b18ddfc9-a98c-4837-8867-822b1d90b208"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7683f3b2-4461-4701-afe3-4e0618f2eeee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7683f3b2-4461-4701-afe3-4e0618f2eeee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7e3a6333-1de4-4e8b-b487-f9258c6eba5b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7e3a6333-1de4-4e8b-b487-f9258c6eba5b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d054dc23-f3ab-40f9-9435-7833a7efb6b5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d054dc23-f3ab-40f9-9435-7833a7efb6b5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "90c094dc-3fe0-42fc-a3bc-9f1e1d93feae",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "90c094dc-3fe0-42fc-a3bc-9f1e1d93feae"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e560aa87-f125-425d-94c9-04c2db42bc7b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e560aa87-f125-425d-94c9-04c2db42bc7b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f3546042-cf85-4d18-92b4-40c908b2fc7a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f3546042-cf85-4d18-92b4-40c908b2fc7a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ccb66258-e111-45ec-9b9b-e343d00220fd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ccb66258-e111-45ec-9b9b-e343d00220fd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "250e757f-43e9-4769-8f0c-593077cff7fe",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "250e757f-43e9-4769-8f0c-593077cff7fe"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5de07798-69ec-4787-9625-cad7d78f29ea",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5de07798-69ec-4787-9625-cad7d78f29ea"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "75b93cb6-52db-4120-a878-129eca100d4d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "75b93cb6-52db-4120-a878-129eca100d4d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "77c04431-e6ef-4eb7-be4e-b733ca1a255d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "77c04431-e6ef-4eb7-be4e-b733ca1a255d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0f6b4a01-d083-482a-80c0-c7696216c1aa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0f6b4a01-d083-482a-80c0-c7696216c1aa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d73755b4-f57d-4fe3-8263-c6c15e46506a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d73755b4-f57d-4fe3-8263-c6c15e46506a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "784ec7b8-6245-4642-842b-695d8ea82ca6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "784ec7b8-6245-4642-842b-695d8ea82ca6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c05ccc25-225d-4da7-90fa-b26bd3bca9a5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c05ccc25-225d-4da7-90fa-b26bd3bca9a5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4306d54b-65ff-4828-82f0-b95eac4e8742",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4306d54b-65ff-4828-82f0-b95eac4e8742"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8fae452c-6a30-45bf-8b41-9af6b776e732",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8fae452c-6a30-45bf-8b41-9af6b776e732"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "798e4ede-3f46-44e7-9537-bd8f2cc7b7df",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "798e4ede-3f46-44e7-9537-bd8f2cc7b7df"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "52d3fc37-6208-4e1c-aa89-416cf3ad8bdf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "52d3fc37-6208-4e1c-aa89-416cf3ad8bdf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e3d0186f-995a-4de2-85e1-7fc5d587aab5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e3d0186f-995a-4de2-85e1-7fc5d587aab5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d3f59302-72a2-4062-a4fc-3f29b90d2ad0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d3f59302-72a2-4062-a4fc-3f29b90d2ad0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5c47c541-fb94-4742-8a8a-07932739b589",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5c47c541-fb94-4742-8a8a-07932739b589"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "21bb070c-4a33-4d10-ae12-d9723634d941",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "21bb070c-4a33-4d10-ae12-d9723634d941"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "205d3c6d-6113-41d2-9c05-57ed2cab7770",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "205d3c6d-6113-41d2-9c05-57ed2cab7770"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0321ad73-abe2-49f8-ad40-eeeb765d7b25",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0321ad73-abe2-49f8-ad40-eeeb765d7b25"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "667f5472-2203-415d-a195-5cc3b335f2a4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "667f5472-2203-415d-a195-5cc3b335f2a4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "92ed9877-977c-46fa-a7aa-f51a494d1261",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "92ed9877-977c-46fa-a7aa-f51a494d1261"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d8736c3b-cc26-48f4-8b93-7163c8d784ea",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d8736c3b-cc26-48f4-8b93-7163c8d784ea"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c432b4db-ab62-4c4f-be4e-cce433bcd4c7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c432b4db-ab62-4c4f-be4e-cce433bcd4c7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a7dad9b6-0c7a-4f76-91c1-ac88cd415a67",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a7dad9b6-0c7a-4f76-91c1-ac88cd415a67"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a66c4258-11cf-4de7-acb0-633600f85c31",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a66c4258-11cf-4de7-acb0-633600f85c31"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1711fc85-a4b0-41d2-81fc-3d0f54bdde47",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1711fc85-a4b0-41d2-81fc-3d0f54bdde47"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "722ec0b1-1709-47c0-bac6-60f00f663d49",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "722ec0b1-1709-47c0-bac6-60f00f663d49"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0e2de115-f99d-4c5e-8b8a-a6c815f846a0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0e2de115-f99d-4c5e-8b8a-a6c815f846a0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3f3570cd-126a-48ca-9594-61437d12da44",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3f3570cd-126a-48ca-9594-61437d12da44"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "95b9c954-cafa-4bf1-965f-6e9d6977b185",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "95b9c954-cafa-4bf1-965f-6e9d6977b185"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "51581516-3383-42a0-8ff0-27df2cd761a4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "51581516-3383-42a0-8ff0-27df2cd761a4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cdc40a83-a72f-4349-8a2b-2e6319db025d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cdc40a83-a72f-4349-8a2b-2e6319db025d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c50b7779-2992-4a3f-9c83-2cb236cf05b1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c50b7779-2992-4a3f-9c83-2cb236cf05b1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2a3db188-55aa-4ab7-bdbb-5d85d1a7357d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2a3db188-55aa-4ab7-bdbb-5d85d1a7357d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b574e167-39d4-4158-84dc-dc525348b471",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b574e167-39d4-4158-84dc-dc525348b471"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f7a6eb17-e902-4f83-aec5-edb307a829a4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f7a6eb17-e902-4f83-aec5-edb307a829a4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "01c6b87a-fc62-4fec-953e-6e6d64366fb5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "01c6b87a-fc62-4fec-953e-6e6d64366fb5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d764426c-fa43-4348-b968-ae921110fad7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d764426c-fa43-4348-b968-ae921110fad7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5d7065af-8f73-4d65-861a-a5210c513bf8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5d7065af-8f73-4d65-861a-a5210c513bf8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0bfdc32e-3a29-48f2-aa12-b21385a348bd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0bfdc32e-3a29-48f2-aa12-b21385a348bd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9128246a-4e5e-4176-ae68-f3031f47488c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9128246a-4e5e-4176-ae68-f3031f47488c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "56901a6f-8347-4076-9b50-8b7f914dd6d5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "56901a6f-8347-4076-9b50-8b7f914dd6d5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bbccc9e0-c5b0-4596-acf5-45a694432b3d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bbccc9e0-c5b0-4596-acf5-45a694432b3d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1dc88e41-ec16-48f3-882a-74a1985246a0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1dc88e41-ec16-48f3-882a-74a1985246a0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "68be4e95-9a57-472b-96c0-2d7606876115",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "68be4e95-9a57-472b-96c0-2d7606876115"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "03db75e7-4924-442c-93e2-a8e24946f9bc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "03db75e7-4924-442c-93e2-a8e24946f9bc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e3d97511-8374-41de-a4f2-cfea492b64ba",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e3d97511-8374-41de-a4f2-cfea492b64ba"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7639a1de-6a70-4cd0-b611-a171449bbd8a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7639a1de-6a70-4cd0-b611-a171449bbd8a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1fbe7e17-9da0-45fb-854d-313b7b4dfbc3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1fbe7e17-9da0-45fb-854d-313b7b4dfbc3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fe8a3ec8-820e-4e77-9c76-cfda76d18527",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fe8a3ec8-820e-4e77-9c76-cfda76d18527"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1899e492-0ad0-4e00-a0fc-a843a8d51ffa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1899e492-0ad0-4e00-a0fc-a843a8d51ffa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "95a34cf3-0a0c-4c7f-a3a3-9ea07ed72bf5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "95a34cf3-0a0c-4c7f-a3a3-9ea07ed72bf5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "624c5273-dea6-4866-a032-af89beae9f08",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "624c5273-dea6-4866-a032-af89beae9f08"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "53f0a48d-5d7e-4ad7-a53c-e4018d5c792b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "53f0a48d-5d7e-4ad7-a53c-e4018d5c792b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "974075b4-de5f-4ca3-81e2-87122b63d316",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "974075b4-de5f-4ca3-81e2-87122b63d316"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3b26e4dd-4b15-4887-9ba3-4a939d6ce5ce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3b26e4dd-4b15-4887-9ba3-4a939d6ce5ce"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f216f195-a5e5-4572-9866-6dcbfe2582a9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f216f195-a5e5-4572-9866-6dcbfe2582a9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5e8c7661-e7cd-411e-9136-73ac7975e6e0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5e8c7661-e7cd-411e-9136-73ac7975e6e0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5aff76ad-1755-4c5f-a710-c92b6d92bbe6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5aff76ad-1755-4c5f-a710-c92b6d92bbe6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ccacebdc-7359-43a3-b2dc-2a2b6d42b683",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ccacebdc-7359-43a3-b2dc-2a2b6d42b683"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d2959a45-6fd8-4452-9913-568865a1baa3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d2959a45-6fd8-4452-9913-568865a1baa3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0901b74b-19cc-4d61-8d1a-1aac90f04719",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0901b74b-19cc-4d61-8d1a-1aac90f04719"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fd056089-4c62-413d-9e8a-89dec51e6efd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fd056089-4c62-413d-9e8a-89dec51e6efd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7e741da1-4896-4fa4-88c9-8051310b04fe",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7e741da1-4896-4fa4-88c9-8051310b04fe"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cb6d7481-eb31-4131-ad67-68430225c1db",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cb6d7481-eb31-4131-ad67-68430225c1db"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "684bad36-5bb5-4b08-bd4e-e9ab0ce5541b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "684bad36-5bb5-4b08-bd4e-e9ab0ce5541b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cb7e0ccb-6ea7-4c81-b499-65eb75cdf9d7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cb7e0ccb-6ea7-4c81-b499-65eb75cdf9d7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c913f337-929b-4d48-bf62-ecc63d68fbb7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c913f337-929b-4d48-bf62-ecc63d68fbb7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ae1aa971-f778-474b-970e-eb16a5408799",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ae1aa971-f778-474b-970e-eb16a5408799"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "56bed629-8108-460a-849d-89fd79f8dfc2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "56bed629-8108-460a-849d-89fd79f8dfc2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "12e8d698-91fc-4443-aaa1-0cea63a03ce1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "12e8d698-91fc-4443-aaa1-0cea63a03ce1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a2ad0889-4aaa-4e1e-898a-6ddca6a3aa52",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a2ad0889-4aaa-4e1e-898a-6ddca6a3aa52"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cb9638b0-9249-47a7-a25e-c27c1d94d0d4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cb9638b0-9249-47a7-a25e-c27c1d94d0d4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f4a8bab6-d9ed-4983-b054-b7649c8ff2d8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f4a8bab6-d9ed-4983-b054-b7649c8ff2d8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "55392310-452d-4d5e-b4c4-c9f9089252e5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "55392310-452d-4d5e-b4c4-c9f9089252e5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "04bd9ba6-6e71-4e47-a888-1d4e9cc07205",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "04bd9ba6-6e71-4e47-a888-1d4e9cc07205"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "692a6844-f24b-4eeb-a955-c9d8824ecaf0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "692a6844-f24b-4eeb-a955-c9d8824ecaf0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "205eb64d-fea7-49a5-99aa-10753ba4b291",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "205eb64d-fea7-49a5-99aa-10753ba4b291"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8dfee49f-1a9c-4346-95f2-72d2c4538f9c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8dfee49f-1a9c-4346-95f2-72d2c4538f9c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9c976cb9-eaaf-42e2-9144-203ddbe41daa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9c976cb9-eaaf-42e2-9144-203ddbe41daa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "44b8b7e2-37e5-4c1c-96d4-77447132e794",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "44b8b7e2-37e5-4c1c-96d4-77447132e794"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fb639428-a8dc-4f4f-a10b-34c6b21f1776",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fb639428-a8dc-4f4f-a10b-34c6b21f1776"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4c83db2f-03ed-45d1-b491-ce3b6d2c0615",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4c83db2f-03ed-45d1-b491-ce3b6d2c0615"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8aa1779e-ea3b-4e33-9691-18282952a658",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8aa1779e-ea3b-4e33-9691-18282952a658"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2c1dbf05-a8d4-47b8-9ff6-27aa8efe8838",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2c1dbf05-a8d4-47b8-9ff6-27aa8efe8838"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2450e345-768b-4bef-8186-f75e313a3679",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2450e345-768b-4bef-8186-f75e313a3679"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "54aaa236-4c96-42e7-87f3-03c9e1324599",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "54aaa236-4c96-42e7-87f3-03c9e1324599"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4052e9e9-46a3-4e28-a300-ef5234a4159b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4052e9e9-46a3-4e28-a300-ef5234a4159b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "65c7e6ab-a1a5-45c6-b211-96cce87c8ced",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "65c7e6ab-a1a5-45c6-b211-96cce87c8ced"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b08e7474-9912-46f2-84f4-3539e9fb7e06",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b08e7474-9912-46f2-84f4-3539e9fb7e06"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e8386a04-e895-4c72-b3ee-c91c129173bb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e8386a04-e895-4c72-b3ee-c91c129173bb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "da52a642-9102-4ed2-bfa1-9afbb17b3bdb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "da52a642-9102-4ed2-bfa1-9afbb17b3bdb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "99a41df4-f4ba-4042-8160-70975f2d1b52",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "99a41df4-f4ba-4042-8160-70975f2d1b52"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "94b4f8d7-24f1-48d1-8312-b2875a2ef0e6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "94b4f8d7-24f1-48d1-8312-b2875a2ef0e6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "413bdb01-18a2-425d-9b5e-aeb787bef4e9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "413bdb01-18a2-425d-9b5e-aeb787bef4e9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "21e71f78-ff44-4b92-b422-832af59b2a59",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "21e71f78-ff44-4b92-b422-832af59b2a59"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b984d9ac-29ae-4028-80cc-e93fbd12ace7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b984d9ac-29ae-4028-80cc-e93fbd12ace7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "00e69e1c-f6f0-4717-843d-f3127c36b827",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "00e69e1c-f6f0-4717-843d-f3127c36b827"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "58f29806-a770-43c6-990c-2101b13c0d8e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "58f29806-a770-43c6-990c-2101b13c0d8e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "64dddf24-3947-41d0-bec3-16728f18a5f6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "64dddf24-3947-41d0-bec3-16728f18a5f6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aed47596-0333-45ff-8113-bd8c7639dabe",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aed47596-0333-45ff-8113-bd8c7639dabe"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7394f343-d5c0-42fd-9048-29dc400cdae9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7394f343-d5c0-42fd-9048-29dc400cdae9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e3666cbd-1407-4468-b66c-8873041e5616",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e3666cbd-1407-4468-b66c-8873041e5616"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b5bc4b66-02c4-433d-a68b-5a5e64065e45",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b5bc4b66-02c4-433d-a68b-5a5e64065e45"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9cb33343-91c4-4c17-a362-debccd7fe0bb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9cb33343-91c4-4c17-a362-debccd7fe0bb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c1020321-8a15-4375-bf73-b4a86398b7a1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c1020321-8a15-4375-bf73-b4a86398b7a1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "29a10be3-1752-473b-a29e-7ab1c81ae66e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "29a10be3-1752-473b-a29e-7ab1c81ae66e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "692c43a8-bc9c-46a7-b462-6edcfdbd5e27",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "692c43a8-bc9c-46a7-b462-6edcfdbd5e27"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "84943aeb-e397-4d33-959d-7ec80a0074e0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "84943aeb-e397-4d33-959d-7ec80a0074e0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a0190575-be63-4558-8a33-d55a2a4d71de",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a0190575-be63-4558-8a33-d55a2a4d71de"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1aa09fac-029e-4969-926c-3c23ff2e9cbc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1aa09fac-029e-4969-926c-3c23ff2e9cbc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7cdf6e58-3e7c-486c-8fe1-afb420967389",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7cdf6e58-3e7c-486c-8fe1-afb420967389"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9b5a2498-1629-4227-83bb-a6e6b5c5a2d3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9b5a2498-1629-4227-83bb-a6e6b5c5a2d3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "19ab5f72-ebed-40a5-b2e7-98bb7f12b00e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "19ab5f72-ebed-40a5-b2e7-98bb7f12b00e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2d946c8e-b33e-4642-ba7f-432e8760abe7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2d946c8e-b33e-4642-ba7f-432e8760abe7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cedfc179-13f1-4527-b277-4018029d68dc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cedfc179-13f1-4527-b277-4018029d68dc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1897f586-265f-439a-87a0-57de99dd675e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1897f586-265f-439a-87a0-57de99dd675e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7af988d7-061b-4522-9df4-a11d2e360081",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7af988d7-061b-4522-9df4-a11d2e360081"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5d49e9b4-3191-446c-925d-6f92e7a33f32",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5d49e9b4-3191-446c-925d-6f92e7a33f32"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "34a8d97e-2f93-4303-ba0b-8a6ef7d87803",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "34a8d97e-2f93-4303-ba0b-8a6ef7d87803"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "68f02936-29de-4411-811b-236afa0aeda6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "68f02936-29de-4411-811b-236afa0aeda6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7c1a3278-ac31-43fb-a4ec-cc52b10e3c24",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7c1a3278-ac31-43fb-a4ec-cc52b10e3c24"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3749c71b-3bf2-425e-ae1a-148ab3160c87",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3749c71b-3bf2-425e-ae1a-148ab3160c87"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "84833448-4473-488b-b64d-0d8613314cbe",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "84833448-4473-488b-b64d-0d8613314cbe"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "11910e23-1865-4d5e-a852-1a506d3d8133",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "11910e23-1865-4d5e-a852-1a506d3d8133"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d02efeff-7823-4558-b71d-dae3aec22550",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d02efeff-7823-4558-b71d-dae3aec22550"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "93b1ec3a-518c-4a05-8a95-0550aa82159d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "93b1ec3a-518c-4a05-8a95-0550aa82159d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "abb4c87d-cdfb-4799-b94c-f0e1ba0e966e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "abb4c87d-cdfb-4799-b94c-f0e1ba0e966e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d6108d58-1e64-4666-ab57-987fb209df71",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d6108d58-1e64-4666-ab57-987fb209df71"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d178d7cb-e918-4f8c-aeec-16921b766b75",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d178d7cb-e918-4f8c-aeec-16921b766b75"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7d18d9af-19f0-49ba-a58d-7399617d5791",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7d18d9af-19f0-49ba-a58d-7399617d5791"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "84626ced-c36c-4aa0-9673-66d053a3d637",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "84626ced-c36c-4aa0-9673-66d053a3d637"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a1e2b814-ea0e-4374-982c-ff7b8bdde6de",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a1e2b814-ea0e-4374-982c-ff7b8bdde6de"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8f36459c-9014-493a-86f5-c1da2a9a7e64",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8f36459c-9014-493a-86f5-c1da2a9a7e64"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b5c37f86-be72-43a6-908a-ea5df8423eb1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b5c37f86-be72-43a6-908a-ea5df8423eb1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4acef74d-e96b-404b-bd36-7d8152849c64",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4acef74d-e96b-404b-bd36-7d8152849c64"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dc28b59d-1ba0-4adc-8277-cf2948bf0e3c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dc28b59d-1ba0-4adc-8277-cf2948bf0e3c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "43e46a9e-7622-4d71-88b0-4ec8df1c2aae",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "43e46a9e-7622-4d71-88b0-4ec8df1c2aae"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "37adfe9a-9d56-499f-8739-56f13010a2fb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "37adfe9a-9d56-499f-8739-56f13010a2fb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4d4cd9a2-e38c-414b-b3ae-ec91035c175a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4d4cd9a2-e38c-414b-b3ae-ec91035c175a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "687c7dfa-674a-4c64-bc06-71d9afdcc817",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "687c7dfa-674a-4c64-bc06-71d9afdcc817"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "567ce098-7c2c-4f5e-9a61-7963c0990cb4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "567ce098-7c2c-4f5e-9a61-7963c0990cb4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "425caa0a-44bb-4c7a-ba5d-ac00446607cf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "425caa0a-44bb-4c7a-ba5d-ac00446607cf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1300467a-7a3b-45d4-90d3-6ca66626f7c9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1300467a-7a3b-45d4-90d3-6ca66626f7c9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "59457fd3-c72c-485a-a2bc-7283062a9135",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "59457fd3-c72c-485a-a2bc-7283062a9135"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8eeb3564-25c0-43e2-b0c6-8306ec4004a9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8eeb3564-25c0-43e2-b0c6-8306ec4004a9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8c2a91a7-0ba8-464d-8d45-177c0f04b2a8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8c2a91a7-0ba8-464d-8d45-177c0f04b2a8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bd58e78b-ada0-43d8-8c78-7034c729af06",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bd58e78b-ada0-43d8-8c78-7034c729af06"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fe6d4fa0-5cd1-4541-b258-86b93fb11bb9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fe6d4fa0-5cd1-4541-b258-86b93fb11bb9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a7613e70-1f5e-42fb-bbe1-72d9e0eafeba",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a7613e70-1f5e-42fb-bbe1-72d9e0eafeba"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f6694784-fd20-4cdd-94f7-b8f14cf4d75d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f6694784-fd20-4cdd-94f7-b8f14cf4d75d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a72bec22-25b4-4711-a23b-aee0243654c6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a72bec22-25b4-4711-a23b-aee0243654c6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4645aaf0-4c2d-4433-9215-f1150e5f92aa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4645aaf0-4c2d-4433-9215-f1150e5f92aa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5c5b629c-fb4d-47a2-b086-d5aca05120b7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5c5b629c-fb4d-47a2-b086-d5aca05120b7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6aafdeeb-7275-4e47-9e45-737fab7223c7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6aafdeeb-7275-4e47-9e45-737fab7223c7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d581490b-1113-4e3b-b94f-3d5e26978747",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d581490b-1113-4e3b-b94f-3d5e26978747"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "24461d5f-834a-41a0-8c6d-4edc81e0cf5d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "24461d5f-834a-41a0-8c6d-4edc81e0cf5d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c1e28f56-90f9-44f7-8df8-1a5b69b908fc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c1e28f56-90f9-44f7-8df8-1a5b69b908fc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d1bf4386-16d0-43cd-98d8-a19731292fba",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d1bf4386-16d0-43cd-98d8-a19731292fba"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e76e7c19-9e85-434e-94cd-6265b0cc5ea7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e76e7c19-9e85-434e-94cd-6265b0cc5ea7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6fb44647-f621-4a9a-ae5f-830c76de2458",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6fb44647-f621-4a9a-ae5f-830c76de2458"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "95821c4c-912f-41c7-8d68-8659822658b8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "95821c4c-912f-41c7-8d68-8659822658b8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a23c7953-7237-4a3a-836f-054ec91b463e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a23c7953-7237-4a3a-836f-054ec91b463e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fd5ea7c1-d7f6-4a52-a892-d7339a338c0c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fd5ea7c1-d7f6-4a52-a892-d7339a338c0c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "08b0670a-7b73-439b-99cd-0aff695765ae",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "08b0670a-7b73-439b-99cd-0aff695765ae"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a8e3d163-d3a7-4c09-8e43-e9b4b88ce08d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a8e3d163-d3a7-4c09-8e43-e9b4b88ce08d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "afeba205-63ee-4df1-8439-89d70334616d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "afeba205-63ee-4df1-8439-89d70334616d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "407a609c-441b-43c1-ad59-d8ec147aae53",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "407a609c-441b-43c1-ad59-d8ec147aae53"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c7aeba4b-a59d-44d2-ae82-8250d8569ee4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c7aeba4b-a59d-44d2-ae82-8250d8569ee4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "31b50d59-db98-426a-8500-eb5a58d6b4af",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "31b50d59-db98-426a-8500-eb5a58d6b4af"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "44b62ea9-2b38-49bd-969a-284507b67fee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "44b62ea9-2b38-49bd-969a-284507b67fee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1c88410b-0c81-4115-b1f1-ccdb4607a53b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1c88410b-0c81-4115-b1f1-ccdb4607a53b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "223cc658-107e-483d-a758-6787f2fabde9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "223cc658-107e-483d-a758-6787f2fabde9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c186cfd8-93e9-4a54-b231-2d38332c1f7f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c186cfd8-93e9-4a54-b231-2d38332c1f7f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "61dc87cd-0f59-48d6-8019-c70138c310ce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "61dc87cd-0f59-48d6-8019-c70138c310ce"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "17fbc529-66d4-4753-b431-c29bac81d762",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "17fbc529-66d4-4753-b431-c29bac81d762"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a857eb3b-7247-4135-bfdd-9fd803da0a83",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a857eb3b-7247-4135-bfdd-9fd803da0a83"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6dfcbe07-7c2a-4065-ae0a-aaebc937b6b8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6dfcbe07-7c2a-4065-ae0a-aaebc937b6b8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5e966039-5371-489e-937b-e8b0557b84fb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5e966039-5371-489e-937b-e8b0557b84fb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f5ff5205-f1d5-4415-8708-c20e4ce09b11",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f5ff5205-f1d5-4415-8708-c20e4ce09b11"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "88e611f3-159d-4ec9-b1ac-74435b55271d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "88e611f3-159d-4ec9-b1ac-74435b55271d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "653e4428-d304-4921-92a9-1488b33a0a99",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "653e4428-d304-4921-92a9-1488b33a0a99"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fc5e9384-45f6-43e0-9f22-f7360d06855e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fc5e9384-45f6-43e0-9f22-f7360d06855e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0c4f0756-98f0-4427-aa4a-27782fdd5973",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0c4f0756-98f0-4427-aa4a-27782fdd5973"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f75924d-5c03-4111-9eb7-ffa191e38b91",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f75924d-5c03-4111-9eb7-ffa191e38b91"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7a5fb190-1acc-468e-ae44-915c7070bcba",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7a5fb190-1acc-468e-ae44-915c7070bcba"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0e3baaa0-b60d-44ba-9eb4-968872cdfcfd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0e3baaa0-b60d-44ba-9eb4-968872cdfcfd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ab91a8bd-bdaa-46dc-9187-d6de30203475",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ab91a8bd-bdaa-46dc-9187-d6de30203475"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a11b9f74-d5ef-4f07-9068-9a9cbdc8e014",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a11b9f74-d5ef-4f07-9068-9a9cbdc8e014"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a2b1da30-c4e1-4116-a87a-41ea4226484f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a2b1da30-c4e1-4116-a87a-41ea4226484f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "53cb8b85-3786-4206-b515-2d02e751480e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "53cb8b85-3786-4206-b515-2d02e751480e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2d46ee15-f6d2-4b19-b7ee-1fa1f684f150",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2d46ee15-f6d2-4b19-b7ee-1fa1f684f150"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cef7a6db-c87c-46ea-a2d2-3ef9b537fa71",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cef7a6db-c87c-46ea-a2d2-3ef9b537fa71"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2ad3f9ae-7746-4039-82c7-a1a8fb92e2bd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2ad3f9ae-7746-4039-82c7-a1a8fb92e2bd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3ee70134-cbce-4a45-881f-621541ed8a7a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3ee70134-cbce-4a45-881f-621541ed8a7a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "45b0d9cb-eef5-4a2b-828f-7d912aed8b0b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "45b0d9cb-eef5-4a2b-828f-7d912aed8b0b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7fbe1fd8-ded3-4ec9-aa8e-8561dc3c9c8a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7fbe1fd8-ded3-4ec9-aa8e-8561dc3c9c8a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "75490dd6-0acd-44ce-bf8b-a2ce3c62a9ac",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "75490dd6-0acd-44ce-bf8b-a2ce3c62a9ac"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "44c7a40b-8f97-4352-8e0f-c7cf0dca42c9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "44c7a40b-8f97-4352-8e0f-c7cf0dca42c9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c406163b-7248-4674-b55a-63d252d0177a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c406163b-7248-4674-b55a-63d252d0177a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8f947c5c-87ab-441d-a13c-599cef092a4e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8f947c5c-87ab-441d-a13c-599cef092a4e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "25523896-7e79-46a5-ad89-9d65ee2567f7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "25523896-7e79-46a5-ad89-9d65ee2567f7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0a655cf0-6b20-422b-b910-54dd62e5164e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0a655cf0-6b20-422b-b910-54dd62e5164e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "534d84a2-b63d-4c14-98e3-f7ab0b4bbe4c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "534d84a2-b63d-4c14-98e3-f7ab0b4bbe4c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9b002762-a46e-4972-b499-00741252d84b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9b002762-a46e-4972-b499-00741252d84b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1497e0a1-02a3-4e0c-9f40-be5c67fe3ebb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1497e0a1-02a3-4e0c-9f40-be5c67fe3ebb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "695c7202-3457-4a25-a1d8-ad1fd92f9f39",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "695c7202-3457-4a25-a1d8-ad1fd92f9f39"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c3806c6c-e750-4119-9ccc-f0036635b7b9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c3806c6c-e750-4119-9ccc-f0036635b7b9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e862ea6b-79d1-412a-8784-bae0bc92bfb1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e862ea6b-79d1-412a-8784-bae0bc92bfb1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "52c327c7-7157-4c0c-8b1e-462102539891",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "52c327c7-7157-4c0c-8b1e-462102539891"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cefb5d9e-d365-4265-bdc4-4d469c19efd9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cefb5d9e-d365-4265-bdc4-4d469c19efd9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6cc9daf5-ffa8-444b-965e-ea968b41f5ed",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6cc9daf5-ffa8-444b-965e-ea968b41f5ed"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a808466e-67aa-4fe4-a8fb-1e38b67b31d1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a808466e-67aa-4fe4-a8fb-1e38b67b31d1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "45e5d3f6-b928-4b17-80c0-2fed0d448492",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "45e5d3f6-b928-4b17-80c0-2fed0d448492"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6cfc4d44-9917-41dc-9b24-562ecbba30d3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6cfc4d44-9917-41dc-9b24-562ecbba30d3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2056bed9-facc-4fca-bb16-0448a0df5dbb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2056bed9-facc-4fca-bb16-0448a0df5dbb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bc105be4-319b-41f4-977a-537b197d64ca",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bc105be4-319b-41f4-977a-537b197d64ca"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b37d8058-4854-4741-aa24-ec8d4128c8d3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b37d8058-4854-4741-aa24-ec8d4128c8d3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fb8e8c3a-6871-4e2f-a81f-c1f3eef14ba4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fb8e8c3a-6871-4e2f-a81f-c1f3eef14ba4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "371357d9-eeae-4b10-bf69-795088a453ff",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "371357d9-eeae-4b10-bf69-795088a453ff"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aa904532-2a2a-4928-93ee-6ebe6ef66e6b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aa904532-2a2a-4928-93ee-6ebe6ef66e6b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "68ca3ade-451d-4c7c-a7e6-1913abac6e27",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "68ca3ade-451d-4c7c-a7e6-1913abac6e27"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cc9fe9d4-08f9-4b30-a936-44f5a18e54db",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cc9fe9d4-08f9-4b30-a936-44f5a18e54db"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f68add3a-c17a-4fbb-a38b-2dc5032bebf2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f68add3a-c17a-4fbb-a38b-2dc5032bebf2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "836b02e3-ea50-418b-8b14-05407f556723",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "836b02e3-ea50-418b-8b14-05407f556723"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d0e3f641-b0c1-4b98-91a3-b2e42900e19f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d0e3f641-b0c1-4b98-91a3-b2e42900e19f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f9f25ce-7ba8-431c-b728-067137c9cb5c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f9f25ce-7ba8-431c-b728-067137c9cb5c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3256938a-a27f-4f09-b975-63bfc7c8d6f3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3256938a-a27f-4f09-b975-63bfc7c8d6f3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ab33f58f-ad42-4767-98a5-340d3e54a397",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ab33f58f-ad42-4767-98a5-340d3e54a397"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a33d46c2-4035-498c-af6f-e817bf323888",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a33d46c2-4035-498c-af6f-e817bf323888"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "97ed68ce-a63f-476b-b640-804e1f9f4284",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "97ed68ce-a63f-476b-b640-804e1f9f4284"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "25b3ea7d-b8d8-435f-a3a2-fefd84f3c034",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "25b3ea7d-b8d8-435f-a3a2-fefd84f3c034"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "929dbcf8-9761-4588-b165-380714d38786",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "929dbcf8-9761-4588-b165-380714d38786"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1e6b7df3-8d82-49f4-ad67-a030c09d4bb2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1e6b7df3-8d82-49f4-ad67-a030c09d4bb2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8f56c1fe-4aad-4d18-a1b5-579f092a73e4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8f56c1fe-4aad-4d18-a1b5-579f092a73e4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5a4dc2e8-ccec-4aee-887c-981c699bbe46",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5a4dc2e8-ccec-4aee-887c-981c699bbe46"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8fe89d79-cdd0-4f77-908d-70c26a068274",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8fe89d79-cdd0-4f77-908d-70c26a068274"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aa8ad8b6-4a62-4aa2-a2ee-9389fbe48b6e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aa8ad8b6-4a62-4aa2-a2ee-9389fbe48b6e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bccf1fa5-6b61-42f5-bbb0-40a8af229391",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bccf1fa5-6b61-42f5-bbb0-40a8af229391"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bd4517e1-9e11-4907-9b88-58d0ffd0e7d0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bd4517e1-9e11-4907-9b88-58d0ffd0e7d0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "13e0b0ec-3dec-45e3-a109-f14c6b60a625",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "13e0b0ec-3dec-45e3-a109-f14c6b60a625"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c2417955-2588-403b-90ed-9e9c197bec14",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c2417955-2588-403b-90ed-9e9c197bec14"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dfe2144d-f8b6-4bd5-a93b-e4761a894a35",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dfe2144d-f8b6-4bd5-a93b-e4761a894a35"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "09fd1384-40a3-4301-9ae9-0345cba8d774",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "09fd1384-40a3-4301-9ae9-0345cba8d774"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "79d7ecdf-aaad-49a7-802d-98ef10714196",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "79d7ecdf-aaad-49a7-802d-98ef10714196"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2b10dedf-c483-4c21-87ba-585c0cbe2eed",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2b10dedf-c483-4c21-87ba-585c0cbe2eed"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6414135e-f6d8-459e-a564-f4939d9aa5b5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6414135e-f6d8-459e-a564-f4939d9aa5b5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e4ec24e2-fdd3-4fc7-851b-e23efefb972e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e4ec24e2-fdd3-4fc7-851b-e23efefb972e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4ec6ec22-f14d-4cda-9738-319b7ffba9f7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4ec6ec22-f14d-4cda-9738-319b7ffba9f7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c68a523a-ff4a-4b96-a3bd-15babf0419d4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c68a523a-ff4a-4b96-a3bd-15babf0419d4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b265bc2c-bc92-4c2a-bc77-851923426766",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b265bc2c-bc92-4c2a-bc77-851923426766"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6a81e803-fadd-44af-9c39-62f9c972f9b3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6a81e803-fadd-44af-9c39-62f9c972f9b3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6b9f0e75-ac4a-4b52-9949-2eb5bbf9f386",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6b9f0e75-ac4a-4b52-9949-2eb5bbf9f386"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2ee75255-90a8-4a49-b386-2ca3f44e028c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2ee75255-90a8-4a49-b386-2ca3f44e028c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9ae39cc9-11f9-45af-b476-6fb0a769fec7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9ae39cc9-11f9-45af-b476-6fb0a769fec7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "533c174a-9586-4907-9f61-0f1b35c08b14",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "533c174a-9586-4907-9f61-0f1b35c08b14"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0be23095-969c-4e1c-8ac8-33d41d7180d0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0be23095-969c-4e1c-8ac8-33d41d7180d0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "651475ca-af74-424d-b4cf-3220da7b4228",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "651475ca-af74-424d-b4cf-3220da7b4228"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "36284564-8a87-4452-b871-59873fc12fc1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "36284564-8a87-4452-b871-59873fc12fc1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c56fef5b-20f4-4a08-b7a6-0a5014f45506",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c56fef5b-20f4-4a08-b7a6-0a5014f45506"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dbfe2699-f9dd-4f41-98a1-7df8e20537ce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dbfe2699-f9dd-4f41-98a1-7df8e20537ce"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0388d2e5-bbb9-4bfe-ab69-b3a5eb8d5d5e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0388d2e5-bbb9-4bfe-ab69-b3a5eb8d5d5e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3917b1a0-6ac5-4c13-9d43-cef177601f8c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3917b1a0-6ac5-4c13-9d43-cef177601f8c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7c004a2c-a3e0-4c0b-900d-ce484bfb15f3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7c004a2c-a3e0-4c0b-900d-ce484bfb15f3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "caed92e2-a780-49f3-b4f0-b405a2f49161",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "caed92e2-a780-49f3-b4f0-b405a2f49161"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "24fa42f2-f1a6-4c51-b8d3-cd6bb978e4a5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "24fa42f2-f1a6-4c51-b8d3-cd6bb978e4a5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5f776f70-244a-4c63-944b-277ddd7c6f7c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5f776f70-244a-4c63-944b-277ddd7c6f7c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "119988b1-3d2f-4c3a-8078-1e9eb54a9d62",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "119988b1-3d2f-4c3a-8078-1e9eb54a9d62"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e595eb5a-e3d1-422e-854d-aa38583cf63c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e595eb5a-e3d1-422e-854d-aa38583cf63c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "55b7ade0-ce6d-4e7e-b031-9ee555ac2912",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "55b7ade0-ce6d-4e7e-b031-9ee555ac2912"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "197301a7-865d-4bd5-bea2-4152d32c413c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "197301a7-865d-4bd5-bea2-4152d32c413c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bee4f660-3f59-4cbc-b1a0-384acdfd2d75",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bee4f660-3f59-4cbc-b1a0-384acdfd2d75"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ed390326-0806-467a-93f6-3dd64053735b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ed390326-0806-467a-93f6-3dd64053735b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b07cdf60-9b75-4fe3-a1e1-e11c00d013bb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b07cdf60-9b75-4fe3-a1e1-e11c00d013bb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f3e80389-14bc-4ab7-b820-52e146f813f3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f3e80389-14bc-4ab7-b820-52e146f813f3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9fc49fc4-b847-400d-ad4c-76e26a8b1359",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9fc49fc4-b847-400d-ad4c-76e26a8b1359"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a82ef075-2f11-41c0-8dae-7afe8e7206a1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a82ef075-2f11-41c0-8dae-7afe8e7206a1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0d58c920-30a2-4f7c-9b7d-daf938ca3707",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0d58c920-30a2-4f7c-9b7d-daf938ca3707"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7f8c338c-7dc9-4145-bc5d-c57313278919",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7f8c338c-7dc9-4145-bc5d-c57313278919"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e423131b-4698-4eef-841f-81e7a8fb6726",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e423131b-4698-4eef-841f-81e7a8fb6726"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e4900e14-b9b4-46a0-b4fd-d27b9641cf3d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e4900e14-b9b4-46a0-b4fd-d27b9641cf3d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "69d2f07b-6273-4b95-a16a-161622b5f8cb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "69d2f07b-6273-4b95-a16a-161622b5f8cb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0775069c-04ea-4259-8aa3-4cc484d266da",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0775069c-04ea-4259-8aa3-4cc484d266da"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "60d65d4d-95a9-4477-8fb1-797d656a0660",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "60d65d4d-95a9-4477-8fb1-797d656a0660"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3dc5e9de-b940-413e-abf4-b7934523f339",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3dc5e9de-b940-413e-abf4-b7934523f339"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3820a0f3-b5a2-4867-bd4e-2b508714dd6c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3820a0f3-b5a2-4867-bd4e-2b508714dd6c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d691e968-0519-4f1b-82ad-0c0f43703d95",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d691e968-0519-4f1b-82ad-0c0f43703d95"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4d31eda5-a884-432e-bdfb-f198ce9ad557",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4d31eda5-a884-432e-bdfb-f198ce9ad557"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "76725316-7b4b-447e-8037-19faedc2791d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "76725316-7b4b-447e-8037-19faedc2791d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c2705c1c-8c5c-4bad-a745-288d737faae7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c2705c1c-8c5c-4bad-a745-288d737faae7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eadccee6-d9f8-44b1-a8c9-73a1e667f8be",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eadccee6-d9f8-44b1-a8c9-73a1e667f8be"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "74c90155-4862-4065-aa07-fae367365e14",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "74c90155-4862-4065-aa07-fae367365e14"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "71946103-bb49-4a43-84d1-b82295722d3a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "71946103-bb49-4a43-84d1-b82295722d3a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dc99736a-7dcf-40eb-b810-8f1427241f86",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dc99736a-7dcf-40eb-b810-8f1427241f86"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "98181bba-0c73-4d13-aa1d-dbfe08d95fb9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "98181bba-0c73-4d13-aa1d-dbfe08d95fb9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4707b5f8-c993-4dac-b7ca-9c7bd2589d71",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4707b5f8-c993-4dac-b7ca-9c7bd2589d71"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2bac1e6d-c8c4-4163-9042-2585ddd1d66b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2bac1e6d-c8c4-4163-9042-2585ddd1d66b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4a71792e-d232-40e1-8547-b2c09563471f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4a71792e-d232-40e1-8547-b2c09563471f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f1c4b1bd-027c-4af1-9455-446fa9fc16b4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f1c4b1bd-027c-4af1-9455-446fa9fc16b4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ffe8c71e-54c2-4032-b281-b4c726f4ca6e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ffe8c71e-54c2-4032-b281-b4c726f4ca6e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "18e1694f-8496-4aa1-9673-64560398233a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "18e1694f-8496-4aa1-9673-64560398233a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b79493bc-133c-4215-a840-5ba563625502",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b79493bc-133c-4215-a840-5ba563625502"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "06278425-51b3-4fcf-89cd-5211177fdc37",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "06278425-51b3-4fcf-89cd-5211177fdc37"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "62371670-63fd-4f1d-9bc1-8294d20bb375",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "62371670-63fd-4f1d-9bc1-8294d20bb375"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fade4abb-76d1-46e5-9311-82adf2d620c1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fade4abb-76d1-46e5-9311-82adf2d620c1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "272e5821-afee-4bb9-8da4-d13e12cfb224",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "272e5821-afee-4bb9-8da4-d13e12cfb224"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b98945fb-7f10-4f06-ad6a-3ac83e5c891e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b98945fb-7f10-4f06-ad6a-3ac83e5c891e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f845c287-295a-4e98-9f7a-35755c31ae6e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f845c287-295a-4e98-9f7a-35755c31ae6e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "08ae153f-48ab-4f77-bdbb-9ce4363852e8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "08ae153f-48ab-4f77-bdbb-9ce4363852e8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e7e0ab57-44fb-4a2b-872c-0276c997c8b6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e7e0ab57-44fb-4a2b-872c-0276c997c8b6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3bc8a9b9-06c7-4841-9209-207d8a8d6c4a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3bc8a9b9-06c7-4841-9209-207d8a8d6c4a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9096aa7d-fad3-4c22-896b-14fbafd68204",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9096aa7d-fad3-4c22-896b-14fbafd68204"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9c53f287-b0d2-468a-b399-695624ac438e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9c53f287-b0d2-468a-b399-695624ac438e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "90c1adfa-5153-4417-a510-44de40a846d7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "90c1adfa-5153-4417-a510-44de40a846d7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fcb5f157-77fa-47f5-beb6-487a57b5867b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fcb5f157-77fa-47f5-beb6-487a57b5867b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0827a1bc-f126-463b-b512-b4c8729205b0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0827a1bc-f126-463b-b512-b4c8729205b0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "285b0b87-7e26-4712-92d0-0424124a19b5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "285b0b87-7e26-4712-92d0-0424124a19b5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aa55db92-9a8d-4c81-80dd-68eae86ba69c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aa55db92-9a8d-4c81-80dd-68eae86ba69c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c956b89a-edc0-431c-ac4e-73ac9ebd7b92",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c956b89a-edc0-431c-ac4e-73ac9ebd7b92"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f45b604b-3937-4c7e-9d47-af04d98d276f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f45b604b-3937-4c7e-9d47-af04d98d276f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e651a03c-656e-4109-9bbd-d424be6edba0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e651a03c-656e-4109-9bbd-d424be6edba0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d1d16d06-78d9-4d00-9f8c-d6ab9cc81ded",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d1d16d06-78d9-4d00-9f8c-d6ab9cc81ded"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f71a9de2-5858-4f57-8dda-2a3484729a00",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f71a9de2-5858-4f57-8dda-2a3484729a00"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b08bdfb5-969f-4d35-bff5-1900b3b09cf6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b08bdfb5-969f-4d35-bff5-1900b3b09cf6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8ba15feb-62cd-4754-bf85-fe46a6826af0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8ba15feb-62cd-4754-bf85-fe46a6826af0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f09d5bd2-b8e3-4d2a-90d9-ecd7ad9b88ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f09d5bd2-b8e3-4d2a-90d9-ecd7ad9b88ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e9043aaf-5278-4666-b93f-035dc6bcd287",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e9043aaf-5278-4666-b93f-035dc6bcd287"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ab2dbd2b-a5f8-4509-8488-b9649406d6e5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ab2dbd2b-a5f8-4509-8488-b9649406d6e5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "169573ef-99a7-4656-80fb-7d875043a1cd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "169573ef-99a7-4656-80fb-7d875043a1cd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f287bb09-689f-4bee-8d5b-16e1103bb379",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f287bb09-689f-4bee-8d5b-16e1103bb379"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2809280f-dcc4-4aba-985a-2f1f650e454f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2809280f-dcc4-4aba-985a-2f1f650e454f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d3e17be0-c8b1-4783-9e1a-09d3229b1ab3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d3e17be0-c8b1-4783-9e1a-09d3229b1ab3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5a275854-8692-4f47-ac3f-afd64d715da2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5a275854-8692-4f47-ac3f-afd64d715da2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dc7e217c-b42a-480b-8569-7b9013b38a6a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dc7e217c-b42a-480b-8569-7b9013b38a6a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1a568010-0160-4806-9c7a-8f72a727dc09",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1a568010-0160-4806-9c7a-8f72a727dc09"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "886011d6-06cd-443d-8b07-c6c3e39bd77e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "886011d6-06cd-443d-8b07-c6c3e39bd77e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cb4299b9-a209-4721-9e81-b4360f170a9c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cb4299b9-a209-4721-9e81-b4360f170a9c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2de9b8ca-589a-4c41-97ea-c33e6389aab3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2de9b8ca-589a-4c41-97ea-c33e6389aab3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6bcaa667-f192-45cc-ad88-a0c3489d3a3d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6bcaa667-f192-45cc-ad88-a0c3489d3a3d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eaefa2fd-3b79-4436-b755-d761c8b3e3be",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eaefa2fd-3b79-4436-b755-d761c8b3e3be"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8fa96832-dc15-467b-bf3b-f34efab50f12",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8fa96832-dc15-467b-bf3b-f34efab50f12"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "408e41fa-8de4-4881-82dd-5b3aa1a746fb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "408e41fa-8de4-4881-82dd-5b3aa1a746fb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "be237770-05c8-44b9-a930-6644caeef2ce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "be237770-05c8-44b9-a930-6644caeef2ce"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4a2e55f9-a004-4831-9d6c-86294661bd5c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4a2e55f9-a004-4831-9d6c-86294661bd5c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "365a284a-d6d6-41db-85fc-dfa3f3b825c5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "365a284a-d6d6-41db-85fc-dfa3f3b825c5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4fb08974-114c-4805-be15-c748f305edab",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4fb08974-114c-4805-be15-c748f305edab"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1beb5405-2468-4344-96d0-2b5f02f591a6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1beb5405-2468-4344-96d0-2b5f02f591a6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0e4e6554-877f-4ea1-b45a-3ba4ab45c324",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0e4e6554-877f-4ea1-b45a-3ba4ab45c324"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5f06f69a-e05f-4b22-9d71-65fc57ca07e2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5f06f69a-e05f-4b22-9d71-65fc57ca07e2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aaca6d36-4608-4a37-846a-f52cbceab9c4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aaca6d36-4608-4a37-846a-f52cbceab9c4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "294c2d0f-e828-4a99-99c2-4ae5886a5815",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "294c2d0f-e828-4a99-99c2-4ae5886a5815"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "232cddc0-c04f-4e8e-88e5-b24c9b7044d5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "232cddc0-c04f-4e8e-88e5-b24c9b7044d5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "63125592-7ee7-404f-9e00-3d9b194b7ad5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "63125592-7ee7-404f-9e00-3d9b194b7ad5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "120e6727-a2cf-499e-968f-6638f69f9810",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "120e6727-a2cf-499e-968f-6638f69f9810"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1e1132ac-a172-44ae-8a7f-b25eeb94149d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1e1132ac-a172-44ae-8a7f-b25eeb94149d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ac20519a-edbc-4772-985b-71137f932f0c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ac20519a-edbc-4772-985b-71137f932f0c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "97fe5847-c6d4-4cf8-a27f-722badf47f77",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "97fe5847-c6d4-4cf8-a27f-722badf47f77"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "51be2007-0f29-41eb-bb1f-9264ec1f273d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "51be2007-0f29-41eb-bb1f-9264ec1f273d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "542318c6-7134-4ba0-a44d-eac68f10a7ea",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "542318c6-7134-4ba0-a44d-eac68f10a7ea"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "00698070-211a-4bf7-acc5-092ecb193216",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "00698070-211a-4bf7-acc5-092ecb193216"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e197b895-ed11-4a17-a585-5622a6d80a3f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e197b895-ed11-4a17-a585-5622a6d80a3f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6bfb927b-d5da-47d2-8a96-3bdfc83fb794",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6bfb927b-d5da-47d2-8a96-3bdfc83fb794"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "07fdb7d0-2a2f-46ec-a012-1f57b75c46b0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "07fdb7d0-2a2f-46ec-a012-1f57b75c46b0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5b72a666-3353-4abd-9bf0-d5e5bec9d0a0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5b72a666-3353-4abd-9bf0-d5e5bec9d0a0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2e67da2c-6714-458f-8943-603c958702f8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2e67da2c-6714-458f-8943-603c958702f8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3ca2b635-f337-4431-9961-4d3fea550b5a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3ca2b635-f337-4431-9961-4d3fea550b5a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f1bf7796-82f0-4020-9e44-82ff02478ed3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f1bf7796-82f0-4020-9e44-82ff02478ed3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5c536bd3-7bab-4f2e-b4cf-0c9fa8bff707",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5c536bd3-7bab-4f2e-b4cf-0c9fa8bff707"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bee7cc40-b8a3-409b-be77-ec5a7736d41c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bee7cc40-b8a3-409b-be77-ec5a7736d41c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f3210f37-daba-4a3c-99f9-379ac2e95722",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f3210f37-daba-4a3c-99f9-379ac2e95722"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "25becbcb-dee1-4fe2-bbe7-ea2cf1b45e5a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "25becbcb-dee1-4fe2-bbe7-ea2cf1b45e5a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e9a75c3a-6bf2-4780-bdda-4b1b43c68b69",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e9a75c3a-6bf2-4780-bdda-4b1b43c68b69"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1e5524b4-048f-45d0-bc71-d6c061f9565b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1e5524b4-048f-45d0-bc71-d6c061f9565b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "030c1338-976a-4499-a240-af124fe63dfd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "030c1338-976a-4499-a240-af124fe63dfd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "06e9c53f-285a-445b-8f29-b356e4e2eb7b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "06e9c53f-285a-445b-8f29-b356e4e2eb7b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "921f2d7f-c17e-48ee-9a6d-aab957dbaad7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "921f2d7f-c17e-48ee-9a6d-aab957dbaad7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0593e25b-681c-4a3d-b00a-285a7080e4a2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0593e25b-681c-4a3d-b00a-285a7080e4a2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5bfdd874-5521-4ebb-beb2-ddf968682663",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5bfdd874-5521-4ebb-beb2-ddf968682663"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2b3ba9ca-1d76-483c-9cf6-8643f178bb7f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2b3ba9ca-1d76-483c-9cf6-8643f178bb7f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5e518839-3670-408f-8596-0a1c88a29c21",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5e518839-3670-408f-8596-0a1c88a29c21"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0fb8d619-35c3-4915-94aa-ec582eb5c5c9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0fb8d619-35c3-4915-94aa-ec582eb5c5c9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "18cafad8-972c-4fa6-a3c4-3b50f2ee38be",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "18cafad8-972c-4fa6-a3c4-3b50f2ee38be"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a721ce6b-7806-46d6-83e4-9fcaf971440e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a721ce6b-7806-46d6-83e4-9fcaf971440e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fe542717-93af-477b-9e51-99d0bc30b9c2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fe542717-93af-477b-9e51-99d0bc30b9c2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bce5ed4d-e96a-431e-bd2c-e17d24e57964",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bce5ed4d-e96a-431e-bd2c-e17d24e57964"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eac4603e-ae8e-45e3-9aa2-2fdd0a7d2674",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eac4603e-ae8e-45e3-9aa2-2fdd0a7d2674"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4c3c75c4-1725-4c16-8492-103fe0ff1bb8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4c3c75c4-1725-4c16-8492-103fe0ff1bb8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "952dc315-becf-49dc-be6b-7cab4c10031f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "952dc315-becf-49dc-be6b-7cab4c10031f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0c67b546-1059-402b-a0f9-b0b61a14fee0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0c67b546-1059-402b-a0f9-b0b61a14fee0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6783a9eb-8340-4dc6-8d6e-b44a5b5477f6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6783a9eb-8340-4dc6-8d6e-b44a5b5477f6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2418e430-75b8-429e-936f-0cea295ce62b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2418e430-75b8-429e-936f-0cea295ce62b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a8ae623a-73c5-4bda-b661-a80f89616e7c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a8ae623a-73c5-4bda-b661-a80f89616e7c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d8abf0cf-dbe8-45a4-bf03-1a5866ced3b3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d8abf0cf-dbe8-45a4-bf03-1a5866ced3b3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "15cdb14b-b81e-4fd8-ba3e-e515b3c963a1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "15cdb14b-b81e-4fd8-ba3e-e515b3c963a1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "000f5b02-e458-4914-b0b5-9a440d83abd6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "000f5b02-e458-4914-b0b5-9a440d83abd6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "254ee285-65f5-4f72-973a-4682e06c6e02",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "254ee285-65f5-4f72-973a-4682e06c6e02"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2aa8f000-d33a-4984-baf8-06b7b2daef6e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2aa8f000-d33a-4984-baf8-06b7b2daef6e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "93ffb018-61f5-42da-9ce7-b3f8cf5b25f9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "93ffb018-61f5-42da-9ce7-b3f8cf5b25f9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a192865b-04c2-480a-bc8b-cb2826ba79ba",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a192865b-04c2-480a-bc8b-cb2826ba79ba"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ed77c00a-e0e8-487e-906c-47559d7d6534",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ed77c00a-e0e8-487e-906c-47559d7d6534"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "590d4c6b-cc24-4932-8c6a-7edbe58d0365",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "590d4c6b-cc24-4932-8c6a-7edbe58d0365"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0f8ad186-b2de-4545-9a9a-6393bc7d3fe1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0f8ad186-b2de-4545-9a9a-6393bc7d3fe1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0f6cbb30-14be-4c7d-b950-63009885c0cb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0f6cbb30-14be-4c7d-b950-63009885c0cb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fbce39be-831c-4e88-9478-97e7af8b2189",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fbce39be-831c-4e88-9478-97e7af8b2189"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "117ee4cd-df8e-4421-9c8d-7f3fc228871a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "117ee4cd-df8e-4421-9c8d-7f3fc228871a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "400452a6-7ee0-4d13-8674-ddf554276697",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "400452a6-7ee0-4d13-8674-ddf554276697"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "001a7caa-dc83-4200-b1ad-e89d1d7fd96f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "001a7caa-dc83-4200-b1ad-e89d1d7fd96f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "987ec569-d4ae-419d-8dec-40a520d24ef8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "987ec569-d4ae-419d-8dec-40a520d24ef8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fff2e04e-0ee4-4d20-bce0-0ccfcf0275ce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fff2e04e-0ee4-4d20-bce0-0ccfcf0275ce"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7f188f98-d19b-4505-b7de-6db03014d054",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7f188f98-d19b-4505-b7de-6db03014d054"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "14f3affb-4be4-443d-91b7-afc6bac18555",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "14f3affb-4be4-443d-91b7-afc6bac18555"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "653064dd-6a3a-4f1a-96c1-b011cafb2697",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "653064dd-6a3a-4f1a-96c1-b011cafb2697"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c0136413-a306-4966-9563-9b95c390bc25",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c0136413-a306-4966-9563-9b95c390bc25"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e3073332-c6e2-4756-95e4-3d8eb07ad701",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e3073332-c6e2-4756-95e4-3d8eb07ad701"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "35d434b2-c933-467d-9113-8d757c884a62",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "35d434b2-c933-467d-9113-8d757c884a62"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4df5c862-9780-4a45-aa6b-6dbbcfbbbc21",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4df5c862-9780-4a45-aa6b-6dbbcfbbbc21"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1e1a4396-5708-48d9-99eb-cf5665eceecb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1e1a4396-5708-48d9-99eb-cf5665eceecb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7906c563-1098-4a12-8c89-93f5cf56306a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7906c563-1098-4a12-8c89-93f5cf56306a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2fd8ba1f-acc0-4d8a-b676-a4d0d458af05",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2fd8ba1f-acc0-4d8a-b676-a4d0d458af05"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cdc42f39-567c-424c-8297-b6cef03d69b2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cdc42f39-567c-424c-8297-b6cef03d69b2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3d0ab050-d4b4-49aa-8d6e-12b97838246b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3d0ab050-d4b4-49aa-8d6e-12b97838246b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "69fce7ea-4af3-447f-acdb-94847f0a205a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "69fce7ea-4af3-447f-acdb-94847f0a205a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2f206f15-db6d-409a-9eec-17309fa9c308",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2f206f15-db6d-409a-9eec-17309fa9c308"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "394ee2c6-610b-4aad-97bc-0a9759e3efce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "394ee2c6-610b-4aad-97bc-0a9759e3efce"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fae6b950-9fba-4213-8088-492666a76460",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fae6b950-9fba-4213-8088-492666a76460"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c725f453-e6c9-4298-809a-306c1738ccef",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c725f453-e6c9-4298-809a-306c1738ccef"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9338a345-782a-4190-bc84-f6f5e782b971",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9338a345-782a-4190-bc84-f6f5e782b971"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c4e7f25b-440d-47da-a77c-843fc5a4b204",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c4e7f25b-440d-47da-a77c-843fc5a4b204"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "da953547-5594-49c8-a47e-405a924cbcdf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "da953547-5594-49c8-a47e-405a924cbcdf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "87c44184-e4c0-4d0e-af4a-7b06282e5f17",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "87c44184-e4c0-4d0e-af4a-7b06282e5f17"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f97ec469-b094-4bb1-99e0-2aa7a6078c45",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f97ec469-b094-4bb1-99e0-2aa7a6078c45"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "088bf540-e1b7-4c76-a3dc-faad9084adfc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "088bf540-e1b7-4c76-a3dc-faad9084adfc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9c18120f-36fd-4f69-95cd-75f85af035cf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9c18120f-36fd-4f69-95cd-75f85af035cf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "93257e90-42ef-4ffc-8602-3b960a74ddda",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "93257e90-42ef-4ffc-8602-3b960a74ddda"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a898e62f-d2fb-4d91-97b3-7380f6d88a25",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a898e62f-d2fb-4d91-97b3-7380f6d88a25"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1e673b21-9b83-44c3-8a03-2a23efeacd46",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1e673b21-9b83-44c3-8a03-2a23efeacd46"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3d1c1695-a408-46b0-91d5-6d14323fa8f0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3d1c1695-a408-46b0-91d5-6d14323fa8f0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "80298672-5e14-4dbd-9962-90c8f13bf5fa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "80298672-5e14-4dbd-9962-90c8f13bf5fa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5b77a0e0-b566-4ef9-ae3e-e20e8b565547",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5b77a0e0-b566-4ef9-ae3e-e20e8b565547"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9fa277cc-af4a-4960-81bb-ef447ff33e0b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9fa277cc-af4a-4960-81bb-ef447ff33e0b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "91b573ac-379f-4410-9f9a-323f0ea1b0e3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "91b573ac-379f-4410-9f9a-323f0ea1b0e3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "274c246f-acb8-4b3f-8e17-61c7d418dca0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "274c246f-acb8-4b3f-8e17-61c7d418dca0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3b520366-c3fc-41f1-9d52-3092b2e78b23",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3b520366-c3fc-41f1-9d52-3092b2e78b23"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e38b1ad0-c495-409d-8b76-02bdaf7b7949",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e38b1ad0-c495-409d-8b76-02bdaf7b7949"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5ecab6fe-cca6-4a4e-bf19-33127396ffad",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5ecab6fe-cca6-4a4e-bf19-33127396ffad"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f0b37983-bb64-4f1b-8d99-4617618f0c6c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f0b37983-bb64-4f1b-8d99-4617618f0c6c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2cb3ebd9-fb6f-4b4e-bc53-65aeff7085d1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2cb3ebd9-fb6f-4b4e-bc53-65aeff7085d1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7948236c-64af-4509-9cd9-0fa131e89849",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7948236c-64af-4509-9cd9-0fa131e89849"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "10db80d8-08d3-453c-b1a6-5b3b6465e238",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "10db80d8-08d3-453c-b1a6-5b3b6465e238"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "09511a88-f7b4-40ce-80e0-3c02d8d3f394",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "09511a88-f7b4-40ce-80e0-3c02d8d3f394"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "15378cb0-86bd-4bf4-913e-12d7fda6a925",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "15378cb0-86bd-4bf4-913e-12d7fda6a925"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ed55f8b0-7ba1-4c8f-ba13-09efabfa8b98",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ed55f8b0-7ba1-4c8f-ba13-09efabfa8b98"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d661a095-e5ad-4b07-9fd2-5f5c51a65b0c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d661a095-e5ad-4b07-9fd2-5f5c51a65b0c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "149f277a-aa50-42d0-b4ca-5275b29e67c4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "149f277a-aa50-42d0-b4ca-5275b29e67c4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b120cd60-68e5-48d2-82e0-ac64dc80e5ff",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b120cd60-68e5-48d2-82e0-ac64dc80e5ff"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "509617ac-291b-40bb-8a4e-1999803be0a7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "509617ac-291b-40bb-8a4e-1999803be0a7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "34d5f813-2fa4-4e38-9348-3a6b61536e48",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "34d5f813-2fa4-4e38-9348-3a6b61536e48"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f0e2066f-35db-4f1f-af1c-806617f602ea",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f0e2066f-35db-4f1f-af1c-806617f602ea"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "047ced26-dc79-48a7-9933-fa5f697dceb8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "047ced26-dc79-48a7-9933-fa5f697dceb8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d1b4011c-4b6b-424f-9da6-60f13df57233",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d1b4011c-4b6b-424f-9da6-60f13df57233"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b468ed37-5740-4448-bdee-b8771da70c23",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b468ed37-5740-4448-bdee-b8771da70c23"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f8192bfa-3be5-4947-a542-c29524f02828",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f8192bfa-3be5-4947-a542-c29524f02828"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f194b4f0-9421-4220-840a-8d07c80d3b52",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f194b4f0-9421-4220-840a-8d07c80d3b52"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "622475a0-7130-4dbc-b936-c5030dedee16",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "622475a0-7130-4dbc-b936-c5030dedee16"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b990848e-a8d6-4b6d-80e7-d2ac776d58c0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b990848e-a8d6-4b6d-80e7-d2ac776d58c0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e222b049-1a4d-4ecc-9d37-26fd658b126b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e222b049-1a4d-4ecc-9d37-26fd658b126b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "00886633-771f-4c4a-8c5e-7261899eb6fd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "00886633-771f-4c4a-8c5e-7261899eb6fd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "539d2200-b0c8-45a0-ba42-be4ae070abad",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "539d2200-b0c8-45a0-ba42-be4ae070abad"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4288f4db-3bd7-4253-8f20-c9aeb8f49186",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4288f4db-3bd7-4253-8f20-c9aeb8f49186"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "de67a19a-6336-4cd3-b82e-1d57e23695f4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "de67a19a-6336-4cd3-b82e-1d57e23695f4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "64ea42aa-4525-46cf-872f-04232743d391",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "64ea42aa-4525-46cf-872f-04232743d391"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d507add4-88b9-4c5f-85ee-31771ab03544",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d507add4-88b9-4c5f-85ee-31771ab03544"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3f1a3e19-6419-4d8d-957d-3363388d62ba",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3f1a3e19-6419-4d8d-957d-3363388d62ba"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d76dd815-85b8-4957-b89c-8f0d82f40851",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d76dd815-85b8-4957-b89c-8f0d82f40851"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3896da61-c72b-4a7f-9357-c284b96c6513",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3896da61-c72b-4a7f-9357-c284b96c6513"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fa5148f6-7521-4afb-87c4-c5aa72d6dc0d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fa5148f6-7521-4afb-87c4-c5aa72d6dc0d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cb3536e7-bcec-46cd-895c-3fde4f3cc008",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cb3536e7-bcec-46cd-895c-3fde4f3cc008"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2b68b8b1-e916-43ed-8ac8-817df9edf9d9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2b68b8b1-e916-43ed-8ac8-817df9edf9d9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b085c32b-873f-410e-b001-993d602b54a9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b085c32b-873f-410e-b001-993d602b54a9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e5f16a07-e0fa-402a-aaa9-5ac7c9e72b26",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e5f16a07-e0fa-402a-aaa9-5ac7c9e72b26"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cc06925b-5977-4a49-907b-7b3fd4532ad9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cc06925b-5977-4a49-907b-7b3fd4532ad9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b492e037-0b76-4a02-967b-65c96e13bf4b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b492e037-0b76-4a02-967b-65c96e13bf4b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cdc1e4d0-a0c7-490a-9380-7b7c6a2050fa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cdc1e4d0-a0c7-490a-9380-7b7c6a2050fa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3b6412d7-fe8b-4a05-8e1d-1257b4a1c084",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3b6412d7-fe8b-4a05-8e1d-1257b4a1c084"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9cd6d25e-7c4c-499e-839d-1c04b256ea30",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9cd6d25e-7c4c-499e-839d-1c04b256ea30"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ac98c021-b0be-4e5f-a817-4451eac329a4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ac98c021-b0be-4e5f-a817-4451eac329a4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "272f3ce2-068d-4585-b911-65a9bc861d7e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "272f3ce2-068d-4585-b911-65a9bc861d7e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4c1f46bb-8a16-4f25-9cb9-68811c2f2b2e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4c1f46bb-8a16-4f25-9cb9-68811c2f2b2e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "efe4f903-ae24-45ac-a5da-87c5339373dc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "efe4f903-ae24-45ac-a5da-87c5339373dc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3c84d35d-bb88-4528-83c0-668cb1d75397",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3c84d35d-bb88-4528-83c0-668cb1d75397"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "77d9eafd-1e6c-41b1-b939-9ac11b388f8c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "77d9eafd-1e6c-41b1-b939-9ac11b388f8c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1155f874-2c45-4170-b1df-4997880c322f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1155f874-2c45-4170-b1df-4997880c322f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7dff2c48-b8fa-4c71-bf13-fddef44b6139",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7dff2c48-b8fa-4c71-bf13-fddef44b6139"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b10b32b1-8428-4058-ac4b-8feb7e62d8ef",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b10b32b1-8428-4058-ac4b-8feb7e62d8ef"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3b56d65c-15db-4aa3-8068-dacac704f647",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3b56d65c-15db-4aa3-8068-dacac704f647"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8af49abf-e34b-4f7e-9462-dcae554931be",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8af49abf-e34b-4f7e-9462-dcae554931be"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a96602f4-6cfe-4de6-ba4f-245e24c16d6d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a96602f4-6cfe-4de6-ba4f-245e24c16d6d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "08b88996-dd3a-49f6-97c2-2860f27afa92",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "08b88996-dd3a-49f6-97c2-2860f27afa92"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b92cea79-f50b-4cfc-a322-accb79f261eb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b92cea79-f50b-4cfc-a322-accb79f261eb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5e6f32fc-993e-4951-95cd-7f6ccc4c0d11",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5e6f32fc-993e-4951-95cd-7f6ccc4c0d11"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0a0b005f-91fa-4fa6-bf68-f36de706b0ef",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0a0b005f-91fa-4fa6-bf68-f36de706b0ef"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ab5c02b4-f265-446d-b1d9-a1ae9ed5df93",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ab5c02b4-f265-446d-b1d9-a1ae9ed5df93"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "979f47a7-f337-4dd5-9bc7-bdaa4006d943",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "979f47a7-f337-4dd5-9bc7-bdaa4006d943"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9c9b93c2-c8a9-45a5-a424-52ac56b7d8a1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9c9b93c2-c8a9-45a5-a424-52ac56b7d8a1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9f4cdbd3-a527-4a55-9aa5-d10c2027ea58",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9f4cdbd3-a527-4a55-9aa5-d10c2027ea58"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6de2f3ae-b906-480b-b553-bd0417e2c123",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6de2f3ae-b906-480b-b553-bd0417e2c123"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "30495354-0764-4ad3-b56c-6ef5b15d841b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "30495354-0764-4ad3-b56c-6ef5b15d841b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "892eede0-3dc7-497b-b231-229dcb8bcaaa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "892eede0-3dc7-497b-b231-229dcb8bcaaa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "233fd7bf-6323-413e-92fe-d60af4a7063c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "233fd7bf-6323-413e-92fe-d60af4a7063c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "41ceca07-bc2a-45aa-a07f-8ec0e5d7e4f6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "41ceca07-bc2a-45aa-a07f-8ec0e5d7e4f6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0927e304-ad2b-4285-b582-cd15c9ff5dc8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0927e304-ad2b-4285-b582-cd15c9ff5dc8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "711ac1dd-8121-463b-b572-bf06a4a76e49",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "711ac1dd-8121-463b-b572-bf06a4a76e49"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0e0e78ea-2d87-42bc-aeb5-e9240b160a53",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0e0e78ea-2d87-42bc-aeb5-e9240b160a53"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6498653f-0713-454c-8e33-636aada0f379",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6498653f-0713-454c-8e33-636aada0f379"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2215d772-873f-4d41-9fa2-8e6f7072959f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2215d772-873f-4d41-9fa2-8e6f7072959f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d8607e96-dd61-4c55-a1e3-8c14135e269b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d8607e96-dd61-4c55-a1e3-8c14135e269b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "18a99ace-3d44-43ba-9720-08971ad8fea8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "18a99ace-3d44-43ba-9720-08971ad8fea8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aa322047-3fe2-4f9d-9a89-416d7811e524",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aa322047-3fe2-4f9d-9a89-416d7811e524"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "53868162-6883-40c1-8166-bbf24387a3f0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "53868162-6883-40c1-8166-bbf24387a3f0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3b5ec3cb-50bb-40df-b22f-45a5f1b64fca",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3b5ec3cb-50bb-40df-b22f-45a5f1b64fca"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "18814013-0e0a-4cc1-8e29-dfbef3dc7b0a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "18814013-0e0a-4cc1-8e29-dfbef3dc7b0a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "99876e45-8a0d-40c1-b728-076135689a93",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "99876e45-8a0d-40c1-b728-076135689a93"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "366b9c3f-c764-475c-b327-ececc0f07a1f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "366b9c3f-c764-475c-b327-ececc0f07a1f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "04728d54-6f82-46bc-a979-5d2b6f42ea8c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "04728d54-6f82-46bc-a979-5d2b6f42ea8c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "56152ef3-9234-4b3f-a85e-3a095ee9b907",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "56152ef3-9234-4b3f-a85e-3a095ee9b907"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3a8e8407-cfe2-41d9-8bc5-840796c8f801",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3a8e8407-cfe2-41d9-8bc5-840796c8f801"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "25687141-9427-46da-9ccb-836664ef8625",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "25687141-9427-46da-9ccb-836664ef8625"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f44f8323-3ca0-4a40-887f-922b98af2c8b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f44f8323-3ca0-4a40-887f-922b98af2c8b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e96411a7-ecfd-4edb-9cc5-a16a50be36dc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e96411a7-ecfd-4edb-9cc5-a16a50be36dc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "28f7c6bd-09d3-41f2-8369-dd921678ad31",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "28f7c6bd-09d3-41f2-8369-dd921678ad31"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "23179938-bd5b-4762-8b42-52aa9b1a5fb1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "23179938-bd5b-4762-8b42-52aa9b1a5fb1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e5a0c8a9-6ca9-4361-97a1-da004fb49374",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e5a0c8a9-6ca9-4361-97a1-da004fb49374"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b0ecb8dc-5f0f-461f-8dae-646f71355cbe",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b0ecb8dc-5f0f-461f-8dae-646f71355cbe"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5b4271d0-3399-47fa-9e06-f3df19b58b2d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5b4271d0-3399-47fa-9e06-f3df19b58b2d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "00b4645b-e160-4c62-865c-0eac40586d87",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "00b4645b-e160-4c62-865c-0eac40586d87"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "026b9c71-45d7-4449-ba37-397e8b1ae19b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "026b9c71-45d7-4449-ba37-397e8b1ae19b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a445011f-5c71-44f5-bcfd-5f31ecd13966",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a445011f-5c71-44f5-bcfd-5f31ecd13966"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "67551a8d-18d7-4bbe-b0b0-4c44b3408f82",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "67551a8d-18d7-4bbe-b0b0-4c44b3408f82"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "363e2d7a-ddbc-4b67-8280-cbed081c5768",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "363e2d7a-ddbc-4b67-8280-cbed081c5768"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "846e1cce-ff99-4477-a59f-305e65e624e7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "846e1cce-ff99-4477-a59f-305e65e624e7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "097eb47c-1c02-4b1b-8b25-5c50526f1bed",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "097eb47c-1c02-4b1b-8b25-5c50526f1bed"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3546b11c-9fa2-4068-86f7-222aab1a2db2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3546b11c-9fa2-4068-86f7-222aab1a2db2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "40bdb6e1-ad3a-4cc9-adfd-0b856eeb157c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "40bdb6e1-ad3a-4cc9-adfd-0b856eeb157c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "11d5e6da-dd28-43a2-b48f-7ed52d2067ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "11d5e6da-dd28-43a2-b48f-7ed52d2067ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ecdf4284-96ef-4384-b6cb-51ada2d505f5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ecdf4284-96ef-4384-b6cb-51ada2d505f5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0b391818-b1a3-451a-b4ed-6f105d318ca1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0b391818-b1a3-451a-b4ed-6f105d318ca1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4f559e4e-8c3f-482b-a6cb-0996df59708f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4f559e4e-8c3f-482b-a6cb-0996df59708f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a8af107d-d15b-485a-8e67-1a7e9729d468",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a8af107d-d15b-485a-8e67-1a7e9729d468"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "57a274b2-6b2c-4c32-9421-4b1d4b86aebe",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "57a274b2-6b2c-4c32-9421-4b1d4b86aebe"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4d48ae99-485e-4a21-a944-c487f8ca5e6d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4d48ae99-485e-4a21-a944-c487f8ca5e6d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "87af7e9c-bdee-43eb-a797-37de5e73fabc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "87af7e9c-bdee-43eb-a797-37de5e73fabc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fd3d9336-f13b-42d8-85cb-6e87da8366bf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fd3d9336-f13b-42d8-85cb-6e87da8366bf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "662e768e-797b-490d-8e3c-6c2a04b1c8d8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "662e768e-797b-490d-8e3c-6c2a04b1c8d8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "64622c26-02db-4e0f-89bd-92540a53fdf7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "64622c26-02db-4e0f-89bd-92540a53fdf7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "82e55612-63c1-402a-a638-1ffc15701dfa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "82e55612-63c1-402a-a638-1ffc15701dfa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "517411db-715d-406a-a925-17b8dd299e54",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "517411db-715d-406a-a925-17b8dd299e54"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "76ac84f9-c234-4156-b839-30dc4e46f4c9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "76ac84f9-c234-4156-b839-30dc4e46f4c9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "94f2c7d4-cecc-40e9-96a1-c7f9f761515a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "94f2c7d4-cecc-40e9-96a1-c7f9f761515a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8206a3dc-7212-453e-a96e-caa1e9c9e7df",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8206a3dc-7212-453e-a96e-caa1e9c9e7df"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ebd3b024-9d9e-4fad-9e54-e6509a248be3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ebd3b024-9d9e-4fad-9e54-e6509a248be3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8d54af92-8070-43e4-bb4a-5855bedf566f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8d54af92-8070-43e4-bb4a-5855bedf566f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2db250a8-c1ba-4867-8451-9db04432407b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2db250a8-c1ba-4867-8451-9db04432407b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bc126d90-26e0-41a4-bc09-d68f0d6e7f44",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bc126d90-26e0-41a4-bc09-d68f0d6e7f44"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "00b076a3-4e30-4f37-b79b-c9d2135cd3d4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "00b076a3-4e30-4f37-b79b-c9d2135cd3d4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6e9c6924-25ce-4abf-b00e-cc05793ce2eb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6e9c6924-25ce-4abf-b00e-cc05793ce2eb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c08fd007-4ecf-4558-8a45-cecfff43209c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c08fd007-4ecf-4558-8a45-cecfff43209c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5d8d70ea-7753-4a57-a098-249dc8ccfd8b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5d8d70ea-7753-4a57-a098-249dc8ccfd8b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "19a47674-84c4-4991-a56d-7b90ee6e33b6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "19a47674-84c4-4991-a56d-7b90ee6e33b6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c04014dd-e2ce-4e19-a500-59d4b16f864f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c04014dd-e2ce-4e19-a500-59d4b16f864f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "409c8799-9153-4cad-86ab-f5c0a5a2a390",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "409c8799-9153-4cad-86ab-f5c0a5a2a390"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f9bcb147-5365-4c47-9c52-4548c52cae0d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f9bcb147-5365-4c47-9c52-4548c52cae0d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cdaa2b78-cbd2-4efa-b2da-66eeacfc0eaa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cdaa2b78-cbd2-4efa-b2da-66eeacfc0eaa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "68ec4720-e126-44af-852a-578c39aa4f8b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "68ec4720-e126-44af-852a-578c39aa4f8b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7842f7c4-486c-4526-b263-a66804fea151",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7842f7c4-486c-4526-b263-a66804fea151"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d4c530c3-9790-45cd-a715-1ba83048738e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d4c530c3-9790-45cd-a715-1ba83048738e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e6e4a9ac-6785-4ef9-8db1-dc1b4de9afc4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e6e4a9ac-6785-4ef9-8db1-dc1b4de9afc4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b632ed07-e09a-4ac4-9cb5-499eaf12f71f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b632ed07-e09a-4ac4-9cb5-499eaf12f71f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "becf383e-6c5b-42ac-9633-2926adbfebee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "becf383e-6c5b-42ac-9633-2926adbfebee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2621caca-f10e-4ae7-ba16-0248ce67c1e7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2621caca-f10e-4ae7-ba16-0248ce67c1e7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "63ac9001-0cc0-453e-9d25-cbd949f01bb6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "63ac9001-0cc0-453e-9d25-cbd949f01bb6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6553af7f-d7d6-42cc-bd14-9547c4c863cd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6553af7f-d7d6-42cc-bd14-9547c4c863cd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1c4ce783-15ab-44a9-8550-8bd521f0a4bc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1c4ce783-15ab-44a9-8550-8bd521f0a4bc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "31812572-52e3-4e83-922b-006fc897f875",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "31812572-52e3-4e83-922b-006fc897f875"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5452e5e8-f2d2-4ed3-bc27-d9ab8163cd87",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5452e5e8-f2d2-4ed3-bc27-d9ab8163cd87"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "19c0f650-1eb9-443f-87ff-c50607be6f48",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "19c0f650-1eb9-443f-87ff-c50607be6f48"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b48ba3e2-b757-444f-a8ab-6943bf93bae7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b48ba3e2-b757-444f-a8ab-6943bf93bae7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7f41e600-bc2a-4f9b-8449-47095e74c385",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7f41e600-bc2a-4f9b-8449-47095e74c385"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "80aad17f-9d5c-41ec-82f4-788df7aa9778",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "80aad17f-9d5c-41ec-82f4-788df7aa9778"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "46012e63-4bb7-46a3-81a6-a7ac33a68f3c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "46012e63-4bb7-46a3-81a6-a7ac33a68f3c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "618a9254-034c-44a8-98c4-514fade47cbf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "618a9254-034c-44a8-98c4-514fade47cbf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "27d3afdd-e2e8-43d9-82f0-72e1214f1a5c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "27d3afdd-e2e8-43d9-82f0-72e1214f1a5c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2fb22f4d-3f6d-4976-821b-d983966ad8ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2fb22f4d-3f6d-4976-821b-d983966ad8ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f0960447-821f-44b0-be9a-4bb6f2e96ee0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f0960447-821f-44b0-be9a-4bb6f2e96ee0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fb0d6b3b-3e91-4688-8886-3a1f91031474",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fb0d6b3b-3e91-4688-8886-3a1f91031474"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "30287259-9ccb-4ec4-858d-3ef302f31209",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "30287259-9ccb-4ec4-858d-3ef302f31209"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e532b20d-cec4-4ff5-8cae-b407e622cef7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e532b20d-cec4-4ff5-8cae-b407e622cef7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "40025a91-e394-43a8-bb46-b174d58cac25",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "40025a91-e394-43a8-bb46-b174d58cac25"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c5dede41-f6a5-4b4d-aadd-3966b4bd5a9a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c5dede41-f6a5-4b4d-aadd-3966b4bd5a9a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2c273de5-a32a-4148-8b0e-dabb76000f0e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2c273de5-a32a-4148-8b0e-dabb76000f0e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "393d2611-1407-4aa9-a7ee-19d417ce418e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "393d2611-1407-4aa9-a7ee-19d417ce418e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b38b7427-7911-4edd-b6d8-8e989ca3ac0f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b38b7427-7911-4edd-b6d8-8e989ca3ac0f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3fb2be65-d9c0-45e7-bb9b-bb969bf1ad1b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3fb2be65-d9c0-45e7-bb9b-bb969bf1ad1b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3e87ffde-d738-46ed-a089-29bf645c24a0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3e87ffde-d738-46ed-a089-29bf645c24a0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1ee1abe5-6b8b-4c89-862a-f16e1939f5b6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1ee1abe5-6b8b-4c89-862a-f16e1939f5b6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "31337fb4-e036-4ea8-83ae-197ad11616be",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "31337fb4-e036-4ea8-83ae-197ad11616be"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "98e49352-e013-403d-acd8-cbc151fd3726",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "98e49352-e013-403d-acd8-cbc151fd3726"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b98f9421-375f-4b04-9baf-c306af32802c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b98f9421-375f-4b04-9baf-c306af32802c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "929470ec-c759-4c7f-a4cb-58da5f4f2ab9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "929470ec-c759-4c7f-a4cb-58da5f4f2ab9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8cce4be4-f5a5-4ec2-8f8f-cad4831b4f44",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8cce4be4-f5a5-4ec2-8f8f-cad4831b4f44"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c01bda8e-bef5-4048-a297-48fdf351cdfd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c01bda8e-bef5-4048-a297-48fdf351cdfd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "abcaaab4-ca15-41dc-854c-4461477eb492",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "abcaaab4-ca15-41dc-854c-4461477eb492"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5a3aaa41-a606-46a4-90fd-324a61cb4d68",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5a3aaa41-a606-46a4-90fd-324a61cb4d68"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fa683516-eea5-4a15-bff9-9550a97f5b43",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fa683516-eea5-4a15-bff9-9550a97f5b43"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "12bf6a3d-f1f1-4396-9bcb-79c9963ae78c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "12bf6a3d-f1f1-4396-9bcb-79c9963ae78c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "586c6310-4e5f-4d8a-8e54-d9d592baebbf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "586c6310-4e5f-4d8a-8e54-d9d592baebbf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "25103278-2cae-4b33-9c8b-b663bf214a22",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "25103278-2cae-4b33-9c8b-b663bf214a22"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6d8912a0-39a4-4654-ab69-d2cd13b4dadb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6d8912a0-39a4-4654-ab69-d2cd13b4dadb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "748e61b5-3543-4711-9313-8e19c186724c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "748e61b5-3543-4711-9313-8e19c186724c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fa22d1fb-04fc-46ab-8c1f-e8c285021ae5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fa22d1fb-04fc-46ab-8c1f-e8c285021ae5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a80262d9-501a-4dc3-8e35-90e31164d881",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a80262d9-501a-4dc3-8e35-90e31164d881"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aa1c6d39-7c52-46ec-987d-17217baaef03",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aa1c6d39-7c52-46ec-987d-17217baaef03"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7cf6fc5c-e6ae-4ab1-9c76-003b6fabf83a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7cf6fc5c-e6ae-4ab1-9c76-003b6fabf83a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9730d333-d1a1-492d-b1b3-8aea7189a4d7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9730d333-d1a1-492d-b1b3-8aea7189a4d7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "390d9850-aad9-4e68-85f6-aba42050e723",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "390d9850-aad9-4e68-85f6-aba42050e723"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "93c071e3-bbce-47c2-ad3b-6eaabf92ee68",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "93c071e3-bbce-47c2-ad3b-6eaabf92ee68"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2baa18ef-00a6-4d5e-9f2b-2dbf4324a01c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2baa18ef-00a6-4d5e-9f2b-2dbf4324a01c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dfb9063b-0da0-4026-9531-ba71685bba88",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dfb9063b-0da0-4026-9531-ba71685bba88"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "238eb070-fa7a-4257-bbfd-71307149a59c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "238eb070-fa7a-4257-bbfd-71307149a59c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f8bfdd3b-3171-47eb-8ccd-8c7afd3d3db8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f8bfdd3b-3171-47eb-8ccd-8c7afd3d3db8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "33a17300-7de1-49a4-bd0a-2bfc15caeb3d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "33a17300-7de1-49a4-bd0a-2bfc15caeb3d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f30282f3-4c7f-4044-9922-e488fe6a2ba1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f30282f3-4c7f-4044-9922-e488fe6a2ba1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0796dcb8-659b-461b-b49b-11d32f33d640",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0796dcb8-659b-461b-b49b-11d32f33d640"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ef710f0f-7908-4fbf-8a87-fd2eb90aacbf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ef710f0f-7908-4fbf-8a87-fd2eb90aacbf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4b54c4d2-40f0-492d-8c02-4a2529ad4112",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4b54c4d2-40f0-492d-8c02-4a2529ad4112"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cf2d85ac-3f64-4f6e-9005-74bf4ff375d4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cf2d85ac-3f64-4f6e-9005-74bf4ff375d4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d16ef78a-e966-47ef-91f8-1eb2128cede9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d16ef78a-e966-47ef-91f8-1eb2128cede9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ef922f54-8a52-4c41-8380-cc25cbc194b5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ef922f54-8a52-4c41-8380-cc25cbc194b5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f7853eb1-9698-45d0-88ed-f04be49861e2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f7853eb1-9698-45d0-88ed-f04be49861e2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9384ec98-5665-45c4-9ad7-653342878090",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9384ec98-5665-45c4-9ad7-653342878090"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9395e5c0-4245-4da0-9198-0982ce8890d5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9395e5c0-4245-4da0-9198-0982ce8890d5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "13044298-9058-4cd3-9d05-96dc280b6c14",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "13044298-9058-4cd3-9d05-96dc280b6c14"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ef031acc-fdac-451c-80fa-4d815e5bc6bb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ef031acc-fdac-451c-80fa-4d815e5bc6bb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "93a0cf2c-871c-4add-b52f-3f97ed5b13ea",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "93a0cf2c-871c-4add-b52f-3f97ed5b13ea"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d870002f-4d77-446f-b3d3-2466e5645ef3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d870002f-4d77-446f-b3d3-2466e5645ef3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2490ddcc-3481-4c1b-be3d-52df40af5811",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2490ddcc-3481-4c1b-be3d-52df40af5811"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f04ad7a3-e9ee-4db7-802b-6ee5348127ff",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f04ad7a3-e9ee-4db7-802b-6ee5348127ff"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "773a7a9c-12d3-4591-8d3d-fb24719fc52f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "773a7a9c-12d3-4591-8d3d-fb24719fc52f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bd37f42c-54d0-421c-a322-e05d3f6eae71",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bd37f42c-54d0-421c-a322-e05d3f6eae71"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b03706dc-c5f9-4b6f-9369-c908d3a7b413",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b03706dc-c5f9-4b6f-9369-c908d3a7b413"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "82eb6f6f-45e4-44b5-a94b-4ba8eab1a51e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "82eb6f6f-45e4-44b5-a94b-4ba8eab1a51e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fe978e43-d3b3-4722-87e9-e24ee0bde81c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fe978e43-d3b3-4722-87e9-e24ee0bde81c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1678ef09-47c8-4763-ab3d-f09cdacc5192",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1678ef09-47c8-4763-ab3d-f09cdacc5192"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0ed68282-7774-45fa-b3ce-2b82f5309225",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0ed68282-7774-45fa-b3ce-2b82f5309225"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "289322a8-18c3-4227-807c-5e2b472cb45e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "289322a8-18c3-4227-807c-5e2b472cb45e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d944f344-5c0b-4ff1-90d0-2a06ee218bcb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d944f344-5c0b-4ff1-90d0-2a06ee218bcb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "81bb3af1-ab96-41ce-8b65-3ef9e731fe5f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "81bb3af1-ab96-41ce-8b65-3ef9e731fe5f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "393661df-8703-4228-8158-28998171a8a0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "393661df-8703-4228-8158-28998171a8a0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a7323644-3213-475e-b7e3-f3754a332700",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a7323644-3213-475e-b7e3-f3754a332700"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d3ff16b8-1a85-45cf-9b26-aa973eb3f265",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d3ff16b8-1a85-45cf-9b26-aa973eb3f265"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a7c09636-9468-4823-a121-c405ab22d5ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a7c09636-9468-4823-a121-c405ab22d5ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8b828be7-2d6e-4a05-ad32-5d31e147c382",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8b828be7-2d6e-4a05-ad32-5d31e147c382"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bbd373f9-4780-4eaa-84b6-8892a24eb866",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bbd373f9-4780-4eaa-84b6-8892a24eb866"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "53119c5d-a3dd-45e8-9708-b8a36dbecd8e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "53119c5d-a3dd-45e8-9708-b8a36dbecd8e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aee8bd3c-5b53-4f33-b49d-93cd801bd893",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aee8bd3c-5b53-4f33-b49d-93cd801bd893"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "887c4a97-51a9-4322-bf9e-41a4d649329c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "887c4a97-51a9-4322-bf9e-41a4d649329c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1c073b9a-9880-47de-b531-ce88b6c8d6d8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1c073b9a-9880-47de-b531-ce88b6c8d6d8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ea4fc1b9-139e-43bc-8130-8f88da92cb63",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ea4fc1b9-139e-43bc-8130-8f88da92cb63"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0023fa35-97f0-484e-9c51-2e3b9ee7d3e3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0023fa35-97f0-484e-9c51-2e3b9ee7d3e3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c248b306-a9b4-4c9d-9e7f-22770e4c5c12",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c248b306-a9b4-4c9d-9e7f-22770e4c5c12"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7e55b142-b24c-4a47-aac4-177d1aa73d0c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7e55b142-b24c-4a47-aac4-177d1aa73d0c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2c67e297-c840-42c2-8bb2-75301b79eaa7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2c67e297-c840-42c2-8bb2-75301b79eaa7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b19ab705-687f-4161-8463-4743a4f2d306",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b19ab705-687f-4161-8463-4743a4f2d306"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1aa47a9d-15db-43e8-ba00-7240fcf75a25",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1aa47a9d-15db-43e8-ba00-7240fcf75a25"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c125bb90-7ea5-4c87-9f61-0aa74f2928d2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c125bb90-7ea5-4c87-9f61-0aa74f2928d2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4e786c13-5d0a-442a-9842-6897eaea4124",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4e786c13-5d0a-442a-9842-6897eaea4124"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "19a066cd-c640-4a6a-85fb-b1be04cc5292",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "19a066cd-c640-4a6a-85fb-b1be04cc5292"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7bf0b051-e167-47fc-9109-f705a98a3de4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7bf0b051-e167-47fc-9109-f705a98a3de4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1818a9c4-38bf-4924-bc65-3225b4da1762",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1818a9c4-38bf-4924-bc65-3225b4da1762"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8d5e059b-2bd6-4d42-a3b5-7d640969b9db",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8d5e059b-2bd6-4d42-a3b5-7d640969b9db"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c5373a62-79c3-479d-ba3d-2899e1cf550a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c5373a62-79c3-479d-ba3d-2899e1cf550a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f5305572-343d-4b59-a938-24e6546e0eb8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f5305572-343d-4b59-a938-24e6546e0eb8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "614a5f55-9198-45ca-8d66-c1d348d53302",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "614a5f55-9198-45ca-8d66-c1d348d53302"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c3fb77d0-104a-4934-907b-f66fbb457fc5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c3fb77d0-104a-4934-907b-f66fbb457fc5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8ffbe0f0-5ddd-4fc5-b103-6e5c4f687e22",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8ffbe0f0-5ddd-4fc5-b103-6e5c4f687e22"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a7f8b006-54f7-4315-8fdd-ee0248fb9af9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a7f8b006-54f7-4315-8fdd-ee0248fb9af9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7eba98b6-2017-455a-8dd6-2f11b0f1d47d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7eba98b6-2017-455a-8dd6-2f11b0f1d47d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d61cd2c4-4029-4d4d-a171-8ac900ef41dd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d61cd2c4-4029-4d4d-a171-8ac900ef41dd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "594539ea-900d-40dd-9093-65b397db77e6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "594539ea-900d-40dd-9093-65b397db77e6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2e8134dc-cb1e-4693-aa19-50e9bb270564",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2e8134dc-cb1e-4693-aa19-50e9bb270564"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dd9c62ef-5685-4fbc-b48c-61e98090d955",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dd9c62ef-5685-4fbc-b48c-61e98090d955"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9fec48b7-690c-436e-8c97-6da9ef9bab0a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9fec48b7-690c-436e-8c97-6da9ef9bab0a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ce80ac57-25b9-45ce-b000-99dbebc378f9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ce80ac57-25b9-45ce-b000-99dbebc378f9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0f24ac9b-8d29-40b4-b17c-87c614cb0ae1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0f24ac9b-8d29-40b4-b17c-87c614cb0ae1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b55d4cb2-108a-42c6-9152-ff0f16290e44",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b55d4cb2-108a-42c6-9152-ff0f16290e44"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8c9ec827-34e2-4636-ac48-bb85a3cdd8d1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8c9ec827-34e2-4636-ac48-bb85a3cdd8d1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "719b3707-96ef-4774-87b8-b22fc764d96b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "719b3707-96ef-4774-87b8-b22fc764d96b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1e3db297-8f89-4255-b505-581351077048",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1e3db297-8f89-4255-b505-581351077048"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "63329728-a362-4786-90bb-0df0010f636f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "63329728-a362-4786-90bb-0df0010f636f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0df86b2f-7280-4ca1-9eba-04d31cc90866",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0df86b2f-7280-4ca1-9eba-04d31cc90866"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c2113009-2adf-43f1-a097-bade1b587b79",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c2113009-2adf-43f1-a097-bade1b587b79"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a7e236cd-b04e-40dd-ae2d-b97b9e0fe640",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a7e236cd-b04e-40dd-ae2d-b97b9e0fe640"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5fab5897-030c-498e-a7d5-4a95b314ecb6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5fab5897-030c-498e-a7d5-4a95b314ecb6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6cd62c41-de90-4e09-86c2-fcda3f6b8320",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6cd62c41-de90-4e09-86c2-fcda3f6b8320"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "42fa95c8-bd75-4a6d-95c6-95049a671275",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "42fa95c8-bd75-4a6d-95c6-95049a671275"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "149c3805-814f-47d8-9577-00745ed4d261",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "149c3805-814f-47d8-9577-00745ed4d261"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7b2843b0-51bf-41cd-8c12-26c395f81b65",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7b2843b0-51bf-41cd-8c12-26c395f81b65"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "01cd3aab-9ef6-48ff-888e-48980e408fbc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "01cd3aab-9ef6-48ff-888e-48980e408fbc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5c1ac293-82a1-4c1a-b10f-c61f14196e5e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5c1ac293-82a1-4c1a-b10f-c61f14196e5e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bb2a2264-4c48-4d35-96ee-22b67e51c7c3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bb2a2264-4c48-4d35-96ee-22b67e51c7c3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "872886ca-ebb1-4207-bc82-776f95b1ea44",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "872886ca-ebb1-4207-bc82-776f95b1ea44"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5c07118c-2b73-4e28-947b-c73c0e82d794",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5c07118c-2b73-4e28-947b-c73c0e82d794"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c04568d7-577a-42d6-afce-66864c627eea",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c04568d7-577a-42d6-afce-66864c627eea"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "655a6cc3-bdbf-4778-9c88-6bbc1d04ceb9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "655a6cc3-bdbf-4778-9c88-6bbc1d04ceb9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d1bdd41e-ccc2-49f5-8e2e-512b64dc2ceb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d1bdd41e-ccc2-49f5-8e2e-512b64dc2ceb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5ecdaa3f-1a91-4b61-a9d0-61fbb690a1c2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5ecdaa3f-1a91-4b61-a9d0-61fbb690a1c2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8af4897a-e7ae-46f8-a9da-2be982ad71b6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8af4897a-e7ae-46f8-a9da-2be982ad71b6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c2d18eae-8e32-4f66-bd6d-0db91382991e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c2d18eae-8e32-4f66-bd6d-0db91382991e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7717fec8-7d93-45c1-a40d-3180e76de8d6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7717fec8-7d93-45c1-a40d-3180e76de8d6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2d84cea-c035-4770-bc72-a7c10c1f3141",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2d84cea-c035-4770-bc72-a7c10c1f3141"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8a0c3ca4-cd2a-452e-b760-47af2ef381b8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8a0c3ca4-cd2a-452e-b760-47af2ef381b8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "598bf862-2fc5-41a0-bc8e-be29d9a73550",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "598bf862-2fc5-41a0-bc8e-be29d9a73550"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7e996be1-3846-4e56-aaf7-e931ff887edc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7e996be1-3846-4e56-aaf7-e931ff887edc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9f338da3-a87d-4118-8d46-606ea70a47bf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9f338da3-a87d-4118-8d46-606ea70a47bf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "78815247-39af-49e2-9760-d874567e3bdc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "78815247-39af-49e2-9760-d874567e3bdc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8ab971da-00d9-40fb-82d3-e6a583402159",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8ab971da-00d9-40fb-82d3-e6a583402159"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b253521a-ec8e-4195-ad2c-8a209990bda9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b253521a-ec8e-4195-ad2c-8a209990bda9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d028e03f-ea93-4c45-bc5f-481fd0f373d7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d028e03f-ea93-4c45-bc5f-481fd0f373d7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4d5adbd0-710e-40c9-a8d5-cc70f9c17c39",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4d5adbd0-710e-40c9-a8d5-cc70f9c17c39"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "349e303d-76dc-46b6-9597-3611423fb235",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "349e303d-76dc-46b6-9597-3611423fb235"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0283b26b-cbf2-42b8-9315-a18cf9120055",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0283b26b-cbf2-42b8-9315-a18cf9120055"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "950f26f1-f7bd-4be5-b264-09524c13592a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "950f26f1-f7bd-4be5-b264-09524c13592a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ad0c5978-0e9b-4641-b66b-de0ab5c4ccaa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ad0c5978-0e9b-4641-b66b-de0ab5c4ccaa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9357f572-9f3d-4426-a3a3-cbfb38e5a864",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9357f572-9f3d-4426-a3a3-cbfb38e5a864"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d1b44fb4-2919-4eb0-8e16-61ee6403bd91",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d1b44fb4-2919-4eb0-8e16-61ee6403bd91"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d59fbe22-4c4f-4e63-bb75-f78c10899402",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d59fbe22-4c4f-4e63-bb75-f78c10899402"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a9a1fe36-fdab-40e3-9db1-d520f20d900b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a9a1fe36-fdab-40e3-9db1-d520f20d900b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "76de764f-c8c8-46a7-8616-b70bfea9b0be",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "76de764f-c8c8-46a7-8616-b70bfea9b0be"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "64052bce-012f-4b68-9599-fe0f1caccdf8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "64052bce-012f-4b68-9599-fe0f1caccdf8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f0ae431b-e272-4a4d-a2ea-25608ef6e0e8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f0ae431b-e272-4a4d-a2ea-25608ef6e0e8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "725c0d64-9980-46ed-b610-023f3a9aa1a9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "725c0d64-9980-46ed-b610-023f3a9aa1a9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "771b4f57-46df-48bb-8626-a3df8df7f13b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "771b4f57-46df-48bb-8626-a3df8df7f13b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "57e8eb5d-6120-4409-9bcd-7b3d5d37aa03",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "57e8eb5d-6120-4409-9bcd-7b3d5d37aa03"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "feb96296-e46f-4725-83c5-fe524be55ced",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "feb96296-e46f-4725-83c5-fe524be55ced"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b86ff791-4519-497d-8475-4bf45f14779f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b86ff791-4519-497d-8475-4bf45f14779f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5e5adfa8-5e23-4246-aac2-82e0c5ba54cc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5e5adfa8-5e23-4246-aac2-82e0c5ba54cc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2107978d-76f7-44f3-896c-d71d8f102d1b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2107978d-76f7-44f3-896c-d71d8f102d1b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d843cbc7-8030-43cf-95e2-605a9fed5ac8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d843cbc7-8030-43cf-95e2-605a9fed5ac8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bbc99a9f-756c-4aac-af60-4c23ef8072dd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bbc99a9f-756c-4aac-af60-4c23ef8072dd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5f9f61b6-4d70-4bc8-89a8-97de5a52287c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5f9f61b6-4d70-4bc8-89a8-97de5a52287c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8103a3ab-bd38-4830-a5e2-f90b9c662b38",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8103a3ab-bd38-4830-a5e2-f90b9c662b38"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ca851287-a3df-4b86-9d7b-c3932e9339bd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ca851287-a3df-4b86-9d7b-c3932e9339bd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "89b10895-1dea-4f9d-8a08-e8723186cd6e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "89b10895-1dea-4f9d-8a08-e8723186cd6e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5fca5408-0d2f-406c-bca9-dd1ff82f7dcc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5fca5408-0d2f-406c-bca9-dd1ff82f7dcc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "89bc4d12-fd5b-4bcd-8f05-0a7d69d0c20b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "89bc4d12-fd5b-4bcd-8f05-0a7d69d0c20b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4ea34083-69f9-4524-8f14-cfdf9adffd44",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4ea34083-69f9-4524-8f14-cfdf9adffd44"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5770c92c-bf43-41b6-b3ec-30f1321b531b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5770c92c-bf43-41b6-b3ec-30f1321b531b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "51e6d6c2-b427-4629-bd86-658d72d0577c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "51e6d6c2-b427-4629-bd86-658d72d0577c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0f1c08bb-cdd9-46a0-9252-c1202cdfb39f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0f1c08bb-cdd9-46a0-9252-c1202cdfb39f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e737bbf4-79b5-4bce-9858-5f4cd8a9a47b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e737bbf4-79b5-4bce-9858-5f4cd8a9a47b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4760f057-bb71-43f1-b250-7315d1590acf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4760f057-bb71-43f1-b250-7315d1590acf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3c6bf3d4-408e-4173-a618-ea4f11e0493b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3c6bf3d4-408e-4173-a618-ea4f11e0493b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d0aac864-6bd2-4769-866e-f0ed2a02d0b3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d0aac864-6bd2-4769-866e-f0ed2a02d0b3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3509f0e6-0448-4cbc-9137-4d510f5a3c64",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3509f0e6-0448-4cbc-9137-4d510f5a3c64"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2a1bca0c-cd6e-455a-ae6f-99da3efa5f29",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2a1bca0c-cd6e-455a-ae6f-99da3efa5f29"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d9b4ed39-041e-4c96-b5c8-02098dcac4a1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d9b4ed39-041e-4c96-b5c8-02098dcac4a1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6126da88-5d60-4494-8336-774d21651bb7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6126da88-5d60-4494-8336-774d21651bb7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7a2cf591-a0d4-4b91-92fb-21eb4d7cd1e7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7a2cf591-a0d4-4b91-92fb-21eb4d7cd1e7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3591e46a-d882-4ae3-ad22-5efa997d981c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3591e46a-d882-4ae3-ad22-5efa997d981c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "251af96e-e01b-478d-b1e1-9870ef576744",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "251af96e-e01b-478d-b1e1-9870ef576744"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6fec2f9c-9b3e-4072-a0c4-a5649df4a357",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6fec2f9c-9b3e-4072-a0c4-a5649df4a357"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "617a758e-c5d9-4d61-9707-b20672ffba51",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "617a758e-c5d9-4d61-9707-b20672ffba51"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4cecfa8f-4d4e-4bf5-97c4-255f01bcf3d5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4cecfa8f-4d4e-4bf5-97c4-255f01bcf3d5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b69c8586-a59f-4bce-b7a0-b40866a62a91",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b69c8586-a59f-4bce-b7a0-b40866a62a91"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1e9c08d4-f612-4ad4-ae53-db23c359cc22",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1e9c08d4-f612-4ad4-ae53-db23c359cc22"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "03381690-95ba-49c0-97f5-a926ca325247",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "03381690-95ba-49c0-97f5-a926ca325247"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5292e133-7f4e-455e-89bd-9d8a993d2d4f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5292e133-7f4e-455e-89bd-9d8a993d2d4f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9e3b45f7-700a-460a-8046-c30f3ca6a2af",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9e3b45f7-700a-460a-8046-c30f3ca6a2af"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "68dfcc27-236a-4ae3-8b06-7741afe583f3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "68dfcc27-236a-4ae3-8b06-7741afe583f3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "978c6f42-9ea1-447e-a842-b35e5ae4011a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "978c6f42-9ea1-447e-a842-b35e5ae4011a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7f998211-59b8-4479-a221-19d77d0df04d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7f998211-59b8-4479-a221-19d77d0df04d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "187ccd6c-0a33-46f8-be6d-1bfba5d7bcc7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "187ccd6c-0a33-46f8-be6d-1bfba5d7bcc7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "91746793-fc7a-4453-8174-78d0d0cb14aa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "91746793-fc7a-4453-8174-78d0d0cb14aa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "79f52dcc-9f2d-4a69-af33-96d2538b20ab",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "79f52dcc-9f2d-4a69-af33-96d2538b20ab"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ebe4b3d8-6d7f-4b3f-9b04-56d305f10c42",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ebe4b3d8-6d7f-4b3f-9b04-56d305f10c42"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2fbbed6f-c916-4db3-b90b-8f7cb6909c1c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2fbbed6f-c916-4db3-b90b-8f7cb6909c1c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f75ca7be-f5f3-44bd-aeb1-47e48ca745b4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f75ca7be-f5f3-44bd-aeb1-47e48ca745b4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ed8c04e2-b5fb-4117-88be-fafd9b6a077a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ed8c04e2-b5fb-4117-88be-fafd9b6a077a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a5244de6-bb64-4cd3-b784-9f03fa251c11",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a5244de6-bb64-4cd3-b784-9f03fa251c11"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "60b46ac7-7f2e-4291-ba98-f7ce06199980",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "60b46ac7-7f2e-4291-ba98-f7ce06199980"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ed959d5b-6f71-466f-9917-7b45e846bc60",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ed959d5b-6f71-466f-9917-7b45e846bc60"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "02cf0c23-fe4d-4da2-8858-84ae828ed5c7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "02cf0c23-fe4d-4da2-8858-84ae828ed5c7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "28c6d417-c6d1-4de4-ab10-5c0d14f25ba1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "28c6d417-c6d1-4de4-ab10-5c0d14f25ba1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "54ab225c-f2b4-4a4c-b81b-d091d533664b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "54ab225c-f2b4-4a4c-b81b-d091d533664b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "983f71da-8fec-4c81-8b57-819ec86425ef",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "983f71da-8fec-4c81-8b57-819ec86425ef"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1e0bc195-02ff-4e1f-96c1-24a237c06374",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1e0bc195-02ff-4e1f-96c1-24a237c06374"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "56a837fb-e79b-4345-b412-cebe1282fb21",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "56a837fb-e79b-4345-b412-cebe1282fb21"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9857fbd5-aa60-42cc-9acd-e695d58a3132",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9857fbd5-aa60-42cc-9acd-e695d58a3132"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "920a04f4-cb56-4161-908c-ab9d951ee07f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "920a04f4-cb56-4161-908c-ab9d951ee07f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ff95a00b-0237-459d-b334-94362ce9c3a2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ff95a00b-0237-459d-b334-94362ce9c3a2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ff71b648-1f42-4183-82aa-4fcdeca5daaf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ff71b648-1f42-4183-82aa-4fcdeca5daaf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7c12e78c-d17a-4942-8069-689d3b88a460",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7c12e78c-d17a-4942-8069-689d3b88a460"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "287505ae-c0df-4196-9eb2-0dc75fa47039",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "287505ae-c0df-4196-9eb2-0dc75fa47039"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ca17e066-5db4-4c8e-a897-0230608acd75",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ca17e066-5db4-4c8e-a897-0230608acd75"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "42eadaab-a019-462f-a26e-d7ce5fa4673a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "42eadaab-a019-462f-a26e-d7ce5fa4673a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f800f4f2-d387-4764-b0ac-d277d9a969e1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f800f4f2-d387-4764-b0ac-d277d9a969e1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "059e2a24-9efe-4cc8-835e-9efdb8b079fc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "059e2a24-9efe-4cc8-835e-9efdb8b079fc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "559880d7-4f1e-44ff-a60c-660b997b5656",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "559880d7-4f1e-44ff-a60c-660b997b5656"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "44f7d4c9-11ef-4f95-be86-3a881579eaf2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "44f7d4c9-11ef-4f95-be86-3a881579eaf2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fbdedc29-9aa8-47d1-b29d-a86c8c0c4a9b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fbdedc29-9aa8-47d1-b29d-a86c8c0c4a9b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0a226ff6-4bbc-4ec1-979a-83f562746426",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0a226ff6-4bbc-4ec1-979a-83f562746426"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8b22b262-115e-4a80-9f74-ce319fdc6206",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8b22b262-115e-4a80-9f74-ce319fdc6206"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b59abd75-38a7-470f-806f-2162b79d9881",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b59abd75-38a7-470f-806f-2162b79d9881"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b4c002fd-aa22-4f51-8092-bb63f30e516a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b4c002fd-aa22-4f51-8092-bb63f30e516a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6425a44a-249f-4a08-94ad-b3b79c92aadf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6425a44a-249f-4a08-94ad-b3b79c92aadf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d35befd2-8031-4c71-8891-d36ce59c2db4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d35befd2-8031-4c71-8891-d36ce59c2db4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5a969d1f-b200-4c7b-ba71-c9a759b5d1c8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5a969d1f-b200-4c7b-ba71-c9a759b5d1c8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "da745156-462c-4911-8540-fc199cb4b86c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "da745156-462c-4911-8540-fc199cb4b86c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6997b8a4-25f4-4f3f-b5bc-61b524988773",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6997b8a4-25f4-4f3f-b5bc-61b524988773"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3bd817e5-eb3b-4cb4-bbc0-6a2b7f692b3f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3bd817e5-eb3b-4cb4-bbc0-6a2b7f692b3f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ce487a23-db1c-4dc7-b2f5-3235837c0383",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ce487a23-db1c-4dc7-b2f5-3235837c0383"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c9d9b6cb-f121-4d63-83b4-88fa9b606c9f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c9d9b6cb-f121-4d63-83b4-88fa9b606c9f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fbe5b7bc-5ce6-4743-9913-022077e98aa5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fbe5b7bc-5ce6-4743-9913-022077e98aa5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4acbba72-6d67-4196-a4a2-e04663e7ef05",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4acbba72-6d67-4196-a4a2-e04663e7ef05"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4f533f99-5e8f-4ce7-8efc-6481279bdcec",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4f533f99-5e8f-4ce7-8efc-6481279bdcec"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "161473c8-d0d8-4c76-8d9f-0ede3e53881b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "161473c8-d0d8-4c76-8d9f-0ede3e53881b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1ceb5688-322d-4d85-8822-44751dbbe101",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1ceb5688-322d-4d85-8822-44751dbbe101"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4225f41c-8ade-422f-8db4-cf87c801839e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4225f41c-8ade-422f-8db4-cf87c801839e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cabdc207-1861-4967-bb59-390d150c91bf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cabdc207-1861-4967-bb59-390d150c91bf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "666a9337-53ca-429a-b43d-4a4265057ff6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "666a9337-53ca-429a-b43d-4a4265057ff6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ee3cc707-92bd-4b55-83b8-8cbbcd266824",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ee3cc707-92bd-4b55-83b8-8cbbcd266824"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d294d5f7-04cf-43b4-9fb0-beb2e93f2043",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d294d5f7-04cf-43b4-9fb0-beb2e93f2043"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1656c44c-9b60-484b-94b8-ecceb1c96028",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1656c44c-9b60-484b-94b8-ecceb1c96028"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9c10796e-04bb-49da-ad33-7f06d11d35b1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9c10796e-04bb-49da-ad33-7f06d11d35b1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9b0342a9-56c6-49d5-bf55-65afeec117cd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9b0342a9-56c6-49d5-bf55-65afeec117cd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b85f54e8-004c-4262-acb0-dd93723b4ef2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b85f54e8-004c-4262-acb0-dd93723b4ef2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "328886d8-140a-488e-91dc-e71a06f21eb1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "328886d8-140a-488e-91dc-e71a06f21eb1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7f091085-7f75-4198-8c1e-1348da1478d6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7f091085-7f75-4198-8c1e-1348da1478d6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c218d0e2-70e7-4dd3-9b2c-0550afd06ca8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c218d0e2-70e7-4dd3-9b2c-0550afd06ca8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "034ab773-513d-4645-9420-e82ba56724f7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "034ab773-513d-4645-9420-e82ba56724f7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "25edcbf7-8e35-4ef2-a0a2-5545d3165188",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "25edcbf7-8e35-4ef2-a0a2-5545d3165188"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "758cf409-57af-4136-bd40-967fe5e87fe7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "758cf409-57af-4136-bd40-967fe5e87fe7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8b230647-4d95-42f2-b6c5-33f1e5f4d312",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8b230647-4d95-42f2-b6c5-33f1e5f4d312"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "41928a57-9e62-4952-8271-fe05b834d0b5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "41928a57-9e62-4952-8271-fe05b834d0b5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7699bc41-580c-4db2-bdba-e07b3bf53c37",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7699bc41-580c-4db2-bdba-e07b3bf53c37"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0f5814bc-2fcd-49c2-bddf-e6e4bb99abb5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0f5814bc-2fcd-49c2-bddf-e6e4bb99abb5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "52882a01-3ac2-4472-b895-2ea2e9709e34",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "52882a01-3ac2-4472-b895-2ea2e9709e34"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "30c68eb6-c2ee-4c0f-b0ac-99356233c616",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "30c68eb6-c2ee-4c0f-b0ac-99356233c616"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f2cfb3a4-5384-49d3-9a48-e96b83352727",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f2cfb3a4-5384-49d3-9a48-e96b83352727"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9f8bb789-bc94-4c6d-9e73-916d4df56f3a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9f8bb789-bc94-4c6d-9e73-916d4df56f3a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "06baad7d-8abc-4e20-ac2d-15d700f97e25",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "06baad7d-8abc-4e20-ac2d-15d700f97e25"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "40460a9c-5f3f-46fd-b974-44ae991992d7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "40460a9c-5f3f-46fd-b974-44ae991992d7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fc8ad04f-bde8-4ecd-93de-1c236f62b067",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fc8ad04f-bde8-4ecd-93de-1c236f62b067"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f5fa628-08a4-4170-a590-7d03b447e99a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f5fa628-08a4-4170-a590-7d03b447e99a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "85b541eb-47d1-4102-9d61-31a04be279ad",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "85b541eb-47d1-4102-9d61-31a04be279ad"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c6682959-4b30-46de-b0f8-ae2d9f883f3d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c6682959-4b30-46de-b0f8-ae2d9f883f3d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d006838c-7381-422a-9e70-7789a75f5d86",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d006838c-7381-422a-9e70-7789a75f5d86"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1ce09a0a-f18a-4a93-8acb-ae47d6d590a7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1ce09a0a-f18a-4a93-8acb-ae47d6d590a7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "416fd98e-7f2c-4bb1-8ce6-22a03f800037",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "416fd98e-7f2c-4bb1-8ce6-22a03f800037"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ad30c230-c7ad-444c-9ef1-7ab194a677d7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ad30c230-c7ad-444c-9ef1-7ab194a677d7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fb479847-0c2f-4ef8-b4cf-e374d19987d8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fb479847-0c2f-4ef8-b4cf-e374d19987d8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4c6af877-75f8-4f88-8a7b-f98b1c3abcdc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4c6af877-75f8-4f88-8a7b-f98b1c3abcdc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fb571f76-73c3-45e2-837a-8b92c3fb2a1f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fb571f76-73c3-45e2-837a-8b92c3fb2a1f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "78c76de8-da6d-4160-9407-7e6bf1b4594a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "78c76de8-da6d-4160-9407-7e6bf1b4594a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7799bae6-f459-4b77-a9e6-d1e8ff1aca58",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7799bae6-f459-4b77-a9e6-d1e8ff1aca58"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f25b3021-1027-473f-b1d1-815d4608e601",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f25b3021-1027-473f-b1d1-815d4608e601"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3a772961-c94f-48f4-970e-26dfccffc1d3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3a772961-c94f-48f4-970e-26dfccffc1d3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "723c72b0-6eff-4191-8daf-5ca44c482bfb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "723c72b0-6eff-4191-8daf-5ca44c482bfb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "151b352d-056c-4885-b1ff-aec6f3af75f8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "151b352d-056c-4885-b1ff-aec6f3af75f8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "818b2172-bab2-4460-813d-d08afa6ad1f1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "818b2172-bab2-4460-813d-d08afa6ad1f1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "426ee469-85f8-4e15-b204-8542c45cd886",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "426ee469-85f8-4e15-b204-8542c45cd886"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "84b80641-3f0d-4e0f-9082-0bbb1a635e6b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "84b80641-3f0d-4e0f-9082-0bbb1a635e6b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "91655795-2203-471e-8814-6773aa14a8d3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "91655795-2203-471e-8814-6773aa14a8d3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7adebc13-8d9a-4c60-855e-1918791c953a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7adebc13-8d9a-4c60-855e-1918791c953a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "80a65ffa-9af5-4c35-9fbb-c6325301f6b8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "80a65ffa-9af5-4c35-9fbb-c6325301f6b8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4f2b1799-76f5-45db-80b1-9552b9795b7a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4f2b1799-76f5-45db-80b1-9552b9795b7a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "680575dc-930c-427a-a6db-3c0a69731dff",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "680575dc-930c-427a-a6db-3c0a69731dff"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bc584801-6811-4a0a-9d50-b55f67c5e27a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bc584801-6811-4a0a-9d50-b55f67c5e27a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5ad488c4-2496-463b-ba23-12ccf08b16a4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5ad488c4-2496-463b-ba23-12ccf08b16a4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9dc2efb3-01ef-4621-afb3-da6774f79254",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9dc2efb3-01ef-4621-afb3-da6774f79254"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "283f09f0-e6f1-44cb-ada4-cdd3d764fcee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "283f09f0-e6f1-44cb-ada4-cdd3d764fcee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "75a0a6a2-77ca-4920-94b1-88c203bb77df",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "75a0a6a2-77ca-4920-94b1-88c203bb77df"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "15ad5241-319e-47df-856a-b42b23a4c41a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "15ad5241-319e-47df-856a-b42b23a4c41a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f6f63e42-572a-4a07-b215-739878923b72",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f6f63e42-572a-4a07-b215-739878923b72"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1f106c82-cd85-42c1-83fc-4b8ea1fc069a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1f106c82-cd85-42c1-83fc-4b8ea1fc069a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6251658b-258e-43d0-8b08-97529eb6345b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6251658b-258e-43d0-8b08-97529eb6345b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "54b8bad6-d919-421f-8f9f-dc7f5d0d91ce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "54b8bad6-d919-421f-8f9f-dc7f5d0d91ce"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8c7a41b5-3cd7-4ff7-968d-e51a2fe1f335",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8c7a41b5-3cd7-4ff7-968d-e51a2fe1f335"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1614e437-04e5-4500-8a2c-3ba310daf1a3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1614e437-04e5-4500-8a2c-3ba310daf1a3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "257c63d6-20ab-404f-a326-7f24d34988bb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "257c63d6-20ab-404f-a326-7f24d34988bb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "84522bd1-27e3-4c0c-afd5-b69a8f63e811",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "84522bd1-27e3-4c0c-afd5-b69a8f63e811"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e9a37d7d-5283-4a56-8f19-b12a37d6bd80",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e9a37d7d-5283-4a56-8f19-b12a37d6bd80"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "edc74124-2ca2-43c3-80ae-faf33d0441bd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "edc74124-2ca2-43c3-80ae-faf33d0441bd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "62414f0f-b75b-4441-8649-3619b4096913",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "62414f0f-b75b-4441-8649-3619b4096913"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4f11a7e5-9844-4f73-bf55-61db3d2181f3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4f11a7e5-9844-4f73-bf55-61db3d2181f3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d0584713-4b5b-42bd-a9c0-a0297a45c247",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d0584713-4b5b-42bd-a9c0-a0297a45c247"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1a88ef4d-3044-4939-9744-5acc8b315ffc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1a88ef4d-3044-4939-9744-5acc8b315ffc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "007fcd1d-5b8a-40be-8dd9-776659159cda",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "007fcd1d-5b8a-40be-8dd9-776659159cda"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "587af98d-3944-447a-9f1d-0b604cbf5553",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "587af98d-3944-447a-9f1d-0b604cbf5553"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "84f2f8cc-1e54-4e82-b1b4-736b5fed851a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "84f2f8cc-1e54-4e82-b1b4-736b5fed851a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "94130150-ee4d-47d6-a0b8-a178395281ea",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "94130150-ee4d-47d6-a0b8-a178395281ea"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "389e0d51-00b0-4383-a3b3-ce8a1e414cb4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "389e0d51-00b0-4383-a3b3-ce8a1e414cb4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fba0d425-7310-49b2-860e-c9aaa70f9809",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fba0d425-7310-49b2-860e-c9aaa70f9809"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bcacae93-6004-4af7-9189-b597578d9b9c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bcacae93-6004-4af7-9189-b597578d9b9c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d16c8007-c30a-4978-9c23-79d78fb4913c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d16c8007-c30a-4978-9c23-79d78fb4913c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "63f9126f-2353-40d7-b72d-b5251c5b814a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "63f9126f-2353-40d7-b72d-b5251c5b814a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "faecb6e9-60c2-4553-81c1-d3640ba6ebcb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "faecb6e9-60c2-4553-81c1-d3640ba6ebcb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "48082577-9895-4056-88d7-17ae3ca52003",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "48082577-9895-4056-88d7-17ae3ca52003"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f08134a-309d-40ce-bd34-7c7bbe60840a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f08134a-309d-40ce-bd34-7c7bbe60840a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3dbbb5fc-3790-4db1-b2b7-938b96d44e96",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3dbbb5fc-3790-4db1-b2b7-938b96d44e96"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bfa72663-2b2b-49b0-819e-ab696aa11ec1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bfa72663-2b2b-49b0-819e-ab696aa11ec1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5585d763-e4c0-4d3e-82e5-5841eb4b81ca",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5585d763-e4c0-4d3e-82e5-5841eb4b81ca"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4a77356f-5c7e-4b78-a1bb-041bbe41b888",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4a77356f-5c7e-4b78-a1bb-041bbe41b888"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9d7f8a00-1140-4a81-a0bf-58908e04ad45",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9d7f8a00-1140-4a81-a0bf-58908e04ad45"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9c833518-31ac-4f41-bee0-c373eb4932ec",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9c833518-31ac-4f41-bee0-c373eb4932ec"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "928f1451-7e86-48a1-86d0-44de8fba3152",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "928f1451-7e86-48a1-86d0-44de8fba3152"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b1453a60-0c6c-4240-a2dd-18f891285828",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b1453a60-0c6c-4240-a2dd-18f891285828"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c9afb489-90a6-4a7e-8018-b402e82efe43",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c9afb489-90a6-4a7e-8018-b402e82efe43"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eb215379-55cf-4e2c-bf75-decbc82610db",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eb215379-55cf-4e2c-bf75-decbc82610db"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9e17b907-3d08-49f0-a086-80f64e9fcd12",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9e17b907-3d08-49f0-a086-80f64e9fcd12"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a2cf806f-4e94-4823-b515-e93f2bef6f34",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a2cf806f-4e94-4823-b515-e93f2bef6f34"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2114cc6d-7f1e-49d5-a40b-e24c6a3989de",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2114cc6d-7f1e-49d5-a40b-e24c6a3989de"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "71cde356-2661-48e3-92db-645de65f9120",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "71cde356-2661-48e3-92db-645de65f9120"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0529e6f7-a6ed-4272-ae93-c07215274bd6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0529e6f7-a6ed-4272-ae93-c07215274bd6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b9a98e35-9249-42d2-a445-f7ec7049f148",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b9a98e35-9249-42d2-a445-f7ec7049f148"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "24d9e000-bf24-492c-89a9-1ec9edc9da1d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "24d9e000-bf24-492c-89a9-1ec9edc9da1d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "81928aa0-6f8e-476b-b5a9-a4f1015fa9fd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "81928aa0-6f8e-476b-b5a9-a4f1015fa9fd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d6262290-f530-4c01-909e-e94cfeb9dd97",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d6262290-f530-4c01-909e-e94cfeb9dd97"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "643026a1-5d5a-4351-a3da-8580d6cbb766",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "643026a1-5d5a-4351-a3da-8580d6cbb766"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9ef1f0a5-8dca-4c9b-a9ab-9756237dffa1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9ef1f0a5-8dca-4c9b-a9ab-9756237dffa1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0adf239f-92de-4e8a-ad73-b8ed45934a12",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0adf239f-92de-4e8a-ad73-b8ed45934a12"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "67beda17-c357-47eb-b3f2-ba36514ad282",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "67beda17-c357-47eb-b3f2-ba36514ad282"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "735cd16a-7ee6-4685-b0c8-13fd187f4470",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "735cd16a-7ee6-4685-b0c8-13fd187f4470"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b364e22a-d125-4d09-aa15-975a98fa6ad7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b364e22a-d125-4d09-aa15-975a98fa6ad7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a09af0e2-3160-4802-be66-af55929e163f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a09af0e2-3160-4802-be66-af55929e163f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2ea857d6-f440-4160-a6bd-4544901b6a1f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2ea857d6-f440-4160-a6bd-4544901b6a1f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8961e662-4af7-49a9-887f-0ae0fde6b38b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8961e662-4af7-49a9-887f-0ae0fde6b38b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9a37d61a-5fc9-4fb0-8bcd-bdcaeaff7f67",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9a37d61a-5fc9-4fb0-8bcd-bdcaeaff7f67"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "799c0dcc-9771-43a5-b549-1e73900341e1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "799c0dcc-9771-43a5-b549-1e73900341e1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f09c8de3-2c02-43f9-923d-5e4ca379114a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f09c8de3-2c02-43f9-923d-5e4ca379114a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ccedc4a8-88f7-483f-bc66-a54e3f220610",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ccedc4a8-88f7-483f-bc66-a54e3f220610"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "78de8768-3cb3-477c-9191-ddf8f8db2956",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "78de8768-3cb3-477c-9191-ddf8f8db2956"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9b43b1e1-cc24-4149-aad8-796d7430bd48",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9b43b1e1-cc24-4149-aad8-796d7430bd48"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2dd3cba0-fe8c-453c-bfd4-b073441fe2e6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2dd3cba0-fe8c-453c-bfd4-b073441fe2e6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fa797ac9-7a7e-4cad-8855-541df0932415",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fa797ac9-7a7e-4cad-8855-541df0932415"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "746c08e4-6e3f-4485-9f6f-9dab1fa1951f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "746c08e4-6e3f-4485-9f6f-9dab1fa1951f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "62e069d0-6887-488b-b121-1eb6785632f3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "62e069d0-6887-488b-b121-1eb6785632f3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "51e40175-a4c7-4840-9541-c1ec8c671b04",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "51e40175-a4c7-4840-9541-c1ec8c671b04"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e3878084-ab5a-4e69-a1b1-e2b661764905",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e3878084-ab5a-4e69-a1b1-e2b661764905"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6ac864ef-8567-48b6-9370-7e28a46c4a0d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6ac864ef-8567-48b6-9370-7e28a46c4a0d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2e984a56-7970-4b6d-945d-4c6e51d750ad",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2e984a56-7970-4b6d-945d-4c6e51d750ad"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4b99bb4e-6b3e-432a-8acc-6c6c52375b40",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4b99bb4e-6b3e-432a-8acc-6c6c52375b40"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3c97c3de-442e-4957-987b-d4dfb426c0bf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3c97c3de-442e-4957-987b-d4dfb426c0bf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0b3d7c2d-6cb1-4809-ba96-c84fb194f03e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0b3d7c2d-6cb1-4809-ba96-c84fb194f03e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b800ae03-5b3e-49f2-bdf3-ae02629017da",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b800ae03-5b3e-49f2-bdf3-ae02629017da"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bb509a86-7464-4807-943a-c3ae6c3591c2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bb509a86-7464-4807-943a-c3ae6c3591c2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1428898e-57e9-4ada-abcb-633973d37471",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1428898e-57e9-4ada-abcb-633973d37471"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8a061080-d6c5-4b31-bf64-24192ff70f4c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8a061080-d6c5-4b31-bf64-24192ff70f4c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7c34d04a-aa9c-4764-be86-e8ae8d4f9a2b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7c34d04a-aa9c-4764-be86-e8ae8d4f9a2b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2f535a86-4963-4a85-8e06-1f9250142053",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2f535a86-4963-4a85-8e06-1f9250142053"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "34eb091d-653e-40db-81a8-3fff6774ce6a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "34eb091d-653e-40db-81a8-3fff6774ce6a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1cba9cbb-d93f-4ea6-829b-28538e8c639a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1cba9cbb-d93f-4ea6-829b-28538e8c639a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b6d5fb71-e320-412f-984e-899ca1528214",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b6d5fb71-e320-412f-984e-899ca1528214"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "04589848-3497-4801-8741-5e7cb34a2cb7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "04589848-3497-4801-8741-5e7cb34a2cb7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c9c28d43-811e-450f-81c4-c01be9053ff9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c9c28d43-811e-450f-81c4-c01be9053ff9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bbf578c7-34ed-4fe2-ad3d-5ffc88ed7917",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bbf578c7-34ed-4fe2-ad3d-5ffc88ed7917"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bb3fe390-b283-4f6e-8e18-55edd7da617f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bb3fe390-b283-4f6e-8e18-55edd7da617f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ffcd60f8-d2e2-4092-a68f-6ed1c1dde915",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ffcd60f8-d2e2-4092-a68f-6ed1c1dde915"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7f37cf42-72bc-4dd1-bf5a-a79b3dc0fc7b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7f37cf42-72bc-4dd1-bf5a-a79b3dc0fc7b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3810a584-bfb8-414f-ab57-f74c46c5fba7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3810a584-bfb8-414f-ab57-f74c46c5fba7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "706a86ca-0317-4d87-9cab-8f023dfbf3a4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "706a86ca-0317-4d87-9cab-8f023dfbf3a4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "76123ea7-74e5-40ae-8bfc-7bdb408afa9b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "76123ea7-74e5-40ae-8bfc-7bdb408afa9b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "63289dbc-38e1-44ff-9de5-079c78170af2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "63289dbc-38e1-44ff-9de5-079c78170af2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9ff485d5-7749-44eb-b6f9-49908686976c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9ff485d5-7749-44eb-b6f9-49908686976c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5e243a4d-71bc-494f-a46e-8a14599adc78",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5e243a4d-71bc-494f-a46e-8a14599adc78"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d6a95ceb-25a4-4596-82ca-3c36ea7faa5a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d6a95ceb-25a4-4596-82ca-3c36ea7faa5a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0fbe4584-a3d7-4637-8683-e7e64eaf7167",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0fbe4584-a3d7-4637-8683-e7e64eaf7167"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "df78bdb1-502c-490d-b0d0-67d041f4191a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "df78bdb1-502c-490d-b0d0-67d041f4191a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "90e7cda6-d123-44b7-8f62-0b304e42ba9d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "90e7cda6-d123-44b7-8f62-0b304e42ba9d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "65854d95-99cc-420a-ba36-071afa4e6da8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "65854d95-99cc-420a-ba36-071afa4e6da8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "747326af-5f25-4c41-81b9-48e6d7d6e4af",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "747326af-5f25-4c41-81b9-48e6d7d6e4af"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1a6c8079-1a52-4fdb-ba0f-a55a7a5d917b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1a6c8079-1a52-4fdb-ba0f-a55a7a5d917b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cbe75fad-a0db-4238-bb50-8a5fced66d1b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cbe75fad-a0db-4238-bb50-8a5fced66d1b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a42b5868-6140-4903-bcbd-1938e09d00bd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a42b5868-6140-4903-bcbd-1938e09d00bd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1cca7844-0e1f-482e-ae5a-dd020f354bf7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1cca7844-0e1f-482e-ae5a-dd020f354bf7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3c25fb14-2430-4582-8726-cdaee4affd4a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3c25fb14-2430-4582-8726-cdaee4affd4a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "19ef5b00-2de5-4661-a39f-76442e57d607",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "19ef5b00-2de5-4661-a39f-76442e57d607"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4b5a9e0f-fa4b-4e1c-a3b1-9a966af3c6cc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4b5a9e0f-fa4b-4e1c-a3b1-9a966af3c6cc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "46cb0908-c64f-4da0-a691-e92baaa24e23",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "46cb0908-c64f-4da0-a691-e92baaa24e23"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7fe15c53-a7c3-4aa9-9fec-e43903c9d809",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7fe15c53-a7c3-4aa9-9fec-e43903c9d809"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e1c91b0c-c161-4395-8821-1ba0502a2836",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e1c91b0c-c161-4395-8821-1ba0502a2836"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "76bbf0b7-0761-45a5-9d85-14e929af2b10",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "76bbf0b7-0761-45a5-9d85-14e929af2b10"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "33006ca6-7ce4-4a54-9330-1b70487c11ed",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "33006ca6-7ce4-4a54-9330-1b70487c11ed"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f3d17965-25b5-42ce-8a2d-6a41656ec339",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f3d17965-25b5-42ce-8a2d-6a41656ec339"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "752df165-bbab-48d3-bc52-5418f7f7875f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "752df165-bbab-48d3-bc52-5418f7f7875f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "59933d19-498c-4fd3-9c18-93882e73dabc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "59933d19-498c-4fd3-9c18-93882e73dabc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1994e13a-9e51-47a6-91a4-25cc40d6974a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1994e13a-9e51-47a6-91a4-25cc40d6974a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a1f82724-3127-4047-bece-c40f98d5ae0f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a1f82724-3127-4047-bece-c40f98d5ae0f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f589a54e-0f26-43ce-a2d6-366ad6df12bd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f589a54e-0f26-43ce-a2d6-366ad6df12bd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4b170d95-df7f-4d66-b371-80f333379ee4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4b170d95-df7f-4d66-b371-80f333379ee4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cc2cfe4a-78d6-463b-939e-a34d66425909",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cc2cfe4a-78d6-463b-939e-a34d66425909"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9f46a8ed-35f4-4e4e-85b5-58ed06c74501",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9f46a8ed-35f4-4e4e-85b5-58ed06c74501"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e541c928-4ead-4133-a99a-1bf10168aac0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e541c928-4ead-4133-a99a-1bf10168aac0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c407cce8-ea28-40f2-95aa-d7000963f8b9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c407cce8-ea28-40f2-95aa-d7000963f8b9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f641c6aa-bc25-43ee-877c-f3cd90d675e2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f641c6aa-bc25-43ee-877c-f3cd90d675e2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8aad9065-79bc-44d0-80f1-c90613b7ce31",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8aad9065-79bc-44d0-80f1-c90613b7ce31"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6072c016-a97d-46e7-b365-63437789d0fd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6072c016-a97d-46e7-b365-63437789d0fd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2c7e3ac6-bd24-48f0-8842-77aa12352a15",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2c7e3ac6-bd24-48f0-8842-77aa12352a15"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0ab1466c-a30e-46cd-9177-a0439ce5f3fe",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0ab1466c-a30e-46cd-9177-a0439ce5f3fe"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4974e5a3-cbb2-4023-b23a-946cbf604907",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4974e5a3-cbb2-4023-b23a-946cbf604907"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7c0fcbfd-c7e7-4553-8ded-a35d2e371b30",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7c0fcbfd-c7e7-4553-8ded-a35d2e371b30"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4479c6b1-fd15-443c-bd35-b6b44aea220c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4479c6b1-fd15-443c-bd35-b6b44aea220c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8cd3398b-34c2-4516-92e0-38ced76d6520",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8cd3398b-34c2-4516-92e0-38ced76d6520"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6ec336c7-4786-4101-beab-2501ffc72623",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6ec336c7-4786-4101-beab-2501ffc72623"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "293438df-f412-4e34-8584-4f0d61ace60b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "293438df-f412-4e34-8584-4f0d61ace60b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3c565394-7ed6-469c-9908-0f51aba23ad0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3c565394-7ed6-469c-9908-0f51aba23ad0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "49800e96-9a8c-456e-9357-c05a661907bc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "49800e96-9a8c-456e-9357-c05a661907bc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2eb8af09-8e24-4e1c-997e-7799a2d95087",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2eb8af09-8e24-4e1c-997e-7799a2d95087"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0c2daf37-a822-4837-b553-2fc45f99d94e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0c2daf37-a822-4837-b553-2fc45f99d94e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bf65b805-de17-4be2-9ad1-a94a92479a54",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bf65b805-de17-4be2-9ad1-a94a92479a54"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "afbd6a15-b667-4e76-acda-be13bcc16de3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "afbd6a15-b667-4e76-acda-be13bcc16de3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4ff8e8e2-3804-457e-84ab-888a1705522d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4ff8e8e2-3804-457e-84ab-888a1705522d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7e4534af-f803-437e-b1ba-83bc39adc21c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7e4534af-f803-437e-b1ba-83bc39adc21c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "28863646-54da-43ab-b2e0-37680e5161db",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "28863646-54da-43ab-b2e0-37680e5161db"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0bbd212a-d3c6-4ef9-9837-74038774d346",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0bbd212a-d3c6-4ef9-9837-74038774d346"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e919b42c-23bc-4bad-9aff-456adb60f984",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e919b42c-23bc-4bad-9aff-456adb60f984"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dab94958-fdda-474a-9a67-767d95fbf830",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dab94958-fdda-474a-9a67-767d95fbf830"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b8c1eaff-4353-4271-9e04-84f2bbc3684f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b8c1eaff-4353-4271-9e04-84f2bbc3684f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2c4ab913-186a-4f36-84cb-778d2afccdf1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2c4ab913-186a-4f36-84cb-778d2afccdf1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b63235a6-0048-4f01-b727-131abaa347de",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b63235a6-0048-4f01-b727-131abaa347de"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4c82ad16-fc8c-44d8-8cc8-6e43f2b59cf7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4c82ad16-fc8c-44d8-8cc8-6e43f2b59cf7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "31cca7e7-abf6-431a-939f-6f5673152a57",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "31cca7e7-abf6-431a-939f-6f5673152a57"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "722634b0-48f3-4f91-9085-3df7ac6f66b4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "722634b0-48f3-4f91-9085-3df7ac6f66b4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3bfcbb18-45c3-4a7c-891e-38340caa4517",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3bfcbb18-45c3-4a7c-891e-38340caa4517"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dc8f5064-77d5-42aa-80ee-85d59a709a1a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dc8f5064-77d5-42aa-80ee-85d59a709a1a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1ada5aa6-c3a2-4cbb-bad3-41c3816eb425",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1ada5aa6-c3a2-4cbb-bad3-41c3816eb425"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c18e43b3-e8b6-4832-a55a-f2e81064765e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c18e43b3-e8b6-4832-a55a-f2e81064765e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6887af30-cd67-4ff1-a632-bf469241bfdb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6887af30-cd67-4ff1-a632-bf469241bfdb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6ea58302-3641-47f0-aed3-cbc58aec1a42",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6ea58302-3641-47f0-aed3-cbc58aec1a42"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "50a05179-d3bc-423b-833b-3ab3965aaf56",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "50a05179-d3bc-423b-833b-3ab3965aaf56"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6a5a1a40-ee9e-49c2-b068-c61364ec5998",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6a5a1a40-ee9e-49c2-b068-c61364ec5998"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d9e7bdb2-fc9e-4d3d-8f7b-3b3adb01c544",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d9e7bdb2-fc9e-4d3d-8f7b-3b3adb01c544"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1d9ca70b-9bc5-491c-93e3-b0c3a6caf41f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1d9ca70b-9bc5-491c-93e3-b0c3a6caf41f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8056bd8d-3602-4d7d-b964-02280e6ee313",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8056bd8d-3602-4d7d-b964-02280e6ee313"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7577376a-76af-46a6-9d4c-1d3234abd9b9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7577376a-76af-46a6-9d4c-1d3234abd9b9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ee60c391-972d-4411-a86f-9a631f0c05c5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ee60c391-972d-4411-a86f-9a631f0c05c5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bf4108f0-865f-46bf-816f-92adf75a6fa2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bf4108f0-865f-46bf-816f-92adf75a6fa2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a0df2a94-b70f-420a-8e02-dd0328553230",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a0df2a94-b70f-420a-8e02-dd0328553230"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b1dce628-c354-442e-86c9-e9924fe31eef",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b1dce628-c354-442e-86c9-e9924fe31eef"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f8e4dfe8-7b39-433a-ba1f-a59ac01243b8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f8e4dfe8-7b39-433a-ba1f-a59ac01243b8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "665cc38b-467f-47d8-8ed0-f657a6680d6c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "665cc38b-467f-47d8-8ed0-f657a6680d6c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a3545a54-b88c-4b09-8cc0-78bbcce587a8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a3545a54-b88c-4b09-8cc0-78bbcce587a8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "16e8a5b7-6cd1-4838-b9e3-686281720408",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "16e8a5b7-6cd1-4838-b9e3-686281720408"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0642efb7-b19b-431c-8718-75b67ff63fc2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0642efb7-b19b-431c-8718-75b67ff63fc2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "15264158-17ca-434e-b61f-6d457575368f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "15264158-17ca-434e-b61f-6d457575368f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "16852c9d-6338-4e63-b75b-9996d55124a0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "16852c9d-6338-4e63-b75b-9996d55124a0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "16051736-5b76-4b6e-904d-ee486846f699",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "16051736-5b76-4b6e-904d-ee486846f699"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "571cc966-b778-49e2-9561-df9c63593f0b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "571cc966-b778-49e2-9561-df9c63593f0b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d1100ac2-cfb0-4beb-9983-d5ae20dc568d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d1100ac2-cfb0-4beb-9983-d5ae20dc568d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "78a888ad-f9d4-4ffc-9132-775efd52690b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "78a888ad-f9d4-4ffc-9132-775efd52690b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fa92bf3c-e7cc-4797-9b1b-8fc410f3adf2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fa92bf3c-e7cc-4797-9b1b-8fc410f3adf2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "991ef609-66e8-49ed-8058-bc2f6919408e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "991ef609-66e8-49ed-8058-bc2f6919408e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b75edf87-cd14-464d-8cde-b155daca9109",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b75edf87-cd14-464d-8cde-b155daca9109"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aaa4e9c8-dac8-4d93-84d1-dcc2dc8ed96a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aaa4e9c8-dac8-4d93-84d1-dcc2dc8ed96a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "04562767-4baf-49ad-aadf-11bf3eb483aa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "04562767-4baf-49ad-aadf-11bf3eb483aa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ba65520b-4af0-4b2c-afae-015c6464168e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ba65520b-4af0-4b2c-afae-015c6464168e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "94d254aa-2d62-4d66-b76c-68db2a73d0ca",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "94d254aa-2d62-4d66-b76c-68db2a73d0ca"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b8eb7bba-c23f-4435-bd4b-a0b33c16406b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b8eb7bba-c23f-4435-bd4b-a0b33c16406b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "265cc2fd-011d-4ed0-ade1-f330da0ebb41",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "265cc2fd-011d-4ed0-ade1-f330da0ebb41"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2eec6734-eb85-4159-90c0-cb68f1fe4d6b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2eec6734-eb85-4159-90c0-cb68f1fe4d6b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6b24bd25-c0a7-40e9-a866-f1861c6fb332",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6b24bd25-c0a7-40e9-a866-f1861c6fb332"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a2bb6e20-333f-4ff7-85cf-a532bd228205",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a2bb6e20-333f-4ff7-85cf-a532bd228205"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c5a2e84c-6594-4ebb-9114-2c59a67972d3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c5a2e84c-6594-4ebb-9114-2c59a67972d3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a2ea34a5-6932-4915-a104-6764bab5806f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a2ea34a5-6932-4915-a104-6764bab5806f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "414f2d0e-69f4-4068-8082-c4d39e0cfb7b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "414f2d0e-69f4-4068-8082-c4d39e0cfb7b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2824223e-7314-44e9-92f3-db002778298e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2824223e-7314-44e9-92f3-db002778298e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "84b8592d-cd22-4a4c-806f-b9e2cace5528",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "84b8592d-cd22-4a4c-806f-b9e2cace5528"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "16d28415-89c0-42e9-ab2e-21b81c834f97",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "16d28415-89c0-42e9-ab2e-21b81c834f97"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "75168fe7-234d-41ad-812a-d3c2ee7a9788",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "75168fe7-234d-41ad-812a-d3c2ee7a9788"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "750ff248-e13c-42a3-ad51-b1477a1606aa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "750ff248-e13c-42a3-ad51-b1477a1606aa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7e540d7b-6403-4ddf-8756-29fe12a4dc10",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7e540d7b-6403-4ddf-8756-29fe12a4dc10"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "29c99b7d-f327-4c3a-a8d7-8430474908de",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "29c99b7d-f327-4c3a-a8d7-8430474908de"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "db8d0550-af7e-4ecc-835a-32d8964bd22e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "db8d0550-af7e-4ecc-835a-32d8964bd22e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "579f6d8b-e1fe-4077-9454-8ea9abc4896b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "579f6d8b-e1fe-4077-9454-8ea9abc4896b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "31c9af40-139e-4655-b30e-fbe029ab6f2b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "31c9af40-139e-4655-b30e-fbe029ab6f2b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9e2556f3-3beb-4e33-9c4b-4de73ce09615",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9e2556f3-3beb-4e33-9c4b-4de73ce09615"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1b08c236-fcba-4cb2-984f-1f06ba9bb02a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1b08c236-fcba-4cb2-984f-1f06ba9bb02a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "08e58f62-6aae-4439-84ba-5f45576508f5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "08e58f62-6aae-4439-84ba-5f45576508f5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7e97e80a-a545-4c66-b2c0-8e0201973758",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7e97e80a-a545-4c66-b2c0-8e0201973758"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e6c80024-4242-4291-9a65-62fc0e5b03d4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e6c80024-4242-4291-9a65-62fc0e5b03d4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fbd2dc40-3c96-4535-8137-edc474b5763f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fbd2dc40-3c96-4535-8137-edc474b5763f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5897b694-9e78-439c-8d10-1275bf91bfb0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5897b694-9e78-439c-8d10-1275bf91bfb0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0bc79a4d-c26b-44b6-928f-8a4a12fad0ad",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0bc79a4d-c26b-44b6-928f-8a4a12fad0ad"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c17b4c89-7862-4545-b2d3-e6b675d60778",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c17b4c89-7862-4545-b2d3-e6b675d60778"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8eae9ca6-0dd5-4983-9546-1d4a327f43e0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8eae9ca6-0dd5-4983-9546-1d4a327f43e0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9bcd2b25-ef1e-42f1-90f5-498152894989",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9bcd2b25-ef1e-42f1-90f5-498152894989"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9a98676f-10e0-46be-acb7-a486788917df",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9a98676f-10e0-46be-acb7-a486788917df"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0ea3087d-d967-43ba-9c16-9d74368cad2e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0ea3087d-d967-43ba-9c16-9d74368cad2e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5df578ad-8c3b-4642-8f72-6a1d356657a1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5df578ad-8c3b-4642-8f72-6a1d356657a1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "461a68e8-a20c-42ec-b352-c3932ed2219f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "461a68e8-a20c-42ec-b352-c3932ed2219f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5547987b-a6c8-42f7-bcb3-0a966f4629e0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5547987b-a6c8-42f7-bcb3-0a966f4629e0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fb8b6bf4-16ad-4432-a843-8b3a5ce20de2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fb8b6bf4-16ad-4432-a843-8b3a5ce20de2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5dd96e65-d407-4a9c-bf94-5cd348f5ce07",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5dd96e65-d407-4a9c-bf94-5cd348f5ce07"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9179fa42-2f0e-4087-a7d5-5b009734d9a8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9179fa42-2f0e-4087-a7d5-5b009734d9a8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e906b6a1-8f36-4ba7-a9ca-22f6e175497f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e906b6a1-8f36-4ba7-a9ca-22f6e175497f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2dce4f7-fb00-4680-a4aa-40d754046567",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2dce4f7-fb00-4680-a4aa-40d754046567"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6947827e-ab81-43de-8ed8-77cb14aa567b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6947827e-ab81-43de-8ed8-77cb14aa567b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "949537e8-c567-4d54-94ee-a6fb90b87b6e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "949537e8-c567-4d54-94ee-a6fb90b87b6e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "de68a382-bc95-4cd6-8139-9ccd12dc614a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "de68a382-bc95-4cd6-8139-9ccd12dc614a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2fddabfd-979c-4c60-ac3d-29aebc81dbca",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2fddabfd-979c-4c60-ac3d-29aebc81dbca"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "562c90d6-d6e5-41ce-8f86-01b11c339e90",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "562c90d6-d6e5-41ce-8f86-01b11c339e90"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e986dded-d3b9-4cb1-a354-4fe8de54f721",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e986dded-d3b9-4cb1-a354-4fe8de54f721"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "efe488c3-6398-4442-a15c-db81d5f46df2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "efe488c3-6398-4442-a15c-db81d5f46df2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "499d5360-36d5-4faa-abf6-305608e75cf9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "499d5360-36d5-4faa-abf6-305608e75cf9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3c620604-32a3-4390-9700-3f7c8d6f2542",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3c620604-32a3-4390-9700-3f7c8d6f2542"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2249c8e2-a93a-450c-9013-e4ec873f12c7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2249c8e2-a93a-450c-9013-e4ec873f12c7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3cbbfeac-982f-4e8a-b24a-1c5544bd8895",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3cbbfeac-982f-4e8a-b24a-1c5544bd8895"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "885ca079-1d9f-4baa-a55a-14ae278b2673",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "885ca079-1d9f-4baa-a55a-14ae278b2673"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a014ed70-09cc-4eed-a468-87a918432c1b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a014ed70-09cc-4eed-a468-87a918432c1b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b11640c5-99aa-43b8-b165-093bb1dcd755",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b11640c5-99aa-43b8-b165-093bb1dcd755"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "88689499-8638-4034-8f21-69f2214e2705",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "88689499-8638-4034-8f21-69f2214e2705"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b04e9aa6-9bef-4b6f-96d6-0c9cec5aa55a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b04e9aa6-9bef-4b6f-96d6-0c9cec5aa55a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "96a72d25-f4e0-44b8-ba6d-6eb22ec0cd6e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "96a72d25-f4e0-44b8-ba6d-6eb22ec0cd6e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "99b75e4f-a632-40cf-8528-79fc7ed1ea6e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "99b75e4f-a632-40cf-8528-79fc7ed1ea6e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5075ae5d-c84b-406f-a0f8-ca026e97fe3a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5075ae5d-c84b-406f-a0f8-ca026e97fe3a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "923c1152-4bc5-4944-9710-91efc774059c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "923c1152-4bc5-4944-9710-91efc774059c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "55046b27-9f4f-44de-b2c9-2fab7e7abfaf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "55046b27-9f4f-44de-b2c9-2fab7e7abfaf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c3d8d9e1-366f-4511-b9d3-2d4530ea7d82",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c3d8d9e1-366f-4511-b9d3-2d4530ea7d82"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4fa69ebc-0d59-4f74-affe-b9b21453e9d5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4fa69ebc-0d59-4f74-affe-b9b21453e9d5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1f4812a1-eb40-441e-976c-2b9eab924471",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1f4812a1-eb40-441e-976c-2b9eab924471"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "06779811-ca7b-441e-914c-c3cfaf2a6b8b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "06779811-ca7b-441e-914c-c3cfaf2a6b8b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7e417112-69c4-4fe8-ad31-0d168d36ca57",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7e417112-69c4-4fe8-ad31-0d168d36ca57"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a8746a76-c4e7-473e-8a0a-99fada4f7e05",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a8746a76-c4e7-473e-8a0a-99fada4f7e05"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f52285d5-17e9-46ce-a776-5a676f61b85e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f52285d5-17e9-46ce-a776-5a676f61b85e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fae89153-34c9-4cb1-b1fc-4b416c1fdda7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fae89153-34c9-4cb1-b1fc-4b416c1fdda7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "45e4fdd6-23f9-460c-ab67-051d7095f3d2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "45e4fdd6-23f9-460c-ab67-051d7095f3d2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c95087e9-58ed-4d20-b2f7-66585f341e5e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c95087e9-58ed-4d20-b2f7-66585f341e5e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4446b09e-12f6-4b6e-a85e-828b6cc76be0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4446b09e-12f6-4b6e-a85e-828b6cc76be0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "86c4d852-2e9d-482d-a22a-2ce0c113bde2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "86c4d852-2e9d-482d-a22a-2ce0c113bde2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "06fbf4fa-a5aa-4440-b126-c56a3c899fa7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "06fbf4fa-a5aa-4440-b126-c56a3c899fa7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "55df6528-616c-40aa-9044-d7320cbbca4b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "55df6528-616c-40aa-9044-d7320cbbca4b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "30b7ea18-f3e0-4037-a2df-5bd7579797fd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "30b7ea18-f3e0-4037-a2df-5bd7579797fd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6114fa6d-3b13-48eb-a940-608dc093c467",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6114fa6d-3b13-48eb-a940-608dc093c467"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b4f943b9-73b6-4f28-b074-deefe1b276bb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b4f943b9-73b6-4f28-b074-deefe1b276bb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c911ce7c-6a73-4ee2-99c5-677d348c47f6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c911ce7c-6a73-4ee2-99c5-677d348c47f6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "535e0d36-5cc9-4848-bd88-7433c40c79f6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "535e0d36-5cc9-4848-bd88-7433c40c79f6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "acde9db3-1067-4e9e-a7df-ba3010b57928",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "acde9db3-1067-4e9e-a7df-ba3010b57928"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f733cf17-8492-4d20-a50b-42ff9ea0ab73",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f733cf17-8492-4d20-a50b-42ff9ea0ab73"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "53cebd9a-6136-44eb-9c66-72e8a502ba63",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "53cebd9a-6136-44eb-9c66-72e8a502ba63"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "053ca984-52f1-4492-bcb7-4280e62ce46e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "053ca984-52f1-4492-bcb7-4280e62ce46e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "813fa586-2a52-42d1-a828-d53b4ebcda1d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "813fa586-2a52-42d1-a828-d53b4ebcda1d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e8541b61-c7f5-42bd-ad31-e8921e575f7e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e8541b61-c7f5-42bd-ad31-e8921e575f7e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4145355b-a7e3-4877-8adf-4ad46d0b431b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4145355b-a7e3-4877-8adf-4ad46d0b431b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b41cb39f-3f39-4a8d-9973-2e93b4e5660d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b41cb39f-3f39-4a8d-9973-2e93b4e5660d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1915fa27-f287-4214-a25e-d4773cdc8c8b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1915fa27-f287-4214-a25e-d4773cdc8c8b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d92b405c-0999-4e9c-9477-0d91ec463ff0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d92b405c-0999-4e9c-9477-0d91ec463ff0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c19800e4-5764-47cf-8a9b-7939e9ac8c6c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c19800e4-5764-47cf-8a9b-7939e9ac8c6c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bf73b90c-22b4-4cc6-a415-5c9ed9a6d519",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bf73b90c-22b4-4cc6-a415-5c9ed9a6d519"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9dc70dc7-2842-4a05-9680-69032e0add22",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9dc70dc7-2842-4a05-9680-69032e0add22"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cd3872c1-2a10-40dc-a974-d70e846b64c8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cd3872c1-2a10-40dc-a974-d70e846b64c8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f3a7c7a4-deae-4a53-84bb-3ba771bff31e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f3a7c7a4-deae-4a53-84bb-3ba771bff31e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2e27bd86-676f-45d8-b0f4-8fefdb046bb7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2e27bd86-676f-45d8-b0f4-8fefdb046bb7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "964cb5b6-ee9d-4091-9490-404ed4a57430",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "964cb5b6-ee9d-4091-9490-404ed4a57430"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1fae7116-1108-411d-b8d3-952ddd6c2add",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1fae7116-1108-411d-b8d3-952ddd6c2add"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "93bbe1b0-402b-41c6-acc5-c880f2a89e9f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "93bbe1b0-402b-41c6-acc5-c880f2a89e9f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7e898f39-8a70-4ee1-9921-a9d69c79ba8c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7e898f39-8a70-4ee1-9921-a9d69c79ba8c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "12e3fd23-bcf2-4a05-b6fe-426951cf2c2b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "12e3fd23-bcf2-4a05-b6fe-426951cf2c2b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e85e7efc-21db-464f-89c7-95435d679499",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e85e7efc-21db-464f-89c7-95435d679499"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "56c8f587-501b-43e2-ae15-1868abdbb4da",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "56c8f587-501b-43e2-ae15-1868abdbb4da"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1956ab8a-582e-41c7-9af2-c37ec05f0d76",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1956ab8a-582e-41c7-9af2-c37ec05f0d76"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "517fc6fe-8dc3-4393-9794-3c569982e563",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "517fc6fe-8dc3-4393-9794-3c569982e563"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4ce203e1-b083-4a23-bb03-e1286be3c7e3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4ce203e1-b083-4a23-bb03-e1286be3c7e3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ae162d96-d972-4d72-8c2b-29ff66003dde",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ae162d96-d972-4d72-8c2b-29ff66003dde"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3a350aa1-3467-4b31-a13b-7a6c91424256",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3a350aa1-3467-4b31-a13b-7a6c91424256"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f48ca09d-5da5-4e61-b5eb-a6bc56466753",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f48ca09d-5da5-4e61-b5eb-a6bc56466753"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "74b85fa8-d790-47fb-a0ce-ed4ffe549328",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "74b85fa8-d790-47fb-a0ce-ed4ffe549328"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ed9f617b-6e38-40f5-9231-590e1393ea27",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ed9f617b-6e38-40f5-9231-590e1393ea27"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cd023438-24f4-4460-ae17-0d25f47c80fd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cd023438-24f4-4460-ae17-0d25f47c80fd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f4d86565-096e-4e49-bb8d-085a101ebec0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f4d86565-096e-4e49-bb8d-085a101ebec0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f03013a-6abf-4dce-80ac-f48696c62aad",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f03013a-6abf-4dce-80ac-f48696c62aad"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0575a76a-8854-4f5b-a715-02b94684077f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0575a76a-8854-4f5b-a715-02b94684077f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f665d0b7-9a90-4331-a75e-2f18add54aec",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f665d0b7-9a90-4331-a75e-2f18add54aec"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3ac76b5b-b2aa-4996-9506-993be3fd7a3a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3ac76b5b-b2aa-4996-9506-993be3fd7a3a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "65e0c157-abc9-47ae-9dfd-978350d79e55",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "65e0c157-abc9-47ae-9dfd-978350d79e55"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5a1a6fc7-8b97-4103-824a-61b071cb504e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5a1a6fc7-8b97-4103-824a-61b071cb504e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "724f01c6-69d4-4491-ba6b-bdc415179cb8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "724f01c6-69d4-4491-ba6b-bdc415179cb8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "58e7f908-c68f-4dfd-8d41-e3beeb2d796d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "58e7f908-c68f-4dfd-8d41-e3beeb2d796d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1868be27-fbd7-47c8-a52c-d983bfe30778",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1868be27-fbd7-47c8-a52c-d983bfe30778"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d58884cc-decd-4629-90f4-c980e93288ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d58884cc-decd-4629-90f4-c980e93288ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5a87841b-177c-4da6-ac07-04a8bdbaaf8f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5a87841b-177c-4da6-ac07-04a8bdbaaf8f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0c244240-9464-468e-bd55-ed6d187ebb52",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0c244240-9464-468e-bd55-ed6d187ebb52"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "87d07d2e-1258-42da-a154-403551cb0f27",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "87d07d2e-1258-42da-a154-403551cb0f27"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a8cefc73-56ec-4427-9080-ff708cb4f8fd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a8cefc73-56ec-4427-9080-ff708cb4f8fd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "003b4572-0cb8-4ec8-9878-11f7e786e45f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "003b4572-0cb8-4ec8-9878-11f7e786e45f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "17051477-e874-4cdb-94f2-fec9f85db7c8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "17051477-e874-4cdb-94f2-fec9f85db7c8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0c24a64f-11d5-4a18-b08c-c64420e4ab8d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0c24a64f-11d5-4a18-b08c-c64420e4ab8d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "67ca4fd9-8c51-480d-b356-92e02539bbce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "67ca4fd9-8c51-480d-b356-92e02539bbce"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1b55a74d-8ea5-4ce5-ba43-7205f1c885cb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1b55a74d-8ea5-4ce5-ba43-7205f1c885cb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "469d91bf-0bb0-4873-85f4-a99a6e73dd34",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "469d91bf-0bb0-4873-85f4-a99a6e73dd34"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c243897d-e8f1-4767-a1b1-2c2b06d6ad47",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c243897d-e8f1-4767-a1b1-2c2b06d6ad47"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7893d494-b524-4685-8577-34827317fb9b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7893d494-b524-4685-8577-34827317fb9b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f08b9ca0-302b-487e-8b5b-04e79e4c96ac",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f08b9ca0-302b-487e-8b5b-04e79e4c96ac"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "120755b0-6418-4930-9c7f-06d478cb0d56",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "120755b0-6418-4930-9c7f-06d478cb0d56"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e90f33e1-9787-4c2a-83c8-361feeb6508d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e90f33e1-9787-4c2a-83c8-361feeb6508d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2d75db21-b270-4018-9ba1-180c27750f95",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2d75db21-b270-4018-9ba1-180c27750f95"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f62957ef-3fc0-4d8a-8b8c-7a4525e02c04",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f62957ef-3fc0-4d8a-8b8c-7a4525e02c04"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a3e68aed-18ec-4fdd-88d6-99f6374bc928",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a3e68aed-18ec-4fdd-88d6-99f6374bc928"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "76fe2a5a-0ffa-4b50-a6d5-ec1eeed10b73",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "76fe2a5a-0ffa-4b50-a6d5-ec1eeed10b73"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "acbe35d4-7b9f-4abc-b681-cd17bb1f0af8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "acbe35d4-7b9f-4abc-b681-cd17bb1f0af8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "86ba9144-416f-4777-85af-3d76a0f5ad69",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "86ba9144-416f-4777-85af-3d76a0f5ad69"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0734d024-8f3e-4773-8f0c-348d8844d956",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0734d024-8f3e-4773-8f0c-348d8844d956"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6ab5cedc-a602-4a01-bb16-c4b0dffa43e5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6ab5cedc-a602-4a01-bb16-c4b0dffa43e5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "22e6bbc7-348a-4822-bad9-2d6ec760652f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "22e6bbc7-348a-4822-bad9-2d6ec760652f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "32cd629c-b31b-42b2-ade8-b09678458d76",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "32cd629c-b31b-42b2-ade8-b09678458d76"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2982906f-5478-4ac1-bd8c-454d8829b517",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2982906f-5478-4ac1-bd8c-454d8829b517"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4acf591e-7492-484c-ac7c-8d1149608729",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4acf591e-7492-484c-ac7c-8d1149608729"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "61351324-69e1-4a61-b59a-39e544bbff30",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "61351324-69e1-4a61-b59a-39e544bbff30"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f2c44928-1056-49a7-9008-abaa85ebce65",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f2c44928-1056-49a7-9008-abaa85ebce65"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d43ddf87-a020-41c3-b898-24206420b747",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d43ddf87-a020-41c3-b898-24206420b747"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "42b1f30d-0fcd-46e2-8243-8baae85d0c4c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "42b1f30d-0fcd-46e2-8243-8baae85d0c4c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5ab8c53c-a014-4d83-8471-16b770f3d382",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5ab8c53c-a014-4d83-8471-16b770f3d382"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a70b3501-bc0b-44b7-bc42-a5a370758435",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a70b3501-bc0b-44b7-bc42-a5a370758435"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9cf68e06-4560-430c-adca-0ced008d8bdd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9cf68e06-4560-430c-adca-0ced008d8bdd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e489d4b8-efda-4c93-9323-6707c1db162e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e489d4b8-efda-4c93-9323-6707c1db162e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3278f80b-39b4-4320-bcf6-75692b3c5c4c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3278f80b-39b4-4320-bcf6-75692b3c5c4c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0c476790-595b-441b-af28-f8c7e86eb00f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0c476790-595b-441b-af28-f8c7e86eb00f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8e1594b2-4a5b-4806-b57f-278b06e4144d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8e1594b2-4a5b-4806-b57f-278b06e4144d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "36123fe7-6679-4a31-9328-6ed3b24a604b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "36123fe7-6679-4a31-9328-6ed3b24a604b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d2b45652-2709-459b-a0e9-aaed92035b26",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d2b45652-2709-459b-a0e9-aaed92035b26"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "332cb565-913c-44f0-9761-df1b2b971b0d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "332cb565-913c-44f0-9761-df1b2b971b0d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c225a67c-e075-4bbb-ab5b-6a38777953db",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c225a67c-e075-4bbb-ab5b-6a38777953db"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f9d82448-2f62-40db-8c7f-a39eb266d8dc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f9d82448-2f62-40db-8c7f-a39eb266d8dc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5d7ec5a5-f371-4a4d-8de5-ecb87d21c34c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5d7ec5a5-f371-4a4d-8de5-ecb87d21c34c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e787472b-17ee-43ce-9159-c57613faf9a7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e787472b-17ee-43ce-9159-c57613faf9a7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1bc0d03c-0b3d-42b4-8707-5187fc039e28",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1bc0d03c-0b3d-42b4-8707-5187fc039e28"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b1e9e857-a42c-481d-bd75-3e37d7087cbb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b1e9e857-a42c-481d-bd75-3e37d7087cbb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d4f80118-dec9-4445-b9b2-6b2c1e68ebb8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d4f80118-dec9-4445-b9b2-6b2c1e68ebb8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d7d503d8-2ddc-41ba-9c0b-3e7194e63437",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d7d503d8-2ddc-41ba-9c0b-3e7194e63437"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e3181adb-ae61-4ddd-b24a-ad4042da62e4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e3181adb-ae61-4ddd-b24a-ad4042da62e4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0e8d385d-a874-40b4-b546-e80fb4fb8987",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0e8d385d-a874-40b4-b546-e80fb4fb8987"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5930765a-2195-496c-a24a-9834811713e9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5930765a-2195-496c-a24a-9834811713e9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ffe9dfd3-f219-4c80-a45f-6a180878ef30",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ffe9dfd3-f219-4c80-a45f-6a180878ef30"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3861f7a3-14db-4a5e-8ba8-e6a7ddb88e22",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3861f7a3-14db-4a5e-8ba8-e6a7ddb88e22"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f793dca1-cfd1-4e87-bcf9-3a2c5be7bb80",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f793dca1-cfd1-4e87-bcf9-3a2c5be7bb80"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0718cae2-7719-421c-9f80-1153d989d198",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0718cae2-7719-421c-9f80-1153d989d198"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f0b44d44-0c6d-4df8-a16e-cb872a85d3d3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f0b44d44-0c6d-4df8-a16e-cb872a85d3d3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ce68af3a-009b-4424-93dd-8176abb9fba3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ce68af3a-009b-4424-93dd-8176abb9fba3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1dfe5b09-834c-4565-a16f-ebfb3a803f9c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1dfe5b09-834c-4565-a16f-ebfb3a803f9c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c1e1e61b-d2ea-4fe5-9e39-d776b9b00bf6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c1e1e61b-d2ea-4fe5-9e39-d776b9b00bf6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ff73a460-cefd-49e1-8bc2-ec980c97c275",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ff73a460-cefd-49e1-8bc2-ec980c97c275"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3130755a-4e3b-4597-b280-898b90f6f6f6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3130755a-4e3b-4597-b280-898b90f6f6f6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "27332ccd-3eb2-4710-9699-6a4a478766dc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "27332ccd-3eb2-4710-9699-6a4a478766dc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f38c0cb0-086c-4221-9916-615e6b5470fb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f38c0cb0-086c-4221-9916-615e6b5470fb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e2abeafc-7d9c-4dab-855e-92c5f101339e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e2abeafc-7d9c-4dab-855e-92c5f101339e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e852717b-a9e0-46b4-abf1-14f07450c545",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e852717b-a9e0-46b4-abf1-14f07450c545"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b6233f8d-e493-469a-9dd0-4f83f82fdebb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b6233f8d-e493-469a-9dd0-4f83f82fdebb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d9bb888d-9cec-4472-9ec8-b199378f5d57",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d9bb888d-9cec-4472-9ec8-b199378f5d57"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a7e87676-153f-4ae9-a5e0-693f08caf1ce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a7e87676-153f-4ae9-a5e0-693f08caf1ce"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e6663ba1-a9a2-4ab2-985d-84cdfbb8e48e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e6663ba1-a9a2-4ab2-985d-84cdfbb8e48e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6979154c-3f88-48e2-8858-fd5e6db3488e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6979154c-3f88-48e2-8858-fd5e6db3488e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "48bfb72d-1d61-497c-9dab-22b4d3140d74",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "48bfb72d-1d61-497c-9dab-22b4d3140d74"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "14b0627f-ca77-42a4-86cf-8c5c4233955f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "14b0627f-ca77-42a4-86cf-8c5c4233955f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d3a7018f-6d14-4e07-be8b-44500b89afba",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d3a7018f-6d14-4e07-be8b-44500b89afba"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4fcb6b46-b8ca-4897-9bf3-17dc079ba5a9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4fcb6b46-b8ca-4897-9bf3-17dc079ba5a9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "468de89e-781c-4346-b9bd-aa0ef4112852",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "468de89e-781c-4346-b9bd-aa0ef4112852"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "620ac61b-5e45-4074-8a62-d2c15553e38c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "620ac61b-5e45-4074-8a62-d2c15553e38c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "af3e5b33-01bb-4dfe-8812-82fd1f57ea5a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "af3e5b33-01bb-4dfe-8812-82fd1f57ea5a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "acc652c6-ba21-4809-8264-771cb9478012",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "acc652c6-ba21-4809-8264-771cb9478012"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fcb76672-8401-421e-95b5-60fa813b09a2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fcb76672-8401-421e-95b5-60fa813b09a2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2e1ca3f1-5da3-43cf-8aa7-2a01954abacb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2e1ca3f1-5da3-43cf-8aa7-2a01954abacb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8ef29667-f008-4e71-9732-a0f32c430f1b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8ef29667-f008-4e71-9732-a0f32c430f1b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "85d2d675-935e-4e24-b39f-f8afbf3b2f03",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "85d2d675-935e-4e24-b39f-f8afbf3b2f03"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "94aa538d-3708-4a67-965b-2f288277a1c9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "94aa538d-3708-4a67-965b-2f288277a1c9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7ab9fd99-c7c5-4ae8-bebf-bee9cee4b0ac",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7ab9fd99-c7c5-4ae8-bebf-bee9cee4b0ac"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "654a5648-0345-41b1-b47a-8ef2b065890d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "654a5648-0345-41b1-b47a-8ef2b065890d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "73c42508-8100-4a7c-9dba-51b15db909be",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "73c42508-8100-4a7c-9dba-51b15db909be"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8e0fd757-0be1-45cb-9815-81cd6ca04564",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8e0fd757-0be1-45cb-9815-81cd6ca04564"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c7d0fb6e-2e04-4a24-b411-fda3832c6ee5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c7d0fb6e-2e04-4a24-b411-fda3832c6ee5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d97bd3c6-e742-4199-883a-270d3b9fb692",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d97bd3c6-e742-4199-883a-270d3b9fb692"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3b9b8b3e-596d-42c5-9915-1435fa28d88f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3b9b8b3e-596d-42c5-9915-1435fa28d88f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9d433f7a-06d7-486a-94b5-14a64e9eeafc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9d433f7a-06d7-486a-94b5-14a64e9eeafc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "738c210c-08a1-4825-ac86-5095a789aabf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "738c210c-08a1-4825-ac86-5095a789aabf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cba2a603-7a91-4e60-a907-f65743462942",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cba2a603-7a91-4e60-a907-f65743462942"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9aace18b-4434-4cff-b3eb-e69b36c884ea",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9aace18b-4434-4cff-b3eb-e69b36c884ea"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f5354e4e-e025-4bb0-8da6-e2e805243613",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f5354e4e-e025-4bb0-8da6-e2e805243613"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9b757c36-dbf3-45a8-8383-5509e9b106cd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9b757c36-dbf3-45a8-8383-5509e9b106cd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9ee83f7a-6582-43bc-839d-05d75390fc7f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9ee83f7a-6582-43bc-839d-05d75390fc7f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e731aa6c-f9f2-4d82-bd6b-9fe8228a3cd0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e731aa6c-f9f2-4d82-bd6b-9fe8228a3cd0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5172c392-a330-4c27-b41b-8c899ce420c5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5172c392-a330-4c27-b41b-8c899ce420c5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "595fa87c-b7e7-455f-897a-76f6f645ba03",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "595fa87c-b7e7-455f-897a-76f6f645ba03"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aa978296-d3bb-4afd-8cbf-ee99c0941123",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aa978296-d3bb-4afd-8cbf-ee99c0941123"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1132ba14-d6dd-435f-b47a-d46036ee4229",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1132ba14-d6dd-435f-b47a-d46036ee4229"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "86874217-70af-4a2b-94ab-9e61afd5eead",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "86874217-70af-4a2b-94ab-9e61afd5eead"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d1c9d593-93dd-46d5-ab44-e9c5723ab1cf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d1c9d593-93dd-46d5-ab44-e9c5723ab1cf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cd524a06-1591-4485-b51b-22df1434c977",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cd524a06-1591-4485-b51b-22df1434c977"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bce4f53f-b679-4211-873d-f7dbd9102440",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bce4f53f-b679-4211-873d-f7dbd9102440"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "68b7c523-14f5-4024-99cf-2ec906164976",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "68b7c523-14f5-4024-99cf-2ec906164976"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "23e0090e-1c4d-4952-91c2-a92fe8636cc6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "23e0090e-1c4d-4952-91c2-a92fe8636cc6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f3ae73b-608e-4b6c-b915-61c85c6dde84",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f3ae73b-608e-4b6c-b915-61c85c6dde84"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a81fa348-a488-421e-b8b8-a7f7d1ee9200",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a81fa348-a488-421e-b8b8-a7f7d1ee9200"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "85e6684c-aeeb-4373-846e-657e7a7a406d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "85e6684c-aeeb-4373-846e-657e7a7a406d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a48df9ee-f3d7-41b6-9543-b7d91a4f7c97",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a48df9ee-f3d7-41b6-9543-b7d91a4f7c97"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "90af2487-84b6-4e78-b70f-a47f8041ecd6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "90af2487-84b6-4e78-b70f-a47f8041ecd6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1ba247e0-f3c9-42bf-83c3-0cef1a77fdc8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1ba247e0-f3c9-42bf-83c3-0cef1a77fdc8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7a315c9a-2fbc-4bf6-afbc-769465155b99",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7a315c9a-2fbc-4bf6-afbc-769465155b99"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cdebfe74-f27d-4aa4-83eb-def289b0ce2c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cdebfe74-f27d-4aa4-83eb-def289b0ce2c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "447fb82e-fcce-4f02-abec-5190ffe96835",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "447fb82e-fcce-4f02-abec-5190ffe96835"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3cde855a-3cb0-4cc8-8cf9-37f88cd83aee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3cde855a-3cb0-4cc8-8cf9-37f88cd83aee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7b977a66-3d82-488e-bb1a-5b2487318272",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7b977a66-3d82-488e-bb1a-5b2487318272"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "23d310fd-b9a6-4e36-9ad2-8072858da46f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "23d310fd-b9a6-4e36-9ad2-8072858da46f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "58992ef0-647b-406f-beaa-47cb683239c7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "58992ef0-647b-406f-beaa-47cb683239c7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "102e4479-db97-46d0-a9d7-cedd4180c914",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "102e4479-db97-46d0-a9d7-cedd4180c914"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1664364d-b6b1-4d85-bd30-d8c3fca50676",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1664364d-b6b1-4d85-bd30-d8c3fca50676"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3f4f77f0-e9eb-4c53-9a55-d0911fe9afe4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3f4f77f0-e9eb-4c53-9a55-d0911fe9afe4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "50371a64-6e0f-44ac-a83d-4726a8e42794",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "50371a64-6e0f-44ac-a83d-4726a8e42794"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "74ecc312-1810-402b-a12b-65073606131e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "74ecc312-1810-402b-a12b-65073606131e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e6452c2a-f6a4-4595-bec6-3c48345509bd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e6452c2a-f6a4-4595-bec6-3c48345509bd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7d800ed8-2d5c-4a47-b1f8-7f90765dc2e7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7d800ed8-2d5c-4a47-b1f8-7f90765dc2e7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4de83541-eb8d-4f6d-96b5-6a4ed31aabf1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4de83541-eb8d-4f6d-96b5-6a4ed31aabf1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8d6f1590-8d60-40c2-a580-c54cf98267ff",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8d6f1590-8d60-40c2-a580-c54cf98267ff"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c9620cf0-d664-4674-ba61-b2fd47a651b8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c9620cf0-d664-4674-ba61-b2fd47a651b8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4b6b96fa-b716-4525-b692-a48d1341a4ae",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4b6b96fa-b716-4525-b692-a48d1341a4ae"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "062adbe0-daec-4023-bc95-a3e6d2ea0784",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "062adbe0-daec-4023-bc95-a3e6d2ea0784"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fc14118b-d241-4a36-8924-e48562776535",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fc14118b-d241-4a36-8924-e48562776535"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "295475ca-bf95-4900-b99e-d457bef3e038",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "295475ca-bf95-4900-b99e-d457bef3e038"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5225c631-7f7d-4156-8426-012c37e48e5a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5225c631-7f7d-4156-8426-012c37e48e5a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f2bada7a-5b01-4be9-afb6-3e893b293322",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f2bada7a-5b01-4be9-afb6-3e893b293322"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2f6288c-52aa-402b-b55b-2fdaccc5a981",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2f6288c-52aa-402b-b55b-2fdaccc5a981"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9bbe4996-4151-4194-883a-88b6a6e9cacd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9bbe4996-4151-4194-883a-88b6a6e9cacd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0fda37d8-5844-4de7-b1e2-ecad1dfe4028",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0fda37d8-5844-4de7-b1e2-ecad1dfe4028"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "54c72941-c3b8-4209-953a-e0cdc923fd26",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "54c72941-c3b8-4209-953a-e0cdc923fd26"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a6be5492-992d-4817-89b4-8284d38b797c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a6be5492-992d-4817-89b4-8284d38b797c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e11392e0-9174-44bd-9d5a-bf45406beb16",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e11392e0-9174-44bd-9d5a-bf45406beb16"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "19e3f2a3-e0ca-4d5c-a992-12a9a68b99fb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "19e3f2a3-e0ca-4d5c-a992-12a9a68b99fb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ae192474-c488-47a8-a596-28cde5c40000",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ae192474-c488-47a8-a596-28cde5c40000"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8434d7f5-dc7b-42f0-856e-dc6a2253ec94",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8434d7f5-dc7b-42f0-856e-dc6a2253ec94"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3c9da792-e6f1-4f84-802c-f745645751bc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3c9da792-e6f1-4f84-802c-f745645751bc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0dad6135-a2ad-4ed1-b78a-1b307ee33c97",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0dad6135-a2ad-4ed1-b78a-1b307ee33c97"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "51d9e6da-2e2b-4e93-8d51-1c9161368ec5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "51d9e6da-2e2b-4e93-8d51-1c9161368ec5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "83c1b831-800a-4a60-90d1-ebde80370c62",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "83c1b831-800a-4a60-90d1-ebde80370c62"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ec2e76f1-77c3-4791-8292-bbdd4ab9166a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ec2e76f1-77c3-4791-8292-bbdd4ab9166a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "58fe530a-73f6-4549-93e0-912a14edd42f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "58fe530a-73f6-4549-93e0-912a14edd42f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "57a8bb5c-b5e2-4bc2-8aea-849423a67e1a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "57a8bb5c-b5e2-4bc2-8aea-849423a67e1a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9c958dc8-df1f-433d-950b-e8f85adbb06e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9c958dc8-df1f-433d-950b-e8f85adbb06e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "09c9d6b4-be56-43af-900b-20b3e42eeaa2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "09c9d6b4-be56-43af-900b-20b3e42eeaa2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3fa13463-375b-4cc0-a506-e3d43b5ef0d7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3fa13463-375b-4cc0-a506-e3d43b5ef0d7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8c5394f7-8bff-4ba5-bdad-61e0dba9ad40",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8c5394f7-8bff-4ba5-bdad-61e0dba9ad40"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2272fc83-657c-400d-a923-7151ed6907e2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2272fc83-657c-400d-a923-7151ed6907e2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dd6639f5-8e4f-4f33-b1f0-d5074fc3c21f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dd6639f5-8e4f-4f33-b1f0-d5074fc3c21f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0b2ae800-2d4e-435c-b2ec-6b58cbe34e65",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0b2ae800-2d4e-435c-b2ec-6b58cbe34e65"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "054f725c-f22c-46cf-95c5-20c0e99cb302",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "054f725c-f22c-46cf-95c5-20c0e99cb302"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3a581a6e-0cdf-4738-b414-e0d69b8e5170",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3a581a6e-0cdf-4738-b414-e0d69b8e5170"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1d5b4acf-410e-4138-b35a-449659e02ed2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1d5b4acf-410e-4138-b35a-449659e02ed2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a9d48293-ffb6-49f9-a478-5d39e0aa6f2e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a9d48293-ffb6-49f9-a478-5d39e0aa6f2e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2b82280-fdfe-4070-98d6-b75d89682cd2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2b82280-fdfe-4070-98d6-b75d89682cd2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "87e2ab22-1754-46c1-bebc-4680cc67ed8c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "87e2ab22-1754-46c1-bebc-4680cc67ed8c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a18cb67c-9ac3-4503-8dd1-7b3d885b56e5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a18cb67c-9ac3-4503-8dd1-7b3d885b56e5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a9185263-9ce2-45b8-a918-e832c9a1cfd5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a9185263-9ce2-45b8-a918-e832c9a1cfd5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "92ba6c16-745c-4d33-946b-dd2fa894e43a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "92ba6c16-745c-4d33-946b-dd2fa894e43a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c34d5f4b-cb31-4435-84fc-8e11071a347e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c34d5f4b-cb31-4435-84fc-8e11071a347e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f79e1960-e110-4444-9dd9-901a63e4a658",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f79e1960-e110-4444-9dd9-901a63e4a658"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "16455bdd-7df5-4712-9a10-10b12feae1b7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "16455bdd-7df5-4712-9a10-10b12feae1b7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "08a88f3a-3e51-4d21-9dea-57a139fe8957",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "08a88f3a-3e51-4d21-9dea-57a139fe8957"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e7bbaf91-3a24-4df0-8aed-8864aeef1a7b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e7bbaf91-3a24-4df0-8aed-8864aeef1a7b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fa4b987c-8849-4ccb-9252-6977831ed83a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fa4b987c-8849-4ccb-9252-6977831ed83a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4f79a469-0cf5-4c4f-b8aa-74a43c1c72eb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4f79a469-0cf5-4c4f-b8aa-74a43c1c72eb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "29ec7e34-84d3-4995-8a6c-30ca8d18c064",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "29ec7e34-84d3-4995-8a6c-30ca8d18c064"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a099944e-95f3-4e7d-8d54-5db61fd38a45",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a099944e-95f3-4e7d-8d54-5db61fd38a45"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "160673b3-2b0f-47b7-969f-945df655fe38",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "160673b3-2b0f-47b7-969f-945df655fe38"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7f9dc56e-be75-4ee6-8fd0-813040ba3071",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7f9dc56e-be75-4ee6-8fd0-813040ba3071"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9e13207a-f712-4c4e-a09e-0f30663b89f4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9e13207a-f712-4c4e-a09e-0f30663b89f4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "458b299d-364b-4ac6-9e27-93a5135c7e3b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "458b299d-364b-4ac6-9e27-93a5135c7e3b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9633353d-03d8-49bd-86a3-e004d7262f8c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9633353d-03d8-49bd-86a3-e004d7262f8c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3638c54c-ff0f-4c7e-866b-18fca4fc984f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3638c54c-ff0f-4c7e-866b-18fca4fc984f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eda516fb-31b7-475c-bb29-5657c013c7bf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eda516fb-31b7-475c-bb29-5657c013c7bf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a856f3b4-90f8-435d-85d1-5181e9a912c0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a856f3b4-90f8-435d-85d1-5181e9a912c0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d75bb6df-5dc8-4fae-8286-ff91c9b9d7ef",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d75bb6df-5dc8-4fae-8286-ff91c9b9d7ef"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3d3b65e0-608a-4276-a085-deb86f95a3f9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3d3b65e0-608a-4276-a085-deb86f95a3f9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "556e1364-33f0-475f-a5eb-65df118590ab",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "556e1364-33f0-475f-a5eb-65df118590ab"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "83254499-b2e7-4b8b-94c4-e97ff9289e29",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "83254499-b2e7-4b8b-94c4-e97ff9289e29"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f792d415-84c9-4247-8a26-f0e30f5c2e2d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f792d415-84c9-4247-8a26-f0e30f5c2e2d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "17ca7043-c36f-4e6c-9386-55b68f94cf32",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "17ca7043-c36f-4e6c-9386-55b68f94cf32"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3998871a-1865-4790-bbd4-ccb9da794fc5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3998871a-1865-4790-bbd4-ccb9da794fc5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e2b12e98-e6e7-4dc8-8d1a-6bffa4cac70e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e2b12e98-e6e7-4dc8-8d1a-6bffa4cac70e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c339440a-ec4c-4a0b-802c-55c638f02abf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c339440a-ec4c-4a0b-802c-55c638f02abf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f8d18458-1b70-4e23-96ec-0f2665957360",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f8d18458-1b70-4e23-96ec-0f2665957360"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a4d008f5-ec71-4f4f-9a71-c31e41b3b12d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a4d008f5-ec71-4f4f-9a71-c31e41b3b12d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "34fcfeea-d7bb-461f-aae2-f50bf6970aa2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "34fcfeea-d7bb-461f-aae2-f50bf6970aa2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "30dfef1e-ab1a-4b12-856e-af0494fb1cfa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "30dfef1e-ab1a-4b12-856e-af0494fb1cfa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "868c98ec-00d6-4abc-8488-31316242232a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "868c98ec-00d6-4abc-8488-31316242232a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1fa43af0-1df4-484f-942b-5782fb7377ae",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1fa43af0-1df4-484f-942b-5782fb7377ae"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ac1adbf8-96d6-4748-994a-b222ff935908",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ac1adbf8-96d6-4748-994a-b222ff935908"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ecd5342a-6a4c-4600-b209-5b396a16d757",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ecd5342a-6a4c-4600-b209-5b396a16d757"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f72da140-6ef5-4ea7-a11c-e4a74cabbf65",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f72da140-6ef5-4ea7-a11c-e4a74cabbf65"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5f7e2e41-bb7a-4620-ac01-e9b4fc411ce2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5f7e2e41-bb7a-4620-ac01-e9b4fc411ce2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a388a990-5029-430a-ac1f-ec09effd84ce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a388a990-5029-430a-ac1f-ec09effd84ce"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e59142ed-7722-4b25-b624-76ce368ef80c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e59142ed-7722-4b25-b624-76ce368ef80c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "92b8151b-2679-49f4-8108-dc87cdf25db5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "92b8151b-2679-49f4-8108-dc87cdf25db5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a992ccc4-8636-4a69-873b-f6cd04052dd0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a992ccc4-8636-4a69-873b-f6cd04052dd0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0439e5ef-3bf8-4919-9ddd-afff046a12a3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0439e5ef-3bf8-4919-9ddd-afff046a12a3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b342862d-92ad-459b-8266-ff2e9693c951",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b342862d-92ad-459b-8266-ff2e9693c951"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e9ac426a-6d28-48ee-8559-0455f721e007",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e9ac426a-6d28-48ee-8559-0455f721e007"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "12c8b36c-eab6-4829-968e-e9929f8e977b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "12c8b36c-eab6-4829-968e-e9929f8e977b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ba770753-18cc-46fe-9684-f84dfe78e596",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ba770753-18cc-46fe-9684-f84dfe78e596"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "925a1c8e-5c1d-4201-a770-aedc16f2bdc9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "925a1c8e-5c1d-4201-a770-aedc16f2bdc9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7ef20976-f869-4509-a644-19e6cc2e5964",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7ef20976-f869-4509-a644-19e6cc2e5964"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "18270a88-0b87-4bb6-b65c-121d5decd6fb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "18270a88-0b87-4bb6-b65c-121d5decd6fb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d876bcad-ec08-40a1-a6ba-3408ee1cd406",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d876bcad-ec08-40a1-a6ba-3408ee1cd406"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "42a3f786-cb9c-416c-998c-760ee623b541",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "42a3f786-cb9c-416c-998c-760ee623b541"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d7cd106d-e4c7-45be-b44e-b93549c8bf3e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d7cd106d-e4c7-45be-b44e-b93549c8bf3e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "28f38c85-e66c-4fab-9401-55273f34f6b1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "28f38c85-e66c-4fab-9401-55273f34f6b1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2d447c89-e3f3-4bad-964c-422e91904391",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2d447c89-e3f3-4bad-964c-422e91904391"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e1a177b6-d58f-4e3b-b251-d6802320ce56",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e1a177b6-d58f-4e3b-b251-d6802320ce56"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4a6e23d8-0185-49d8-b89c-9551c8290359",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4a6e23d8-0185-49d8-b89c-9551c8290359"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "993f5c39-60a4-4e76-a8f4-e2e4eecd00b9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "993f5c39-60a4-4e76-a8f4-e2e4eecd00b9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "df47dfef-5623-4d58-aa5b-796fd05e4c57",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "df47dfef-5623-4d58-aa5b-796fd05e4c57"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "086cf13e-a22b-4726-9390-8b12916e8ca6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "086cf13e-a22b-4726-9390-8b12916e8ca6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "26441210-650b-46d6-9771-ceab5e743f36",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "26441210-650b-46d6-9771-ceab5e743f36"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "83a7b584-d2c4-4927-be42-4b28cfd3eaf6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "83a7b584-d2c4-4927-be42-4b28cfd3eaf6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6afd10bd-34b1-4d63-83a9-333d8152a117",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6afd10bd-34b1-4d63-83a9-333d8152a117"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "805bed38-c966-4100-a554-70a139486db3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "805bed38-c966-4100-a554-70a139486db3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1dba4334-7115-43a5-b7eb-a207803cdee8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1dba4334-7115-43a5-b7eb-a207803cdee8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ae912ad1-4f89-4ff9-abfd-dc3b3674ac05",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ae912ad1-4f89-4ff9-abfd-dc3b3674ac05"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "981ec272-bab4-4ea3-8c20-6be952526d16",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "981ec272-bab4-4ea3-8c20-6be952526d16"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f4ced381-0d77-440b-a7c8-74c7ed8c4465",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f4ced381-0d77-440b-a7c8-74c7ed8c4465"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0a06be22-887b-4d73-9e02-9894574f7be9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0a06be22-887b-4d73-9e02-9894574f7be9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "37c709a4-c925-41e1-b6f9-267e4208dbd9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "37c709a4-c925-41e1-b6f9-267e4208dbd9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7c685e36-f18a-4641-8658-0c06acb0ede9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7c685e36-f18a-4641-8658-0c06acb0ede9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "67f0c378-c063-42db-86ca-b9fb36c73724",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "67f0c378-c063-42db-86ca-b9fb36c73724"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "db86201f-4de2-42ff-869e-9ba959789b3f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "db86201f-4de2-42ff-869e-9ba959789b3f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "defb399e-7fad-4553-997d-36be2c34e8a9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "defb399e-7fad-4553-997d-36be2c34e8a9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "49f7d125-002d-4873-8f56-a51b83c904a8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "49f7d125-002d-4873-8f56-a51b83c904a8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ffb39dda-644a-40af-9511-ace02fc7f41c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ffb39dda-644a-40af-9511-ace02fc7f41c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bb002232-69be-45cd-b7c5-c337a6d540e7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bb002232-69be-45cd-b7c5-c337a6d540e7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f14b7180-9992-4991-86cf-fcc80aa73af6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f14b7180-9992-4991-86cf-fcc80aa73af6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "20be6de6-f68d-41c1-aaa6-36fbd7c8e3f1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "20be6de6-f68d-41c1-aaa6-36fbd7c8e3f1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "00a2d022-798c-481e-b6e5-b3243471a243",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "00a2d022-798c-481e-b6e5-b3243471a243"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d1ba3cb9-58de-4b92-b6dc-50bfa6126bac",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d1ba3cb9-58de-4b92-b6dc-50bfa6126bac"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0ce260df-d3da-4cf2-b65b-a556b2ccf457",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0ce260df-d3da-4cf2-b65b-a556b2ccf457"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "09ef5cd5-eb73-44f9-b784-6df89c9de017",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "09ef5cd5-eb73-44f9-b784-6df89c9de017"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ec6eda85-c807-45d2-807d-8c23d9c2d931",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ec6eda85-c807-45d2-807d-8c23d9c2d931"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "99067f7f-a38e-4095-a822-0dbd12310436",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "99067f7f-a38e-4095-a822-0dbd12310436"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e6a26641-7a97-4d85-807a-fa2b926557c2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e6a26641-7a97-4d85-807a-fa2b926557c2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "db8a2537-7348-48cd-a872-0c9c13dea403",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "db8a2537-7348-48cd-a872-0c9c13dea403"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e7454ca6-10c4-4484-a208-867aff2fab2f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e7454ca6-10c4-4484-a208-867aff2fab2f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9380d286-6107-4d58-8d6f-a7ca308bb7cb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9380d286-6107-4d58-8d6f-a7ca308bb7cb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e5ea3fed-ade0-46a9-a5f5-94c54c316e08",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e5ea3fed-ade0-46a9-a5f5-94c54c316e08"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "503362af-4915-431c-8f3d-a7c9c1d1827a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "503362af-4915-431c-8f3d-a7c9c1d1827a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9898ec5b-0090-4583-886e-ccbc6d2fddc1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9898ec5b-0090-4583-886e-ccbc6d2fddc1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eb678f2a-a57f-4fbc-8fd7-dabccfb7376a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eb678f2a-a57f-4fbc-8fd7-dabccfb7376a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "91d34bc4-786e-4929-a124-a768f27985e5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "91d34bc4-786e-4929-a124-a768f27985e5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a301ecf3-2f7d-407a-a140-b2f0fa380fab",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a301ecf3-2f7d-407a-a140-b2f0fa380fab"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1d690fc9-91ee-4df2-8138-fcc7428247a9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1d690fc9-91ee-4df2-8138-fcc7428247a9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "56eb9100-d1fc-4656-8214-7f25d41c0c5e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "56eb9100-d1fc-4656-8214-7f25d41c0c5e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "070d4bda-a92b-42c2-b08d-09641b5c8403",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "070d4bda-a92b-42c2-b08d-09641b5c8403"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4f648d04-363c-4f4b-90d2-4b265a06c56d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4f648d04-363c-4f4b-90d2-4b265a06c56d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "de1ea3fb-d828-40ca-a45e-8fac2c063d16",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "de1ea3fb-d828-40ca-a45e-8fac2c063d16"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5c81afb4-9929-4a02-b5d3-a08c26ec4b2f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5c81afb4-9929-4a02-b5d3-a08c26ec4b2f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "64521b28-b869-42e0-bcbf-47bff51e218f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "64521b28-b869-42e0-bcbf-47bff51e218f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "96f065f8-36a7-4108-ac8c-502bbd8bf5b3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "96f065f8-36a7-4108-ac8c-502bbd8bf5b3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b491dd0a-1acf-4e84-b2c2-833e798193f1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b491dd0a-1acf-4e84-b2c2-833e798193f1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6c55659b-d1c8-404e-8d04-8eced3a4a062",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6c55659b-d1c8-404e-8d04-8eced3a4a062"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5168e420-0e8f-4361-a77e-373e8e580199",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5168e420-0e8f-4361-a77e-373e8e580199"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c41f4888-6d6e-42dc-a1bc-ff783668f206",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c41f4888-6d6e-42dc-a1bc-ff783668f206"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cd459cfb-6f8b-4ebd-949f-8a770ff1a0c4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cd459cfb-6f8b-4ebd-949f-8a770ff1a0c4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ad86937e-44b6-4def-bbf9-307997889d56",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ad86937e-44b6-4def-bbf9-307997889d56"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "79fed397-5b98-4f32-8520-9ff8b4f2b675",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "79fed397-5b98-4f32-8520-9ff8b4f2b675"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "470338ce-48d5-4e28-a367-0c540b41e609",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "470338ce-48d5-4e28-a367-0c540b41e609"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "92810b7d-79ff-4eb1-9be5-ce5c33d789b5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "92810b7d-79ff-4eb1-9be5-ce5c33d789b5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0842e64c-bbcb-46de-919c-0b86f457c873",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0842e64c-bbcb-46de-919c-0b86f457c873"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "327eef3c-dca5-4a0a-8abf-3135d213587f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "327eef3c-dca5-4a0a-8abf-3135d213587f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fdf70972-9821-4501-9f52-c691b5b4ab82",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fdf70972-9821-4501-9f52-c691b5b4ab82"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b486a993-7685-4a32-b784-1259e825d906",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b486a993-7685-4a32-b784-1259e825d906"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "22b8ec06-b1dd-416d-9a7c-6e7776fcc99a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "22b8ec06-b1dd-416d-9a7c-6e7776fcc99a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2276d9bb-1a5f-46b3-85e8-757f5b91cf91",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2276d9bb-1a5f-46b3-85e8-757f5b91cf91"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aa0fe145-f7ed-41ae-93b5-071f1598f417",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aa0fe145-f7ed-41ae-93b5-071f1598f417"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "117def90-dd63-4fb0-986d-5408ef258713",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "117def90-dd63-4fb0-986d-5408ef258713"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3f7e6a42-57b9-4530-8132-316c92a82b1d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3f7e6a42-57b9-4530-8132-316c92a82b1d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bdbf15f7-0284-42fb-9b3e-bd58c17ccc4c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bdbf15f7-0284-42fb-9b3e-bd58c17ccc4c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e06759fa-d1e7-4675-bfc3-eadb4952dfcd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e06759fa-d1e7-4675-bfc3-eadb4952dfcd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "22f2b9b1-56c1-4266-aada-01fd9e544b75",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "22f2b9b1-56c1-4266-aada-01fd9e544b75"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0edebee9-10d0-4154-a5dd-2daa66d14ac1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0edebee9-10d0-4154-a5dd-2daa66d14ac1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b77c024e-e9a8-4653-9584-b33867dce8a5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b77c024e-e9a8-4653-9584-b33867dce8a5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bdad2054-2268-4cb8-93f7-8cacb0a13062",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bdad2054-2268-4cb8-93f7-8cacb0a13062"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "500279ff-92d8-42b2-b17b-7daf1643c69d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "500279ff-92d8-42b2-b17b-7daf1643c69d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3bf85095-edbf-4f65-8074-b693e24d9189",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3bf85095-edbf-4f65-8074-b693e24d9189"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "517965d9-5aae-492c-af56-bc47b2533587",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "517965d9-5aae-492c-af56-bc47b2533587"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e339f1b2-0a92-4fd5-8873-03ab954e3d94",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e339f1b2-0a92-4fd5-8873-03ab954e3d94"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3d2073e6-fac9-4985-9e70-6ed049fe1c35",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3d2073e6-fac9-4985-9e70-6ed049fe1c35"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ec27eff3-32a6-42d2-ab6e-8860289ac158",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ec27eff3-32a6-42d2-ab6e-8860289ac158"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0e1ad8a6-1307-4c82-8760-3c3a14d0bd9d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0e1ad8a6-1307-4c82-8760-3c3a14d0bd9d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "86e96c6e-5f6e-4346-82c8-3843fb55562d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "86e96c6e-5f6e-4346-82c8-3843fb55562d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dd0afabd-9579-4190-9c2e-822daf4d1015",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dd0afabd-9579-4190-9c2e-822daf4d1015"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "29d0d6d9-bfdf-493e-852e-8df937b6475c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "29d0d6d9-bfdf-493e-852e-8df937b6475c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b2e91ae7-0ff9-44f5-a274-3ff107d8e264",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b2e91ae7-0ff9-44f5-a274-3ff107d8e264"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5916cb23-58b7-4a4f-964c-ea7f24e94c65",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5916cb23-58b7-4a4f-964c-ea7f24e94c65"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ed4071da-2d10-4e7e-a6c6-9886fc064702",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ed4071da-2d10-4e7e-a6c6-9886fc064702"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "59893cfb-8989-473c-b841-1075b301dd12",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "59893cfb-8989-473c-b841-1075b301dd12"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0c9f16f1-52c1-4762-b935-ad8f3da429c7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0c9f16f1-52c1-4762-b935-ad8f3da429c7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6829cb87-b0b7-4896-ab66-42a7cfb0bd16",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6829cb87-b0b7-4896-ab66-42a7cfb0bd16"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f1ed0737-d849-4f40-b66e-5e0997a871d2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f1ed0737-d849-4f40-b66e-5e0997a871d2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "06f0e162-956c-4a44-b208-a027dbd30fb2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "06f0e162-956c-4a44-b208-a027dbd30fb2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "333033a1-fce0-4be9-8d31-df79c8b8d9ef",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "333033a1-fce0-4be9-8d31-df79c8b8d9ef"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f372134f-6461-43ec-92de-b64db82d0b3b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f372134f-6461-43ec-92de-b64db82d0b3b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "46d4cd37-f4dd-4225-bfb9-ad864ded1681",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "46d4cd37-f4dd-4225-bfb9-ad864ded1681"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d057d848-5e18-4897-b04c-ace0549fc846",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d057d848-5e18-4897-b04c-ace0549fc846"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "31ddbd07-663f-4433-a24c-d1f706f31dba",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "31ddbd07-663f-4433-a24c-d1f706f31dba"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0fbf7791-d74e-4b65-a2f5-ab380f50b79f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0fbf7791-d74e-4b65-a2f5-ab380f50b79f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "24c646cf-6a1e-41b2-b109-9d98db708516",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "24c646cf-6a1e-41b2-b109-9d98db708516"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8efc476d-c0d3-46f7-9dfc-bbe522ea77f4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8efc476d-c0d3-46f7-9dfc-bbe522ea77f4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2cfb4e2d-82eb-414d-a0cc-9d1f8441446b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2cfb4e2d-82eb-414d-a0cc-9d1f8441446b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0707d62f-31ee-4b40-b435-bfa26e3e3566",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0707d62f-31ee-4b40-b435-bfa26e3e3566"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "71df67fc-21ff-497f-89bd-615577dace2e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "71df67fc-21ff-497f-89bd-615577dace2e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c9a8a040-b2de-42a3-b1f9-5f79ed8ccd43",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c9a8a040-b2de-42a3-b1f9-5f79ed8ccd43"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e712446a-4325-485c-9cde-8ed6dada50aa",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e712446a-4325-485c-9cde-8ed6dada50aa"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0f83782c-1e4c-4dd4-be31-88a91dad8717",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0f83782c-1e4c-4dd4-be31-88a91dad8717"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b5cdc671-35ab-4bff-ba24-05da8a0244f5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b5cdc671-35ab-4bff-ba24-05da8a0244f5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a0f3c672-4543-4b81-9584-e9c5adab1b9f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a0f3c672-4543-4b81-9584-e9c5adab1b9f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "151774b8-89ec-47ec-b5ca-6aab0ea4d5af",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "151774b8-89ec-47ec-b5ca-6aab0ea4d5af"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e5fce67c-812c-4971-a538-85a0331dbdb3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e5fce67c-812c-4971-a538-85a0331dbdb3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3f3c22db-6eb5-44e5-9469-250a34d506c4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3f3c22db-6eb5-44e5-9469-250a34d506c4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "00baa65a-d5db-4774-9571-355efddede5b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "00baa65a-d5db-4774-9571-355efddede5b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "415b6694-fef2-4e26-8ccb-8610568db964",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "415b6694-fef2-4e26-8ccb-8610568db964"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8a9627b6-ea7c-4b6e-9826-87d9353cc5c1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8a9627b6-ea7c-4b6e-9826-87d9353cc5c1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3dd8f23c-97f6-4f14-ae80-0cc1090292ef",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3dd8f23c-97f6-4f14-ae80-0cc1090292ef"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "af2ed014-c92d-4239-a7ce-22932625dce8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "af2ed014-c92d-4239-a7ce-22932625dce8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "21ad66a4-e025-4b1a-9d8e-774e4559f2ae",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "21ad66a4-e025-4b1a-9d8e-774e4559f2ae"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eecbe7c6-9c8c-488d-a503-5bf0bcbda83f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eecbe7c6-9c8c-488d-a503-5bf0bcbda83f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b05192c6-1942-4e04-9af4-3d5d2dcbe725",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b05192c6-1942-4e04-9af4-3d5d2dcbe725"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c21ed014-98ae-452f-a7f5-89ddbf88e637",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c21ed014-98ae-452f-a7f5-89ddbf88e637"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e045ddad-0afb-4185-81d4-c9e63531777e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e045ddad-0afb-4185-81d4-c9e63531777e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "17fc5411-c71a-4989-9e70-e658688b75e7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "17fc5411-c71a-4989-9e70-e658688b75e7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d94521ee-5e15-40a4-b97e-ff4d42d9152f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d94521ee-5e15-40a4-b97e-ff4d42d9152f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "de5c1a3a-71c5-4cf4-9cd8-414522ab94a0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "de5c1a3a-71c5-4cf4-9cd8-414522ab94a0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9352c86d-0bcd-4969-a05a-0274f731379e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9352c86d-0bcd-4969-a05a-0274f731379e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f937a476-ba0b-4ee4-84e9-33452c574611",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f937a476-ba0b-4ee4-84e9-33452c574611"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fc55e1f3-3eb5-449e-ab96-d6714276b4d6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fc55e1f3-3eb5-449e-ab96-d6714276b4d6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2c0a9ce1-c95e-4536-80c4-0badd454a318",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2c0a9ce1-c95e-4536-80c4-0badd454a318"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "54a3bc05-ebf9-43ae-880c-a0af073a8729",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "54a3bc05-ebf9-43ae-880c-a0af073a8729"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3ee15aaa-4543-4b2c-a643-3713512d8bfb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3ee15aaa-4543-4b2c-a643-3713512d8bfb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4d410e88-7144-497f-a01e-f2a610c11773",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4d410e88-7144-497f-a01e-f2a610c11773"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "43d456c1-1a26-471c-8d73-ed2d2c39b97e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "43d456c1-1a26-471c-8d73-ed2d2c39b97e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b9df268e-7a01-4d96-af04-751b7bf6c271",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b9df268e-7a01-4d96-af04-751b7bf6c271"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "00266e9b-05ca-4eb7-8b0b-081b6247f750",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "00266e9b-05ca-4eb7-8b0b-081b6247f750"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5c18aa37-9a3b-4fe2-9026-2cbb7bfa48f0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5c18aa37-9a3b-4fe2-9026-2cbb7bfa48f0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c676dace-4b79-472d-b994-580d8a07ea96",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c676dace-4b79-472d-b994-580d8a07ea96"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "da90054e-cecd-40a3-9383-d9cc7d2ad6be",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "da90054e-cecd-40a3-9383-d9cc7d2ad6be"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6326e362-fcdc-43f7-bc5e-43b66396ab49",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6326e362-fcdc-43f7-bc5e-43b66396ab49"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "09d655cf-81fb-493f-9305-8ecd87a0ae5a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "09d655cf-81fb-493f-9305-8ecd87a0ae5a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e9ec6f7f-2d0f-465f-80e0-20ea24e4ffd2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e9ec6f7f-2d0f-465f-80e0-20ea24e4ffd2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8a9a8c58-f4e9-4282-8049-887df793433b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8a9a8c58-f4e9-4282-8049-887df793433b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4f8bcd5e-f9a4-4b7f-880c-1467ef5b9ab7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4f8bcd5e-f9a4-4b7f-880c-1467ef5b9ab7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "64ee9293-5df8-4a74-b3a9-95e722d31316",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "64ee9293-5df8-4a74-b3a9-95e722d31316"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e4a57604-cbb7-42d7-b654-63fc8c23deb4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e4a57604-cbb7-42d7-b654-63fc8c23deb4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d6dbb546-faf2-438f-9a2e-8671839375b4",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d6dbb546-faf2-438f-9a2e-8671839375b4"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eaade0b0-1dbe-4788-9c4a-2263adccc342",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eaade0b0-1dbe-4788-9c4a-2263adccc342"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6007aebf-81dd-40d3-acc4-826618ca71dd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6007aebf-81dd-40d3-acc4-826618ca71dd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "193a7a43-65ea-4776-b33d-ddd038a62c22",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "193a7a43-65ea-4776-b33d-ddd038a62c22"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "674304d8-f398-4826-a328-fdbb8c53a89c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "674304d8-f398-4826-a328-fdbb8c53a89c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c7cd8ac6-b538-4e23-b02d-6ae3d0bf8864",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c7cd8ac6-b538-4e23-b02d-6ae3d0bf8864"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "42ea14d0-e1fd-4a05-861f-199fe62d39ff",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "42ea14d0-e1fd-4a05-861f-199fe62d39ff"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5b744567-1f81-495e-9a17-93990820cf7c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5b744567-1f81-495e-9a17-93990820cf7c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6a4ca111-3047-471c-8ef0-c9d0137fd83e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6a4ca111-3047-471c-8ef0-c9d0137fd83e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "be3025ac-b996-4a45-93cc-d452e62827cc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "be3025ac-b996-4a45-93cc-d452e62827cc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fb19ed50-8051-4d3e-a079-1a50d6b5ce05",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fb19ed50-8051-4d3e-a079-1a50d6b5ce05"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9e020e8a-7276-4e15-b938-a82edacde63d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9e020e8a-7276-4e15-b938-a82edacde63d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "18cc6156-068d-403e-8c22-b67c69f6dd9a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "18cc6156-068d-403e-8c22-b67c69f6dd9a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1a4c20ac-36dd-4a52-aa7d-c2decd34d016",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1a4c20ac-36dd-4a52-aa7d-c2decd34d016"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4cc6130b-1af7-4da2-bc56-d5364974e633",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4cc6130b-1af7-4da2-bc56-d5364974e633"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0ef3376f-53fc-4652-af3b-184185c510eb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0ef3376f-53fc-4652-af3b-184185c510eb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bde5dc23-f644-4520-9ff7-62566e7f86b2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bde5dc23-f644-4520-9ff7-62566e7f86b2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "81bf3bae-8226-4eb0-bd33-ec7484178144",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "81bf3bae-8226-4eb0-bd33-ec7484178144"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8fe7e0c8-7eb6-470a-83a2-721624ef2e6c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8fe7e0c8-7eb6-470a-83a2-721624ef2e6c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4752bfee-84b6-4c1e-a97a-75c66530f4fe",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4752bfee-84b6-4c1e-a97a-75c66530f4fe"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d60d8111-21eb-4915-a983-6473107f8b6c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d60d8111-21eb-4915-a983-6473107f8b6c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2fd1bcc2-20fb-42ff-bb27-aa5732794a55",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2fd1bcc2-20fb-42ff-bb27-aa5732794a55"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "79dbeadb-adc3-4652-b711-44e7b1914721",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "79dbeadb-adc3-4652-b711-44e7b1914721"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ce7e76e0-341d-4de1-b3d3-c92d1a9734ee",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ce7e76e0-341d-4de1-b3d3-c92d1a9734ee"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "747fca3d-3b22-470b-84c5-7396acb4e2eb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "747fca3d-3b22-470b-84c5-7396acb4e2eb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3b6088e0-7b64-4bcd-801a-b4a6952bc7a3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3b6088e0-7b64-4bcd-801a-b4a6952bc7a3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "498c3a62-96e7-4949-908a-c80b9f9afef7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "498c3a62-96e7-4949-908a-c80b9f9afef7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6f65c5c2-d4e3-48a8-81b9-7c622d534378",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6f65c5c2-d4e3-48a8-81b9-7c622d534378"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "47bb57bf-a21b-4cbd-b912-0ec55fa1477f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "47bb57bf-a21b-4cbd-b912-0ec55fa1477f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1193baf7-c35d-4eee-ac29-05faacc61673",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1193baf7-c35d-4eee-ac29-05faacc61673"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fa61f24b-044d-49df-8807-b0f5e00ee3b5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fa61f24b-044d-49df-8807-b0f5e00ee3b5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "08425a70-e2c2-4606-98a2-6f1d6ce6583d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "08425a70-e2c2-4606-98a2-6f1d6ce6583d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3af989b8-b54f-46fc-a487-504d86d9bb90",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3af989b8-b54f-46fc-a487-504d86d9bb90"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6222dc81-b8be-4d40-8e95-0ef74a3c9b0c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6222dc81-b8be-4d40-8e95-0ef74a3c9b0c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "43305f10-697e-4d5d-a71c-c1c2c8595cb1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "43305f10-697e-4d5d-a71c-c1c2c8595cb1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "64e33e51-a51d-4ac8-8bde-536c110ab74e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "64e33e51-a51d-4ac8-8bde-536c110ab74e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "04b235a4-a07e-4ef6-8198-e468f59f36d8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "04b235a4-a07e-4ef6-8198-e468f59f36d8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6807ebb5-b384-4c92-b604-f1314b605f7b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6807ebb5-b384-4c92-b604-f1314b605f7b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "67c54c5d-b173-4957-810a-c1d957a6ea2e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "67c54c5d-b173-4957-810a-c1d957a6ea2e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "11f9f56e-01d9-4a9c-8f3f-0a6faa2c1918",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "11f9f56e-01d9-4a9c-8f3f-0a6faa2c1918"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4ce2f177-151a-4be8-85d3-c27c33f9eda8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4ce2f177-151a-4be8-85d3-c27c33f9eda8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e699e25b-f5b4-4f6d-8db3-97567f5be5f5",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e699e25b-f5b4-4f6d-8db3-97567f5be5f5"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c01cc786-4908-435f-a670-151943275637",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c01cc786-4908-435f-a670-151943275637"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b7861380-56d6-4121-85a2-d4dde3432a8a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b7861380-56d6-4121-85a2-d4dde3432a8a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1082b534-1b7c-4757-b6d3-e82b7084584f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1082b534-1b7c-4757-b6d3-e82b7084584f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "aaf9417b-184c-49bd-a29d-513a27a88561",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "aaf9417b-184c-49bd-a29d-513a27a88561"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "86b2d3cd-528f-415a-b4ef-25b8811ae1a6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "86b2d3cd-528f-415a-b4ef-25b8811ae1a6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "036cefac-2a01-4598-b34e-bdd569614888",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "036cefac-2a01-4598-b34e-bdd569614888"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "286013fe-f174-48bc-85d6-1e3aace04e8c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "286013fe-f174-48bc-85d6-1e3aace04e8c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8a6a8306-47f6-4e82-8a3a-fc7cfe05b371",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8a6a8306-47f6-4e82-8a3a-fc7cfe05b371"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "25c80a07-52cd-4a48-8653-f0e85c6c5588",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "25c80a07-52cd-4a48-8653-f0e85c6c5588"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "63f6f93b-570a-4dee-8f92-c60b05cb4bbf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "63f6f93b-570a-4dee-8f92-c60b05cb4bbf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ee91da1b-4f42-400b-a7ae-2c23615ac47f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ee91da1b-4f42-400b-a7ae-2c23615ac47f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ba259ae0-20b0-4b38-82d2-9a5572c23b38",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ba259ae0-20b0-4b38-82d2-9a5572c23b38"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5077286b-9959-4c1b-a74d-a2ad69cd5ceb",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5077286b-9959-4c1b-a74d-a2ad69cd5ceb"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3e90b783-7c3f-40e3-8a95-fd5cafd70a9b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3e90b783-7c3f-40e3-8a95-fd5cafd70a9b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5710c3d2-a352-485e-b602-00c547d06095",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5710c3d2-a352-485e-b602-00c547d06095"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "46929ada-ade4-416f-9696-6125eb61ed28",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "46929ada-ade4-416f-9696-6125eb61ed28"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "96458e6f-95ff-49b6-82cb-51727fa3a3e0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "96458e6f-95ff-49b6-82cb-51727fa3a3e0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4c8b5ef9-8e35-433a-82de-e3f9eb7bf74c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4c8b5ef9-8e35-433a-82de-e3f9eb7bf74c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "10a93127-8f18-4490-bcb2-bcdd7c8f519f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "10a93127-8f18-4490-bcb2-bcdd7c8f519f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "364c0a78-349c-4c45-bd12-f5a6fba6ca66",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "364c0a78-349c-4c45-bd12-f5a6fba6ca66"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d7531d27-d343-44fd-9a7f-e5b1c0f08abf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d7531d27-d343-44fd-9a7f-e5b1c0f08abf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7f68d12c-6aef-4af2-8934-1e76a44a3a31",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7f68d12c-6aef-4af2-8934-1e76a44a3a31"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "91144586-65ac-4740-911d-ce344387ad36",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "91144586-65ac-4740-911d-ce344387ad36"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3a45f196-7e57-4ea8-8294-1e26d75b2b39",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3a45f196-7e57-4ea8-8294-1e26d75b2b39"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c42fa6e8-f824-4157-93a3-f4172253d2b2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c42fa6e8-f824-4157-93a3-f4172253d2b2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "55c5e926-09c7-43fc-bdc6-ef9d7f454071",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "55c5e926-09c7-43fc-bdc6-ef9d7f454071"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d862735b-8239-4fdf-830d-b6943dbbd880",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d862735b-8239-4fdf-830d-b6943dbbd880"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "28627479-0c74-4d63-8295-4b26df94beff",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "28627479-0c74-4d63-8295-4b26df94beff"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "424ead3a-6912-4e80-bf7d-cb78b7849b9a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "424ead3a-6912-4e80-bf7d-cb78b7849b9a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ea2a0dbe-5b53-45af-b13c-ab3d58e725dc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ea2a0dbe-5b53-45af-b13c-ab3d58e725dc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "17d1bffb-7bcc-4c68-b7d3-04b1adc5f4e6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "17d1bffb-7bcc-4c68-b7d3-04b1adc5f4e6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "24ddcd93-6803-46cb-b4ca-c2561b223c0b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "24ddcd93-6803-46cb-b4ca-c2561b223c0b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7c55b3ab-952e-4c6e-a59e-52dbee97b07f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7c55b3ab-952e-4c6e-a59e-52dbee97b07f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "c59e4d47-c3ad-4fba-b43b-fd07cf9a8cf3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "c59e4d47-c3ad-4fba-b43b-fd07cf9a8cf3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d416973b-a458-49e8-843f-1d6768bd7286",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d416973b-a458-49e8-843f-1d6768bd7286"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "92448180-ac3b-40dd-b669-9daed5863237",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "92448180-ac3b-40dd-b669-9daed5863237"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0b97f70b-3660-4155-aedd-3c7cac9e296c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0b97f70b-3660-4155-aedd-3c7cac9e296c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9c1c1358-d035-4940-bd75-3da89ab16460",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9c1c1358-d035-4940-bd75-3da89ab16460"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "87af2031-4349-41f8-977c-a64bcee6f3bc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "87af2031-4349-41f8-977c-a64bcee6f3bc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5af200f1-bf85-4c90-89ee-5984750013c7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5af200f1-bf85-4c90-89ee-5984750013c7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "42b594e8-6dd5-44ce-8a0b-3acc5d2c2e96",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "42b594e8-6dd5-44ce-8a0b-3acc5d2c2e96"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a5732f85-5d0a-4fac-a313-e5a7b61b92fd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a5732f85-5d0a-4fac-a313-e5a7b61b92fd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "825946c6-1e17-4140-b29c-a76159b55fca",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "825946c6-1e17-4140-b29c-a76159b55fca"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "36d7d10c-4faf-4edd-9967-576ce37f5d18",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "36d7d10c-4faf-4edd-9967-576ce37f5d18"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3a79749b-a6b3-4663-8906-c3b7f6604578",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3a79749b-a6b3-4663-8906-c3b7f6604578"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bf5f2462-1345-4e0b-bc8a-53b88d4b2769",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bf5f2462-1345-4e0b-bc8a-53b88d4b2769"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9374791e-f668-42da-88b3-19497c04926f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9374791e-f668-42da-88b3-19497c04926f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "156b62d5-0f85-4cda-ac22-34f111764b2b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "156b62d5-0f85-4cda-ac22-34f111764b2b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f7849156-bf0c-498b-b7c6-01d980025c73",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f7849156-bf0c-498b-b7c6-01d980025c73"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9451433a-d059-4c83-8b35-883ea9271d34",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9451433a-d059-4c83-8b35-883ea9271d34"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "5562ae39-a2ec-498a-ae06-b582e1dbe42a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "5562ae39-a2ec-498a-ae06-b582e1dbe42a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e496da38-9934-4d06-9f29-99416c58e8f3",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e496da38-9934-4d06-9f29-99416c58e8f3"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "87e750df-6c48-4352-b368-09eb7f5ccf80",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "87e750df-6c48-4352-b368-09eb7f5ccf80"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "42d50a78-419d-422e-9918-42dff1e9c967",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "42d50a78-419d-422e-9918-42dff1e9c967"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cbb67606-59ef-426c-a7ee-0ea76f5e287e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cbb67606-59ef-426c-a7ee-0ea76f5e287e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a61ee0d1-88cc-4b2b-94b9-0d3e8f466e60",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a61ee0d1-88cc-4b2b-94b9-0d3e8f466e60"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "122434db-8b27-470b-b2f6-138e711aca8a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "122434db-8b27-470b-b2f6-138e711aca8a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1b1ea057-637f-4f3c-8e0a-e8a292724a73",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1b1ea057-637f-4f3c-8e0a-e8a292724a73"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "4cde26a1-2bba-43c9-866c-5ddf9e36314c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "4cde26a1-2bba-43c9-866c-5ddf9e36314c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "dd06d4e7-3c5e-4b06-8cb0-f3f50d94e088",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "dd06d4e7-3c5e-4b06-8cb0-f3f50d94e088"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "68630cb7-3d19-433d-aa13-bb317b388e6a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "68630cb7-3d19-433d-aa13-bb317b388e6a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f9d0024d-d304-4466-b09e-7ead0cc06a7e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f9d0024d-d304-4466-b09e-7ead0cc06a7e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "46822af3-3780-4cc5-8d82-70587bc254ed",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "46822af3-3780-4cc5-8d82-70587bc254ed"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ff0d4e5a-f529-405a-a9bd-28ee24e7858a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ff0d4e5a-f529-405a-a9bd-28ee24e7858a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fc0e3894-03ad-47cc-8c06-3aff525b6e22",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fc0e3894-03ad-47cc-8c06-3aff525b6e22"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "61ac6074-9439-41d6-9bf7-666a2464a496",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "61ac6074-9439-41d6-9bf7-666a2464a496"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0784be45-a0ca-4063-b5a6-44f92f0c1a98",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0784be45-a0ca-4063-b5a6-44f92f0c1a98"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "a56da70a-f250-4e9f-90f2-8933792f5594",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "a56da70a-f250-4e9f-90f2-8933792f5594"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "42f54f4d-c99b-4833-9f10-057d64e27644",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "42f54f4d-c99b-4833-9f10-057d64e27644"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "274dd5ed-8ce5-46d0-8c28-b2fc089a43bf",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "274dd5ed-8ce5-46d0-8c28-b2fc089a43bf"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f406e57b-ab2c-48d3-872e-3296ae9ca3ad",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f406e57b-ab2c-48d3-872e-3296ae9ca3ad"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6ba85f67-38f1-427a-8a65-7cbd6e97c244",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6ba85f67-38f1-427a-8a65-7cbd6e97c244"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1525410e-96a2-4799-88c7-ddeac933c527",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1525410e-96a2-4799-88c7-ddeac933c527"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "50e4e425-2c48-433c-a902-4f566f61bab9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "50e4e425-2c48-433c-a902-4f566f61bab9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "199ecedb-a95c-4944-aefb-ba59cb607f74",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "199ecedb-a95c-4944-aefb-ba59cb607f74"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ad55894c-557d-421c-9a8a-2ba0c5ca5ba9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ad55894c-557d-421c-9a8a-2ba0c5ca5ba9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "ff781435-84e6-4e16-9d4a-651719700ba2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "ff781435-84e6-4e16-9d4a-651719700ba2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "3ffe7c44-f2a6-409b-874b-e5576925c92a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "3ffe7c44-f2a6-409b-874b-e5576925c92a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "609d36cf-c7a5-4b93-9471-059a6ecb2a95",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "609d36cf-c7a5-4b93-9471-059a6ecb2a95"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "0c37eedb-e2ff-4595-b01e-8affbb1aa70c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "0c37eedb-e2ff-4595-b01e-8affbb1aa70c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1b6f4399-23f3-4624-af33-775eb53bab1b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1b6f4399-23f3-4624-af33-775eb53bab1b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "310a7417-f9da-4ba2-9db7-c2444360d0c1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "310a7417-f9da-4ba2-9db7-c2444360d0c1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "be55820f-6b62-4976-aaf3-a86032b3ced7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "be55820f-6b62-4976-aaf3-a86032b3ced7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f082232e-31cb-4221-86f6-b49cc40a4345",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f082232e-31cb-4221-86f6-b49cc40a4345"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9f253949-431e-439c-b7c5-249cb336209a",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9f253949-431e-439c-b7c5-249cb336209a"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "1ee986e0-06fa-48a9-8441-85a4f6480412",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "1ee986e0-06fa-48a9-8441-85a4f6480412"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "937a1a46-d3ad-482f-b844-1c3ca8941196",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "937a1a46-d3ad-482f-b844-1c3ca8941196"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e950f844-5e06-471f-9f72-0af1427a3699",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e950f844-5e06-471f-9f72-0af1427a3699"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e9fee22f-f032-41e4-b1ac-e6359f6ea1cd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e9fee22f-f032-41e4-b1ac-e6359f6ea1cd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "78fa6fcd-7563-4d80-8e3b-dc9e3732f344",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "78fa6fcd-7563-4d80-8e3b-dc9e3732f344"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "bfd66a3b-77f2-4d92-b635-7feee7854ecd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "bfd66a3b-77f2-4d92-b635-7feee7854ecd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8e8b6a2e-7103-4ed0-b577-e88986209a81",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8e8b6a2e-7103-4ed0-b577-e88986209a81"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2c5e378a-398b-46c4-a8af-5bfbedc8e47d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2c5e378a-398b-46c4-a8af-5bfbedc8e47d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "8e31d8b1-0561-4d69-849c-8903617e1163",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "8e31d8b1-0561-4d69-849c-8903617e1163"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "92175e5a-55ca-4472-acb1-d2e36ab55c74",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "92175e5a-55ca-4472-acb1-d2e36ab55c74"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6c80b6df-d9d5-4d66-89c2-aace519c6b06",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6c80b6df-d9d5-4d66-89c2-aace519c6b06"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9a8b9731-6a5c-49ca-95f7-a49a08cd95f2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9a8b9731-6a5c-49ca-95f7-a49a08cd95f2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e1f79bd2-b88c-4680-91c7-38bcb3197f84",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e1f79bd2-b88c-4680-91c7-38bcb3197f84"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "991347d4-0711-4bbd-89ee-5ad59a1db951",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "991347d4-0711-4bbd-89ee-5ad59a1db951"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f7659f4d-8172-4963-8a57-121ca806f3c6",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f7659f4d-8172-4963-8a57-121ca806f3c6"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7a9faf53-43e7-4ad2-bcf6-ccb717565b97",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7a9faf53-43e7-4ad2-bcf6-ccb717565b97"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fc269a38-52ba-465f-98fd-a3ba22979724",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fc269a38-52ba-465f-98fd-a3ba22979724"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "911e3d61-1dd0-4f98-adf2-1db5b3412c3d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "911e3d61-1dd0-4f98-adf2-1db5b3412c3d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7bf1cda9-dad8-45bf-8329-3d5e1a21044f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7bf1cda9-dad8-45bf-8329-3d5e1a21044f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7741befb-834e-49c3-959e-fea787ddcc3b",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7741befb-834e-49c3-959e-fea787ddcc3b"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "12bc793c-3da3-44a7-bc41-81b1d6f4a9e9",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "12bc793c-3da3-44a7-bc41-81b1d6f4a9e9"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "fbd82297-afd4-4ec3-9b5c-3584a20f7bbd",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "fbd82297-afd4-4ec3-9b5c-3584a20f7bbd"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "b6229bee-64b6-4480-bed4-d589bade811f",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "b6229bee-64b6-4480-bed4-d589bade811f"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "574c6634-904e-4de2-8566-541379460b8e",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "574c6634-904e-4de2-8566-541379460b8e"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2e837872-63d8-4c5d-b136-f0f3441e4df2",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2e837872-63d8-4c5d-b136-f0f3441e4df2"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "e98ab221-8d51-46bc-8b8a-a9f5a9aeebe0",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "e98ab221-8d51-46bc-8b8a-a9f5a9aeebe0"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "7cb525c4-29d0-4086-ac04-884d73fa91df",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "7cb525c4-29d0-4086-ac04-884d73fa91df"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d6e6ed9a-8a0c-4cac-8f74-9fa7def99e60",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d6e6ed9a-8a0c-4cac-8f74-9fa7def99e60"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "67cfa896-2d50-466d-91d7-d1f0271d41a1",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "67cfa896-2d50-466d-91d7-d1f0271d41a1"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "6d821e71-dffe-4a1f-9eae-5f6ff3c71cca",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "6d821e71-dffe-4a1f-9eae-5f6ff3c71cca"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "36a5ec5f-a972-4234-80ba-ecc87ef6b643",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "36a5ec5f-a972-4234-80ba-ecc87ef6b643"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "9b7fc3b3-ee06-4457-a2e1-d2f3245e79ca",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "9b7fc3b3-ee06-4457-a2e1-d2f3245e79ca"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "cd7d4a31-64be-41b0-8dc5-d2b419bb9c7d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "cd7d4a31-64be-41b0-8dc5-d2b419bb9c7d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "2daa2534-634d-4a92-a3d9-3bd5d9d62d9c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "2daa2534-634d-4a92-a3d9-3bd5d9d62d9c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eac1ca8c-a59c-4d8f-bf47-098abda34ff8",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eac1ca8c-a59c-4d8f-bf47-098abda34ff8"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "16a66445-c55e-49dc-a955-1909bdd7172c",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "16a66445-c55e-49dc-a955-1909bdd7172c"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f9351a92-656c-4593-8121-463756e47f95",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f9351a92-656c-4593-8121-463756e47f95"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "af530807-6270-469f-b44e-cb375b57b6bc",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "af530807-6270-469f-b44e-cb375b57b6bc"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "27ffa5e6-d882-4112-9212-cccafdf08e0d",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "27ffa5e6-d882-4112-9212-cccafdf08e0d"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "048f4666-8417-433f-a840-ed2016f17546",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "048f4666-8417-433f-a840-ed2016f17546"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d813d829-8aae-444b-8b77-25652a5cd542",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d813d829-8aae-444b-8b77-25652a5cd542"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "96d40db1-6cd1-4dcc-994a-534c4d0fdf46",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "96d40db1-6cd1-4dcc-994a-534c4d0fdf46"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "de5e94bf-6e07-412c-8769-c8618e7b2c67",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "de5e94bf-6e07-412c-8769-c8618e7b2c67"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "48c3fed7-92c6-4ae0-8f74-09cb084b1c54",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "48c3fed7-92c6-4ae0-8f74-09cb084b1c54"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "947f5686-aa82-4333-b032-eea5f72b3b09",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "947f5686-aa82-4333-b032-eea5f72b3b09"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "eb3436ea-8154-4665-9168-b352f6dd7913",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "eb3436ea-8154-4665-9168-b352f6dd7913"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "58d1b6c9-c9e1-4ed5-9219-094c722977e7",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "58d1b6c9-c9e1-4ed5-9219-094c722977e7"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "f9ec9556-f559-4de9-9b68-70896ffa7270",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "f9ec9556-f559-4de9-9b68-70896ffa7270"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "609e7c17-f5ab-47c5-9d8e-10e395d8a560",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "609e7c17-f5ab-47c5-9d8e-10e395d8a560"
    }
  },
  {
    "_index" : "shipments_v2",
    "_type" : "kafka-connect",
    "_id" : "d28eafdc-84e7-42fa-916a-d7396f07f0ce",
    "_score" : 4.0,
    "_source" : {
      "uuid" : "d28eafdc-84e7-42fa-916a-d7396f07f0ce"
    }
  }
]

const uuids = objectsArray.map(obj => obj._source.uuid);

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