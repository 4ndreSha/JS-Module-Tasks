// Напишите функцию, которая конвертирует
// функцию, основанную на callbacks, в
// функцию, основанную на Promises.

function greeting(name) {
    console.log("Hello " + name);
}

function callbackFunction(name, callback) {
    return "Hello, this is my callback function! You`re " + name
}

let funcPromise = function(name) {
    return new Promise((resolve, reject) => {
        callbackFunction(name, (err, data) => {
            if (err)
                reject(err)
            else 
                resolve(data);
        });
        resolve()
    })
}