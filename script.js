async function myfunc(){
  var response = await fetch("quotes.json");
  responseJSON = await response.json();
  var rand = Math.floor(Math.random() * 8);
  var quote = responseJSON[rand].quotes;
  var movie = responseJSON[rand].movie;
  document.getElementById("quote").innerHTML = quote;
  document.getElementById("movie").innerHTML = " - " + movie;
}