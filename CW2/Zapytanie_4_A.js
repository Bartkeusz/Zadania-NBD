Conversion3 = {
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
            }
        },
        power: {$pow: ["$height_number",2]},
        bmi: { $divide: ["$weight_number", {$pow: ["$height_number",2]}]}
        }
    };

CalcBMI = { $project: {
    bmi: { $divide: ["$weight_number", {$pow: [{$divide:["$height_number",100]},2]}]},
    nationality: "$nationality"
}};

printjson(db.people.aggregate(
    [ Conversion3, CalcBMI,
    {$group: {
        _id: "$nationality",
        bmi_avg: {$avg: "$bmi"},
        bmi_max: {$max: "$bmi"},
        bmi_min: {$min: "$bmi"}
    }}
])._batch);
