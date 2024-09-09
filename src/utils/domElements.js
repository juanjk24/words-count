import { $ } from './selector.js'

export const textarea = $('#input-text')
export const deleteButton = $('#delete-text-button')
export const confirmDeleteButton = $('#confirm-delete-button')
export const cancelButton = $('#cancel-button')
export const modal = $('#modal')

const wordsCount = $('#words-count')
const lettersCount = $('#letters-count')
const spacesCount = $('#spaces-count')
const uppercaseCount = $('#uppercase-count')
const lowercaseCount = $('#lowercase-count')
const numbersCount = $('#numbers-count')
const charactersCount = $('#characters-count')

export const domElementsCount = [wordsCount, lettersCount, spacesCount, uppercaseCount, lowercaseCount, numbersCount, charactersCount]