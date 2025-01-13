const rp = require("request-promise");
const BASE_URL = "https://apis.fretron.com";
const TOKEN = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MzIwMjA5NzQsInVzZXJJZCI6ImJvdHVzZXItLTM3MzUzMmFmLTEzOTAtNGUyOC04ODcxLTExYTZlYTcwODUxMiIsIm1vYmlsZU51bWJlciI6ImJvdHVzZXItLTM3MzUzMmFmLTEzOTAtNGUyOC04ODcxLTExYTZlYTcwODUxMiIsIm9yZ0lkIjoiMjA4YWZkYWQtZGVhYi00Yzc2LThkNDktMzBhNzBmNDIwZjM1IiwibmFtZSI6IkJvdCB0b2tlbiIsIm9yZ1R5cGUiOiJGTEVFVF9PV05FUiIsImlzR29kIjpmYWxzZSwicG9ydGFsVHlwZSI6ImJhc2ljIn0.g5BbII_VTjjjucZL-VhW5gznhBLVdxa5dqcStjFCQM0";
const vehicleCodes = [
    'WB76B1552',
    'NL01Q0940',
    'NL01A2836',
    'NL01K4503',
    'NL01Q0941',
    'WB33D9396',
    'WB59C8773',
    'WB11F0762',
    'WB11D3341',
    'WB33B4164',
    'NL01AA0268',
    'NL01K4399',
    'WB11F0962',
    'NL01AH8628',
    'WB33E2721',
    'NL01K4505',
    'WB41H0455',
    'WB37D2193',
    'WB33F2709',
    'WB33B4944',
    'WB41E8534',
    'WB59C8762',
    'WB33E2056',
    'NL02Q7971',
    'NL01Q0938',
    'WB781562',
    'NL01AJ1158',
    'WB29A5175',
    'NL01G6229',
    'NL01AH8629',
    'NL01AD6357',
    'CG04MR6452',
    'NL02Q8950',
    'WB33F2746',
    'WB33F2704',
    'WB37D2194',
    'WB350799',
    'OD04L6823',
    'TS12UB1979',
    'JK01AF6841',
    'WB33B7010',
    'JK01AF6842',
    'JH05CX3168',
    'NL01AC0035',
    'NL01AC0040',
    'NL01K4531',
    'TS12UB1449',
    'JH02BM8472',
    'WB916609',
    'WB76B1548',
    'NL01G9047',
    'JH05BN3505',
    'NL01AE8088',
    'WB59B7101',
    'NL01K2329',
    'NL04D7617',
    'WB76A2255',
    'AP23Y5222',
    'WB11E7786',
    'WB37E6121',
    'HR38X0619',
    'NL02Q3587',
    'NL01AG5983',
    'NL02Q9638',
    'NL01AB3976',
    'WB11B9036',
    'NL01G2776',
    'WB76A7529',
    'WB11E7586',
    'WB355602',
    'HR38X3685',
    'NL01AG6058',
    'JH05CX1305',
    'NL01K0315',
    'OR01P0841',
    'WB76B2687',
    'HR38X3336',
    'NL02AA0467',
    'WB33H3051',
    'NL02Q9374',
    'NL02Q8870',
    'NL01AB4592',
    'TS12UC0737',
    'NL01AB2424',
    'OD04L6826',
    'WB51C7207',
    'HR38X5523',
    'WB11B7651',
    'WB11E1471',
    'NL02Q9147',
    'OD04L6825',
    'NL01AB1374',
    'NL01K5325',
    'WB37E6125',
    'OD04L6827',
    'NL01G2062',
    'WB49N1039',
    'NL01G6886',
    'WB11B8844',
    'OD04L6830',
    'NL01K1491',
    'WB65D7088',
    'TS12UB1504',
    'JH05DN4029',
    'JH05DN9764',
    'WB781562',
    'NL01K1185',
    'WB917819',
    'NL01G3625',
    'NL01G3585',
    'NL01G4087',
    'WB76B1703',
    'JH05DN0452',
    'NL01G6823',
    'WB37E6127',
    'WB76A2256',
    'NL01AE0165',
    'WB11D3401',
    'HR38X2353',
    'HR38W0398',
    'NL01G8353',
    'WB37E6106',
    'NL01D6786'
]

