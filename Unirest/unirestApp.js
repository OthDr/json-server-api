var unirest = require('unirest');
const myURL = "http://localhost:3000/news?_limit=10";// display only 10 records

unirest
  .post(myURL)
  .then((response) => {
    console.log(response.body)
  })