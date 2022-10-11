window.alert("Hello World!");

//comment

var x = 10
// var is variable x the name of the variable 10 is the value of the variable


var number = 10;
var my firstValue = 10;
var bool = ture;


//In computer science, data is anything that is meaningful to the computer. JavaScript provides eight different data types
which are undefined, null, boolean, string, symbol, bigint, number, and object.

/* Multi-line comments are possible as well.
You can write any number you want. */
const pi = 3.141502653589793;

let name = 'Powercoders';
//This is called a string. It is in single or double quotes.

var bool = true;
//This is a Boolean.

console.log("My First print");

console.log('Hello ' + 'world');

let myFirstvariable = 14

let string = "Hello world"
console.log(string + "my first cnlose log");

let x = 'This is a ';
x + 'string'; // add string to variable

let y = 1;
x + y;

var ++
var a = 0,
    b = 10;
var a = b++; //a=10 / b=11

let myFirstvariable = 4;
let mysecondvariable = 4;

myFirstvariable += mysecondvariable;
console.log(myFirstvariable);

window.alert()
console.log()
document.write()


if (statement) {
    doSomething();
}



let myValue = 10;

if (myValue == 10) {

    console.log("My Value is equal to 10");
}

if (myValue > 100) {

    window.alert("My Value is bigger than 100");

} else {
    window.alert("My Value is smaller than 100");
}

if (myValue < 50) {
    window.alert("it is smaller that 50")

} else {
    window.alert("Not  say anythin")

}

//Ternary condition
let age = 30;
let message = (age >= 18 ? "major" : "minor"
        alert(message);

        //SWITCH
        let fruit = "apple";
        let message;
        switch (fruit) {
            case "apple":
                message = "🍎"
                break;
            case "banana":
                message = "🍌"
                break;
            case "blueberry":
                message = "🫐"
                break;

        }

        //LOOPS

        There are several types of loops:

        1.
        while --2.
        for -- - 3. forEach-- --4. do
            while -- -


            let a = 0; while (a < 100) {
            console.log("hi" + a)
            a = a + 1
        }
        //Not burada a  100 den kucuk oldugu icin a + 1 ekleyerek gidiyor 100 e kadar

        // While 2. exercise
        let mystery_number = 5;
        let input;
        while (mystery_number != input) {
            input = prompt("try me!")
            if (mystery_number < input) {
                alert("The mystery number is smaller")

            }
            if (mystery_number > input) {
                alert("The Mystery number is bigger")
            }
            alert("Well done, The  mystery number was" + mystery_number)


            // FOR
            for (let i = 0; i < 1000; i = i + 1) {
                console.log("hi" + i);
            }
            console.log("FINISHES");
            // bitince finished yazacak..bine gelene kadar




            //forEach

            let team = ["Linus", "Helen", "Christina", "Hany"]

            for (let i = 0; i < team.length; i = i + 1) {
                console.log(i + "hi" + team[i]);
            }


            team.forEach(function (value, index) {
                console.log(index + " . " + value)
            });


            //do while
            //bu co kullanilmiyor




            const pi = 3.1434534534645;
            pi = 2;
//const degismez variable

//SCOPE

// 2 tane variable veriliyor suslu parantez oldugu icin ayni da olsa calistiriyor
let b = 20;
{
let a = 10;
console.log(b);
}
{let a = 15;
console.log(b);
}

//DEBUGGING
//To detect and remove exisiting and potential errors (aka bugs) in your code.

It is a very important step in the developer's work. There is no program or application without any bug.








