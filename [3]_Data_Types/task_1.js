// Напишите функцию, которая принимает
// число и выводит количество цифр в этом
// числе.

function sumOfDigits(x){
    let sum = 0n;
    let number = BigInt(x);
    while(number != 0){
        sum += number%10n;
        number = number/10n;
    }
    return Number(sum)
}

console.log(sumOfDigits(123456789)); //45