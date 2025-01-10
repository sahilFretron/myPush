const FRT_PUB_BASE_URL = "https://apis.fretron.com"
import rp from "request-promise"
// let shIds = [
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "9168171d-626e-4297-be53-c77d48d7e12d",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "9168171d-626e-4297-be53-c77d48d7e12d"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "db8045f4-dcdc-4708-981b-40c8824d2a8d",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "db8045f4-dcdc-4708-981b-40c8824d2a8d"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "32457f45-d506-4ebc-a791-59465f4e9aef",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "32457f45-d506-4ebc-a791-59465f4e9aef"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "668beaf5-4c14-4e9c-a99e-c2114852f4bf",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "668beaf5-4c14-4e9c-a99e-c2114852f4bf"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "ac24a360-e65c-440e-84c7-69a8834ea152",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "ac24a360-e65c-440e-84c7-69a8834ea152"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "7c7b4ba1-4fda-4fe1-ab53-61fce485e8c9",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "7c7b4ba1-4fda-4fe1-ab53-61fce485e8c9"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "710020bd-3a1d-473a-8a4d-a84c6a7a3847",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "710020bd-3a1d-473a-8a4d-a84c6a7a3847"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "52d77a30-35ef-41da-8138-959f8520143e",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "52d77a30-35ef-41da-8138-959f8520143e"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "74ae4263-9269-4389-9bb3-e0ceb901b6f0",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "74ae4263-9269-4389-9bb3-e0ceb901b6f0"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "5f84c019-beb2-49f3-8d47-481cdf065a92",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "5f84c019-beb2-49f3-8d47-481cdf065a92"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "b1f126f2-9f88-42fd-98c3-2254e25ef993",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "b1f126f2-9f88-42fd-98c3-2254e25ef993"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "572bb122-7513-4c7e-908c-141d45f700d1",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "572bb122-7513-4c7e-908c-141d45f700d1"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "2a561a29-04fd-426a-ada2-5ec1669467f6",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "2a561a29-04fd-426a-ada2-5ec1669467f6"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "691af487-1424-4c74-92e6-20615991f9e0",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "691af487-1424-4c74-92e6-20615991f9e0"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "28f82ede-e993-4c8b-96d8-a8392f963af5",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "28f82ede-e993-4c8b-96d8-a8392f963af5"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "728e0428-7f91-4013-8cb8-d59b2bbc96ec",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "728e0428-7f91-4013-8cb8-d59b2bbc96ec"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "38b13f77-4052-49ca-a804-84b8697f785b",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "38b13f77-4052-49ca-a804-84b8697f785b"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "19c49c96-0568-414d-ad0c-910accb42d2e",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "19c49c96-0568-414d-ad0c-910accb42d2e"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "610b3d53-2feb-448b-b7ab-1957eed62355",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "610b3d53-2feb-448b-b7ab-1957eed62355"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "ae178910-0e3d-48be-9d0b-ff19b77b0f4d",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "ae178910-0e3d-48be-9d0b-ff19b77b0f4d"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "10652d99-10cc-45e6-b656-146ea22f86f0",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "10652d99-10cc-45e6-b656-146ea22f86f0"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "89895958-f450-4d43-835e-cf9fabda0af9",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "89895958-f450-4d43-835e-cf9fabda0af9"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "d2a06ab0-5dc1-422d-97ee-6b34c9393452",
//         "_score": 7.199326,
//         "_source": {
//             "uuid": "d2a06ab0-5dc1-422d-97ee-6b34c9393452"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "1899291b-ec59-4dee-9c92-bd4e1ed995fb",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "1899291b-ec59-4dee-9c92-bd4e1ed995fb"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "2022c741-ca1d-4c25-b1d2-2e51faf663e9",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "2022c741-ca1d-4c25-b1d2-2e51faf663e9"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "28cc6c74-1573-43a5-803f-3a62a846aa91",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "28cc6c74-1573-43a5-803f-3a62a846aa91"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "2068667c-a25b-459a-8118-61dc55965700",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "2068667c-a25b-459a-8118-61dc55965700"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "21e0ba32-2ec8-41c2-be0d-f96fb4b2e15c",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "21e0ba32-2ec8-41c2-be0d-f96fb4b2e15c"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "7b20707d-e083-4b47-b672-500f956b356e",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "7b20707d-e083-4b47-b672-500f956b356e"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "50cb4806-df55-4d87-aace-0c1893b283bf",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "50cb4806-df55-4d87-aace-0c1893b283bf"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "2ae54b1a-c6ff-474a-893c-1200bc7b0d32",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "2ae54b1a-c6ff-474a-893c-1200bc7b0d32"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "7a2d2f06-a4de-4f47-bf6b-1836657a4a3c",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "7a2d2f06-a4de-4f47-bf6b-1836657a4a3c"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "9dff4b64-5dfa-4d91-ad86-0c21f0b4868b",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "9dff4b64-5dfa-4d91-ad86-0c21f0b4868b"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "67f7ba58-cf98-4112-a06d-c84f536714e0",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "67f7ba58-cf98-4112-a06d-c84f536714e0"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "1338eb35-bea7-46a3-8b03-3d16ab03f435",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "1338eb35-bea7-46a3-8b03-3d16ab03f435"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "9a52dd54-e490-4309-8724-c83b092d7b43",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "9a52dd54-e490-4309-8724-c83b092d7b43"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "a485e3ce-109f-4e8d-827e-167d029201f2",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "a485e3ce-109f-4e8d-827e-167d029201f2"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "15ae9d3b-dcdd-456d-bcbd-fbd2fc409ee5",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "15ae9d3b-dcdd-456d-bcbd-fbd2fc409ee5"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "606110a3-df92-41fa-a24d-fd0881238b5a",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "606110a3-df92-41fa-a24d-fd0881238b5a"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "96936796-83ee-4aa5-af7a-469e91390013",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "96936796-83ee-4aa5-af7a-469e91390013"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "a24bfb08-8e01-4e4d-94ed-1b0da61af4ec",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "a24bfb08-8e01-4e4d-94ed-1b0da61af4ec"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "807d7b45-d4f3-4380-8020-f14e81f012fa",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "807d7b45-d4f3-4380-8020-f14e81f012fa"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "0a7f3a89-3999-4395-92cd-520f9424cc48",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "0a7f3a89-3999-4395-92cd-520f9424cc48"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "67222014-1373-4c54-9db1-f74e1ee95c7b",
//         "_score": 7.01508,
//         "_source": {
//             "uuid": "67222014-1373-4c54-9db1-f74e1ee95c7b"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "6b3b9f61-ee62-4759-ba8e-ed7396f1032b",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "6b3b9f61-ee62-4759-ba8e-ed7396f1032b"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "3b24e28a-5e95-451b-9b07-bf25a5992f10",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "3b24e28a-5e95-451b-9b07-bf25a5992f10"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "650989c6-6563-469a-a081-da58542f5981",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "650989c6-6563-469a-a081-da58542f5981"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "82a972d1-95ce-4ff7-a3f6-ed4c644bc36f",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "82a972d1-95ce-4ff7-a3f6-ed4c644bc36f"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "c528c846-db62-4395-9f46-f60ab52216dd",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "c528c846-db62-4395-9f46-f60ab52216dd"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "014098e6-eb29-427a-a1ea-acbc4402fb25",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "014098e6-eb29-427a-a1ea-acbc4402fb25"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "2b2f954b-fbcb-410a-8188-fac2c91b7ff8",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "2b2f954b-fbcb-410a-8188-fac2c91b7ff8"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "8a462e0b-ba73-4586-a10d-808b4236aa66",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "8a462e0b-ba73-4586-a10d-808b4236aa66"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "f342f885-681b-432f-9e81-8f7c8d12a5ce",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "f342f885-681b-432f-9e81-8f7c8d12a5ce"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "44aedf23-d8c1-4dbe-ad3c-481c113d1ba8",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "44aedf23-d8c1-4dbe-ad3c-481c113d1ba8"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "eb2c7e6d-78dc-451d-8007-26df53d4e2a9",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "eb2c7e6d-78dc-451d-8007-26df53d4e2a9"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "eb2c1c14-81a4-4487-8ecd-9f4937cefee1",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "eb2c1c14-81a4-4487-8ecd-9f4937cefee1"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "832d2cc1-8034-4b6f-9829-52789ee4844a",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "832d2cc1-8034-4b6f-9829-52789ee4844a"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "167a1830-9be2-4e2d-b555-25ff00d96449",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "167a1830-9be2-4e2d-b555-25ff00d96449"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "85f7474a-27cd-47c5-ad90-9a55354a651d",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "85f7474a-27cd-47c5-ad90-9a55354a651d"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "3cb34dae-ff91-47f2-a4f2-c55b631e3671",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "3cb34dae-ff91-47f2-a4f2-c55b631e3671"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "c91e00b2-a367-426e-bd79-c04afd436cc6",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "c91e00b2-a367-426e-bd79-c04afd436cc6"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "0e9954bc-cd94-444e-96e8-c6a3e0296ed5",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "0e9954bc-cd94-444e-96e8-c6a3e0296ed5"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "2112cb8d-670d-4aa9-a79b-2fb45726e7fe",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "2112cb8d-670d-4aa9-a79b-2fb45726e7fe"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "32ab9897-6b00-4432-a8f5-9b9d292721ee",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "32ab9897-6b00-4432-a8f5-9b9d292721ee"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "0093c785-4891-4219-96f3-887866eef87c",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "0093c785-4891-4219-96f3-887866eef87c"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "ac8e9949-43dc-4abe-ae7b-1d36e5658239",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "ac8e9949-43dc-4abe-ae7b-1d36e5658239"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "39cf1618-05bf-47f4-9160-d56575b3d542",
//         "_score": 6.994527,
//         "_source": {
//             "uuid": "39cf1618-05bf-47f4-9160-d56575b3d542"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "abf5b51c-0919-4d54-80ce-f98179296f54",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "abf5b51c-0919-4d54-80ce-f98179296f54"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "a545a8c6-9cb5-4846-adc4-79ad3ac1325d",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "a545a8c6-9cb5-4846-adc4-79ad3ac1325d"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "582f6f3a-cb93-4537-87ce-c36a2581e9d2",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "582f6f3a-cb93-4537-87ce-c36a2581e9d2"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "66938899-c15b-4b04-9ba4-d51fc03c91e4",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "66938899-c15b-4b04-9ba4-d51fc03c91e4"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "9ed08d99-e02e-4772-971b-660770dfd36a",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "9ed08d99-e02e-4772-971b-660770dfd36a"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "0b82dad7-ff34-44bb-a19e-e252deb81d91",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "0b82dad7-ff34-44bb-a19e-e252deb81d91"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "e3446107-9a68-4521-bf75-0401d4489ec9",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "e3446107-9a68-4521-bf75-0401d4489ec9"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "43a5ed1c-866f-448b-b5b2-5b3f5434bdba",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "43a5ed1c-866f-448b-b5b2-5b3f5434bdba"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "f7e56961-6498-4342-ba44-d214940def70",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "f7e56961-6498-4342-ba44-d214940def70"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "a77da512-d430-4853-a67b-47b407ffcced",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "a77da512-d430-4853-a67b-47b407ffcced"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "f565e7cd-eeab-4e26-b3df-2b09b2a317d8",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "f565e7cd-eeab-4e26-b3df-2b09b2a317d8"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "c9b792fc-ff52-4eae-8faf-e19d0f9b6521",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "c9b792fc-ff52-4eae-8faf-e19d0f9b6521"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "82f6fb8b-f290-4404-8f68-380c76d69647",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "82f6fb8b-f290-4404-8f68-380c76d69647"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "192f0bb5-67e4-445e-ad83-967733d66dcd",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "192f0bb5-67e4-445e-ad83-967733d66dcd"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "6f1a6ace-ce80-4ce9-95e4-9d69d2f77192",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "6f1a6ace-ce80-4ce9-95e4-9d69d2f77192"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "c6e2fdc2-c8f8-4077-b0ad-9851a5c04fac",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "c6e2fdc2-c8f8-4077-b0ad-9851a5c04fac"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "abb7c831-1ddb-4258-8d9c-39f2a9c75a65",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "abb7c831-1ddb-4258-8d9c-39f2a9c75a65"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "b5e32087-e33f-4dc9-851a-b1983ed9c28c",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "b5e32087-e33f-4dc9-851a-b1983ed9c28c"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "8e8a241f-dbe2-4c7d-9437-944aaa653bf7",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "8e8a241f-dbe2-4c7d-9437-944aaa653bf7"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "d97f4ce5-8e08-48a7-97f5-7dd1e44f2f6b",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "d97f4ce5-8e08-48a7-97f5-7dd1e44f2f6b"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "993495f0-dd41-4719-a934-a4e6600b7ed5",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "993495f0-dd41-4719-a934-a4e6600b7ed5"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "13c3e940-279f-4d48-8fe0-c345ca246072",
//         "_score": 6.9853554,
//         "_source": {
//             "uuid": "13c3e940-279f-4d48-8fe0-c345ca246072"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "0bd3c6af-9867-4211-9cf2-f4cb66dd8a71",
//         "_score": 6.943627,
//         "_source": {
//             "uuid": "0bd3c6af-9867-4211-9cf2-f4cb66dd8a71"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "5be792f9-2d96-498b-9873-96efbe2d394f",
//         "_score": 6.943627,
//         "_source": {
//             "uuid": "5be792f9-2d96-498b-9873-96efbe2d394f"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "e601a3d1-11ad-4e1f-b130-a63d75bd9f9d",
//         "_score": 6.943627,
//         "_source": {
//             "uuid": "e601a3d1-11ad-4e1f-b130-a63d75bd9f9d"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "4bff5561-5f6b-483b-a6b1-b6b2f1e57d51",
//         "_score": 6.943627,
//         "_source": {
//             "uuid": "4bff5561-5f6b-483b-a6b1-b6b2f1e57d51"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "e201ee6f-aa69-4d0a-bd8d-563109c8df41",
//         "_score": 6.943627,
//         "_source": {
//             "uuid": "e201ee6f-aa69-4d0a-bd8d-563109c8df41"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "715c93cf-e89c-4937-aa9b-c412c7c1cead",
//         "_score": 6.943627,
//         "_source": {
//             "uuid": "715c93cf-e89c-4937-aa9b-c412c7c1cead"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "86901ca2-3f90-45fd-8b61-fbffe86b89a7",
//         "_score": 6.943627,
//         "_source": {
//             "uuid": "86901ca2-3f90-45fd-8b61-fbffe86b89a7"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "a00e308c-400a-4bbd-b849-7b5d7d075f9c",
//         "_score": 6.943627,
//         "_source": {
//             "uuid": "a00e308c-400a-4bbd-b849-7b5d7d075f9c"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "f6ec42c8-5c5c-40aa-89ec-d3bc998ab8c4",
//         "_score": 6.943627,
//         "_source": {
//             "uuid": "f6ec42c8-5c5c-40aa-89ec-d3bc998ab8c4"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "c58f550e-ad42-4de8-bad5-352ffc47a033",
//         "_score": 6.943627,
//         "_source": {
//             "uuid": "c58f550e-ad42-4de8-bad5-352ffc47a033"
//         }
//     },
//     {
//         "_index": "shipments_v2",
//         "_type": "kafka-connect",
//         "_id": "ee2a9ca7-b03e-4776-a50f-8a78b4e8db34",
//         "_score": 6.943627,
//         "_source": {
//             "uuid": "ee2a9ca7-b03e-4776-a50f-8a78b4e8db34"
//         }
//     }
// ]

