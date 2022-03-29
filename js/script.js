'use strict';

const book = document.querySelectorAll('.book')
const books = document.querySelectorAll('.books')
const glava = document.querySelectorAll('li')
const adv = document.querySelector('.adv').remove()
const newli = document.createElement('li')

document.querySelector('body').style.backgroundImage = 'url(./image/you-dont-know-js.jpg)'


console.log(book)
console.log(books)
console.log(glava)


book[1].after(book[0])
book[2].before(book[4])
book[3].after(book[2])
book[2].before(book[5])


book[4].querySelector('a').text = 'Книга 3. this и Прототипы Объектов'


glava[9].before(glava[7])
glava[10].before(glava[2])
glava[3].after(glava[6])
glava[4].before(glava[8])
glava[48].before(glava[55])
glava[55].after(glava[49])
glava[49].after(glava[50])
glava[54].before(glava[51])

newli.textContent = 'Глава 8: За пределами ES6'
book[2].querySelector('ul').append(newli)
newli.after(glava[26])