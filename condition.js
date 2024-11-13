console.log(5 > 6);
console.log(5 < 6);
console.log(5 == "5");
console.log(5 != "5");
console.log(5 !== "5");
console.log(5 === "5");

let price1 = 20;
let price2 = 30;

let name1 = "onion";
let name2 = "tomato";

//  let total = price1 < price2 && name1 == name2;
let total = price1 < price2 || name1 == name2;
console.log(total);


let raining = false;

if (raining == true){
    console.log("I'll not go out");
}else {
    console.log("I'll go");
}
 
let number1 = 30;
let number2 = 35;
let number3 = 45;

if (number1 > number2){
    console.log("yes, number1 is big then number 2");
}else if(number1 < number3){
    console.log("number 1 is less then number 3");
}else{
    console.log("Nope");
}
