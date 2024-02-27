const button = document.querySelector("button")!;

function log(data: string) {
    console.log("click" + data)
}

// log("hello")
button.addEventListener("click", log.bind(null, "hello"))



/**
 * CLASSES
 */

class Student {
    name: string;
    rollNo: number;
    email: string;
    private skills: string[] = [];

    constructor(n: string, r: number, e: string) {
        this.name = n;
        this.rollNo = r;
        this.email = e;
    }
    addSkill(skill: string) {
        this.skills.push(skill)
    }
    getSkill() {
        return this.skills;
    }
}

const studentDetail = new Student("sheroz", 26, "murtuza@gmail.com");
studentDetail.addSkill("javascript");
console.log(studentDetail.getSkill());
console.log(studentDetail);

/**
 *  CLASSES SHORT HAND KEY
 */
class Student1 {
    private skills: string[] = [];

    constructor(public name: string, public rollNo: number, public email: string) { }
    addSkill(skill: string) {
        this.skills.push(skill)
    }
    getSkill() {
        return this.skills;
    }
}

const studentDetail1 = new Student("sheikh", 20, "sheroz@gmail.com");
studentDetail1.addSkill("Typescript");
console.log(studentDetail1.getSkill());
console.log(studentDetail1);


/**
 * INHERITANCE CLASSES KE ANDER EK CLASS KEY 
 * USI CLASS KI BASE PE EK OR CLASS BANA LI JAYE
 * PURANE CLASS KI PROPERTY AJAYE
 * OR SATH ADDITINAL KUC OR KAM BHI KAR SKATE HN
 * EXTENDS CLASS KA CLONE BANATA HE
 * EXTANDS SE PHELE (CHILD) EXTANDS KE BAAD (PERENTS)
 * READONLY CHANGE NAI KAR SAKTE 
 */

class VolunteerStudent extends Student1 {
    private canVolunteerIn: string[] = [];
    constructor(name: string, readonly rollNo: number, email: string) {
        super(name, rollNo, email);
    };

    addVolunteerSkill(skill: string) {
        this.canVolunteerIn.push(skill);
    }

    // GETTER
    get willVolunteerIn() {
        return this.canVolunteerIn;
    }

}
const volunteerStudent = new VolunteerStudent("raza", 99, "raza@gmail.com");
volunteerStudent.addSkill("CSS");
volunteerStudent.addVolunteerSkill("attandace");
console.log(volunteerStudent.getSkill);
console.log(volunteerStudent.willVolunteerIn);