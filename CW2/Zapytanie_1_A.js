conversion = {
    $addFields: {
        weight_number: { $convert:
            {
                input: "$weight",
                to: "double",
                onError: "ERR",
                onNull: 0
            }
        },
        height_number: { $convert:
            {
                input: "$height",
                to: "double",
                onError: "ERR",
                onNull: 0
            },
        }
    }
};

printjson(db.people.aggregate(
    [ conversion,
    {$group: {
        _id: "$sex",
        avg_height: {$avg: "$height_number"},
        avg_weight: {$avg: "$weight_number" }
    }},
]
    )._batch);
