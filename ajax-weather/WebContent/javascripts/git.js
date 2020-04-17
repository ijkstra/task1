$(function() {
	
	$.ajax({
		type: 'GET',
		url: 'https://api.github.com/users',
		success: function(items) {
			var $table = $('#table');
			var $contents = "";
			var $cnts = [];
			$.each(items, function(i, item) {
				$contents += "<tr id=" + item.id + ">";
				$contents += "<td>" + item.id + "</td>";
				$contents += "<td>" + item.login + "</td>";
				$contents += "<td>" + item.followers_url + "</td>";
				$contents += "<td id=" + "cnt" + item.id + "> # </td>";
				$contents += "<td> <img src='" + item.avatar_url + "' width=50 height=50 /></td>";
				$contents += "</tr>";
				
				$.ajax({
					type: 'GET',
					url: item.url,
					success: function(info) {
						$cnts.push(info.followers);
					}
				})
				
			})
			
			$table.append($contents);
			
			$.each(items, function(i, item) {
				var $row = $('#'+item.id);
				
				$row.click(function() {
					$row.find('#cnt'+item.id).text($cnts[i]);
				})
			})
			
		}
	});
	
})