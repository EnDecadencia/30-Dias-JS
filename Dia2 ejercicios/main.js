//level 1

let challenge = '30 Days Of JavaScript' //1
let empresas = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
let frase = 'You cannot end a sentence with because because because is a conjunction'
let frase1 = '30 Days Of'
let frase2 =  ' JavaScript'
let ejemplo = ' aguante turrxcore loko '

console.log(challenge) //2
console.log(challenge.length) //3
console.log(challenge.toUpperCase()) //4
console.log(challenge.toLowerCase()) //5
console.log(challenge.substr(2,5)) //6
console.log(challenge.substring(2)) //7
console.log(challenge.includes('Script')) //8
console.log(challenge.split()) //9
console.log(challenge.split(' ')) //10
console.log(empresas.split(',')) //11
console.log(challenge.replace('JavaScript','Phyton')) //12
console.log(challenge.charAt(15)) //13, es una S
console.log(challenge.charCodeAt('J')) //14, es 51
console.log(challenge.indexOf('a')) //15, esta en el espacio 4
console.log(challenge.lastIndexOf('a')) //16, esta en el espacio 14
console.log(frase.indexOf('because')) //17, esta en el espacio 31
console.log(frase.lastIndexOf('because')) //18, esta en el espacio 47
console.log(frase.search('because')) //19, esta en el espacio 31
console.log(ejemplo.trim()) //20
console.log(frase.startsWith('You')) //21
console.log(frase.endsWith('tion')) //22
console.log(frase.match('a')) //23
console.log(frase1.concat(frase2)) //24
console.log(challenge.repeat(2)) //25

//level 2

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.") //1
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.") //2
console.log(typeof 10)  //3
console.log(Math.round(parseFloat('9.8')))//4
console.log("python".includes('on') && "jargon".includes('on')) //5
console.log("I hope this course is not full of jargon.".includes('jargon')) //6
const num = Math.floor(Math.random () * 101) 
console.log(num) //7
const num2 = Math.floor(Math.random () * 51) + 50
console.log(num2) //8
const num3 = Math.floor(Math.random () * 256)
console.log(num3) //9
console.log(Math.floor(Math.random() * 'JavaScript'.length)) //10
//11
//12

