// Get the modal
var modal = document.getElementById('modal')

// Get the image and insert it inside the modal - use its 'alt' text as a caption
var images = document.getElementsByClassName('photo')

var urls = []
var captions = []

for (var i = 0; i < images.length; i++) {
  urls.push(images[i].src.replace('.crop', ''))
  captions.push(images[i].alt)

  images[i].onclick = function () {
    var modalImg = document.getElementById('modal-img')
    var captionText = document.getElementById('modal-caption')

    modal.style.display = 'block'
    modalImg.src = this.src.replace('.crop', '')
    captionText.innerHTML = this.alt
  }
}

document.getElementById('modal-close').onclick = function () {
  modal.style.display = 'none'
}

document.onkeydown = function (evt) {
  evt = evt || window.event

  var isEscape = false
  var isRight = false

  if ('key' in evt) {
    console.log(evt.key);
    isEscape = evt.key === 'Escape' || evt.key === 'Esc'
    isRight = evt.key === 'ArrowRight'
    isLeft = evt.key === 'ArrowLeft'
  } else {
    isEscape = evt.keyCode === 27
    isRight = evt.keyCode === 39
    isLeft = evt.keyCode === 37
  }

  if (isEscape) {
    modal.style.display = 'none'
  }

  if (isRight) {
    var current = document.getElementById('modal-img').src
    var a = urls.indexOf(current)

    if (a < urls.length - 1) {
      document.getElementById('modal-img').src = urls[a + 1]
      document.getElementById('modal-caption').innerHTML = captions[a + 1]
    }
  }

  if (isLeft) {
    var current = document.getElementById('modal-img').src
    var a = urls.indexOf(current)

    if (a !== 0) {
      document.getElementById('modal-img').src = urls[a - 1]
      document.getElementById('modal-caption').innerHTML = captions[a - 1]
    }
  }
}