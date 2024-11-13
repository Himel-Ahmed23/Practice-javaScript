// While loop
let num = 0;

while(num <= 10){
    console.log(num);
    num++;
}

// Odd Number
let odd = 1;

while(odd <= 20){
    console.log(odd);
    odd = odd + 2;
}

// Even Number
let even = 0;

while(even <= 20){
    console.log(even);
    even = even + 2;
}


// Forloop

for(let i = 0; i <= 10; i+=2){
    console.log(i);
}

// Break

let numbers = [12, 13, 45, 56, 67, 78]
// console.log(numbers[3]);

for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    if( number > 60){
        break;
    }
    console.log(number);
}

for(let i = 0; i < numbers.length; i++){
    let number = numbers[i];
    if( number == 56){
        continue;
    }
    console.log(number);
}