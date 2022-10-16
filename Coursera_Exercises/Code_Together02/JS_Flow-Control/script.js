console.log('Hello World!')

let name = prompt("What is your name?")

if (name.length != 0){
    console.log(`Hello ${name}`)
}

let grades = [98, 76, 88, 74, 56, 90, 45, 60, 78, 40, 100];

let sum = 0;

if (grades.length > 0) {
  for (index = 0; index < grades.length; index++) {
    sum += grades[index];
  }

  console.log(sum / grades.length);
}
