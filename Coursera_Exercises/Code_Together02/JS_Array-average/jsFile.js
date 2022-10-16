let grades = [
  "98",
  "76",
  "88",
  "74",
  "56",
  "90",
  "45",
  "60",
  "78",
  "40",
  "100",
];

function loadGrades() {
  document.getElementById("grades").innerHTML = grades;
}

let sum = 0;

if (grades.length > 0){

for (index = 0; index < grades.length; index++) {
  sum += grades[index];
}

document.write(sum/grades.length);
}