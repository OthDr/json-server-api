
async function getAll() {
    document.getElementById("news").innerHTML = "";
    let component = '';
    let myDiv = document.getElementById("news");
    document.getElementById("h2").innerHTML = "All News";

    const myURL = "http://localhost:3000/news?_limit=100";
    const response = await fetch(myURL);
    const result = await response.json();

    result.forEach(element => {
        element.articles.forEach(element =>{
            component += 
            `<div class="post">
            <h3>Title: <a href='#'>${element.title}</a></h2>
            <img src='news.jpg'></img>
            <p>${element.description}</>
            <p>${element.content}</p>
            <h5>Author: ${element.author}</h5>
            <span>${element.publishedAt}</span>
            </div>
            `;
            console.log(element.author);
        })       
    });
    myDiv.innerHTML = component;
}


async function getWich() {
    document.getElementById("news").innerHTML = "";// to clear previous data
    
    let component = '';
    let myDiv = document.getElementById("news");

    x= document.getElementById("input1").value;
    

    if(x==''){
        alert("please ! enter a subject for the searching");
    }
    else{
        
        const myURL = "http://localhost:3000/news?q="+x;
        const response = await fetch(myURL);
        const result = await response.json();

        if(result.length >0){ // json response isn't empty
            document.getElementById("h2").innerHTML = "results about: "+x;
            result.forEach(element => {
                element.articles.forEach(element =>{
                    component += 
                    `<div class="post">
                    <h3>Title: <a href='#'>${element.title}</a></h2>
                    <img src='news.jpg'></img>
                    <p>${element.description}</>
                    <p>${element.content}</p>
                    <h5>Author: ${element.author}</h5>
                    <span>${element.publishedAt}</span>
                    </div>
                    `;
                    console.log(element.author);
                })       
            });
            myDiv.innerHTML = component;
        }
        else{
            document.getElementById("h2").innerHTML = "No result found about: "+x+"";
            document.getElementById("input1").value = '';
        }
    }
    
}


async function getWithM() {
    document.getElementById("news").innerHTML = "";// to clear previous data
    
    let component = '';
    let myDiv = document.getElementById("news");

    x= document.getElementById("input1").value;
    
        
        const myURL = "http://localhost:3000/news";
        const response = await fetch(myURL);
        const result = await response.json();

        
            result.forEach(element => {
                element.articles.forEach(element =>{
                    let m =element.title;
                    if(m.startsWith('M')){
                        component += 
                        `<div class="post">
                        <h3>Title: <a href='#'>${element.title}</a></h2>
                        <img src='news.jpg'></img>
                        <p>${element.description}</>
                        <p>${element.content}</p>
                        <h5>Author: ${element.author}</h5>
                        <span>${element.publishedAt}</span>
                        </div>
                        `;
                        console.log(element.author);
                    }
                })       
            });
            myDiv.innerHTML = component;
       
            document.getElementById("h2").innerHTML = "News which title starts with M ";
        
    
    
}


async function getLatest() {

    document.getElementById("news").innerHTML = "";
    document.getElementById("h2").innerHTML = "Latest News";
    let component = '';
    let myDiv = document.getElementById("news");

    const myURL = "http://localhost:3000/news?_limit=10";
    const response = await fetch(myURL);
    const result = await response.json();

    result.forEach(element => {
        element.articles.forEach(element =>{
            component += 
            `<div class="post">
            <h3>Title: <a href='#'>${element.title}</a></h2>
            <img src='news.jpg'></img>
            <p>${element.description}</>
            <p>${element.content}</p>
            <h5>Author: ${element.author}</h5>
            <span>${element.publishedAt}</span>
            </div>
            `;
            console.log(element.author);
        })       
    });
    myDiv.innerHTML = component;
}

