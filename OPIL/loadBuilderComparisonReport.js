const orderIndex = "salesorders_v2";
const finalFuIndex = "freightunits_v1";
const orgId = "a9b21334-af4b-4e6c-87ae-859a2b1237be";
const FRT_PUB_BASE_URL = "https://apis.fretron.com";
exports.FRT_PUB_BASE_URL = FRT_PUB_BASE_URL;
const TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzQ0MzI4NjksInVzZXJJZCI6Ijg2ZWM4MDUwLTc3NzYtNGQ4Ny1hOGI0LTNmYTliM2ExNTIzNyIsImVtYWlsIjoic2hpdmFtLmt1bWFyQGZyZXRyb24uY29tIiwibW9iaWxlTnVtYmVyIjoiNzAxODUxMDE4MSIsIm9yZ0lkIjoiZWYzMDA2ODMtOTAxYi00Nzc0LWJmMGUtOTU1ZDQ5ZTc5NmJjIiwibmFtZSI6IlNoaXZhbSIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjp0cnVlLCJwb3J0YWxUeXBlIjoiYmFzaWMifQ.ZYtCp1FedQE8t2egNCgm-wkG_dlNz98wLtdwJhaS_Us";
const rp = require('request-promise');

const finalFu = [
    {
        "_index": "freightunits_v1",
        "_type": "kafka-connect",
        "_id": "2d88e386-e28f-4d73-860e-a57f8df16230",
        "_score": 9.6441765,
        "_source": {
            "documentDate": 1713866463219,
            "lineItems": [
                {
                    "salesOrderMappings": [
                        {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 10.0,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 10.0,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": "weight",
                                    "grossQuantity": 10.0,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": null,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "b35b8a78-c418-40b2-b4cd-78ac3f9f4381",
                            "lineItemId": "7790b8a7-554e-430b-9a20-9230f1424536",
                            "legType": "DirectLeg",
                            "consignmentId": "1f3a1a96-0600-4438-8366-21e0c82f0418",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": null,
                            "source": "Order",
                            "containerId": null,
                            "uuid": "867459b5-24c7-4e84-a461-4714bf69d77d",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "2910b348-041c-431d-933c-54c713d37da8",
                                    "shipmentId": "9c1e234b-44d4-4158-9fc7-5ac551a7fd6b",
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "PENDING"
                                }
                            ]
                        }
                    ],
                    "shipmentId": "9c1e234b-44d4-4158-9fc7-5ac551a7fd6b",
                    "uuid": "2910b348-041c-431d-933c-54c713d37da8"
                }
            ],
            "documentNumber": "FL0000757",
            "uuid": "2d88e386-e28f-4d73-860e-a57f8df16230"
        }
    },
    {
        "_index": "freightunits_v1",
        "_type": "kafka-connect",
        "_id": "6418f83a-4369-4244-8b8f-474f1ced591d",
        "_score": 9.6441765,
        "_source": {
            "documentDate": 1716804648163,
            "lineItems": [
                {
                    "salesOrderMappings": [
                        {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 20.0,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 20.0,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": "Weight",
                                    "grossQuantity": 20.0,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": 20.0,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "c58d7271-728e-4e37-a6f4-587a8b432340",
                            "lineItemId": "8e4c4900-f6da-4f95-bb0c-b0b59927e51f",
                            "legType": "DirectLeg",
                            "consignmentId": "5ab7759c-abdc-41eb-ae44-00fd88d8e739",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": null,
                            "source": "Order",
                            "containerId": null,
                            "uuid": "3728ad1a-def4-44d8-999b-be5756250430",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "4f05a1b4-db01-49c6-a3c7-a2c5285c8d5f",
                                    "shipmentId": "0c6a423c-4a93-4a72-ba9e-51818c443ae8",
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "PENDING"
                                }
                            ]
                        },
                        {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 5.0,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 5.0,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": "Weight",
                                    "grossQuantity": 5.0,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": 5.0,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "339753cf-135f-4c2f-b8e5-f82ce19207a8",
                            "lineItemId": "bbbaf877-fe54-4705-81ca-baa6a5fb2d1a",
                            "legType": "DirectLeg",
                            "consignmentId": "2dda719b-eee2-44bc-9615-0bb83b1b5f19",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": null,
                            "source": "Order",
                            "containerId": null,
                            "uuid": "0a3e8f98-3f82-4988-bd78-9f8f17cc4d6d",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "4f05a1b4-db01-49c6-a3c7-a2c5285c8d5f",
                                    "shipmentId": "0c6a423c-4a93-4a72-ba9e-51818c443ae8",
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "PENDING"
                                }
                            ]
                        }
                    ],
                    "shipmentId": "0c6a423c-4a93-4a72-ba9e-51818c443ae8",
                    "uuid": "4f05a1b4-db01-49c6-a3c7-a2c5285c8d5f"
                }
            ],
            "documentNumber": "FL0000842",
            "uuid": "6418f83a-4369-4244-8b8f-474f1ced591d"
        }
    },
    {
        "_index": "freightunits_v1",
        "_type": "kafka-connect",
        "_id": "f344e2b9-3be2-40fa-a323-6ef2606060d0",
        "_score": 9.5324745,
        "_source": {
            "documentDate": 1713616215392,
            "lineItems": [
                {
                    "salesOrderMappings": [
                        {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 8.5,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 8.5,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": "weight",
                                    "grossQuantity": 8.5,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": null,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "56d70d59-228c-48fb-bd7f-dacca48e3c8a",
                            "lineItemId": "7289d4e1-cd0a-454b-acd5-f51827dfb0ab",
                            "legType": "DirectLeg",
                            "consignmentId": "d7ad6b89-cc50-4221-8bbd-ced93987ecd0",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": null,
                            "source": "Order",
                            "containerId": null,
                            "uuid": "7a13690e-2caa-4945-9f8c-6eb939071868",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "2ef8603f-dddb-4e4c-9883-80e7f9d8beed",
                                    "shipmentId": "84c2c8f9-f936-4aad-8989-5473c3461f61",
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "PENDING"
                                }
                            ]
                        }
                    ],
                    "shipmentId": "84c2c8f9-f936-4aad-8989-5473c3461f61",
                    "uuid": "2ef8603f-dddb-4e4c-9883-80e7f9d8beed"
                }
            ],
            "documentNumber": "FL0000743",
            "uuid": "f344e2b9-3be2-40fa-a323-6ef2606060d0"
        }
    },
    {
        "_index": "freightunits_v1",
        "_type": "kafka-connect",
        "_id": "122bb2c2-b599-4529-ad40-226eb2e15a77",
        "_score": 9.414808,
        "_source": {
            "documentDate": 1716803236624,
            "lineItems": [
                {
                    "salesOrderMappings": [
                        {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 20.0,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 20.0,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": "Weight",
                                    "grossQuantity": 20.0,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": 20.0,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "87ca9cdd-04c2-4ff1-a186-de4b89306d20",
                            "lineItemId": "52cdc4bd-586d-438b-a681-61126985b635",
                            "legType": "DirectLeg",
                            "consignmentId": "3c860879-2ed6-4d26-a519-ed1434ba980e",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": null,
                            "source": "Order",
                            "containerId": null,
                            "uuid": "3d06c9f3-ade7-4752-8ea5-2881eec2dfe8",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "a42c8159-2ddc-42e3-b162-97ce7a9d5959",
                                    "shipmentId": "98f98494-3f46-451e-a96a-ab97161d68bd",
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "PENDING"
                                }
                            ]
                        }
                    ],
                    "shipmentId": "98f98494-3f46-451e-a96a-ab97161d68bd",
                    "uuid": "a42c8159-2ddc-42e3-b162-97ce7a9d5959"
                }
            ],
            "documentNumber": "FL0000840",
            "uuid": "122bb2c2-b599-4529-ad40-226eb2e15a77"
        }
    },
    {
        "_index": "freightunits_v1",
        "_type": "kafka-connect",
        "_id": "cc403630-d22c-428c-be3a-c10649560d02",
        "_score": 9.320156,
        "_source": {
            "documentDate": 1716007970070,
            "lineItems": [
                {
                    "salesOrderMappings": [
                        {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 12.0,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 12.0,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": "Weight",
                                    "grossQuantity": 12.0,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": null,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "8e48b445-08dc-4317-8ba8-5b6d83190721",
                            "lineItemId": "168a346b-0f2e-46d8-b032-dd116feaa30c",
                            "legType": "DirectLeg",
                            "consignmentId": "44690e08-c2c9-4a19-8e56-7c3d125b7d93",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": null,
                            "source": "Order",
                            "containerId": null,
                            "uuid": "291a89cc-f1b6-4d41-8e4b-28bb036373d5",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "7c7d29a4-4488-44c2-93f2-390396d893d4",
                                    "shipmentId": "9c8ec299-43ef-4f94-815f-b81dc05badf6",
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "PENDING"
                                }
                            ]
                        }
                    ],
                    "shipmentId": "9c8ec299-43ef-4f94-815f-b81dc05badf6",
                    "uuid": "7c7d29a4-4488-44c2-93f2-390396d893d4"
                }
            ],
            "documentNumber": "FL0000791",
            "uuid": "cc403630-d22c-428c-be3a-c10649560d02"
        }
    }
]

