import { $ } from './utils/selector.js'

const textarea = $('#input-text')
const wordsCount = $('#words-count')
const lettersCount = $('#letters-count')
const spacesCount = $('#spaces-count')
const deleteButton = $('#delete-text-button')

deleteButton.addEventListener('click', () => {
    if (!textarea.value) return

    textarea.value = ''
    wordsCount.textContent = ''
    lettersCount.textContent = ''
    spacesCount.textContent = ''
})