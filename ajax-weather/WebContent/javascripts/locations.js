$(function() {
	
	const $APPID = "b6289e88de43376e8f526438a5f8bdb4";
	
	$('#button').click(function() {
		var $cities = $('#cities');
		$cities.empty();
		
		var $latitude = $('#latitude').val();
		var $longitude = $('#longitude').val();
		console.log($latitude);
		console.log($longitude);
		
		$.ajax({
			type: 'GET',
			url: 'https://api.openweathermap.org/data/2.5/find?lat=' + $latitude + '&lon=' + $longitude + '&cnt=10&appid=' + $APPID,
			success: function(items) {
				
				console.log('success: ' + items.list);
				var $contents = "";
				
				$.each(items.list, function(i, item) {
					$contents += '<li>' + item.name + '</li>';
				})
				
				$cities.append($contents);
			},
			error: function() {
				$cities.append("<p style='color: red;' ><strong>Please enter a valid location</strong></p>");
			}
		})
	})
})