const resourceIds = [
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "b247f770-0501-4b9b-8499-66b479c91074",
        "_score": 9.141678,
        "_source": {
            "uuid": "b247f770-0501-4b9b-8499-66b479c91074",
            "vehicle": {
                "vehicleRegistrationNumber": "WB33D9396"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "23c0a7ee-1e82-40b1-823f-6bae35488900",
        "_score": 9.141678,
        "_source": {
            "uuid": "23c0a7ee-1e82-40b1-823f-6bae35488900",
            "vehicle": {
                "vehicleRegistrationNumber": "WB781562"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "11cf49e8-1a36-42a7-bc46-3747a76b9412",
        "_score": 9.141678,
        "_source": {
            "uuid": "11cf49e8-1a36-42a7-bc46-3747a76b9412",
            "vehicle": {
                "vehicleRegistrationNumber": "WB59C8773"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "786c0f79-9d9e-45e2-8e3e-34409671f7d2",
        "_score": 9.141678,
        "_source": {
            "uuid": "786c0f79-9d9e-45e2-8e3e-34409671f7d2",
            "vehicle": {
                "vehicleRegistrationNumber": "WB76B1548"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a2405534-3462-43f3-b179-9645a3009924",
        "_score": 9.141678,
        "_source": {
            "uuid": "a2405534-3462-43f3-b179-9645a3009924",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01G9047"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "e0dd9ae1-58a1-4ca3-9720-b4d7d721b907",
        "_score": 9.141678,
        "_source": {
            "uuid": "e0dd9ae1-58a1-4ca3-9720-b4d7d721b907",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AE8088"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "c32dd736-3719-48ab-bdda-2bdaf44f9c5b",
        "_score": 9.141678,
        "_source": {
            "uuid": "c32dd736-3719-48ab-bdda-2bdaf44f9c5b",
            "vehicle": {
                "vehicleRegistrationNumber": "WB49N1039"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "c764fe50-04dc-4523-a411-c71cdf71cd6c",
        "_score": 9.141678,
        "_source": {
            "uuid": "c764fe50-04dc-4523-a411-c71cdf71cd6c",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AE0165"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "41e9b283-469b-48c6-bace-60aa4553f40e",
        "_score": 9.141678,
        "_source": {
            "uuid": "41e9b283-469b-48c6-bace-60aa4553f40e",
            "vehicle": {
                "vehicleRegistrationNumber": "NL02Q9638"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "35c3521f-1b8c-4070-8011-4f2037809618",
        "_score": 9.141678,
        "_source": {
            "uuid": "35c3521f-1b8c-4070-8011-4f2037809618",
            "vehicle": {
                "vehicleRegistrationNumber": "WB76B2687"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "47467ff0-ffa6-4857-b688-8cfc23b89d2c",
        "_score": 9.141678,
        "_source": {
            "uuid": "47467ff0-ffa6-4857-b688-8cfc23b89d2c",
            "vehicle": {
                "vehicleRegistrationNumber": "RDS NO-6"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "c93ef7d7-e1d8-4240-a4b2-3a7ad33e1a76",
        "_score": 9.141678,
        "_source": {
            "uuid": "c93ef7d7-e1d8-4240-a4b2-3a7ad33e1a76",
            "vehicle": {
                "vehicleRegistrationNumber": "RDS NO-4"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "6852834c-defb-4f99-b0b8-9c9b096e469d",
        "_score": 9.141678,
        "_source": {
            "uuid": "6852834c-defb-4f99-b0b8-9c9b096e469d",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01K4531"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "29e9356e-f644-490c-8b86-10a8b9b92386",
        "_score": 9.141678,
        "_source": {
            "uuid": "29e9356e-f644-490c-8b86-10a8b9b92386",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AG5983"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "d85d8497-e8f9-4716-9304-ed9254eedf49",
        "_score": 9.141678,
        "_source": {
            "uuid": "d85d8497-e8f9-4716-9304-ed9254eedf49",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01G2062"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "7ff0feb9-2155-42c1-904e-5512019d32e6",
        "_score": 9.141678,
        "_source": {
            "uuid": "7ff0feb9-2155-42c1-904e-5512019d32e6",
            "vehicle": {
                "vehicleRegistrationNumber": "JH05CX1305"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "38a0cd72-74f1-44e2-8a10-74190ce94149",
        "_score": 9.141678,
        "_source": {
            "uuid": "38a0cd72-74f1-44e2-8a10-74190ce94149",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01G4087"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "1d8344b2-6a48-4eb5-98c0-ccd78b3a5b29",
        "_score": 9.141678,
        "_source": {
            "uuid": "1d8344b2-6a48-4eb5-98c0-ccd78b3a5b29",
            "vehicle": {
                "vehicleRegistrationNumber": "WB33F2709"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "2ef721c6-6e4b-4e7c-81ef-f05e5ba081a9",
        "_score": 9.141678,
        "_source": {
            "uuid": "2ef721c6-6e4b-4e7c-81ef-f05e5ba081a9",
            "vehicle": {
                "vehicleRegistrationNumber": "JK01AF6841"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "d3c6f20e-e4c3-48f7-b562-bbc4f0921bdb",
        "_score": 9.141678,
        "_source": {
            "uuid": "d3c6f20e-e4c3-48f7-b562-bbc4f0921bdb",
            "vehicle": {
                "vehicleRegistrationNumber": "WB33F2746"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "676c8415-2d41-49cf-a176-a5d4179581dd",
        "_score": 9.141678,
        "_source": {
            "uuid": "676c8415-2d41-49cf-a176-a5d4179581dd",
            "vehicle": {
                "vehicleRegistrationNumber": "WB33B4944"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "14375a1a-1996-4564-8d4e-e67921d7c0c8",
        "_score": 9.106204,
        "_source": {
            "uuid": "14375a1a-1996-4564-8d4e-e67921d7c0c8",
            "vehicle": {
                "vehicleRegistrationNumber": "CG04MR6452"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "2ab3748f-a930-4b4c-a0f8-dad7110900b1",
        "_score": 9.106204,
        "_source": {
            "uuid": "2ab3748f-a930-4b4c-a0f8-dad7110900b1",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01K4399"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "7370653b-696b-4c57-9004-ddeefa42c2d5",
        "_score": 9.106204,
        "_source": {
            "uuid": "7370653b-696b-4c57-9004-ddeefa42c2d5",
            "vehicle": {
                "vehicleRegistrationNumber": "WB33B4164"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "e644a9e5-1cbd-4b0f-b099-cee478c4c38c",
        "_score": 9.106204,
        "_source": {
            "uuid": "e644a9e5-1cbd-4b0f-b099-cee478c4c38c",
            "vehicle": {
                "vehicleRegistrationNumber": "WB37D2194"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a4e333ff-c0d6-4701-ae4f-7ca14dc65224",
        "_score": 9.106204,
        "_source": {
            "uuid": "a4e333ff-c0d6-4701-ae4f-7ca14dc65224",
            "vehicle": {
                "vehicleRegistrationNumber": "JK01AF6842"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "4b428652-9e45-435a-9933-7cf19a289ba7",
        "_score": 9.106204,
        "_source": {
            "uuid": "4b428652-9e45-435a-9933-7cf19a289ba7",
            "vehicle": {
                "vehicleRegistrationNumber": "OD04L6826"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "b722f68b-4f81-4d15-afe8-1b505a9467ac",
        "_score": 9.106204,
        "_source": {
            "uuid": "b722f68b-4f81-4d15-afe8-1b505a9467ac",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AG6058"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "eac579af-7950-42a1-93a9-aacde0032749",
        "_score": 9.106204,
        "_source": {
            "uuid": "eac579af-7950-42a1-93a9-aacde0032749",
            "vehicle": {
                "vehicleRegistrationNumber": "NL02Q9374"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "3884b790-0a44-4026-b279-783c1e7dcbe5",
        "_score": 9.106204,
        "_source": {
            "uuid": "3884b790-0a44-4026-b279-783c1e7dcbe5",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01G3585"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "57241ce2-b7a5-4940-aab1-a3e6ea7fd097",
        "_score": 9.106204,
        "_source": {
            "uuid": "57241ce2-b7a5-4940-aab1-a3e6ea7fd097",
            "vehicle": {
                "vehicleRegistrationNumber": "WB11D3401"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "69ec3fdc-1dba-4f49-9de6-b2bc9b45cd0c",
        "_score": 9.106204,
        "_source": {
            "uuid": "69ec3fdc-1dba-4f49-9de6-b2bc9b45cd0c",
            "vehicle": {
                "vehicleRegistrationNumber": "WB11B8844"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "85bf4594-c4b4-411f-89b3-c414f52895ab",
        "_score": 9.106204,
        "_source": {
            "uuid": "85bf4594-c4b4-411f-89b3-c414f52895ab",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38X2353"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "b23ec8ea-21cb-4d89-be90-41019b689c33",
        "_score": 9.106204,
        "_source": {
            "uuid": "b23ec8ea-21cb-4d89-be90-41019b689c33",
            "vehicle": {
                "vehicleRegistrationNumber": "TS12UB1504"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "5767afca-3da4-4dbd-9683-6811342bc7c3",
        "_score": 9.106204,
        "_source": {
            "uuid": "5767afca-3da4-4dbd-9683-6811342bc7c3",
            "vehicle": {
                "vehicleRegistrationNumber": "RDS NO-10"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "cadbe1dc-b228-47c1-82af-8e033891c79d",
        "_score": 9.106204,
        "_source": {
            "uuid": "cadbe1dc-b228-47c1-82af-8e033891c79d",
            "vehicle": {
                "vehicleRegistrationNumber": "RDS NO-1"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "672efc8f-c026-4117-a93a-1d282ca1f919",
        "_score": 9.106204,
        "_source": {
            "uuid": "672efc8f-c026-4117-a93a-1d282ca1f919",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01Q0941"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "8a77f67d-f0f6-400e-bb7d-ca4e5537d7d7",
        "_score": 9.106204,
        "_source": {
            "uuid": "8a77f67d-f0f6-400e-bb7d-ca4e5537d7d7",
            "vehicle": {
                "vehicleRegistrationNumber": "WB11E7786"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "e69a653a-bbe1-4acc-b8fd-bef1a7ab74dd",
        "_score": 9.106204,
        "_source": {
            "uuid": "e69a653a-bbe1-4acc-b8fd-bef1a7ab74dd",
            "vehicle": {
                "vehicleRegistrationNumber": "TS12UB1979"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a83eb4f8-c84e-4252-bf38-c4d403dc0f5f",
        "_score": 9.106204,
        "_source": {
            "uuid": "a83eb4f8-c84e-4252-bf38-c4d403dc0f5f",
            "vehicle": {
                "vehicleRegistrationNumber": "NL02AA0467"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "f1a87889-4d1d-4796-bfe2-f81eea0271a5",
        "_score": 9.106204,
        "_source": {
            "uuid": "f1a87889-4d1d-4796-bfe2-f81eea0271a5",
            "vehicle": {
                "vehicleRegistrationNumber": "JH05DN9764"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "24eed20b-4c7f-4c2d-8473-e1e4f3728931",
        "_score": 9.106204,
        "_source": {
            "uuid": "24eed20b-4c7f-4c2d-8473-e1e4f3728931",
            "vehicle": {
                "vehicleRegistrationNumber": "WB11D3341"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "3de2ffc7-b914-483b-b815-69b0e2e05d7f",
        "_score": 8.769739,
        "_source": {
            "uuid": "3de2ffc7-b914-483b-b815-69b0e2e05d7f",
            "vehicle": {
                "vehicleRegistrationNumber": "WB37D2193"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "46f117fb-9c26-4d5d-80cd-25297cd2d736",
        "_score": 8.769739,
        "_source": {
            "uuid": "46f117fb-9c26-4d5d-80cd-25297cd2d736",
            "vehicle": {
                "vehicleRegistrationNumber": "WB41H0455"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "2b1608b7-a093-4dc1-9128-4d302cc7d120",
        "_score": 8.769739,
        "_source": {
            "uuid": "2b1608b7-a093-4dc1-9128-4d302cc7d120",
            "vehicle": {
                "vehicleRegistrationNumber": "WB33E2056"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "58ee508a-731c-4833-a92a-88d141d25958",
        "_score": 8.769739,
        "_source": {
            "uuid": "58ee508a-731c-4833-a92a-88d141d25958",
            "vehicle": {
                "vehicleRegistrationNumber": "WB59C8762"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "01e7c299-b18a-408b-b024-5a882e204e61",
        "_score": 8.769739,
        "_source": {
            "uuid": "01e7c299-b18a-408b-b024-5a882e204e61",
            "vehicle": {
                "vehicleRegistrationNumber": "WB33F2704"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "49580474-2ad3-4f4f-bcff-c5c95c362064",
        "_score": 8.769739,
        "_source": {
            "uuid": "49580474-2ad3-4f4f-bcff-c5c95c362064",
            "vehicle": {
                "vehicleRegistrationNumber": "NL04D7617"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "59e6a2e4-bd27-4da3-9730-e2a67fab2db0",
        "_score": 8.769739,
        "_source": {
            "uuid": "59e6a2e4-bd27-4da3-9730-e2a67fab2db0",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01G6229"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "f7a4f7a8-383e-4485-8850-6dcf90badc81",
        "_score": 8.769739,
        "_source": {
            "uuid": "f7a4f7a8-383e-4485-8850-6dcf90badc81",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AA0268"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "9342cba9-a9b7-4acf-88b7-ed3fa1efc503",
        "_score": 8.769739,
        "_source": {
            "uuid": "9342cba9-a9b7-4acf-88b7-ed3fa1efc503",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01K2329"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "16cad7da-dec1-48d3-a3de-e54e0c0c45f2",
        "_score": 8.769739,
        "_source": {
            "uuid": "16cad7da-dec1-48d3-a3de-e54e0c0c45f2",
            "vehicle": {
                "vehicleRegistrationNumber": "AP23Y5222"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "409705ee-b1fb-4db7-8d7e-85e7c5fe1c1c",
        "_score": 8.769739,
        "_source": {
            "uuid": "409705ee-b1fb-4db7-8d7e-85e7c5fe1c1c",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AH8629"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "591de59a-de2a-4c28-8faf-7e453ca9c77c",
        "_score": 8.769739,
        "_source": {
            "uuid": "591de59a-de2a-4c28-8faf-7e453ca9c77c",
            "vehicle": {
                "vehicleRegistrationNumber": "NL02Q3587"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "851b3767-9e88-4e86-bfa1-17e4aacd36a9",
        "_score": 8.769739,
        "_source": {
            "uuid": "851b3767-9e88-4e86-bfa1-17e4aacd36a9",
            "vehicle": {
                "vehicleRegistrationNumber": "WB11E1471"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "796185a6-dafd-4682-a70a-5660f67e203d",
        "_score": 8.769739,
        "_source": {
            "uuid": "796185a6-dafd-4682-a70a-5660f67e203d",
            "vehicle": {
                "vehicleRegistrationNumber": "OD04L6825"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "9991b4c3-2f10-44a3-b60a-ecced1b3e28e",
        "_score": 8.769739,
        "_source": {
            "uuid": "9991b4c3-2f10-44a3-b60a-ecced1b3e28e",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38X3685"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "8fc8aee4-5d6b-4ad6-8ea5-0c92123c56a5",
        "_score": 8.769739,
        "_source": {
            "uuid": "8fc8aee4-5d6b-4ad6-8ea5-0c92123c56a5",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AB3976"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "ae807f68-79ef-433b-b47c-047be249c944",
        "_score": 8.769739,
        "_source": {
            "uuid": "ae807f68-79ef-433b-b47c-047be249c944",
            "vehicle": {
                "vehicleRegistrationNumber": "WB11E7586"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "d8f09b51-a923-41a2-b78d-1aed5e0fcef8",
        "_score": 8.769739,
        "_source": {
            "uuid": "d8f09b51-a923-41a2-b78d-1aed5e0fcef8",
            "vehicle": {
                "vehicleRegistrationNumber": "WB76A2256"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "f116b31a-caa2-4b36-b690-639c5ca9ca4d",
        "_score": 8.769739,
        "_source": {
            "uuid": "f116b31a-caa2-4b36-b690-639c5ca9ca4d",
            "vehicle": {
                "vehicleRegistrationNumber": "JH05DN4029"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "691596a7-4a0b-47ec-a439-9bbaf2476d9f",
        "_score": 8.769739,
        "_source": {
            "uuid": "691596a7-4a0b-47ec-a439-9bbaf2476d9f",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01K1185"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a9b0f421-fb9f-4fd2-9f05-85f302ab1a6b",
        "_score": 8.769739,
        "_source": {
            "uuid": "a9b0f421-fb9f-4fd2-9f05-85f302ab1a6b",
            "vehicle": {
                "vehicleRegistrationNumber": "WB37E6125"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "14001b1e-5c4d-4233-928c-f134778e2c3a",
        "_score": 8.769739,
        "_source": {
            "uuid": "14001b1e-5c4d-4233-928c-f134778e2c3a",
            "vehicle": {
                "vehicleRegistrationNumber": "OD04L6830"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "d0601fde-e4af-47fd-a002-10282cf9df31",
        "_score": 8.769739,
        "_source": {
            "uuid": "d0601fde-e4af-47fd-a002-10282cf9df31",
            "vehicle": {
                "vehicleRegistrationNumber": "OR01P0841"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "3c3c9dc8-36bc-4248-b93a-9d8e461d6eee",
        "_score": 8.769739,
        "_source": {
            "uuid": "3c3c9dc8-36bc-4248-b93a-9d8e461d6eee",
            "vehicle": {
                "vehicleRegistrationNumber": "WB76A7529"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "15f515ab-b403-44d8-a863-f8aeafe60eb1",
        "_score": 8.769739,
        "_source": {
            "uuid": "15f515ab-b403-44d8-a863-f8aeafe60eb1",
            "vehicle": {
                "vehicleRegistrationNumber": "RDS NO-7"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "193b93b8-5af4-4f96-af8b-7cfbcc00e0a5",
        "_score": 8.769739,
        "_source": {
            "uuid": "193b93b8-5af4-4f96-af8b-7cfbcc00e0a5",
            "vehicle": {
                "vehicleRegistrationNumber": "RDS NO-3"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "bef21b80-7b2f-4247-bcc4-f4548cdec52d",
        "_score": 8.769739,
        "_source": {
            "uuid": "bef21b80-7b2f-4247-bcc4-f4548cdec52d",
            "vehicle": {
                "vehicleRegistrationNumber": "RDS NO-9"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "dc70bda0-a5e0-4f96-af04-648720e60902",
        "_score": 8.769739,
        "_source": {
            "uuid": "dc70bda0-a5e0-4f96-af04-648720e60902",
            "vehicle": {
                "vehicleRegistrationNumber": "RDS NO-2"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "f9ae5b6c-cc8a-4f83-9952-0131afeed4ef",
        "_score": 8.769739,
        "_source": {
            "uuid": "f9ae5b6c-cc8a-4f83-9952-0131afeed4ef",
            "vehicle": {
                "vehicleRegistrationNumber": "WB33E2721"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "19dd75bf-4f6a-4ae6-93de-5785fa32f467",
        "_score": 8.769739,
        "_source": {
            "uuid": "19dd75bf-4f6a-4ae6-93de-5785fa32f467",
            "vehicle": {
                "vehicleRegistrationNumber": "WB33F2721"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "ed19678c-356f-414c-8633-0ab72c6d868f",
        "_score": 8.769739,
        "_source": {
            "uuid": "ed19678c-356f-414c-8633-0ab72c6d868f",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38W0398"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "e4ef8457-5a49-4b51-bf5c-d0c2f6b0f2cc",
        "_score": 8.769739,
        "_source": {
            "uuid": "e4ef8457-5a49-4b51-bf5c-d0c2f6b0f2cc",
            "vehicle": {
                "vehicleRegistrationNumber": "NL02Q8870"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "09c3cef6-f49d-40a7-a7e6-e2de58632c2c",
        "_score": 8.769739,
        "_source": {
            "uuid": "09c3cef6-f49d-40a7-a7e6-e2de58632c2c",
            "vehicle": {
                "vehicleRegistrationNumber": "WB11B7651"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "72994ffb-4c16-44f2-a6a4-8bab7501697a",
        "_score": 8.769739,
        "_source": {
            "uuid": "72994ffb-4c16-44f2-a6a4-8bab7501697a",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AB4592"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "ead85292-95ea-4c02-819a-ac3646f975d7",
        "_score": 8.769739,
        "_source": {
            "uuid": "ead85292-95ea-4c02-819a-ac3646f975d7",
            "vehicle": {
                "vehicleRegistrationNumber": "OD04L6823"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "90fde56e-17e9-48f1-b347-f1db32443237",
        "_score": 8.769739,
        "_source": {
            "uuid": "90fde56e-17e9-48f1-b347-f1db32443237",
            "vehicle": {
                "vehicleRegistrationNumber": "NL02K1789"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "310c984d-166c-48f6-937e-b3caf8c7bd29",
        "_score": 8.769739,
        "_source": {
            "uuid": "310c984d-166c-48f6-937e-b3caf8c7bd29",
            "vehicle": {
                "vehicleRegistrationNumber": "WB29A5175"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "847d7842-565c-4432-8419-481d60a47442",
        "_score": 8.686772,
        "_source": {
            "uuid": "847d7842-565c-4432-8419-481d60a47442",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01Q0940"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "8c17f96e-ad31-42a3-bc85-58ed01cbd817",
        "_score": 8.686772,
        "_source": {
            "uuid": "8c17f96e-ad31-42a3-bc85-58ed01cbd817",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AC0040"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "9d547f8a-f8b1-4431-a6d6-0c6644186a26",
        "_score": 8.686772,
        "_source": {
            "uuid": "9d547f8a-f8b1-4431-a6d6-0c6644186a26",
            "vehicle": {
                "vehicleRegistrationNumber": "WB916609"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "b6e999c0-4109-4cce-b66d-bb2ed8e2075d",
        "_score": 8.686772,
        "_source": {
            "uuid": "b6e999c0-4109-4cce-b66d-bb2ed8e2075d",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01A2836"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "3331c225-e2b6-4c0b-9596-0260996fe0c8",
        "_score": 8.686772,
        "_source": {
            "uuid": "3331c225-e2b6-4c0b-9596-0260996fe0c8",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AJ1158"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "35e0f79f-1961-4bee-b94c-cdc5142f6054",
        "_score": 8.686772,
        "_source": {
            "uuid": "35e0f79f-1961-4bee-b94c-cdc5142f6054",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AH8628"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "645f39c5-a700-43f8-87f3-6eaf39b86fd8",
        "_score": 8.686772,
        "_source": {
            "uuid": "645f39c5-a700-43f8-87f3-6eaf39b86fd8",
            "vehicle": {
                "vehicleRegistrationNumber": "NL02Q8950"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "0ac9ca62-9e3a-4382-815b-01fc282afb71",
        "_score": 8.686772,
        "_source": {
            "uuid": "0ac9ca62-9e3a-4382-815b-01fc282afb71",
            "vehicle": {
                "vehicleRegistrationNumber": "JH05CX3168"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "cbed4e78-3a12-4ad1-8644-972cd8b645c8",
        "_score": 8.686772,
        "_source": {
            "uuid": "cbed4e78-3a12-4ad1-8644-972cd8b645c8",
            "vehicle": {
                "vehicleRegistrationNumber": "WB11F0762"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "3441c486-71f3-4fbf-a81f-be96a3f73b4e",
        "_score": 8.686772,
        "_source": {
            "uuid": "3441c486-71f3-4fbf-a81f-be96a3f73b4e",
            "vehicle": {
                "vehicleRegistrationNumber": "WB355602"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "4ee1f6c0-e2a9-4afd-bf60-950c2d7b887e",
        "_score": 8.686772,
        "_source": {
            "uuid": "4ee1f6c0-e2a9-4afd-bf60-950c2d7b887e",
            "vehicle": {
                "vehicleRegistrationNumber": "TS12UC0737"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "6aaa3f94-f2f1-422e-9ee1-35a6018b6f99",
        "_score": 8.686772,
        "_source": {
            "uuid": "6aaa3f94-f2f1-422e-9ee1-35a6018b6f99",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01G2776"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "44b16301-728e-4cc8-810a-42a3cb57b3ce",
        "_score": 8.686772,
        "_source": {
            "uuid": "44b16301-728e-4cc8-810a-42a3cb57b3ce",
            "vehicle": {
                "vehicleRegistrationNumber": "WB37E6106"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a480dbad-47d0-4c5b-b168-7ec6fba15a71",
        "_score": 8.686772,
        "_source": {
            "uuid": "a480dbad-47d0-4c5b-b168-7ec6fba15a71",
            "vehicle": {
                "vehicleRegistrationNumber": "WB917819"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a95a2a8c-3323-4ce6-858f-635a57c50c52",
        "_score": 8.686772,
        "_source": {
            "uuid": "a95a2a8c-3323-4ce6-858f-635a57c50c52",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01G6886"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "fc906b44-a8d0-4898-9d3c-7855c89b9ab4",
        "_score": 8.686772,
        "_source": {
            "uuid": "fc906b44-a8d0-4898-9d3c-7855c89b9ab4",
            "vehicle": {
                "vehicleRegistrationNumber": "WB76B1552"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "7c5be760-7648-4010-b957-a5e44ae985df",
        "_score": 8.686772,
        "_source": {
            "uuid": "7c5be760-7648-4010-b957-a5e44ae985df",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38X5523"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "f9d20fe0-4b9c-46f7-9132-d18ce2ed86a3",
        "_score": 8.686772,
        "_source": {
            "uuid": "f9d20fe0-4b9c-46f7-9132-d18ce2ed86a3",
            "vehicle": {
                "vehicleRegistrationNumber": "WB37E6127"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "1237bbdd-eadd-4d53-aa5b-5f7f92b68701",
        "_score": 8.686772,
        "_source": {
            "uuid": "1237bbdd-eadd-4d53-aa5b-5f7f92b68701",
            "vehicle": {
                "vehicleRegistrationNumber": "RDS NO-5"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "b0be969e-c60c-4738-b864-61afc6c4ed65",
        "_score": 8.686772,
        "_source": {
            "uuid": "b0be969e-c60c-4738-b864-61afc6c4ed65",
            "vehicle": {
                "vehicleRegistrationNumber": "RDS NO-8"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "ed536ec2-e94d-46a2-b369-fb71ccc3a510",
        "_score": 8.686772,
        "_source": {
            "uuid": "ed536ec2-e94d-46a2-b369-fb71ccc3a510",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01K0784"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "03c5add1-605a-49a3-ad18-6ca4bc3217aa",
        "_score": 8.686772,
        "_source": {
            "uuid": "03c5add1-605a-49a3-ad18-6ca4bc3217aa",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38X0619"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "295fd1c0-9c89-4edf-b55d-94c560e36a57",
        "_score": 8.686772,
        "_source": {
            "uuid": "295fd1c0-9c89-4edf-b55d-94c560e36a57",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01G8353"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "37fbd700-a96c-458e-959e-c0ad71a5ab83",
        "_score": 8.686772,
        "_source": {
            "uuid": "37fbd700-a96c-458e-959e-c0ad71a5ab83",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AB1374"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "07de42c4-b719-4d9b-999d-c2f9c36225b8",
        "_score": 8.686772,
        "_source": {
            "uuid": "07de42c4-b719-4d9b-999d-c2f9c36225b8",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01G6823"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "abb7046a-bec5-4336-b152-76fcbcfacd62",
        "_score": 8.686772,
        "_source": {
            "uuid": "abb7046a-bec5-4336-b152-76fcbcfacd62",
            "vehicle": {
                "vehicleRegistrationNumber": "CG13X1196"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "2c945146-c87f-4952-ae95-34c6519b66d9",
        "_score": 8.686772,
        "_source": {
            "uuid": "2c945146-c87f-4952-ae95-34c6519b66d9",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01D6786"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "fcf590b7-951c-4eb3-9bbd-a91b0f11bc23",
        "_score": 8.686772,
        "_source": {
            "uuid": "fcf590b7-951c-4eb3-9bbd-a91b0f11bc23",
            "vehicle": {
                "vehicleRegistrationNumber": "WB59B7101"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "0e56a27b-c1ba-4ad1-85a5-08a9d5b05d92",
        "_score": 8.621449,
        "_source": {
            "uuid": "0e56a27b-c1ba-4ad1-85a5-08a9d5b05d92",
            "vehicle": {
                "vehicleRegistrationNumber": "TS12UB1449"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "1d008fca-3c88-48e8-ac8f-f7f752331fb7",
        "_score": 8.621449,
        "_source": {
            "uuid": "1d008fca-3c88-48e8-ac8f-f7f752331fb7",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01Q0938"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "31ef7c1b-dae9-4eea-85c6-c861541e9e3c",
        "_score": 8.621449,
        "_source": {
            "uuid": "31ef7c1b-dae9-4eea-85c6-c861541e9e3c",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AC0035"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "def6eafd-e0b5-455b-a435-a2cd0a31a585",
        "_score": 8.621449,
        "_source": {
            "uuid": "def6eafd-e0b5-455b-a435-a2cd0a31a585",
            "vehicle": {
                "vehicleRegistrationNumber": "WB41E8534"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "e9ec342d-d066-40e2-9bde-9dfc2aac0c71",
        "_score": 8.621449,
        "_source": {
            "uuid": "e9ec342d-d066-40e2-9bde-9dfc2aac0c71",
            "vehicle": {
                "vehicleRegistrationNumber": "WB350799"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "048bc0ac-3809-42cf-8c78-31db8f91e6cb",
        "_score": 8.621449,
        "_source": {
            "uuid": "048bc0ac-3809-42cf-8c78-31db8f91e6cb",
            "vehicle": {
                "vehicleRegistrationNumber": "WB33B7010"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "702adacb-0b2a-4da2-8e8a-730803734ddd",
        "_score": 8.621449,
        "_source": {
            "uuid": "702adacb-0b2a-4da2-8e8a-730803734ddd",
            "vehicle": {
                "vehicleRegistrationNumber": "WB11F0962"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "80420cd2-e566-462c-852b-ac939d213a70",
        "_score": 8.621449,
        "_source": {
            "uuid": "80420cd2-e566-462c-852b-ac939d213a70",
            "vehicle": {
                "vehicleRegistrationNumber": "WB76A2255"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "95bfdf1d-6bb7-43bb-9f0c-0128a48477cd",
        "_score": 8.621449,
        "_source": {
            "uuid": "95bfdf1d-6bb7-43bb-9f0c-0128a48477cd",
            "vehicle": {
                "vehicleRegistrationNumber": "NL02Q7971"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a3b3a0e8-6d29-4bdd-a019-197c59828503",
        "_score": 8.621449,
        "_source": {
            "uuid": "a3b3a0e8-6d29-4bdd-a019-197c59828503",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AD6357"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "df34f9b9-08f8-4dd6-8593-b1cc339e0c0c",
        "_score": 8.621449,
        "_source": {
            "uuid": "df34f9b9-08f8-4dd6-8593-b1cc339e0c0c",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01K4503"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "43a9e54e-8a33-4122-b06b-46178fe7ff34",
        "_score": 8.621449,
        "_source": {
            "uuid": "43a9e54e-8a33-4122-b06b-46178fe7ff34",
            "vehicle": {
                "vehicleRegistrationNumber": "WB65D7088"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "75da3bfe-5509-41d9-9632-708982170758",
        "_score": 8.621449,
        "_source": {
            "uuid": "75da3bfe-5509-41d9-9632-708982170758",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01K5325"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "840e1e2a-3b0e-49bc-a3d6-1e886e6d08f2",
        "_score": 8.621449,
        "_source": {
            "uuid": "840e1e2a-3b0e-49bc-a3d6-1e886e6d08f2",
            "vehicle": {
                "vehicleRegistrationNumber": "WB76B1703"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "93a5f4f0-56ff-4a3e-b977-01a52d82f9e0",
        "_score": 8.621449,
        "_source": {
            "uuid": "93a5f4f0-56ff-4a3e-b977-01a52d82f9e0",
            "vehicle": {
                "vehicleRegistrationNumber": "NL02Q9147"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "e26f20d9-21c3-460e-8bf4-1e5bdd6f5625",
        "_score": 8.621449,
        "_source": {
            "uuid": "e26f20d9-21c3-460e-8bf4-1e5bdd6f5625",
            "vehicle": {
                "vehicleRegistrationNumber": "WB33H3051"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "2610c1bf-59f0-406c-9b25-3905b1fc4056",
        "_score": 8.621449,
        "_source": {
            "uuid": "2610c1bf-59f0-406c-9b25-3905b1fc4056",
            "vehicle": {
                "vehicleRegistrationNumber": "OD04L6827"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "9d2669fb-f6bc-43b9-8b67-38528417cc01",
        "_score": 8.621449,
        "_source": {
            "uuid": "9d2669fb-f6bc-43b9-8b67-38528417cc01",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01K0315"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a6f8570f-c685-4e48-9357-85a2fd8b3c5c",
        "_score": 8.621449,
        "_source": {
            "uuid": "a6f8570f-c685-4e48-9357-85a2fd8b3c5c",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01AB2424"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "56ca2dbb-aa97-4553-a805-b5edb5b1d6ca",
        "_score": 8.621449,
        "_source": {
            "uuid": "56ca2dbb-aa97-4553-a805-b5edb5b1d6ca",
            "vehicle": {
                "vehicleRegistrationNumber": "HR38X3336"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "55b39dcb-9dd5-4c09-b0cb-89b3c576ea1e",
        "_score": 8.621449,
        "_source": {
            "uuid": "55b39dcb-9dd5-4c09-b0cb-89b3c576ea1e",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01K4505"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "31a307c2-b1c5-4fc4-969a-38886033e366",
        "_score": 8.621449,
        "_source": {
            "uuid": "31a307c2-b1c5-4fc4-969a-38886033e366",
            "vehicle": {
                "vehicleRegistrationNumber": "WB37E6121"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "d3a9b82c-3056-45e6-b811-17bdf76ebe11",
        "_score": 8.621449,
        "_source": {
            "uuid": "d3a9b82c-3056-45e6-b811-17bdf76ebe11",
            "vehicle": {
                "vehicleRegistrationNumber": "JH05DN0452"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "d454ffcf-44ae-49b2-af1a-f095a8022dd3",
        "_score": 8.621449,
        "_source": {
            "uuid": "d454ffcf-44ae-49b2-af1a-f095a8022dd3",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01K1491"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "227598cc-72f2-4368-b3e0-35cde12f87be",
        "_score": 8.621449,
        "_source": {
            "uuid": "227598cc-72f2-4368-b3e0-35cde12f87be",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01G3625"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "e9fe687e-34ef-4a34-87bc-30a33ab0915e",
        "_score": 8.621449,
        "_source": {
            "uuid": "e9fe687e-34ef-4a34-87bc-30a33ab0915e",
            "vehicle": {
                "vehicleRegistrationNumber": "WB11B9036"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a2c4601a-857f-4e93-ad03-c9b965f716ac",
        "_score": 8.621449,
        "_source": {
            "uuid": "a2c4601a-857f-4e93-ad03-c9b965f716ac",
            "vehicle": {
                "vehicleRegistrationNumber": "JH02BM8472"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "a73ccb6f-548b-475b-baac-3d481f13be13",
        "_score": 8.621449,
        "_source": {
            "uuid": "a73ccb6f-548b-475b-baac-3d481f13be13",
            "vehicle": {
                "vehicleRegistrationNumber": "WB51C7207"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "100f1e62-efb0-42d9-925a-4543f7282bd9",
        "_score": 8.621449,
        "_source": {
            "uuid": "100f1e62-efb0-42d9-925a-4543f7282bd9",
            "vehicle": {
                "vehicleRegistrationNumber": "JH05BN3505"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "bf9b8d99-62be-4717-afdf-bcbfdd166337",
        "_score": 8.621449,
        "_source": {
            "uuid": "bf9b8d99-62be-4717-afdf-bcbfdd166337",
            "vehicle": {
                "vehicleRegistrationNumber": "JH05DN3505"
            }
        }
    },
    {
        "_index": "partner_fleet",
        "_type": "kafka-connect",
        "_id": "34b98921-eb99-4b1d-bef4-916ecf7bdcd2",
        "_score": 8.621449,
        "_source": {
            "uuid": "34b98921-eb99-4b1d-bef4-916ecf7bdcd2",
            "vehicle": {
                "vehicleRegistrationNumber": "NL01G6786"
            }
        }
    }
]


async function addDocsToVehicle(vehicleDetails, resourceId, vehicleNumber) {
    const options = {
        method: 'POST',
        uri: `${BASE_URL}/partner-fleet/v2/sync/via-parivahan?resourceId=${resourceId}`,
        headers: {
            'Authorization': TOKEN
        },
        body: vehicleDetails,
        json: true
    };

    try {
        const response = await rp(options);
        if (response.status === 200) {
            console.log(`Done for ${vehicleNumber}`);
            return response.data;
        }
        else throw response.error;
    } catch (error) {
        console.error("Error adding docs to vehicle:", error);
    }

}

async function getVerifiedVehicle(vehicleNumber) {
    const options = {
        method: 'GET',
        uri: `${BASE_URL}/partner-fleet/v2/vehicle/registration/details/v2?vehicleNumber=${vehicleNumber}`,
        headers: {
            'Authorization': TOKEN,
        },
        json: true
    };

    try {
        const response = await rp(options);
        if (response.status === 200) {
            return response.data;
        }
        return null;
    } catch (error) {
        console.error("Error fetching vehicle details:", vehicleNumber, error);
    }
}

async function main() {
    for (const vehicleCode of vehicleCodes) {
        const vehicleDetails = await getVerifiedVehicle(vehicleCode);
        if (vehicleDetails) {
            const matchingResource = resourceIds.find(resource =>
                resource._source.vehicle.vehicleRegistrationNumber === vehicleCode
            );
            if (matchingResource) {
                await addDocsToVehicle(vehicleDetails, matchingResource._source.uuid, vehicleCode);
            }
        }
    }
}

main();