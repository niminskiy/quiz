document.addEventListener('DOMContentLoaded', function () {
    const btnOpenModal = document.querySelector('#btnOpenModal');
    const modalBlock = document.querySelector('#modalBlock');
    const closeModal = document.querySelector('#closeModal');

    btnOpenModal.addEventListener('click', () => {
        modalBlock.classList.add('d-block');
        playTest();
        console.log()
    })

    closeModal.addEventListener('click', () => {
        modalBlock.classList.remove('d-block');
    })

    const playTest = () => {
        const renderQuestions = () => {
            console.log('render')
        }        
    }
})