const suggestedFu = [
    {
        "_index": "freightunits_v1",
        "_type": "kafka-connect",
        "_id": "2d88e386-e28f-4d73-860e-a57f8df16230",
        "_score": 9.6441765,
        "_source": {
            "documentDate": 1713866463219,
            "lineItems": [
                {
                    "salesOrderMappings": [
                        {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 10.0,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 10.0,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": "weight",
                                    "grossQuantity": 10.0,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": null,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "b35b8a78-c418-40b2-b4cd-78ac3f9f4381",
                            "lineItemId": "7790b8a7-554e-430b-9a20-9230f1424536",
                            "legType": "DirectLeg",
                            "consignmentId": "1f3a1a96-0600-4438-8366-21e0c82f0418",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": null,
                            "source": "Order",
                            "containerId": null,
                            "uuid": "867459b5-24c7-4e84-a461-4714bf69d77d",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "2910b348-041c-431d-933c-54c713d37da8",
                                    "shipmentId": "9c1e234b-44d4-4158-9fc7-5ac551a7fd6b",
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "PENDING"
                                }
                            ]
                        }
                    ],
                    "shipmentId": "9c1e234b-44d4-4158-9fc7-5ac551a7fd6b",
                    "uuid": "2910b348-041c-431d-933c-54c713d37da8"
                }
            ],
            "documentNumber": "FL0000757",
            "uuid": "2d88e386-e28f-4d73-860e-a57f8df16230"
        }
    },
    {
        "_index": "freightunits_v1",
        "_type": "kafka-connect",
        "_id": "6418f83a-4369-4244-8b8f-474f1ced591d",
        "_score": 9.6441765,
        "_source": {
            "documentDate": 1716804648163,
            "lineItems": [
                {
                    "salesOrderMappings": [
                        {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 20.0,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 20.0,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": "Weight",
                                    "grossQuantity": 20.0,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": 20.0,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "c58d7271-728e-4e37-a6f4-587a8b432340",
                            "lineItemId": "8e4c4900-f6da-4f95-bb0c-b0b59927e51f",
                            "legType": "DirectLeg",
                            "consignmentId": "5ab7759c-abdc-41eb-ae44-00fd88d8e739",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": null,
                            "source": "Order",
                            "containerId": null,
                            "uuid": "3728ad1a-def4-44d8-999b-be5756250430",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "4f05a1b4-db01-49c6-a3c7-a2c5285c8d5f",
                                    "shipmentId": "0c6a423c-4a93-4a72-ba9e-51818c443ae8",
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "PENDING"
                                }
                            ]
                        },
                        {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 5.0,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 5.0,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": "Weight",
                                    "grossQuantity": 5.0,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": 5.0,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "339753cf-135f-4c2f-b8e5-f82ce19207a8",
                            "lineItemId": "bbbaf877-fe54-4705-81ca-baa6a5fb2d1a",
                            "legType": "DirectLeg",
                            "consignmentId": "2dda719b-eee2-44bc-9615-0bb83b1b5f19",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": null,
                            "source": "Order",
                            "containerId": null,
                            "uuid": "0a3e8f98-3f82-4988-bd78-9f8f17cc4d6d",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "4f05a1b4-db01-49c6-a3c7-a2c5285c8d5f",
                                    "shipmentId": "0c6a423c-4a93-4a72-ba9e-51818c443ae8",
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "PENDING"
                                }
                            ]
                        }
                    ],
                    "shipmentId": "0c6a423c-4a93-4a72-ba9e-51818c443ae8",
                    "uuid": "4f05a1b4-db01-49c6-a3c7-a2c5285c8d5f"
                }
            ],
            "documentNumber": "FL0000842",
            "uuid": "6418f83a-4369-4244-8b8f-474f1ced591d"
        }
    },
    {
        "_index": "freightunits_v1",
        "_type": "kafka-connect",
        "_id": "f344e2b9-3be2-40fa-a323-6ef2606060d0",
        "_score": 9.5324745,
        "_source": {
            "documentDate": 1713616215392,
            "lineItems": [
                {
                    "salesOrderMappings": [
                        {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 8.5,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 8.5,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": "weight",
                                    "grossQuantity": 8.5,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": null,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "56d70d59-228c-48fb-bd7f-dacca48e3c8a",
                            "lineItemId": "7289d4e1-cd0a-454b-acd5-f51827dfb0ab",
                            "legType": "DirectLeg",
                            "consignmentId": "d7ad6b89-cc50-4221-8bbd-ced93987ecd0",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": null,
                            "source": "Order",
                            "containerId": null,
                            "uuid": "7a13690e-2caa-4945-9f8c-6eb939071868",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "2ef8603f-dddb-4e4c-9883-80e7f9d8beed",
                                    "shipmentId": "84c2c8f9-f936-4aad-8989-5473c3461f61",
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "PENDING"
                                }
                            ]
                        }
                    ],
                    "shipmentId": "84c2c8f9-f936-4aad-8989-5473c3461f61",
                    "uuid": "2ef8603f-dddb-4e4c-9883-80e7f9d8beed"
                }
            ],
            "documentNumber": "FL0000743",
            "uuid": "f344e2b9-3be2-40fa-a323-6ef2606060d0"
        }
    },
    {
        "_index": "freightunits_v1",
        "_type": "kafka-connect",
        "_id": "122bb2c2-b599-4529-ad40-226eb2e15a77",
        "_score": 9.414808,
        "_source": {
            "documentDate": 1716803236624,
            "lineItems": [
                {
                    "salesOrderMappings": [
                        {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 5.0,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 5.0,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": "Weight",
                                    "grossQuantity": 5.0,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": 5.0,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "d71bc3dd-b27b-440f-9251-159c723fb37f",
                            "lineItemId": "a16331b2-9f84-476b-b424-783d3d390eee",
                            "legType": "DirectLeg",
                            "consignmentId": "dda78d68-0ea5-4cda-8e01-60a1d682e708",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": null,
                            "source": "Order",
                            "containerId": null,
                            "uuid": "f13ffb1a-c91d-4761-b6b5-ba23b5229b6a",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "a42c8159-2ddc-42e3-b162-97ce7a9d5959",
                                    "shipmentId": "98f98494-3f46-451e-a96a-ab97161d68bd",
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "PENDING"
                                }
                            ]
                        }
                    ],
                    "shipmentId": "98f98494-3f46-451e-a96a-ab97161d68bd",
                    "uuid": "a42c8159-2ddc-42e3-b162-97ce7a9d5959"
                }
            ],
            "documentNumber": "FL0000840",
            "uuid": "122bb2c2-b599-4529-ad40-226eb2e15a77"
        }
    },
    {
        "_index": "freightunits_v1",
        "_type": "kafka-connect",
        "_id": "cc403630-d22c-428c-be3a-c10649560d02",
        "_score": 9.320156,
        "_source": {
            "documentDate": 1716007970070,
            "lineItems": [
                {
                    "salesOrderMappings": [
                        {
                            "quantity": {
                                "volume": null,
                                "packageMeasurement": null,
                                "weight": {
                                    "actualDeliveredQuantity": null,
                                    "density": null,
                                    "netQuantity": 12.0,
                                    "moisture": null,
                                    "claimQuantity": null,
                                    "unitOfMeasurment": "Metric Tonnes",
                                    "standardQuantity": 12.0,
                                    "actualLoadedQuantity": null,
                                    "measurmentType": "Weight",
                                    "grossQuantity": 12.0,
                                    "shortage": null,
                                    "temperature": null,
                                    "plannedLoadQuantity": null,
                                    "frieghtDeductableQuantity": null
                                },
                                "containers": null,
                                "trucks": null
                            },
                            "orderId": "8e48b445-08dc-4317-8ba8-5b6d83190721",
                            "lineItemId": "168a346b-0f2e-46d8-b032-dd116feaa30c",
                            "legType": "DirectLeg",
                            "consignmentId": "44690e08-c2c9-4a19-8e56-7c3d125b7d93",
                            "originLegId": null,
                            "isFullyUtilized": null,
                            "consignmentLineItemId": null,
                            "source": "Order",
                            "containerId": null,
                            "uuid": "291a89cc-f1b6-4d41-8e4b-28bb036373d5",
                            "fuMappings": [
                                {
                                    "executionPlanId": null,
                                    "legType": "DirectLeg",
                                    "fuLineItemId": "7c7d29a4-4488-44c2-93f2-390396d893d4",
                                    "shipmentId": "9c8ec299-43ef-4f94-815f-b81dc05badf6",
                                    "legId": "DirectLeg#1.0",
                                    "legStatus": "PENDING"
                                }
                            ]
                        }
                    ],
                    "shipmentId": "9c8ec299-43ef-4f94-815f-b81dc05badf6",
                    "uuid": "7c7d29a4-4488-44c2-93f2-390396d893d4"
                }
            ],
            "documentNumber": "FL0000791",
            "uuid": "cc403630-d22c-428c-be3a-c10649560d02"
        }
    }
]

