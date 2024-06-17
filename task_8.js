// Напишите функцию, которая конвертирует
// функцию, основанную на callbacks, в
// функцию, основанную на Promises.

function greeting(name) {
    console.log("Hello " + name);
}

function processUserInput(name, callback) {
    console.log("Hello " + name);
}

processUserInput(greeting);

let funcPromise = function(name) {
    return new Promise((resolve, reject) => {
        callbackFunction()
        resolve()
    })
}