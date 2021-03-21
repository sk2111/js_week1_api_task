const REST_COUNTRIES_API = 'https://restcountries.eu/rest/v2/all';
const HTTP_METHOD = 'GET';
// Create an instance of XML http
const request = new XMLHttpRequest();
//create a connection or open a connection
request.open(HTTP_METHOD, REST_COUNTRIES_API, true);
// send the request
request.send();
// retrive data
request.onload = function () {
    const data = JSON.parse(this.response);
    data.forEach(country => {
        console.log(country.name);
    });
}