import './css/style.css'
import './css/responsive.css'

import { $ } from './utils/selector.js'

import "./copyText.js"
import "./deleteText.js"

const textarea = $('#input-text')
const wordsCount = $('#words-count')
const lettersCount = $('#letters-count')
const spacesCount = $('#spaces-count')

textarea.addEventListener('input', () => {
    const text = textarea.value

    // Split the text into words
    const words = text.split(' ')
    const word = words.filter(word => word !== '').length

    // Split the text into letters
    const letters = text.split('')
    const letter = letters.filter(letter => letter !== ' ').length

    // Count the spaces
    const space = text.split(' ').length - 1

    wordsCount.textContent = word
    lettersCount.textContent = letter
    spacesCount.textContent = space
})