// let shIds = [
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "db8045f4-dcdc-4708-981b-40c8824d2a8d",
//       "_score" : 7.1865845,
//       "_source" : {
//         "uuid" : "db8045f4-dcdc-4708-981b-40c8824d2a8d"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "668beaf5-4c14-4e9c-a99e-c2114852f4bf",
//       "_score" : 7.1865845,
//       "_source" : {
//         "uuid" : "668beaf5-4c14-4e9c-a99e-c2114852f4bf"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "74ae4263-9269-4389-9bb3-e0ceb901b6f0",
//       "_score" : 7.1865845,
//       "_source" : {
//         "uuid" : "74ae4263-9269-4389-9bb3-e0ceb901b6f0"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "b1f126f2-9f88-42fd-98c3-2254e25ef993",
//       "_score" : 7.1865845,
//       "_source" : {
//         "uuid" : "b1f126f2-9f88-42fd-98c3-2254e25ef993"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "572bb122-7513-4c7e-908c-141d45f700d1",
//       "_score" : 7.1865845,
//       "_source" : {
//         "uuid" : "572bb122-7513-4c7e-908c-141d45f700d1"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "2a561a29-04fd-426a-ada2-5ec1669467f6",
//       "_score" : 7.1865845,
//       "_source" : {
//         "uuid" : "2a561a29-04fd-426a-ada2-5ec1669467f6"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "d2a06ab0-5dc1-422d-97ee-6b34c9393452",
//       "_score" : 7.1865845,
//       "_source" : {
//         "uuid" : "d2a06ab0-5dc1-422d-97ee-6b34c9393452"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "9168171d-626e-4297-be53-c77d48d7e12d",
//       "_score" : 7.1865845,
//       "_source" : {
//         "uuid" : "9168171d-626e-4297-be53-c77d48d7e12d"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "7b20707d-e083-4b47-b672-500f956b356e",
//       "_score" : 7.0143766,
//       "_source" : {
//         "uuid" : "7b20707d-e083-4b47-b672-500f956b356e"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "7a2d2f06-a4de-4f47-bf6b-1836657a4a3c",
//       "_score" : 7.0143766,
//       "_source" : {
//         "uuid" : "7a2d2f06-a4de-4f47-bf6b-1836657a4a3c"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "1338eb35-bea7-46a3-8b03-3d16ab03f435",
//       "_score" : 7.0143766,
//       "_source" : {
//         "uuid" : "1338eb35-bea7-46a3-8b03-3d16ab03f435"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "014098e6-eb29-427a-a1ea-acbc4402fb25",
//       "_score" : 6.9926214,
//       "_source" : {
//         "uuid" : "014098e6-eb29-427a-a1ea-acbc4402fb25"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "2b2f954b-fbcb-410a-8188-fac2c91b7ff8",
//       "_score" : 6.9926214,
//       "_source" : {
//         "uuid" : "2b2f954b-fbcb-410a-8188-fac2c91b7ff8"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "44aedf23-d8c1-4dbe-ad3c-481c113d1ba8",
//       "_score" : 6.9926214,
//       "_source" : {
//         "uuid" : "44aedf23-d8c1-4dbe-ad3c-481c113d1ba8"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "832d2cc1-8034-4b6f-9829-52789ee4844a",
//       "_score" : 6.9926214,
//       "_source" : {
//         "uuid" : "832d2cc1-8034-4b6f-9829-52789ee4844a"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "167a1830-9be2-4e2d-b555-25ff00d96449",
//       "_score" : 6.9926214,
//       "_source" : {
//         "uuid" : "167a1830-9be2-4e2d-b555-25ff00d96449"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "3cb34dae-ff91-47f2-a4f2-c55b631e3671",
//       "_score" : 6.9926214,
//       "_source" : {
//         "uuid" : "3cb34dae-ff91-47f2-a4f2-c55b631e3671"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "0e9954bc-cd94-444e-96e8-c6a3e0296ed5",
//       "_score" : 6.9926214,
//       "_source" : {
//         "uuid" : "0e9954bc-cd94-444e-96e8-c6a3e0296ed5"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "39cf1618-05bf-47f4-9160-d56575b3d542",
//       "_score" : 6.9926214,
//       "_source" : {
//         "uuid" : "39cf1618-05bf-47f4-9160-d56575b3d542"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "9ed08d99-e02e-4772-971b-660770dfd36a",
//       "_score" : 6.964181,
//       "_source" : {
//         "uuid" : "9ed08d99-e02e-4772-971b-660770dfd36a"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "0b82dad7-ff34-44bb-a19e-e252deb81d91",
//       "_score" : 6.964181,
//       "_source" : {
//         "uuid" : "0b82dad7-ff34-44bb-a19e-e252deb81d91"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "e3446107-9a68-4521-bf75-0401d4489ec9",
//       "_score" : 6.964181,
//       "_source" : {
//         "uuid" : "e3446107-9a68-4521-bf75-0401d4489ec9"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "f7e56961-6498-4342-ba44-d214940def70",
//       "_score" : 6.964181,
//       "_source" : {
//         "uuid" : "f7e56961-6498-4342-ba44-d214940def70"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "a77da512-d430-4853-a67b-47b407ffcced",
//       "_score" : 6.964181,
//       "_source" : {
//         "uuid" : "a77da512-d430-4853-a67b-47b407ffcced"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "82f6fb8b-f290-4404-8f68-380c76d69647",
//       "_score" : 6.964181,
//       "_source" : {
//         "uuid" : "82f6fb8b-f290-4404-8f68-380c76d69647"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "c6e2fdc2-c8f8-4077-b0ad-9851a5c04fac",
//       "_score" : 6.964181,
//       "_source" : {
//         "uuid" : "c6e2fdc2-c8f8-4077-b0ad-9851a5c04fac"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "b5e32087-e33f-4dc9-851a-b1983ed9c28c",
//       "_score" : 6.964181,
//       "_source" : {
//         "uuid" : "b5e32087-e33f-4dc9-851a-b1983ed9c28c"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "13c3e940-279f-4d48-8fe0-c345ca246072",
//       "_score" : 6.964181,
//       "_source" : {
//         "uuid" : "13c3e940-279f-4d48-8fe0-c345ca246072"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "e601a3d1-11ad-4e1f-b130-a63d75bd9f9d",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "e601a3d1-11ad-4e1f-b130-a63d75bd9f9d"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "ee2a9ca7-b03e-4776-a50f-8a78b4e8db34",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "ee2a9ca7-b03e-4776-a50f-8a78b4e8db34"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "0994285f-ba1b-4ca7-8bab-3c8c864a8f3a",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "0994285f-ba1b-4ca7-8bab-3c8c864a8f3a"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "2e86f059-5c62-48cf-9312-57f6d96e08fc",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "2e86f059-5c62-48cf-9312-57f6d96e08fc"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "1612a481-646d-4434-84f5-a50cc49d4975",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "1612a481-646d-4434-84f5-a50cc49d4975"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "f6530a30-eb32-4404-94f9-e014c9917a4c",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "f6530a30-eb32-4404-94f9-e014c9917a4c"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "55b82ff8-b3da-4632-aab3-01b315cab942",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "55b82ff8-b3da-4632-aab3-01b315cab942"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "ab06ca8f-525e-4005-9601-fe0fe9191f43",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "ab06ca8f-525e-4005-9601-fe0fe9191f43"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "2e695eaf-21ab-4f72-8fd1-2b02b2f225cd",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "2e695eaf-21ab-4f72-8fd1-2b02b2f225cd"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "be8f7248-5188-438a-b38b-0fe646492b6e",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "be8f7248-5188-438a-b38b-0fe646492b6e"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "2fce4d25-d59a-4cfe-a927-0a7ca4871526",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "2fce4d25-d59a-4cfe-a927-0a7ca4871526"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "2e551e59-7e02-4027-b36b-3e9f57e718f3",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "2e551e59-7e02-4027-b36b-3e9f57e718f3"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "6a6f6073-5ead-4da4-82cd-dcd666c70166",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "6a6f6073-5ead-4da4-82cd-dcd666c70166"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "c14b5184-3bfd-48c0-8393-bac18a69f849",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "c14b5184-3bfd-48c0-8393-bac18a69f849"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "39d8fe6f-e9c1-45e3-838c-82cbdf8cf796",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "39d8fe6f-e9c1-45e3-838c-82cbdf8cf796"
//       }
//     },
//     {
//       "_index" : "shipments_v2",
//       "_type" : "kafka-connect",
//       "_id" : "6fb6afe7-d025-4c12-9d94-36c3077538ed",
//       "_score" : 6.9470673,
//       "_source" : {
//         "uuid" : "6fb6afe7-d025-4c12-9d94-36c3077538ed"
//       }
//     }
//   ]


