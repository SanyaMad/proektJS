import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import scroll from './modules/scroll'
import formValidate from './modules/formValidate'
import tabs from './modules/tabs'
import priceForm from './modules/priceForm'
import slider from './modules/slider'
import calc from './modules/calc'
import sendingForm from './modules/send'


timer('30 april 2022')
menu()
modal()
scroll()
formValidate()
tabs()
priceForm() 
slider()
calc(100)
sendingForm({
    formId: 'form1', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
sendingForm({
    formId: 'form2', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})
sendingForm({
    formId: 'form3', 
    someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ] 
})