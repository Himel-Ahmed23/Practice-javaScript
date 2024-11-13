// Function Declaration
function firstOne(){
    console.log("Our First Function");
} 

// Function Call
firstOne();
console.log("Hi/Hello");
firstOne();

function buyChocolate (money){  //Paramitar
    console.log("Gime me Chocolate in taka",money);
}
buyChocolate(50);

function sum(num1, num2){  //Paramitar
    console.log("Total =", num1 + num2);
}
sum(10, 25);

function takechocolate(money){
    let givenChocolate = money / 25;
    return givenChocolate;
}
let Chocolate = takechocolate(200);
console.log('Chocolate =',Chocolate);