// Используя Promise, выведите числа от 1 до
// 10 через секунду каждый раз.
// Ограничения: setTimeout и new Promise() мы
// можно вызывать только один раз.

function counter(n) {
  return new Promise(function(resolve, reject) {
    let timer = setTimeout (() => resolve(n), 1000);
  });
}

async function countTo10() {
    for(let i = 1; i <= 10; i++){
        let promise = await counter(i);
        console.log(promise);
    }
}

countTo10();