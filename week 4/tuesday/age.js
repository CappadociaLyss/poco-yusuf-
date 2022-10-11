


let birthYear = 1984;
let month = 3;
let futureYear = 2067;
let futuremonth = 12;
let ageBeforeBirthday = futureYear - birthYear;
let ageAfterBirthday = ageBeforeBirthday - 1;

if  (month < futuremonth ){
console.log("I will be " + ageAfterBirthday + " in " + futureYear)
}else {
console.log("I will be " + ageBeforeBirthday  +  " in " + futureYear )
}


//Solution 1
var birthYear = 1984;
var birthmonth = 12;
var futureYear = 2067;
var futuremonthn = 10;
var age = futureYear - birthYear;


if (birthmonth > futuremonthn) {
    console.log(age)
} else {
    console.log(age - 1)
}
