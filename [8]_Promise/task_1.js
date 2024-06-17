// Напишите функцию, которая конвертирует
// функцию, основанную на callbacks, в
// функцию, основанную на Promises.

function greetings() {
    console.log("Hello, this is my callback function!");
}

let convertToPromise = function(callbackFunction) {
    return new Promise((resolve, reject) => {
        if(typeof(callbackFunction) === 'function') {
            try {
                resolve(callbackFunction())
            } catch(err) {
                reject(err);
            }
        }
        else {
            reject(new Error('Wrong parameter type'));
        }
    })
}
//convertToPromise(123);
convertToPromise(greetings);