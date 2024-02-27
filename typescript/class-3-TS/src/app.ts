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