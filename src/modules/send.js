const sendingForm = () => {
    const form = document.querySelector('#form1')
    const formName = document.querySelector('#form1-name')
    const formEmail = document.querySelector('#form1-email')
    const formTel = document.querySelector('#form1-phone')

    const sendData = (url, data) => {
        return fetch(url, {
            method: 'POST',
            body: data,
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        }).then(response => response.json())
    }
    const sendform = (e) => {
        e.preventDefault()

       const user = {
           name: formName.value,
           email: formEmail.value,
           tel: formTel.value,
       }
       sendData('https://jsonplaceholder.typicode.com/posts', JSON.stringify(user))
            .then(data => {
                console.log(data);
            })

    }
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    getData()
    form.addEventListener('submit', sendform)
}
export default sendingForm