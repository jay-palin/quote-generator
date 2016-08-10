$(document).ready(function(){
  function getQuote(){
    var quotes = ["whatever", "whatever1", "whatever2"];
    var authors = [" -name", " -name1", " -name2"];
    var randomNum = Math.floor((Math.random()*quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = authors[randomNum];
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
  $(".btn").on("click", getQuote);
});
