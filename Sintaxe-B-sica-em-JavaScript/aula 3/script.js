/*let array = ['string', 1, true];
console.log(array);*/

/* let array = ['string', 1, true, ['array1'], ['array2'],['array3'],['array4']]; */
//console.log(array2[2]);

// forEach
//array.forEach(function(item, index){console.log(item, index)});

/* array.push([]);
console.log(array); */

/* array.pop();
console.log(array); */

/* array.shift();
console.log(array);
 */

/* array.unshift('novo item no inicio');
console.log(array); */

/* console.log(array.indexOf(true)); */

/* array.splice(0, 3);
console.log(array) */

/* let novoArray = array.slice(0, 3);
console.log(novoArray); */

let object = {string: 'string', number: 1, boolean: true, array:['array'], objetctInterno: {objetctInterno:'objeto interno'}};

console.log(object.objetctInterno);

var string = object.string;
console.log(string)

var arrayInterno = object.array;
console.log(arrayInterno)

var {string, boolean, objetctInterno} = object;
console.log(string, boolean, objetctInterno)