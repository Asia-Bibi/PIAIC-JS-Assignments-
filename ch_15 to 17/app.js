var courses = [];
var course1 = prompt("Type first course1 Name");
var course2 = prompt("Type first course2 Name");
var course3 = prompt("Type first course3 Name");
var course4 = prompt("Type first course4 Name");
var course5 = prompt("Type first course5 Name");
courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);
alert(courses);

courses.splice(0, 1, prompt(course1, courses[0]));
courses.splice(1, 1, prompt(course2, courses[1]));
courses.splice(2, 1, prompt(course3, courses[2]));
courses.splice(3, 1, prompt(course4, courses[3]));
courses.splice(4, 1, prompt(course5, courses[4]));
alert(courses);