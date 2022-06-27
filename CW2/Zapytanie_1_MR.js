printjson(
    db.people.mapReduce(
		function() {emit(this.sex, { weight: parseFloat(this.weight), height: parseFloat(this.height) });},
		function(keys, values) { 
			let total_weight = 0;
			let total_height = 0;
			
			values.forEach(i => {total_height += i.height; total_weight += i.weight})
			
			return {
				avg_weight: total_weight / values.length,
				avg_height: total_height / values.length,
			}; 
		},
		{
			out: { inline: 1 }
		}
	)
);
