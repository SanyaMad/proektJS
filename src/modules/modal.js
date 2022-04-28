const modal = () =>{
    const modal = document.querySelector('.popup')
    const modalContent = document.querySelector('.popup-content')
    const buttons = document.querySelectorAll('.popup-btn')
   
 
    let intervalID
    let count = -100

    modal.style.display = 'none'
    modalContent.style.transform = `translateX(${count}%)`

    const counter = () => {
        count += 1
        console.log(count);
    }

    const modalOpen = () => {
        counter()
        modalContent.style.transform = `translateX(${count}%)`
        if (count >= 0) {
            clearInterval(intervalID)
        }
    }
    
    buttons.forEach(btn => {
        btn.addEventListener('click', () =>{
            if (innerWidth <= 768){
                modal.style.display = 'block'
                modalContent.style.transform = `translateX(-15%)`
                modalContent.style.display = 'block'
            }else{
            modal.style.display = 'block'
            intervalID = setInterval(() => {
                modalOpen()
            }, 5);
            }    
        })
    })

    modal.addEventListener('click', (e)=>{
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){
            modal.style.display = 'none'
            modalContent.style.transform = 'translateX(-100%)'
            count = -100
        }
    })
}
 


export default modal