"use strict";
const button = document.querySelector("button");
function log(data) {
    console.log("click" + data);
}
// log("hello")
button.addEventListener("click", log.bind(null, "hello"));
/**
 * CLASSES
 */
class Student {
    constructor(n, r, e) {
        this.skills = [];
        this.name = n;
        this.rollNo = r;
        this.email = e;
    }
    addSkill(skill) {
        this.skills.push(skill);
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
    constructor(name, rollNo, email) {
        this.name = name;
        this.rollNo = rollNo;
        this.email = email;
        this.skills = [];
    }
    addSkill(skill) {
        this.skills.push(skill);
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
    constructor(name, rollNo, email) {
        super(name, rollNo, email);
        this.rollNo = rollNo;
        this.canVolunteerIn = [];
    }
    ;
    addVolunteerSkill(skill) {
        this.canVolunteerIn.push(skill);
    }
}
const volunteerStudent = new VolunteerStudent("raza", 99, "raza@gmail.com");
volunteerStudent.addSkill("CSS");
volunteerStudent.addVolunteerSkill("attandace");
console.log(volunteerStudent.getSkill);
console.log(volunteerStudent);
//# sourceMappingURL=app.js.map