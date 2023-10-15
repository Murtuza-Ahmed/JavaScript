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


let people = {
    friends: []
};
let people1 = {
    friends1: "zubair",
    age: 24,
    teacher: "SFIT"
};
let people2 = {
    friends1: "umer",
    age: 24,
    teacher: "Tarbiyat"
};
let people3 = {
    friends1: "Hamza",
    age: 24,
    teacher: "Hifz Quran"
};

people.friends.push(people1, people2, people3);
console.log(people);