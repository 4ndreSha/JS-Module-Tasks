// Напишите функцию, которая принимает
// массив в качестве параметра и выдает
// пользовательскую ошибку, если массив пуст.

function isEmptyError(arr) {
    try {
        if(arr.length === 0)
            throw new Error("Массив пуст");
        else
            console.log("Всё в порядке");
    } catch (err) {
        console.log(err.message);
    }
    finally {
        console.log("Пум пурум");
    }
}

isEmptyError([1,2]);