Conversion2 = {
    $addFields: {
        converted_balance: { $convert:
            {
                input: "$credit.balance",
                to: "double",
                onError: "ERR",
                onNull: 0
            },
        }
    }   
};
printjson(db.people.aggregate(
    [  {$unwind: "$credit"}, Conversion2, { $match: { $and: [ {"sex": "Female"},{"nationality": "Poland"}]}},
    {$group: {
        _id: "$credit.currency",
        total_money: {$sum: "$converted_balance"},
        average_money: {$avg: "$converted_balance"}
    }}, 
])._batch);
