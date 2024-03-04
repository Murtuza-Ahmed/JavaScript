function checkScope(love) {
    if (love) {
        var fullName = "Sheroz"
        var lastName = "Sheikh"
        console.log("My Name is" + fullName + " " + lastName)
    }
    console.log("My Name is" + lastName + " " + fullName)
}
checkScope(true);