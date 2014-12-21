$(document).ready(function() 
	{
		/* OBTENEMOS TABLA */
		$.ajax({
			type: "GET",
			url: "http://rentcar1.esy.es/rentcar1movil/server/hello.php"
		})
		.done(function(json) {
			alert (json);
		});
	
		
	});
	