function getFinalFuElasticQuery() {
    return {
        "_source": ["uuid", "documentNumber", "lineItems.salesOrderMappings", "lineItems.shipmentId", "documentDate", "lineItems.uuid"],
        "size": 100,
        "query": {
            "bool": {
                "must": [
                    {
                        "term": {
                            "lineItems.status.keyword": "FINALIZED"
                        }
                    },
                    {
                        "term": {
                            "orgId.keyword": orgId
                        }
                    }
                ],
                "must_not": {
                    "terms": {
                        "type.keyword": ["Deleted"]
                    }
                }
            }
        }
    }
}

function getOrderElasticQuery(uuidArray) {
    return {
        "_source": ["uuid", "orderNumber", "lineItems.loadInfo", "lineItems.externalId", "lineItems.uuid"],
        "size": 100,
        "query": {
            "bool": {
                "must": [
                    {
                        "term": {
                            "orgId.keyword": orgId
                        }
                    },
                    {
                        "terms": {
                            "uuid.keyword": uuidArray
                        }
                    }
                ],
                "must_not": {
                    "terms": {
                        "shipmentStatus.keyword": ["DELETED"]
                    }
                }
            }
        }
    }
}

async function getDataFromElastic(index, query) {
    if (!index || !query) {
        console.log("Invalid parameters: index or query is missing");
        return null;
    }

    try {
        let url = `${FRT_PUB_BASE_URL}/shipment-view/proxy/to/elastic`
        let options = {
            method: "POST",
            uri: url,
            body: {
                index: index,
                query: query,
            },
            json: true
        }
        let res = await rp(options)
        if (res?.hits?.hits?.length === 0) {
            throw new Error("No data found in elastic search response");
        }
        return res.hits.hits.map(hit => hit._source)
    } catch (err) {
        throw new Error(`Error in getting Data From Elastic: ${err.message}`)
    }
}

