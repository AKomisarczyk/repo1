//zad1
const fullName = "Aleksander Komisarczyk";
const studentId = "42882";
console.log("My name is $(fullName). My student ID is ${studentId}");

//zad2
const fullname= "Aleksander Komisarczyk";
const student_id= "42882";

function getStudentFullName() {
    return fullname;
}

function getStudentID() {
    return student_id;
}

console.log("My name is ${getStudentFullName()}. My student ID is ${getStudentID()}");

//zad3

module.exports = {
    getStudentFullName,
    getStudentID,
};

//zad6

function getStudentFullName(id) {
    switch (id) {
        case 0:
            return "Aleksander Komisarzcyk 42882";
        case 1:
            return "Kacper Nowak 111222";
        case 2:
            return "Maja Kowalska 222333";
        default:
            return "Michał Wiśniewski i 333444";
    }
}

function getStudentId(id) {
    switch (id) {
        case 0:
            return "Twój numer albumu";
        case 1:
            return "111222";
        case 2:
            return "222333";
        default:
            return "333444";
    }
}
