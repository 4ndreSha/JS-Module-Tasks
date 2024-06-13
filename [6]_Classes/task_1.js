// Создайте класс Book со свойствами названия,
// автора и года публикации. Включите метод
// отображения сведений о книге. Создайте
// подкласс под названием «Ebook», который
// наследуется от класса «Book» и включает
// дополнительное свойство для цены книги.
// Переопределите метод отображения, чтобы
// включить цену книги. Создайте экземпляр
// класса «Электронная книга» и отобразите его
// сведения.

class Book {
    constructor(name, author, year){
        this.name = name;
        this.author = author;
        this.year = year;
    }

    bookInfo() {
        return `Название: ${this.name}\nАвтор: ${this.author}\nГод публикации: ${this.year} г.`
    }
}

class EBook extends Book {
    constructor(name, author, year, price){
        super(name, author, year);
        this.price = price;
    }
    bookInfo() {
        return super.bookInfo() + `\nЦена: ${this.price}`
    }
}

// let bk = new Book("Воспламеняющая взглядом", "Стивен Кинг", "1980");
// console.log(bk.bookInfo());

let ebk = new EBook("Воспламеняющая взглядом", "Стивен Кинг", "1980", "35$");
console.log(ebk.bookInfo());