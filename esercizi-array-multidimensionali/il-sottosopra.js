/*
  Il sottosopra
  Scrivi un programma che prenda in input un array multidimensionale e stampi in output la sua trasposta, in questo modo:
    Input : 
      [
        [1, 2],
        [3, 4],
        [5, 6]
      ]
    Output:
      [
        [1, 3, 5],
        [2, 4, 6],
      ]

  http://www.imparareaprogrammare.it
*/

var arrInput = [
  [1, 2],
  [3, 4],
  [5, 6]
];

console.log(arrInput);

var x = arrInput[0][0];
var y = arrInput[1][0];
var z = arrInput[2][0];
var e = arrInput[0][1];
var j = arrInput[1][1];
var k = arrInput[2][1];
var a = [x, y, z];
var b = [e, j, k];
var arrOutput = [[a], [b]];


console.log(a);
console.log(b);
console.log(arrOutput);

