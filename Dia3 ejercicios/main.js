const now = new Date()

let firstName = 'Alejo'
let lastName = 'Fookes Kiernan'
let country = 'Argentina'
let city = 'Lanus'
let age = 18
let isMarried = false
let yearr = '2024'

console.log(typeof '10' === typeof 10) //2, no es un string
console.log(parseInt('9.8') === 10) //3, no es 9

//4

console.log(6 > 5)
console.log(3 == '3')
console.log(firstName.length < lastName.length)

console.log(6 < 5)
console.log(3 === '3')
console.log(firstName.length > lastName.length)

//5 hechoxd

console.log(4 > 3) //true
console.log(4 >= 3) //true
console.log(4 < 3) //false
console.log(4 <= 3) //false
console.log(4 == 4) //true
console.log(4 === 4) //true
console.log(4 != 4) //false
console.log(4 !== 4) //false
console.log(4 != '4') //false
console.log(4 == '4') //true
console.log(4 === '4') //false

//6

//7

console.log(now.getFullYear())
console.log(now.getMonth()+1)
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getTime())

//lvl 2
//1

/*let base = prompt('base')
console.log(base)

let altura = prompt('altura')
console.log(altura)

let sumaBxA = base * altura
area = sumaBxA * 0.5
console.log(area) */

//2
/*
let a = prompt('lado a')
console.log(a)
let b = prompt('lado b')
console.log(b)
let c = prompt('lado c')
console.log(c)

let triangulo = a * b * c
console.log("el resultado del triangulo es: ", triangulo)

//3
let largo = prompt('largo')
console.log(largo)
largo = parseInt(largo)

let ancho = prompt('ancho')
ancho = parseInt(ancho)
console.log(ancho)

let perimetro = largo + ancho 
let area = largo * ancho 
console.log(perimetro)

console.log("el area es: ", area, " el perimetro es: " , perimetro)

//4 


r = prompt('ingrese el area: ')
r = parseInt(r)
let pi = Math.PI
areaa = pi * r
console.log(areaa) */

//5
var equation = "2x - 2";
var xparse= Math.parseInt = equation
var slope = 2*xparse-2
slope = parseFloat(slope);
var slope = 2*xparse-2
console.log(xparse)
xsplit= xparse.split
console.log(xsplit)
console.log("La pendiente (m) es: " + slope)
var yIntercept = equation.split(" ")[2]
console.log(equation.split(" ")[2])
yIntercept = parseFloat(yIntercept)
console.log("La intersección en y es: " + yIntercept)

var xIntercept = -yIntercept / slope
console.log("La intersección en x es: " + xIntercept)
console.log(yIntercept)
//6

let x1 = 2
x2 = 6
y1 = 2
y2 = 10
var slope = (y2 - y1) / (x2 - x1)
console.log("La pendiente (m) entre los puntos (" + x1 + ", " + y1 + ") y (" + x2 + ", " + y2 + ") es: " + slope)

//7

console.log("La intersección en x es: " + xIntercept)
console.log(yIntercept)
console.log("La pendiente (m) entre los puntos (" + x1 + ", " + y1 + ") y (" + x2 + ", " + y2 + ") es: " + slope)

//8 es 0 cuando es -3
let x = -3
let y3
y3 = (Math.pow(x,2)+6*x+9)
console.log(y3)

//9

/*var hoursWorked = parseFloat(prompt("Ingrese las horas trabajadas:"));

var hourlyRate = parseFloat(prompt("Ingrese la tarifa por hora:"));

var totalPay = hoursWorked * hourlyRate;

console.log("El pago total es: " + totalPay);*/

//14

// Definir el número de años
let years = prompt('years')
var yearsNum = years.parseFloat


// Calcular el número de días en 100 años
var daysIn100Years = yearsNum * 365; // Suponiendo que no consideramos los años bisiestos

// Calcular el número de segundos en un día
var secondsInDay = 24 * 60 * 60;

// Calcular el número total de segundos en 100 años
var secondsIn100Years = daysIn100Years * secondsInDay;

// Mostrar el resultado
console.log("En " + yearsNum + " años hay aproximadamente " + secondsIn100Years.toLocaleString() + " segundos.");


