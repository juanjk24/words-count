import './css/style.css'
import './css/responsive.css'

import { textarea, domElementsCount } from './utils/domElements.js'
import "./copyText.js"
import "./deleteText.js"

const [wordsCount, lettersCount, spacesCount, uppercaseCount, lowercaseCount, charactersCount] = domElementsCount

textarea.addEventListener('input', () => {
    const text = textarea.value

    // Split the text into words
    const words = text.split(' ')
    const word = words.filter(word => word !== '').length

    // Split the text into letters
    const letters = text.split('')
    const letterWithoutSpace = letters.filter(letter => letter !== ' ')
    const letter = letterWithoutSpace.length

    // Count the spaces
    const space = text.split(' ').length - 1

    // Count the uppercase letters
    const uppercase = letterWithoutSpace.filter(letter => letter === letter.toUpperCase()).length

    // Count the lowercase letters
    const lowercase = letterWithoutSpace.filter(letter => letter === letter.toLowerCase()).length

    // Count the characters
    const characters = text.length

    wordsCount.textContent = word
    lettersCount.textContent = letter
    spacesCount.textContent = space
    uppercaseCount.textContent = uppercase
    lowercaseCount.textContent = lowercase
    charactersCount.textContent = characters
})
