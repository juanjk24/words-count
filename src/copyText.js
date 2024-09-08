import { Notyf } from "notyf"
import { $ } from "./utils/selector.js"

const textarea = $("#input-text")
const copyButton = $("#copy-text-button")

copyButton.addEventListener("click", () => {
  if (!textarea.value) return

  navigator.clipboard.writeText(textarea.value)

  const notyf = new Notyf({
    position: {
      x: "right",
      y: "top",
    },
    types: [{ background: "#2c2c2c", type: "success" }],
  })

  notyf.open({
    type: "success",
    message: "Texto copiado en el portapapeles",
  })
})
