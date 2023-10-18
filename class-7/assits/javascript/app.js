// let arr = [1, 2, 3];
// let arr1 = [[2, 3, 4], [3, 4, 5], [5, 6, 7]];
// console.log(arr1);

// let myProfile = {
//     firstName: "Murtuza",
//     lastName: "Ahmed",
//     age: 25
// };
// console.log(myProfile);

// CHAPTER OBJECT

// let myCar = {
//     carName: "land cruiser",
//     model: 2023,
//     color: "Black",
//     brand: "Toyota",
//     ownerName: true
// };
// myCar.color = "white";
// myCar.forSale = true;

// console.log(myCar);
// console.log(myCar.brand, myCar.model, myCar.forSale);


// let people = {
//     friends: []
// };
// let people1 = {
//     friends1: "zubair",
//     age: 24,
//     teacher: "SFIT"
// };
// let people2 = {
//     friends1: "umer",
//     age: 24,
//     teacher: "Tarbiyat"
// };
// let people3 = {
//     friends1: "Hamza",
//     age: 24,
//     teacher: "Hifz Quran"
// };

// people.friends.push(people1, people2, people3);
// console.log(people);

// const arr = ["Ahmed", 25, true];
// arr[0] = "Murtuza";
// arr[2] = false;
// console.log(arr);

// let arr = ["Black", "Red", "orange", "Blue"];
// let arr1 = [true, false, false, true];
// let arr2 = [];
// arr.push("Green", "White");
// console.log(arr.length);
// console.log(arr1.length);
// console.log(arr2.length);

// numbers = [12, 24, 36];
// numbers[5] = 48;
// console.log(numbers.length);

// let shopping = ["Milk", "Bread", "Apples"];
// console.log(shopping.length);
// shopping[1] = "Banana";
// console.log(shopping);

// let arrayName = ["Ahmed", 24, true];
// arrayName.push("Murtuza");
// console.log(arrayName);

// let emptyArray = [];
// emptyArray.push("Murtuza", "Ahmed", 25, true,);
// console.log(emptyArray);

// let array = ["Murtuza", true];
// array.push(25);
// console.log(array.length);

// let multipleArray = ["apple", "banana", "orange", "pineppill"];
// console.log(multipleArray.length);
// multipleArray.splice(0, 4, "murtuza", 24, "Ahmed", true);
// console.log(multipleArray);

// let multipleArray = ["apple", "banana", "orange", "pineppill", "murtuza", 24, "Ahmed", true];
// multipleArray.splice(0, 8, "circle", "tringle", "squre");
// multipleArray.push("BMI");
// console.log(multipleArray);
// console.log(multipleArray.length);

// let multipleArray = ["apple", "banana", "orange", "pineppill", "murtuza", 24, "Ahmed", true];
// let array1 = [0, 8, "circle", "tringle", "squre"];
// console.log(multipleArray.concat(array1));

// let numberArray = [1, 2, 3, 4, 5];
// let numArray = [6, 7, 8, 9, 10];
// console.log(numberArray.concat(numArray));
// console.log(numArray.concat(11, 12, 13));

// let number = ["raza", "sheroz", "murtuza", 25, 90, "ahmed"];
// number.push("anees");
// number.pop();
// number.pop();
// console.log(number);

// let number = ["raza", "sheroz", "murtuza", 25, 90, "ahmed"];
// number.shift();
// number.shift();
// number.unshift("circle", "squre");
// console.log(number);

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numberArray.splice(0, 5);
// console.log(numberArray);

// arr8 = [2, 6, 7, 8];
// let findValue = arr8.find(function (e) { return e === 6 });
// let findValue2 = arr8.find(e => e === 10);
// console.log(findValue);
// console.log(findValue2);

// let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let number = ["raza", "sheroz", "murtuza", 25, 90, "ahmed"];
// let numFind = number.indexOf(2);
// // let find = numberArray.indexOf(0);
// // let find1 = numberArray.indexOf(9);
// console.log(numFind);

// let numberArray = [1, 4, 3, 2, 6, 5, 7, 10, 9, 0, 8];
// let number = ["raza", "sheroz", "murtuza", 25, 90, "ahmed"];
// numberArray.sort();
// number.sort();
// console.log(numberArray);
// console.log(number);

// let emptyShoppingArray = [];
// emptyShoppingArray.push("Milk", "Bread", "Apple");
// emptyShoppingArray.splice(1, 1, "banana", "egg");
// emptyShoppingArray.pop();
// emptyShoppingArray.sort();
// console.log(emptyShoppingArray);
// emptyShoppingArray.splice(1, 0, "carrots", "lettuce");
// let newArr = ["jucies", "pop"];
// console.log(emptyShoppingArray.concat(newArr));

// let multipleArray = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10]];
// console.log(multipleArray);

// let multiMultipelArray = [[[1, 2, 3]], [[4, 5, 6]], [7, 8], [[[9, 10]]]];
// console.log(multiMultipelArray);

// let newArray = [1, 2, 3];
// let newArray1 = [
//     ["umer", 24, "abbas"],
//     ["zubair,24,shamim"],
//     ["hamza", 24, "arzoo"]
// ];
// console.log(newArray1[2]);
// console.log(typeof newArray1);

