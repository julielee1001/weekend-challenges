$(function () {
    $("#search").click(function(){
        var location = $("#location").val().trim();
        $("#weather-info").empty();
        $("#error-message").empty();

        if(isNaN(location)){
            var URL = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey + "&units=imperial";
        }else {
            var URL = "https://api.openweathermap.org/data/2.5/weather?zip=" + location + "&appid=" + apiKey + "&units=imperial";
        };
        $.ajax ({
            url: URL,
            method: "GET",
            success: function(data){
                $("#weather-info").append("<h3>Showing weather in " + location + "</h3>" + "<p>Temperature: " + data.main.temp + "&degF </p> <br>" 
                + "<p>Feels like: " + data.main.feels_like + "&degF </p>" + "<br>" + "<p id='weather-icon'>Weather: " + data.weather[0].main + "</p> <br>" 
                + "<p>Weather conditions: " + data.weather[0].description + "</p> <br>" + "<p>Humidity: " + data.main.humidity + "</p> <br>" 
                + "<p>Windspeed: " + data.wind.speed + "</p>");
                if(data.weather[0].main === "Clouds"){
                    $("#weather-icon").append(String.fromCodePoint(0x2601));
                }else{
                    if(data.weather[0].main === "Clear"){
                        $("#weather-icon").append(String.fromCodePoint(0x2600));	
                    }else{
                        if(data.weather[0].main === "Rain"){
                            $("#weather-icon").append(String.fromCodePoint(0x2614));
                        }else{
                            if(data.weather[0].main === "Snow"){
                            $("#weather-icon").append(String.fromCodePoint(0x2744));
                            }else{
                                if(data.weather[0].main === "Thunderstorm"){
                                    $("#weather-icon").append(String.fromCodePoint(0x1F329));
                                    }else{
                                        if(data.weather[0].main === "Fog" || "Haze" || "Sand" || "Dust"){
                                            $("#weather-icon").append(String.fromCodePoint(0x1F32B));
                                            }
                                    }
                            }
                        }
                    }
                }
            },
            error: function(xhr){
                var status = xhr.status;
                var errorMessage = xhr.responseJSON ? xhr.responseJSON.Error : "An unknown error occurred."
                $("#error-message").append("Error retrieving weather data: " + status + " - " + errorMessage 
                    + "<br>" + "<p>Please ensure information is correct.</p>");
                } 
        });
        
    });

});