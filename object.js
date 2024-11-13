let student = {
    id: 1,
    name: "Himel", 
    class: 10, 
    roll: 12
};

// let Property1 = student.class;
// student.name = 'Ahmed';

// let Property2 = student["name"];
// student["name"] = "Aisha";

let Property3 = Object.keys(student);
let value = Object.values(student);

console.log(Property3);
console.log(value);

let shopping = {dress: 100, color1: "red", shoes: 50, color2: "green", photo: "Black", walet: "Coral"};
 
let Property = Object.keys(shopping);

for(let i=0; i < Property.length; i += 1){
    let PropertyName = Property[i];
    let valueName = shopping[PropertyName];
    console.log(PropertyName, ":", valueName);
}


let laptop = {HP:100, color1:"red", DELL:200, color2:"green", DCL:50, color3:"black"};

let Laptops = Object.keys(laptop);

for(let i=0; i < Laptops.length; i += 1){
    let LaptopsName = Laptops[i];
    let valueName = laptop[LaptopsName];
    console.log(LaptopsName, ":", valueName);
}
