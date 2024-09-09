import { modal, deleteButton, cancelButton, confirmDeleteButton } from './utils/domElements.js'
import { deleteText } from './deleteText.js'


deleteButton.addEventListener('click', () => {
    modal.style.display = 'flex'

    cancelButton.addEventListener('click', () => {
        modal.style.display = 'none'
    })

    confirmDeleteButton.addEventListener('click', () => {
        deleteText()
        modal.style.display = 'none'
    })
})