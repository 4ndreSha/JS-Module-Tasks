// Напишите функцию, которая генерирует
// идентификатор строки (указанной длины) из
// случайных символов.

function randomString(length){
    let str = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for(let i = 0; i < length; i++){
        str += chars.charAt(Math.floor(Math.random()*chars.length))
    }
    return str
}

console.log(randomString(5));
console.log(randomString(10));
console.log(randomString(20));