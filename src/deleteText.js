import { domElementsCount, textarea, deleteButton } from './utils/domElements.js'

deleteButton.addEventListener('click', () => {
    if (!textarea.value) return

    textarea.value = ''
    domElementsCount.forEach(element => element.textContent = '')
})