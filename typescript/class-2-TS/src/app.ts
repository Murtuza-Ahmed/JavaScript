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
console.log(studentDetail)