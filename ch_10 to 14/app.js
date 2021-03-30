//Make a calculator 

var a = parseInt(prompt("Enter Number 1"));
var sign = prompt("Enter a sign");
var b = parseInt(prompt("Enter Number 2"));
var result;
if (sign === '+') {
    result = a + b;
}
else if (sign === '-') {
    result = a - b;  
}
else if (sign === '*') {
    result = a * b;
}
else if(sign === '/') {
    result = a / b;
}
else {
    alert("Not Found sign")
}

alert(result);

//Make a Percentage calculator 

var math= parseInt(prompt("Enter Math's Marks"));
var english= parseInt(prompt("Enter English's Marks"));
var urdu= parseInt(prompt("Enter Urdu's Marks"));
var computer= parseInt(prompt("Enter Computer's Marks"));
var physics= parseInt(prompt("Enter Physics's Marks"));
var obtainedMarks = (math + english + urdu + chemistry + physics);
var Percentage = obtainedMarks / 500 * 100;
alert(Percentage);















