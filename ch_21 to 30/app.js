var input = prompt("Enter 3.4 value");
var num = Math.ceil(input); 
alert(num);
var text = "This is Numaric value";
var slicedText = text.slice(0, num);
var result = "";
for (var i = num-1; i >= 0; i--) {
    result = result + slicedText[i];
}
alert(result);

//Second Assignment
var input = prompt("Enter cloUd naTive computing");
var text = "cloUd naTive computing";
var captializeString = (str) => str[0].toUpperCase() + str.slice(1).toLowerCase();
var capitalizeWords = (str) => str.split(' ').map (captializeString).join(' ');
console.log(capitalizeWords(text));
