var courses = [];
for (var i = 0; i < 5; i++) {
    courses.push(prompt(`Type course${i} Name`));
}
alert(courses);

for (var i = 0; i < 5; i++) {
    courses.splice(i, 1, prompt(`course${i+1}, ${courses[i]}`));
}
alert(courses);