async function extractOrderIdsAndGetOrders(suggestedFu, finalFu) {
    
    try {
        let orderIdsFromSuggested = suggestedFu.flatMap(freight =>
            freight?.lineItems?.flatMap(lineItem =>
                lineItem?.salesOrderMappings?.map(mapping => mapping?.orderId)
            )?.filter(Boolean) ?? []
        );
        let orderIdsFromFinal = finalFu.flatMap(freight =>
            freight?.lineItems?.flatMap(lineItem =>
                lineItem?.salesOrderMappings?.map(mapping => mapping?.orderId)
            )?.filter(Boolean) ?? []
        );
        let uniqueOrderIds = [...new Set([...orderIdsFromSuggested, ...orderIdsFromFinal])];

        if (uniqueOrderIds.length === 0) {
            console.log("No order IDs found");
            return null;
        }

        let query = getOrderElasticQuery(uniqueOrderIds);
        let elasticData = await getDataFromElastic(orderIndex, query);
        
        if (!elasticData) {
            console.log("Failed to fetch orders from elastic search");
            return null;
        }

        return elasticData;
    } catch (err) {
        console.log(`Error in extracting order IDs: ${err.message}`);
        return null;
    }
}

async function getSuggestedFuByItemIds(lineItemIds, token) {
    try {
        let url = `${FRT_PUB_BASE_URL}/order-manager-v2/suggested-freight-units/v1/fu-by-itemIds`;
        let options = {
            method: "POST",
            uri: url,
            headers: {
                "Authorization": token
            },
            body: {
                lineItemIds: lineItemIds,
                exclude: ["documentNumber"]
            },
            json: true
        };
        let res = await rp(options);
        if(res.length === 0) {
            throw new Error("No suggested freight units found");
        }
        return res;
    } catch (err) {
        throw new Error(`Error getting suggested FU by item IDs: ${err.message}`);
    }
}

