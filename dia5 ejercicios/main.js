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
const sentence = itCompanies.join(', ') + " are big IT companies."; //12
console.log(sentence);

if (itCompanies.indexOf('Google')) { //13
    console.log('It contains the value: Google.')
} else {
    console.log('The company is not found.')
}

const filteredCompanies = []; //14

for (let i = 0; i < itCompanies.length; i++) {
    let count = 0;
    for (let j = 0; j < itCompanies[i].length; j++) {
        if (itCompanies[i][j] === 'o' || itCompanies[i][j] === 'O') {
            count++;
            if (count > 1) {
                break;
            }
        }
    }
    if (count <= 1) {
        filteredCompanies.push(itCompanies[i]);
    }
}

console.log(filteredCompanies);

console.log(itCompanies.sort()) //15
console.log(itCompanies.reverse()) //16
console.log(itCompanies.slice(0,3)) //17
console.log(itCompanies.slice(4,7)) //18

//lvl2


