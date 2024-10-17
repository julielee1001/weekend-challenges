# Weather Forecast App
------------
#### Info:

In this project, you will create a "Weather Forecast App" that allows users to search for the weather forecast for a specific location. This project will involve working with an external weather API, handling JSON data, and dynamically updating the user interface.

-----------

#### Requirements:

For this project, there are several requirements:

1. User Input: Provide a text input field for users to enter the location (city or zip code) they want to check the weather for. Include a "Search" button.

2. AJAX Request: When the user clicks the "Search" button, use AJAX to make a request to a weather API ( OpenWeatherMap) with the user's input.

3. Display Weather: After a successful response from the API, display the weather forecast information on the page. Include details like:
    - temperature (e.g *56F*)
    - weather (e.g *Clouds*)
    - conditions (e.g *overcast clouds*)
    - humidity (e.g *83*)
    - wind speed (e.g *6.71 mph*)

4. Error Handling: Implement error handling to display a message if the location is not found or if there are network issues. (e.g. `Network error. Please try again later.`)

5. User Interface: Create an appealing user interface with clear and organized weather information. You can use HTML, CSS, and jQuery to format and style the content.All code should be in separate files (script.js, style.css, & index.html)._have fun with this and maybe add some emojis_

------
#### Make sure to:
- Sign up for a free API key from weather service provider, OpenWeatherMap [here](https://home.openweathermap.org/users/sign_up), and read their API documentation to understand how to make requests. (_make sure to sign up for free plan_)

- Use this [Current Weather Data - API docs](https://openweathermap.org/current)


-----------

You will be evaluated based on the [grading rubric](https://github.com/New-Vision-Foundation/trailblazer-syllabus#grading-and-evaluation)

-----
**Resources:**
- Follow steps [here](https://gist.github.com/derzorngottes/3b57edc1f996dddcab25) on how to hide API key before pushing to github 
- API URL parameter info (*read parameters section in API docs carefully*) 
    - use parameter `zip=` for zip code and `q=` for city names. 
    - You will need to check if user input a zip code or city name before sending URL to AJAX request. 
    - look up and consider using `units=` parameter to easily convert to Fahrenheit. 

-----
**Stretch Goal:**
- Modify your AJAX request to fetch both the current weather and the extended forecast. You can do this by using a `OpenWeatherMap` API (weather and forecast endpoints)
    - you will need to make two ajax request one for `currentWeatherURL`(this logic is already complete in the above requirements) & the second for the `extendedForecastURL`
    - update HTML to a `<div>` for current-weather & a `<div>` for extended-forecast
    -  update your user interface to display the extended forecast data, including temperatures and weather conditions for the next several days.
    - apply CSS styles to ensure that the extended forecast is presented in a clear and visually appealing manner.