printjson(db.people.insert(
    [
        {
                "sex" : "Male",
                "first_name" : "Bartlomiej",
                "last_name" : "Kletkiewicz",
                "job" : "DataOps",
                "email" : "s25871@pjatk.edu.pl",
                "location" : {
                        "city" : "Warsaw",
                        "address" : {
                                "streetname" : "Rayskiego",
                                "streetnumber" : "33"
                        }
                },
                "description" : "non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit",
                "height" : "179",
                "weight" : "80",
                "birth_date" : "1997-01-18T14:51:38Z",
                "nationality" : "Poland",
                "credit" : [
                        {
                                "type" : "visa-electron",
                                "number" : "6379796541338409",
                                "currency" : "PLN",
                                "balance" : "42342424280.15"
                        },
                        {
                                "type" : "zAPPka",
                                "number" : "3539516040777020",
                                "currency" : "EUR",
                                "balance" : "95402.31"
                        }
                ]
        }
]
));
