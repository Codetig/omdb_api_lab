$(document).ready(function(){
	$("form").on("submit", function(e){
		//e.preventDefault();
		var movie = $("#input").val();

//using ajax to get a listing of search results fromm OMDB
		$.getJSON("http://www.omdbapi.com/?s=" + movie, function(data){
			$("li").remove();
			$("img").remove();
			for (var i = 0; i < data.Search.length; i++) {
				var runPoster = "<a href = \"#\">"+data.Search[i].Title+"</a>";
				$("ul").append("<li>"+ runPoster +"</li>");
			}

//defining a click event for link to run getPoster
			$("a").on("click", function(){
				getPoster($(this).text());
			});
			
			$("#input").val("");
		});

//getting poster using title
		function getPoster(movieTitle){
			$.getJSON("http://www.omdbapi.com/?t=" + movieTitle, function(data){
				
				 $("li").remove();
				 $("form").after("<img>");
				 $("img").attr("src", data.Poster);
			});
		}
	});
});