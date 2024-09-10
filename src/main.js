import { textarea, domElementsCount } from "./utils/domElements.js"
import "./copyText.js"
import "./modal.js"

const [
  wordsCount,
  lettersCount,
  spacesCount,
  uppercaseCount,
  lowercaseCount,
  numbersCount,
  charactersCount,
] = domElementsCount

let filteredText = ""

function filterSpecialCharacter(textToFilter) {
  let specialCharacter = /[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g
  return textToFilter.replace(specialCharacter, "")
}

textarea.addEventListener("input", () => {
  const text = textarea.value

  // Filter out special characters and numbers from the text
  filteredText = filterSpecialCharacter(text)

  // Split the filtered text into words
  const words = filteredText.split(" ")
  const word = words.filter((word) => word !== "").length

  // Split the filtered text into letters
  const letters = filteredText.split("")
  const letterWithoutSpace = letters.filter((letter) => letter !== " ")
  const letter = letterWithoutSpace.length

  // Count the spaces
  const space = filteredText.split(" ").length - 1

  // Count the uppercase letters
  const uppercase = letterWithoutSpace.filter(
    (letter) => letter === letter.toUpperCase()
  ).length

  // Count the lowercase letters
  const lowercase = letterWithoutSpace.filter(
    (letter) => letter === letter.toLowerCase()
  ).length

  // Count the numbers
  const numbers = text.replace(/[^0-9]/g, "").length

  // Count the characters
  const characters = text.length

  wordsCount.textContent = word
  lettersCount.textContent = letter
  spacesCount.textContent = space
  uppercaseCount.textContent = uppercase
  lowercaseCount.textContent = lowercase
  numbersCount.textContent = numbers
  charactersCount.textContent = characters
})
