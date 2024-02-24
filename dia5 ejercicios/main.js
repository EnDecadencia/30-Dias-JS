const emptyArray = [] //1
const numbers = [1,2,3,4,5] //2
const cuack = "cuack"

console.log(numbers.length  ) //3
console.log(numbers.indexOf(3))  //4
console.log(numbers.lastIndexOf(5))  
const firstElement = numbers[0] 
console.log(numbers.indexOf(firstElement))   

const mixedDataTypes = ['hello', 10, true, "lol", cuack] //5
console.log(mixedDataTypes)

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'] //6
console.log(itCompanies) //7
console.log(itCompanies.length) //8
console.log(itCompanies.indexOf('Apple'))  //9
lastElement = itCompanies[itCompanies.length-1]
console.log(itCompanies.indexOf(lastElement))
const firstElement2 = itCompanies[0] 
console.log(numbers.indexOf(firstElement2))  
console.log(itCompanies) //10
const upperCaseItCompanies = itCompanies.map(element => element.toUpperCase()); //11
console.log(upperCaseItCompanies);
const sentence = itCompanies.join(', ') + " are big IT companies.";
console.log(sentence);