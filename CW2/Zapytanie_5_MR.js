printjson(
    db.people.mapReduce(
		function() {this.credit.forEach(loop => emit(loop.currency, parseFloat(loop.balance)))},
		function(keys, values) { 

			return {
				total_balance_per_currency: values.reduce((a,b) => a+b),
                avg_balance_per_currency: values.reduce((a,b) => a+b)/values.length,
            };
        },
		{   query: { sex: "Female", nationality: "Poland" },
            out: { inline: 1 },
        }
	)
);
