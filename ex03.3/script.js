function openImage(element) {
  const dialog = document.getElementById("image-opened")
  const image = document.getElementById("image-element")

  const src = element.src
  const alt = element.alt

  image.src = src
  image.alt = alt

  dialog.setAttribute("open", true)
  dialog.classList.add("open")
}

function closeImage() {
  const dialog = document.getElementById("image-opened")
  dialog.removeAttribute("open")
  dialog.classList.remove("open")

  const image = document.getElementById("image-element")
  image.src = ""
  image.alt = ""
}

function zoomImage(event) {
  const isZoomed = this.style.transform === "scale(3)"

  // get the mouse position relative to the image
  const rect = this.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  if (isZoomed) {
    this.style.transform = "scale(1)"
    this.style.cursor = "zoom-in"
    this.style.transformOrigin = "center"
  } else {
    this.style.transform = "scale(3)"
    this.style.cursor = "zoom-out"
    this.style.transformOrigin = `${x}px ${y}px`
  }
}

document.getElementById("image-element").addEventListener("click", zoomImage)
document.getElementById("close").addEventListener("click", closeImage)
Array.from(document.getElementsByClassName('thumb')).forEach((element) => {
  element.addEventListener('click', () => openImage(element))
})