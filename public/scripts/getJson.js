var quotes=[];

function GetQuotes() {
  return fetch("https://type.fit/api/quotes")
    .then(response =>  response.json()) 
    .then(data=>{
        quotes = data;
        Change();
    })
}

function Change() {
    var count = quotes.length;
    var rnd= Math.floor(Math.random()*count);
    document.getElementById("text").innerText=quotes[rnd].text;
    document.getElementById("author").innerText=quotes[rnd].author;
}
GetQuotes();

let timerId = setInterval(() => GetQuotes(), 500000);


