// interface person {
//     name: string;
// };

// let sheroz: person;

// sheroz = {
//     name: "sheikh",
// }

interface person {
    name: string;
    speak(sentence: string): void;
}
class Human implements person {

    constructor(public name: string, private id: string) { }

    speak(sentence: string): void {

    }
}


/**
 * ADVANCED TYPE
 * 
 * UNION TYPE
 */
type Combined = string | number | boolean;

let a: Combined;
a = 5;
a = "raza";
a = true

/**
 * INTERSETION TYPE
 */
// type Bird = {
//     name: string;
//     flySpeed: number;
// }
// type animal = {
//     name: string;
//     runSpeed: number;
// }

// type Creature = Bird & animal;
// let b: Creature;
// b = {
//     name: "shahine",
//     flySpeed: 45,
//     runSpeed: 20
// }


/**
 * INTERFACE
 */
interface Bird  {
    name: string;
    flySpeed: number;
}
interface Animal  {
    name: string;
    runSpeed: number;
}

interface Creature extends Bird, Animal { };
