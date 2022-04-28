const scroll = () => {
    const downBtn = document.querySelector('[href="#service-block"]')
    const serviceBlock = document.getElementById('service-block')

    downBtn.addEventListener('click', (e) =>{
        e.preventDefault()
        serviceBlock.scrollIntoView({block: "start", behavior: "smooth"});
    })
}

export default scroll