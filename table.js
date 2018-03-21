var response = [{
					"name":"Rushikesh",
					"branch":"CSE",
					"college":"NIT Raipur"
				    },
				    {
					"name":"Rakesh",
					"branch":"CSE",
					"college":"COEP"
				    },
				    {
					"name":"Rahul",
					"branch":"CSE",
					"college":"IIT Bombay"
				    },
				    {
					"name":"Saurabh",
					"branch":"CSE",
					"college":"VJTI"
				    },
				    {
					"name":"Anish",
					"branch":"Mechanical",
					"college":"IIT Bombay"
				    },
				    {
					"name":"Shashank",
					"branch":"Metallurgy",
					"college":"IIT Bombay"
			    }];




$(function() {
	$.each(response, function(i, item) {
		var $tr = $('<tr>').append(
			$('<td>').text(item.name),
			$('<td>').text(item.branch),
			$('<td>').text(item.college)

			).appendTo('#record');
	});
});


$('.search').keyup(function(){
	var searchterm = $(this).val().toLowerCase();
	$('#record tbody tr').each(function(){
		var lineStr = $(this).text().toLowerCase();
		if(lineStr.indexOf(searchterm) === -1){
			$(this).hide();
		}
		else{
			$(this).show()

		}
		
	});
});

