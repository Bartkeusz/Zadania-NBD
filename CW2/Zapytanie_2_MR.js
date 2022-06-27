printjson(
    db.people.mapReduce(
		function() {this.credit.forEach(loop => emit(loop.currency, parseFloat(loop.balance)))},
		function(keys, values) { 
			
			return {
				total_balance_per_currency: values.reduce((a,b) => a+b)
			}; 
		},
		{
			out: { inline: 1 }
		}
	)
);