function createOrderLineItemMap(orders, suggestedFu, finalFu) {

    try {
        let orderMap = new Map(orders.map(order => [order?.uuid, order]).filter(([key]) => key));
        let processFuList = (fuList) => {
            return fuList?.flatMap(fu =>
                fu?.lineItems?.[0]?.salesOrderMappings
                    ?.filter(mapping => mapping?.orderId && mapping?.lineItemId)
                    ?.map(mapping => ({
                        key: `${mapping.orderId}_${mapping.lineItemId}`,
                        orderId: mapping.orderId,
                        lineItemId: mapping.lineItemId
                    })) ?? []
            );
        };
        let allMappings = [...processFuList(suggestedFu), ...processFuList(finalFu)];
        return new Map(
            allMappings.map(({ key, orderId, lineItemId }) => {
                let order = orderMap.get(orderId);
                let lineItem = order?.lineItems?.find(item => item?.uuid === lineItemId);

                return [key, {
                    orderNumber: order?.orderNumber ?? null,
                    lineItem: lineItem ?? null
                }];
            })
        );
    } catch (err) {
        console.log(`Error in creating order line item map: ${err.message}`);
        return new Map();
    }
}

function createComparisonMap(fuMap, orderLineItemMap) {
    let comparisonMap = new Map();

    for (let { suggested, final } of fuMap) {
        let docNumber = suggested.documentNumber;
        let comparisonObj = compareFreightUnits(suggested, final, orderLineItemMap);
        comparisonMap.set(docNumber, comparisonObj);
    }

    return comparisonMap;
}

