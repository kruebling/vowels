$(document).ready(function() {
  $("#userInput").submit(function(event){
  event.preventDefault();
  var sentence = $("#sentence").val();
  var sentence = sentence.toLowerCase().split("");

  for(i=0;i<sentence.length; i++){
    if(sentence[i] === "a" || sentence[i] === "e"|| sentence[i] === "o" || sentence[i] === "i" || sentence[i] === "u"){
      sentence[i] = "-";
    }
  }
  sentence = sentence.join("");

  $("ul").append("<li>" + sentence + "</li>");
  $("#output").submit;
  });
});
