'use strict'

const nameInput = document.getElementById('input__name')
const surnameInput = document.getElementById('input__surname')
const ageInput = document.getElementById('input__age')
const childInput = document.getElementById('input__child')
const selectInput = document.querySelector('select')
const orgInput = document.getElementById('input__org')
const rankInput= document.getElementById('input__rank')
const dateInput = document.getElementById('input__date')
const submitBtn = document.querySelector('.form-submit__button')
const table = document.querySelector('table')
const newTable = document.querySelector('.tableClone')


let object = []
let person = {
    name:  '',
    secName: '',
    age: 0,
    child: false,
    select: '',
    org: '',
    rank: 0,
    date: ''
}


const start = function () {
    localStorageFunc()
    render() 
}


const dataBring = function () {
    person.name = nameInput.value
    person.secName = surnameInput.value
    person.age = ageInput.value
    person.child = childInput.value
    person.select = selectInput.value
    person.org = orgInput.value
    person.rank = rankInput.value
    person.date = dateInput.value

    nameInput.value = ""
    surnameInput.value =""
    ageInput.value = ""
    childInput.value = ""
    selectInput.value = ""
    orgInput.value = ""
    rankInput.value = ""
    dateInput.value = ""

    object.push(person)

    if (object.length >= 1) {
        localStorage.setItem("object", JSON.stringify(object))
    }
    console.log(localStorage.object);
    render()
}


const localStorageFunc = function () {
    object = JSON.parse(localStorage.getItem("object")) || []
}


const render = function () {
    localStorageFunc()
        table.innerHTML = `<tr class="tableString">
            <td class="newBlock tableTitle">Имя</td>
            <td class="newBlock tableTitle">Фамилия</td>
            <td class="newBlock tableTitle">Возраст</td>
            <td class="newBlock tableTitle">Есть дети?</td>
            <td class="newBlock tableTitle">Организация</td>
            <td class="newBlock tableTitle">Должность</td>
            <td class="newBlock tableTitle">Разряд</td>
            <td class="newBlock tableTitle">Дата принятия на работу</td>
            <td class="newBlock tableTitle darkBlock"></td>
        </tr>
        <tr class="tableString tableClone displayNone">
            <td class="newBlock blockEmpty tableName"></td>
            <td class="newBlock blockEmpty tableSecname"></td>
            <td class="newBlock blockEmpty tableAge"></td>
            <td class="newBlock blockEmpty tableChild"></td>
            <td class="newBlock blockEmpty tableOrg"></td>
            <td class="newBlock blockEmpty tableRole"></td>
            <td class="newBlock blockEmpty tableRank"></td>
            <td class="newBlock blockEmpty tableDate"></td>
            <td class="newBlock blockEmpty tableButton "><button class="output-block__button delete-button">Удалить</button></td>
        </tr>`
        object.forEach(person => {
        const newCell = newTable.cloneNode(true)
        newCell.classList.remove('displayNone')
    
        const cellName = newCell.querySelector('.tableName')
        const cellsecName = newCell.querySelector('.tableSecname')
        const cellAge = newCell.querySelector('.tableAge')
        const cellChild = newCell.querySelector('.tableChild')
        const cellOrg = newCell.querySelector('.tableOrg')
        const cellRole = newCell.querySelector('.tableRole')
        const cellRank = newCell.querySelector('.tableRank')
        const cellDate = newCell.querySelector('.tableDate')
        
        cellName.textContent = person.name
        cellsecName.textContent = person.secName
        cellAge.textContent = person.age
        if (childInput.checked) {
            cellChild.textContent = 'Есть'
        } else {
            cellChild.textContent = 'Нет'
        }
        cellOrg.textContent = person.org
        cellRole.textContent = person.select
        cellRank.textContent = person.rank
        cellDate.textContent = person.date
        table.append(newCell)
    })


     let deleteInfo = document.querySelectorAll('.delete-button')
     deleteInfo.forEach((dataDelete, index) => {
        dataDelete.addEventListener("click", function () {
            object.splice(index-1, 1)
            localStorage.setItem("object", JSON.stringify(object))
            if (object.length === 0) {
              localStorage.clear()
            }
            render()
          })
    })
}



submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    dataBring()
})

start()

