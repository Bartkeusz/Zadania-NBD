printjson(
    db.people.mapReduce(
		function() {emit(this.nationality, { weight: parseFloat(this.weight), height: parseFloat(this.height)});},
		function(keys, values) { 
            let total_bmi = 0;
            let max_bmi = 0;
            let min_bmi = 9999;
            let bmi = 0;

    values.forEach(i => {bmi = i.weight / (i.height/100 * i.height/100);
      total_bmi = total_bmi + bmi;
      if (bmi > max_bmi) max_bmi = bmi;
      if (bmi < min_bmi) min_bmi = bmi});

    return { 
        avg_bmi: total_bmi / values.length,
        max_bmi,
        min_bmi }},
    {out: { inline: 1}}
));
