let headings = document.getElementsByTagName("h1");
// console.log(headings);

for(const heading of headings){
    console.log(heading.innerText);
}


let title1 = document.getElementById('title');
title1.innerText = "Welcome to Home";

let texts = document.getElementsByClassName("text");

for(const text of texts){
    console.log(text.innerText);
}

console.log(texts);

let paragraph = document.querySelector(".text").innerText;
console.log(paragraph);

let component = document.getElementById('title');

component.style.color = 'red';
component.style.border = '1px solid red';
component.style.background = 'black';

component.classList.add('design');

let attribute = component.getAttribute("id");
let setAttribute = component.setAttribute('class',"heading")
console.log(setAttribute);

let firstText = document.querySelector('.text');
firstText.classList.remove("text");
console.log(firstText);

let section = document.getElementById("section");

let div = document.createElement('div');


div.innerHTML = 
`
      <div>
            <h2>Try From js </h2>
            <ul>
               <li>Hi</li>
               <li>Hello</li>
               <li>Bye</li> 
            </ul>
        </div>
`
section.appendChild(div);

let h2 = document.createElement("h2");

h2.innerText = "Other way to create a section";

div.appendChild(h2);
section.appendChild(div);


let ul = document.createElement("ul");

let li1 = document.createElement("li");
li1.innerText = "Green";

let li2 = document.createElement("li");
li2.innerText = "Black";

let li3 = document.createElement("li");
li3.innerText = "Silver";

ul.appendChild(li1);
ul.appendChild(li2);
ul.appendChild(li3);
div.appendChild(ul);