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

let a = prompt('lado a')
console.log(a)
let b = prompt('lado b')
console.log(b)
let c = prompt('lado c')
console.log(c)

let triangulo = a * b * c
console.log("el resultado del triangulo es: ", triangulo)