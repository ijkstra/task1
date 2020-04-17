$(function() {
	
	const $APPID = "b6289e88de43376e8f526438a5f8bdb4";
	
	$('#button').click(function() {
		var $weather = $('#weather');
		$weather.empty();
		var $zip = $('#zip').val();
		$.ajax({
			type: 'GET',
			url: 'https://api.openweathermap.org/data/2.5/weather?zip=' + $zip+ ',us&appid=' + $APPID,
			success: function(data) {
				var $html = '<li>City: ' + data.name + '</li>' +
				'<li>Max_temp: ' + data.main.temp_max + '</li>' +
				'<li>Min_temp: ' + data.main.temp_min + '</li>';
				
				$weather.append($html);
			},
			error: function() {
				$weather.append("<p style='color: red;' ><strong>Please enter a valid zip code</strong></p>");
			}
		})
	})
	
})

