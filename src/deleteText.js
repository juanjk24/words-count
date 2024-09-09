import {
  domElementsCount,
  textarea,
} from "./utils/domElements.js"

export function deleteText() {
  if (!textarea.value) return

  textarea.value = ""
  domElementsCount.forEach((element) => (element.textContent = ""))
}
