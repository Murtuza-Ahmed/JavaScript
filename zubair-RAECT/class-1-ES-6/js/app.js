function checkScopeVar(love) {
    if (love) {
        var fullName = "Sheroz"
        var lastName = "Sheikh"
        console.log("My Name is" + fullName + " " + lastName)
    }
    console.log("My Name is" + lastName + " " + fullName)
}
checkScopeVar(true);

function checkScopeLet(love) {
    if (love) {
        let fullName = "Raza"
        const lastName = "Ahmed"
        console.log("My name is" + fullName + " " + lastName)
    }
    console.log("My name is" + fullName + " " + lastName)
}
checkScopeLet(true);