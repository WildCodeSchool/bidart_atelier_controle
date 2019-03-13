const num1 = 3;
let total = 0;
const num2 = 4;
let i = 1;
while (i <= num2) {
   total = total + num1;
   i++;
}
console.log(total);

let j = 0;
let total2 = 0;
for (j = 0; j <= 100; j += 5) {
   total2 = total2 + j;
}
console.log(total2);

const array = ["Wild", "Code", "School", "Hello", "World"];

switch (array[0]) {
   case "Wild":
      console.log(array[3] + array[4]);
      break;
   default:
      console.log(array);
}
