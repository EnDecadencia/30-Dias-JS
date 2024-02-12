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