//print card by id-method
/*let list = document.getElementById("list");
let productListObjArray = [
    {
        Image: "./img.webp",
        name: "Mens",
        prize: 400,
        brand: "google",
    },
    {
        Image: "./img.webp",
        name: "Mens",
        prize: 450,
        brand: "Apple",
    },{
        Image: "./img.webp",
        name: "Mens",
        prize: 500,
        brand: "redmi",
    }
];
for (let i = 0; i < productListObjArray.length; i++){
    var card = document.createElement("div");
    card.className = "card-page";
    card.innerHTML = 
    "<img class='card-image' src=" +
    productListObjArray[i].Image +
    "><div class='card-name'>" +
    productListObjArray[i].name +
    "</div><div class='card-prize'>" +
    productListObjArray[i].prize +
    "</div><div class='card-brand'>" +
    productListObjArray[i].brand +
    "</div>";
    list.appendChild(card);
}
console.log(list);*/


//print card 

/*let list = document.getElementById("list");
let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = 
  "<div><div class='card-name'>" +
   "dhirajkumar" +
   "</div><div class='card-prize'>" +
   "$450" +
   "</div></div>"
    list.appendChild(card);
  console.log(card);*/

// print num 1 to 10

/*let list = document.getElementById("list");
for (i = 0; i <= 10; i++){
    y = document.createElement("p");
    y.innerHTML = i;
    x.appendChild(y);
}*/

// for number divid by 2
/*let list = document.getElementById("list");
for (let i = 1; i <= 10; i++){
    var y = document.createElement("p");
    if (i % 2 == 0) {
        y.innerHTML = i;
        x.appendChild(y);
    }
}*/

//for print if else statement
/*let list = document.getElementById("list");
for (let i = 1; i <= 10; i++){
    var y = document.createElement("p");
    var z = document.createElement("span");
    if (i % 2 == 0) {
        y.innerHTML = i;
        x.appendChild(y);
    }
    else {
        z.innerHTML = i;
        x.appendChild(z);
    }
}*/

/*let list = document.getElementById("list");
const productList = [
  ,   //undefine
  "Thar Jeep",
  "Big Villa",
  "Land on Moon",
  "Stock with 5000% Growth",
];*/

/*const productListObjArray = [
  {
    name: "Samsung S22",
    price: 107000,
    brand: "Samsung",
  },
  {
    name: "Lambhorgini Aventador",
    price: 20000000,
    brand: "Lambhorgini",
  },
  {
    name: "Apple iPhone 13",
    price: 1370000,
    brand: "Apple",
  },
  {
    name: "Samsung S22",
    price: 107000,
    brand: "Samsung",
  },
  {
    name: "Lambhorgini Aventador",
    price: 20000000,
    brand: "Lambhorgini",
  },
  {
    name: "Apple iPhone 13",
    price: 1370000,
    brand: "Apple",
  },
  {
    name: "Samsung S22",
    price: 107000,
    brand: "Samsung",
  },
  {
    name: "Lambhorgini Aventador",
    price: 20000000,
    brand: "Lambhorgini",
  },
];*/

/*  for (let i = 0; i < productList.length; i++) {
  const element = document.createElement("div");
  element.className = "product-item";
  element.innerHTML = productList[i];
  list.appendChild(element);
}*/

/*for (let i = 0; i < productListObjArray.length; i++) {
  const element = document.createElement("div");
  element.innerHTML =
    "<div class='product-item'><p>" +
    productListObjArray[i].name +
    "</p><p class='product-price'>" +
    productListObjArray[i].price +
    "</p></div>";
  list.appendChild(element);
}*/

//variables 

/*var a = "dhiraj";
var num = 20;
var c = true;
var s;
var v= null;
var obj = {};
var arr = [1,2,3];

alert(c);

console.log( a, num, c, s, v, obj, arr)
console.log(typeof a,typeof num,typeof c,typeof s,typeof v,typeof obj,typeof arr);*/


// program to check if the number is even or odd
// take input from the user

/*const number = prompt("Enter a number: ");

//check if the number is even
if(number % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}*/

/*let x = document.getElementById("list");

for (let i=0; i<=100; i++){
  var y = document.createElement("p");
  if(i % 2 == 0){
    y.innerHTML = i;
    y.style.color = "red";
    x.appendChild(y);
  }
  else {
    y.innerHTML = i;
    y.style.color = "green";
    x.appendChild(y);
  }
}*/

// var inputData = [1,3,5];

// // var dataType = (typeof inputData);
// document.write(typeof inputData);
// // document.write(dataType);


// function findDataType (z) {
//   if(Array.isArray(z)) {
//     console.log("its an array:",Array.isArray(z));
//   }
//   else{
//     console.log(typeof z);
//   }
// }
// findDataType();

// function checkDataType(value) {
//   if (Array.isArray(value)) {
//     console.log(Array.isArray(value));
//   } else if (value === null || value === undefined) {
//     console.log("Please enter the valid input");
//   } else {
//     console.log(typeof value);
//   }
// }
// checkDataType();


// Create a function which will let you know whether the value is truthy or false