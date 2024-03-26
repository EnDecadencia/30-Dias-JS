//for(let i = 0; i <= 10; i++){ //1
    //console.log(i)
  //}
  
  //for(let i = 10; i >= 0; i--){ //2
    //console.log(i)
  //}

/*
var n = prompt("What number is n? ");

for (var i = 1; i <= n; i++) {
    console.log(i);
} */
//4  var numRows = 6; //4 
/*
for (var i = 1; i <= numRows; i++) {
    var row = '';
    for (var j = 1; j <= i; j++) {
        row += '#';
    }
    console.log(row);
} */
var multiply = 10

for (var i = 1; i <= multiply; i++) {
  var row = '';
  for (var j = 1; j <= i; j++) {
      row = j + ' X ' + j;
  }   
  console.log(row);
}

