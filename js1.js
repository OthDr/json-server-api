//alert("js1");

/*
var unirest = require('unirest');
var myRequest = unirest("GET", "http://localhost:3000/news");
console.log("hellooooooo");
*/



async function getAll() {
    let component = '';
    let myDiv = document.getElementById("news");

    const myURL = "http://localhost:3000/news?_limit=100";
    const response = await fetch(myURL);
    const result = await response.json();

    result.forEach(element => {
        element.articles.forEach(element =>{
            component += 
            `<div class="post">
            <h2>${element.author}</h2>
            <p>${element.content}</p>
            </div>
            `;
            console.log(element.author);
        })       
    });

    myDiv.innerHTML = component;


}


getAll();





