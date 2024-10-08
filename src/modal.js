import { textarea, modal, deleteButton, cancelButton, confirmDeleteButton } from './utils/domElements.js'
import { deleteText } from './deleteText.js'


deleteButton.addEventListener('click', () => {
    if (!textarea.value) {
        return
    }

    //modal.style.display = 'flex'
    modal.showModal()

    cancelButton.addEventListener('click', () => {
        //modal.style.display = 'none'
        modal.close()
    })

    confirmDeleteButton.addEventListener('click', () => {
        deleteText()
        //modal.style.display = 'none'
        modal.close()
    })
})