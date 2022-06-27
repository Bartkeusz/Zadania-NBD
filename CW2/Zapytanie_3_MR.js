printjson(db.people.mapReduce(
function () { emit ("job", {job: this.job})},
function (keys, values) {
    return values
},
{out: { inline: 1}}
));
