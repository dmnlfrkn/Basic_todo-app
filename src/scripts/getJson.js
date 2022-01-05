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
var dt = new Date();
var time = 100-100*(24*60- (dt.getHours()*60  + dt.getMinutes()))/(24*60);
console.log(time);
$( function() {
    $( "#progressbar" ).progressbar({
      value: time
    });
  } );
