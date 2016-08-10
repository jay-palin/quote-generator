$(document).ready(function(){
  function getQuote(){
    var quotes = ["\"Maybe our favorite quotations say more about us than the stories and people we're quoting.\"", "\"Strong minds discuss ideas, average minds discuss events, weak minds discuss people.\"", "\"The price of apathy toward public affairs if to be ruled by evil men.\"", "\"We spend the first year of a child's life teaching it to walk and talk, and the rest of it's life to shut up and sit down. There's something wrong there.\"", "\"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.\"", "\"I don't want to believe. I want to know.\"", "\"That which can be asserted without evidence can be dismissed without evidence.\"", "\"Criticism is something we can avoid easily by saying nothing, doing nothing, and being nothing.\"", "\"It is the mark of an educated mind to be able to entertain a thought without accepting it.\"", "\"Watch your thoughts, they become words. Watch your words, they become actions. Watch your actions, they become habits. Watch your habits, they become character. Watch your character, it becomes your destiny.\"", "\"Opportunities multiply as they are siezed.\""];

    var authors = [" -John Green", " -Socrates", " -Plato", " -Neil Degrasse Tyson", " -J.K. Rowling", " -Carl Sagan", " -Christopher Hitchens", " -Aristotle", " -Aristotle", " -Lao Tzu", "Sun Tzu"];
    var randomNum = Math.floor((Math.random()*quotes.length));
    var randomQuote = quotes[randomNum];
    var randomAuthor = authors[randomNum];
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
  $(".btn").on("click", getQuote);
});