function compareFreightUnits(suggested, final, orderLineItemMap) {
    let comparisonObj = {
        suggestedAndFinal: [],
        suggestedOnly: [],
        finalOnly: []
    };

    let suggestedMappings = suggested.lineItems?.[0]?.salesOrderMappings ?? [];
    let finalMappings = final.lineItems?.[0]?.salesOrderMappings ?? [];

    let suggestedKeys = new Set(suggestedMappings.map(m => `${m.orderId}_${m.lineItemId}`));
    let finalKeys = new Set(finalMappings.map(m => `${m.orderId}_${m.lineItemId}`));

    for (let key of suggestedKeys) {
        let orderLineItem = orderLineItemMap.get(key);
        if (!orderLineItem) continue;

        if (finalKeys.has(key)) {
            comparisonObj.suggestedAndFinal.push(orderLineItem);
        } else {
            comparisonObj.suggestedOnly.push(orderLineItem);
        }
    }

    for (let key of finalKeys) {
        if (!suggestedKeys.has(key)) {
            let orderLineItem = orderLineItemMap.get(key);
            if (orderLineItem) {
                comparisonObj.finalOnly.push(orderLineItem);
            }
        }
    }

    return comparisonObj;
}

function createComparisonJSON(comparisonMap) {
    // Define headers first
    let result = [];
    
    for (let [documentNumber, comparison] of comparisonMap) {
        let allItems = [
            ...comparison.suggestedAndFinal.map(item => ({ type: 'both', item })),
            ...comparison.suggestedOnly.map(item => ({ type: 'suggested', item })),
            ...comparison.finalOnly.map(item => ({ type: 'final', item }))
        ];

        for (let {type, item} of allItems) {
            result.push({
                "Document Number": documentNumber,
                "Planned Order Number": type === 'final' ? '' : item?.orderNumber,
                "Planned Line Item ID": type === 'final' ? '' : item?.lineItem?.uuid,
                "Planned Quantity": type === 'final' ? '' : item?.lineItem?.loadInfo?.standardMeasurement?.weight?.netQuantity,
                "Actual Order Number": type === 'suggested' ? '' : item?.orderNumber,
                "Actual Line Item ID": type === 'suggested' ? '' : item?.lineItem?.uuid,
                "Actual Quantity": type === 'suggested' ? '' : item?.lineItem?.loadInfo?.standardMeasurement?.weight?.netQuantity
            });
        }
    }
    
    return result;
}

