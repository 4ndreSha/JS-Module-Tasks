// Напишите функцию fetchUserData, которая
// использует async/await для загрузки данных
// о пользователе с сервера по его
// идентификатору. Функция должна
// принимать идентификатор пользователя в
// качестве аргумента и возвращать объект с
// данными о пользователе.

async function fetchUserData(id) {
    var userInfo = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    userInfo = userInfo.json();
    return userInfo
}

fetchUserData(8)
.then((value) => {
    console.log(`Пользователь с id 8:\n${JSON.stringify(value, null, 3)}\n`)
})
.catch((error) => console.error(`Ошибка: ${error}\n`))