console.log("hello world");

const firstName = "phil";
const lastName = "moser";

console.log(`hello ${firstName} ${lastName}`);

// Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI =
// mass / height ** 2
// or
// mass / (height * height). (mass in kg and height in meter).
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
// TEST DATA 1
const massMark = 10;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
// TEST DATA 2
const massMark2 = 100;
const heightMark2 = 1.69;
const massJohn2 = 92;
const heightJohn2 = 1.95;

// Calculate the BMI and store  in variables
let bmiMark = massMark / heightMark ** 2;
let bmiJohn = massJohn / heightJohn ** 2;
// Console log the results

console.log("bmiMark: " + bmiMark)
console.log("bmiJohn: " + bmiJohn)
// Console.log if Mark has a higher BMI than John
if (bmiMark >= bmiJohn) {
    console.log("bmiMark ist größer: ")
} else {
    console.log("bmiJohn ist größer: ")
}