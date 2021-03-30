var name = prompt("Name is", "Asia");
var date = prompt("Date is", "22");
var month = prompt("Month is", "04"); 
var year = prompt("Year is", "1998");
console.log("Hello Asia, Good Morning, AfterNoon, Evening or Night");
var DOB = new Date("April, 22 1998");
console.log(DOB);

console.log(DOB.getTime());
console.log(DOB);

var d = new Date();
console.log(d);
console.log(d.getTime());

var diff = new Date(1613168309658).getFullYear() - new Date(893185200000).getFullYear();
console.log(diff);
var diff1 = new Date(1613168309658).getMonth() - new Date(893185200000).getMonth();
console.log(diff1);
var diff2 = new Date(1613168309658).getDay() - new Date(893185200000).getDay();
console.log(diff2);
var diff3 = new Date(1613168309658).getHours() - new Date(893185200000).getHours();
console.log(diff3);
var diff4 = new Date(1613168309658).getMinutes() - new Date(893185200000).getMinutes();
console.log(diff4);
var diff5 = new Date(1613168309658).getSeconds() - new Date(893185200000).getSeconds();
console.log(diff5);
console.log(`"You are ${diff} years ${diff1} Month ${diff2} Days ${diff3} Hours ${diff4} Minutes ${diff5} Seconds old"`);
var numberofDays = Math.ceil((new Date() - DOB) / 8.64e7);
console.log(numberofDays);
console.log(`"Your age in Days ${numberofDays}"`);


const Day = new Date(DOB);
const toDay = new Date();
var difference = toDay - Day;
var days = difference / (3600000 * 24);
var hours = (difference / 3600000) % 24;
var minutes = (difference / 60000) % 60;
var seconds = (difference / 60000) % 60;

console.log (`"How much time left in your next birthday? ${parseInt(days) ? parseInt(days): ""} days ${parseInt(hours) ? parseInt(hours): ""} hours ${parseInt(minutes) ? parseInt(minutes): ""} minutes ${parseInt(seconds) ? parseInt(seconds): ""} seconds" or "happy Birth Day Asia. Today is your 23rd Birthday"`);
