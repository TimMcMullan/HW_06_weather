// api key from openweather 
var appid = "75a9017da3f1e896dcc68e8b7499381f";
var globalApiData = null;

// fetch json from appid, place into html 
function placeDataOnPage(url) {
    $.getJSON(url).then(function (data) {

        globalApiData = data;

        console.log(globalApiData);

        $('day1 .city span').text(data.city.name);
        $('day1 .temp span').text(data.list[0].main.temp);
        $('day1 .humidity span').text(data.list[0].main.humidity);
        $('day1 .windspeed span').text(data.list[0].main.windspeed);
        // $('day1 .uv_index span').text(data.list[0].main.uv_index);
        $('day1 .feelslike span').text(data.list[0].main.feels_like);

        $('day2 .city span').text(data.city.name);
        $('day2 .temp span').text(data.list[0].main.temp);
        $('day2 .humidity span').text(data.list[0].main.humidity);
        $('day2 .windspeed span').text(data.list[0].main.windspeed);
        // $('day2 .uv_index span').text(data.list[0].main.uv_index);
        $('day2 .feelslike span').text(data.list[0].main.feels_like);

        $('day3 .city span').text(data.city.name);
        $('day3 .temp span').text(data.list[0].main.temp);
        $('day3 .humidity span').text(data.list[0].main.humidity);
        $('day3 .windspeed span').text(data.list[0].main.windspeed);
        // $('day3 .uv_index span').text(data.list[0].main.uv_index);
        $('day3 .feelslike span').text(data.list[0].main.feels_like);

        $('day4 .city span').text(data.city.name);
        $('day4 .temp span').text(data.list[0].main.temp);
        $('day4 .humidity span').text(data.list[0].main.humidity);
        $('day4 .windspeed span').text(data.list[0].main.windspeed);
        // $('day4 .uv_index span').text(data.list[0].main.uv_index);
        $('day4 .feelslike span').text(data.list[0].main.feels_like);

        $('day5 .city span').text(data.city.name);
        $('day5 .temp span').text(data.list[0].main.temp);
        $('day5 .humidity span').text(data.list[0].main.humidity);
        $('day5 .windspeed span').text(data.list[0].main.windspeed);
        // $('day5 .uv_index span').text(data.list[0].main.uv_index);
        $('day5 .feelslike span').text(data.list[0].main.feels_like);

        return;
    });
}

// calls placeDataOnPage() when summoned 
$(document).ready(function(){
    $('#user-form').on('submit', function(evt) {
        // prevent page reload 
        evt.preventDefault();
        // city name for function 
        var city = $('#cityname').val();
        // store city searched into memory 
        $('#searchHistory').append('<li><a class="historyListLink">'+city+'</li>');
        // url build for fetch 
        var url = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid="+appid;

        placeDataOnPage(url);

    });

    // history search 
    $('#searchHistory').on('click', "li", function(){

        var city = $(this).text();

        $('#searchHistory').append('<li><a class="historyListLink"> '+city+'</li>');

        var url = "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=imperial&appid="+appid;

        placeDataOnPage(url);
    });
});