async function sendEmail(html, jsonArr, to, cc = []) {
    let url = `${FRT_PUB_BASE_URL}/shipment-view/shipments/json/email`;
    let payload = {
        data: jsonArr,
        emailInfo: {
            to: to,
            cc: cc,
            subject: "Comparison Report for Finalized and Suggested Freight Units",
            content: "Please find the comparison report for finalized and suggested freight units."
        },
        orgId: orgId,
    };
    try {
        let res = await rp({
            method: "POST",
            uri: url,
            body: payload,
            json: true,
        });
        if (res.status != 200) {
            console.log(`Sending Json to Excel email api res error : ${res.error}`);
        }
    } catch (e) {
        console.log(`Catched Error in sending json to excel email : ${e.message}`);
    }
    return "Some error in sending email"
}

async function main(suggestedFu, finalFu, token) {
    try {
        // let finalFu = await getDataFromElastic(finalFuIndex, getFinalFuElasticQuery());
        // let finalFuLineItemUuids = finalFu.map(fu => fu?.lineItems?.[0]?.uuid).filter(Boolean);
        // let suggestedFu = await getSuggestedFuByItemIds(finalFuLineItemUuids, token);
        finalFu = finalFu.map(fu => fu?._source)
        suggestedFu = suggestedFu.map(fu => fu?._source)
        let orders = await extractOrderIdsAndGetOrders(suggestedFu, finalFu);

        let fuMap = [];
        let suggestedFuMap = new Map(suggestedFu.map(fu => [fu?.documentNumber, fu]).filter(([key]) => key));
        let finalFuMap = new Map(finalFu.map(fu => [fu?.documentNumber, fu]).filter(([key]) => key));

        for (let [docNumber, suggestedFuObj] of suggestedFuMap) {
            if (finalFuMap.has(docNumber)) {
                fuMap.push({
                    suggested: suggestedFuObj,
                    final: finalFuMap.get(docNumber)
                });
            }
        }

        if (fuMap.length === 0) {
            throw new Error("No matching freight units found");
        }

        let orderLineItemMap = createOrderLineItemMap(orders, suggestedFu, finalFu);
        let comparisonMap = createComparisonMap(fuMap, orderLineItemMap);
        let comparisonJSON = createComparisonJSON(comparisonMap);

        await sendEmail(null, comparisonJSON, "sahil.aggarwal@fretron.com");
        return "Email sent successfully";
    } catch (err) {
        console.log(`Error in main function: ${err.message}`);
        return `Failed to generate comparison report: ${err.message}`;
    }
}

main(suggestedFu, finalFu, TOKEN);
