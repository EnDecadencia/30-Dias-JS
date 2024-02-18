//lvl 1
//1
/*
let age = prompt('edad')
let ageNum = parseFloat(age)

if (ageNum  >= 18) {
    alert("tenes edad para manejar")
} else {
    alert("no tenes edad para manejar.")
}
//2
let myAge = 18
let ageUser = prompt('tu edad')
let ageUserNum = parseInt(ageUser)

if (ageUserNum  > myAge) {
    difUser = ageUserNum - myAge
    alert("tenes " + difUser + " años mas años que yo")
} else {
    difUser = myAge - ageUserNum
    alert("Tengo " + difUser + " años mas que vos")
    }
    */
//3
let a = 30
let b = 10

if (a > b) {
    console.log(a + " es mas grande que " + b)
} else {
    console.log(b + " es mas grande que " + a)
}

//lvl2

//1

var score = prompt("Enter the student's score:");

score = parseInt(score);
    if (score >= 80 && score <= 100) {
        console.log("Grade: A");
    } else if (score >= 70 && score <= 79) {
        console.log("Grade: B");
    } else if (score >= 60 && score <= 69) {
        console.log("Grade: C");
    } else if (score >= 50 && score <= 59) {
        console.log("Grade: D");
    } else if (score >= 0 && score <= 49) {
        console.log("Grade: F");
    } else {
        console.log("Invalid score entered. Please enter a score between 0 and 100.");
    }

