// Напишите функцию, которая принимает массив и возвращает true,
//если в массиве есть дубликаты, и false, если нет.
// Используйте строгий режим.

'use strict'

function isDuplicate(array) {
    if(array.find((el, i, arr) => arr.indexOf(el) !== arr.lastIndexOf(el)) == undefined){
        return false;
    }
    return true
}

// console.log(isDuplicate(Array(0,1,2,3,5,0)));     //true
// console.log(isDuplicate(Array(0,1,2,3,5)));     //false
// console.log(isDuplicate(Array(0,0,0,0,0)));     //true
// console.log(isDuplicate(Array(1)));             //false