let shIds = [
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "db8045f4-dcdc-4708-981b-40c8824d2a8d",
      "_score" : 7.187668,
      "_source" : {
        "uuid" : "db8045f4-dcdc-4708-981b-40c8824d2a8d"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "668beaf5-4c14-4e9c-a99e-c2114852f4bf",
      "_score" : 7.187668,
      "_source" : {
        "uuid" : "668beaf5-4c14-4e9c-a99e-c2114852f4bf"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "74ae4263-9269-4389-9bb3-e0ceb901b6f0",
      "_score" : 7.187668,
      "_source" : {
        "uuid" : "74ae4263-9269-4389-9bb3-e0ceb901b6f0"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "b1f126f2-9f88-42fd-98c3-2254e25ef993",
      "_score" : 7.187668,
      "_source" : {
        "uuid" : "b1f126f2-9f88-42fd-98c3-2254e25ef993"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "572bb122-7513-4c7e-908c-141d45f700d1",
      "_score" : 7.187668,
      "_source" : {
        "uuid" : "572bb122-7513-4c7e-908c-141d45f700d1"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "2a561a29-04fd-426a-ada2-5ec1669467f6",
      "_score" : 7.187668,
      "_source" : {
        "uuid" : "2a561a29-04fd-426a-ada2-5ec1669467f6"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "d2a06ab0-5dc1-422d-97ee-6b34c9393452",
      "_score" : 7.187668,
      "_source" : {
        "uuid" : "d2a06ab0-5dc1-422d-97ee-6b34c9393452"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "9168171d-626e-4297-be53-c77d48d7e12d",
      "_score" : 7.187668,
      "_source" : {
        "uuid" : "9168171d-626e-4297-be53-c77d48d7e12d"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "7b20707d-e083-4b47-b672-500f956b356e",
      "_score" : 7.0154376,
      "_source" : {
        "uuid" : "7b20707d-e083-4b47-b672-500f956b356e"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "7a2d2f06-a4de-4f47-bf6b-1836657a4a3c",
      "_score" : 7.0154376,
      "_source" : {
        "uuid" : "7a2d2f06-a4de-4f47-bf6b-1836657a4a3c"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "1338eb35-bea7-46a3-8b03-3d16ab03f435",
      "_score" : 7.0154376,
      "_source" : {
        "uuid" : "1338eb35-bea7-46a3-8b03-3d16ab03f435"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "014098e6-eb29-427a-a1ea-acbc4402fb25",
      "_score" : 6.993703,
      "_source" : {
        "uuid" : "014098e6-eb29-427a-a1ea-acbc4402fb25"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "2b2f954b-fbcb-410a-8188-fac2c91b7ff8",
      "_score" : 6.993703,
      "_source" : {
        "uuid" : "2b2f954b-fbcb-410a-8188-fac2c91b7ff8"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "44aedf23-d8c1-4dbe-ad3c-481c113d1ba8",
      "_score" : 6.993703,
      "_source" : {
        "uuid" : "44aedf23-d8c1-4dbe-ad3c-481c113d1ba8"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "832d2cc1-8034-4b6f-9829-52789ee4844a",
      "_score" : 6.993703,
      "_source" : {
        "uuid" : "832d2cc1-8034-4b6f-9829-52789ee4844a"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "167a1830-9be2-4e2d-b555-25ff00d96449",
      "_score" : 6.993703,
      "_source" : {
        "uuid" : "167a1830-9be2-4e2d-b555-25ff00d96449"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "3cb34dae-ff91-47f2-a4f2-c55b631e3671",
      "_score" : 6.993703,
      "_source" : {
        "uuid" : "3cb34dae-ff91-47f2-a4f2-c55b631e3671"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "0e9954bc-cd94-444e-96e8-c6a3e0296ed5",
      "_score" : 6.993703,
      "_source" : {
        "uuid" : "0e9954bc-cd94-444e-96e8-c6a3e0296ed5"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "39cf1618-05bf-47f4-9160-d56575b3d542",
      "_score" : 6.993703,
      "_source" : {
        "uuid" : "39cf1618-05bf-47f4-9160-d56575b3d542"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "9ed08d99-e02e-4772-971b-660770dfd36a",
      "_score" : 6.9652934,
      "_source" : {
        "uuid" : "9ed08d99-e02e-4772-971b-660770dfd36a"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "0b82dad7-ff34-44bb-a19e-e252deb81d91",
      "_score" : 6.9652934,
      "_source" : {
        "uuid" : "0b82dad7-ff34-44bb-a19e-e252deb81d91"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "e3446107-9a68-4521-bf75-0401d4489ec9",
      "_score" : 6.9652934,
      "_source" : {
        "uuid" : "e3446107-9a68-4521-bf75-0401d4489ec9"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "f7e56961-6498-4342-ba44-d214940def70",
      "_score" : 6.9652934,
      "_source" : {
        "uuid" : "f7e56961-6498-4342-ba44-d214940def70"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "a77da512-d430-4853-a67b-47b407ffcced",
      "_score" : 6.9652934,
      "_source" : {
        "uuid" : "a77da512-d430-4853-a67b-47b407ffcced"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "82f6fb8b-f290-4404-8f68-380c76d69647",
      "_score" : 6.9652934,
      "_source" : {
        "uuid" : "82f6fb8b-f290-4404-8f68-380c76d69647"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "c6e2fdc2-c8f8-4077-b0ad-9851a5c04fac",
      "_score" : 6.9652934,
      "_source" : {
        "uuid" : "c6e2fdc2-c8f8-4077-b0ad-9851a5c04fac"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "b5e32087-e33f-4dc9-851a-b1983ed9c28c",
      "_score" : 6.9652934,
      "_source" : {
        "uuid" : "b5e32087-e33f-4dc9-851a-b1983ed9c28c"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "13c3e940-279f-4d48-8fe0-c345ca246072",
      "_score" : 6.9652934,
      "_source" : {
        "uuid" : "13c3e940-279f-4d48-8fe0-c345ca246072"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "e601a3d1-11ad-4e1f-b130-a63d75bd9f9d",
      "_score" : 6.9417048,
      "_source" : {
        "uuid" : "e601a3d1-11ad-4e1f-b130-a63d75bd9f9d"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "ee2a9ca7-b03e-4776-a50f-8a78b4e8db34",
      "_score" : 6.9417048,
      "_source" : {
        "uuid" : "ee2a9ca7-b03e-4776-a50f-8a78b4e8db34"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "0994285f-ba1b-4ca7-8bab-3c8c864a8f3a",
      "_score" : 6.9417048,
      "_source" : {
        "uuid" : "0994285f-ba1b-4ca7-8bab-3c8c864a8f3a"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "2e86f059-5c62-48cf-9312-57f6d96e08fc",
      "_score" : 6.9417048,
      "_source" : {
        "uuid" : "2e86f059-5c62-48cf-9312-57f6d96e08fc"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "1612a481-646d-4434-84f5-a50cc49d4975",
      "_score" : 6.9417048,
      "_source" : {
        "uuid" : "1612a481-646d-4434-84f5-a50cc49d4975"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "6a6f6073-5ead-4da4-82cd-dcd666c70166",
      "_score" : 6.9417048,
      "_source" : {
        "uuid" : "6a6f6073-5ead-4da4-82cd-dcd666c70166"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "c14b5184-3bfd-48c0-8393-bac18a69f849",
      "_score" : 6.9417048,
      "_source" : {
        "uuid" : "c14b5184-3bfd-48c0-8393-bac18a69f849"
      }
    },
    {
      "_index" : "shipments_v2",
      "_type" : "kafka-connect",
      "_id" : "39d8fe6f-e9c1-45e3-838c-82cbdf8cf796",
      "_score" : 6.9417048,
      "_source" : {
        "uuid" : "39d8fe6f-e9c1-45e3-838c-82cbdf8cf796"
      }
    }
  ]
  
async function callEddApiMaker(shId){
    try{
        let res = await rp({
            'uri':`${FRT_PUB_BASE_URL}/automate/autoapi/run/937cc009-e559-432f-97f5-3519808d57fa`,
            'body':{
                'shipmentId':shId
            },
            'json':true,
            'method':'POST'
        })
        console.log(` done ${res.data.shipmentNumber} :  e : ${res.error}`) 
        return res
    }
    catch(e){
        console.log(`error in execution ${e.message}`)
    }
}

async function main(){
    for(let shId of shIds.map(sh => sh._source.uuid)) {
        await callEddApiMaker(shId)  
    }
}

main()