// let myName = {
//     firstName: "Murtuza",
//     lastName: "Ahmed",
//     age: 25,
//     color: "Brown"
// };
// myName.age = 26;
// myName["color"] = "green";
// myName["lastName"] = "Raza";
// myName.firstName = "Ahmed";
// console.log(myName);

// let myCar = {
//     carName: "LandCrusior",
//     model: 2022,
//     brands: "Toyota",
//     ownerName: true
// };
// myCar["color"] = "Black";
// myCar["forSale"] = 1700000;
// myCar.prices = 1800000;
// console.log(myCar.model);
// console.log(myCar["brands"]);
// console.log(myCar.forSale);

// let company = {
//     companyName: "A.M Textile",
//     activity: "Machine Work",
//     address: {
//         street: "2nd street",
//         number: 123,
//         zipCode: 3310,
//         city: "karachi",
//         state: "orangi"
//     },
//     yearOf: 2021
// };
// company["address"]["zipCode"] = 1033;
// company.address.zipCode = 123;
// console.log(company);

// let textile = {
//     company: "Mector",
//     activity: ["Madicane", "Fiver Srinj", "Veeks"],
//     address: {
//         street: "3rd streeet",
//         number: 9876,
//         zipcode: 5436,
//         city: "karachi",
//         state: true
//     },
//     years: 1945
// };

// textile.activity[2] = "Baam";
// textile.activity.push("veeks");
// textile.activity.splice(1, 2, "Machine Work", "pyments");
// textile.activity.pop();
// console.log(textile);

// let address = [
//     {
//         street: "2ndstreet",
//         number: 3491,
//         zipcode: 12390,
//         city: "karachi",
//         state: "orangi"
//     },
//     {
//         street: "3rdstreet",
//         number: 6543,
//         zipcode: 7373,
//         city: "lahore",
//         state: "wagahborder"
//     }
// ];
// address[0].city = "punjab";
// address[1].state = "shiranwala road";
// console.log(address);

// const company = {
//     companyName: "Healthy Candy",
//     activities: [
//         "food manufacturing", "manufacturing toys"
//     ],
//     address: [
//         {
//             street: "2nd street",
//             number: 123,
//             zipcode: 33116,
//             city: "miami",
//             state: "florida"
//         },
//         {
//             street: "1st west",
//             number: 321,
//             zipcode: 6113,
//             city: "Addison",
//             state: "Texas"
//         }
//     ],
//     yearOf: 2021
// };
// company.activities.splice(2, 0, "manufacturing dolls", "manufacturinf boys");
// company.activities.unshift("toys");
// company.address[1]["zipcode"] = 3310420;
// company.address[0]["city"] = "los angeles";
// company.address[0]["usa"] = "worldcup";
// console.log(company);

// let named = {
//     friends: []
// };

// let umer = {
//     firstName: "umer",
//     lastName: "Raza",
//     ID: 234
// };
// let hamza = {
//     firstName: "hamza",
//     lastName: "Ahmed",
//     ID: 432
// };
// let zubair = {
//     firstName: "zubair",
//     lastName: "sheikh",
//     ID: 654
// };

// named.friends.push(umer, hamza, zubair);
// named.friends[1]["lastName"] = "abdullah";
// named.friends[1]["fatherName"] = "Arzoo";
// console.log(named);

// const theList = ["Murtuza", "Ahmed", true, 25, null, undefined];
// theList.shift();
// theList.pop();
// theList.unshift("FIRST");
// theList.splice(4, 2, "Hello World");
// theList.splice(2, 2, "MIDDLE");
// theList.push("LAST");
// console.log(theList);

// 1. Create an array to hold an inventory of store items.
// const inventory = [];
// const item1 = {
//     name: "Widget",
//     model: "W1",
//     cost: 10.99,
//     quantity: 50
// };

// const item2 = {
//     name: "Gadget",
//     model: "G2",
//     cost: 29.99,
//     quantity: 20
// };

// const item3 = {
//     name: "Doodad",
//     model: "D3",
//     cost: 5.99,
//     quantity: 100
// }; 
// inventory.push(item1, item2, item3);
// console.log("Inventory:");
// console.log(inventory);
// console.log("Quantity of the third item:");
// console.log(inventory[2].quantity);
// const item4 = {
//     name: "Thingamajig",
//     model: "T4",
//     cost: 15.99,
//     quantity: 10
// };

// inventory.push(item4);

// console.log("Updated Inventory:");
// console.log(inventory);

const inventoryComputerList = [];
let item1 = {
    nameCP: "HP",
    model: "CORE i5",
    cost: 14000,
    quantity: 15
};
let item2 = {
    nameCP: "Dell",
    model: "DUAL CORE",
    cost: 10000,
    quantity: 50
};
let item3 = {
    nameCP: "Lenovo",
    model: "CORE 2DU",
    cost: 5000,
    quantity: 100
};
inventoryComputerList.push(item1, item2, item3);
console.log(inventoryComputerList);
console.log(inventoryComputerList[2].quantity);
console.log(inventoryComputerList[0].cost);
let item4 = {
    nameCP: "Computer",
    model: "CORE i6",
    cost: 20000,
    quantity: 10
};
inventoryComputerList.push(item4);
console.log(inventoryComputerList[3].model);
console.log(inventoryComputerList.length);