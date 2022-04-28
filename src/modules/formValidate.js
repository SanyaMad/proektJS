const formValidate = () => {
    const form = document.querySelector('.main-form')
    const inputEmail = form.querySelector('.form-email')
    const inputPhone = form.querySelector('.form-phone')
    const inputName = form.querySelector('.form-name')
    const form2 = document.querySelector('.footer-form')
    const inputName2 = form2.querySelector('#form2-name')
    const inputEmail2 = form2.querySelector('#form2-email')
    const inputPhone2 = form2.querySelector('#form2-phone')

    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        let error = false
        if(/[^а-яА-Я\-\s]/g.test(inputName.value)){
            alert('имя введено неверно')
        }
        if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(inputEmail.value)) {
            alert('email введен неверно')
        }
        if(!/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g.test(inputPhone.value)){
            alert('телефон введен неверно')
        }
        else if(!error){
            alert ('Данные отправлены')
        }
    })

    form2.addEventListener('submit', (e) =>{
        e.preventDefault()
        let error = false
        if(/[^а-яА-Я\-\s]/g.test(inputName2.value)){
            alert('имя введено неверно')
        }
        if(!/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(inputEmail2.value)) {
            alert('email введен неверно')
        }
        if(!/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/g.test(inputPhone2.value)){
            alert('телефон введен неверно')
        }
        else if(!error){
            alert ('Данные отправлены')
        }
    })
} 

export default formValidate

