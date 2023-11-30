/* Desenvolva sua lógica aqui */
function openModal(){
    const openModal = document.querySelector('.modal__open')
    const modal = document.querySelector('.modal__controler')
    const registerValueEmpty = document.querySelector('.empty__container > p')
    
    registerValueEmpty.addEventListener('click', () => {
        modal.showModal()
    })
    
    openModal.addEventListener('click', () => {
        modal.showModal()
    })
}

function fecharModal(){
    const modal = document.querySelector('.modal__controler')
    const fechar = document.querySelectorAll('.fechar')
    fechar.forEach(element => {
        element.addEventListener('click', (event)=>{
            event.preventDefault()
            modal.close()
        })
    });
}
openModal()