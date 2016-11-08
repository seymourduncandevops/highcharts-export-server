(function(){
	var colors = [];
	var base = Highcharts.getOptions().colors[0];
	
	for (var i = 0; i < 10; i += 1) {
		colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
	}
	return Highcharts.setOptions({
		"colors": colors
	});
})();