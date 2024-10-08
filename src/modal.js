import {
  textarea,
  modal,
  deleteButton,
  cancelButton,
  confirmDeleteButton,
} from "./utils/domElements.js";
import { deleteText } from "./deleteText.js";

deleteButton.addEventListener("click", () => {
  if (!textarea.value) {
    return;
  }

  modal.showModal();

  cancelButton.addEventListener("click", () => {
    modal.close();
  });

  confirmDeleteButton.addEventListener("click", () => {
    deleteText();
    modal.close();
  });
});
