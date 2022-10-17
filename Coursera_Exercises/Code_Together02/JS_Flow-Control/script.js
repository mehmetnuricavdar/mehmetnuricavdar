// console.log("Hello World!");

// let name = prompt("What is your name?");

// if (name.length != 0) {
//   document.write(`Hello ${name}`);
// } else document.write("Feeling Shy?");

let grades = [98, 76, 88, 74, 56, 90, 45, 60, 78, 40, 100];

let sum = 0;

if (grades.length > 0) {
  for (index = 0; index < grades.length; index++) {
    sum += grades[index];
  }

  console.log(sum / grades.length);
  document.write(sum / grades.length);
} else document.write("Empty Array");

document.write("skipping Empty Array element");

let grades2 = [2, 4, , , 4, , 8, , 5, 6, 7];
let sum2 = 0;
let count = 0;

if (grades2.length > 0) {
  for (index = 0; index < grades2.length; index++)
    if (grades2[index] != undefined) {
      sum2 += grades2[index];
      count += 1;
    }
}

document.write(sum2 / count);
