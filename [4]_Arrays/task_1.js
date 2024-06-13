// Напишите функцию, которая принимает
// массив с числами и находит сумму тех
// элементов этого массива, которые больше
// нуля и меньше десяти.

function sumOfNumerals(arr){
    let sum = 0;
    //for(let i = 0; i < arr.length; i++) {...}
    //arr.forEach(element => { if(element < 10 && element > 0) sum += element;});
    for (let item of arr){
        if(item < 10 && item > 0)
            sum += item;
    }
    return sum
}

console.log(sumOfNumerals([1, 5, 7, 33, 19, 1, 0, -5322, 314])); //14