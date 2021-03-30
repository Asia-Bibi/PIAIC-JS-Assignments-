var input = prompt("Enter cloUd naTive computing");
var text = "cloUd naTive computing";
var captializeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
var capitalizeWords = (str) => str.split(' ').map (captializeString).join(' ');
console.log(capitalizeWords(text));                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ;

//Second Assignment
var num = prompt("Enter a number");

function fact(number) {
  var result = 1;
  for (var i = number; i > 0; i--) { 
    result = result * i;
  }
  return result;  
}

alert(fact(5));