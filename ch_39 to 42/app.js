var course1= prompt("Enter course1 Marks");
var course2= prompt("Enter course2 Marks");
var course3= prompt("Enter course3 Marks");
var course4= prompt("Enter course4 Marks");
var course5= prompt("Enter course5 Marks");
var obtainedMarks = parseInt(course1) + parseInt(course2) + parseInt(course3) + parseInt(course4) + parseInt(course5);
var totalMarks = 500;
var percentage = (obtainedMarks / totalMarks) * 100;
console.log(percentage + "%");

switch(true){
    case percentage >=90 && percentage <=100:
        console.log("Grade A+");
        break;
        case percentage >=75 && percentage <=89:
            console.log("Grade B");
            break;
            case percentage >=60 && percentage <=74:
                console.log("Grade C");
                break;
                case percentage >=45 && percentage <=59:
                    console.log("Grade D");
                    break;
                    case percentage >=30 && percentage <=44:
                        console.log("Grade F");
                        break;
                        default:
                            console.log("You are failed");
                
}


