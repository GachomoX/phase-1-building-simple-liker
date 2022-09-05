const FULL_HEART = '♥'

// Your JavaScript code goes here!
const listg = document.querySelectorAll(".like-glyph")
const errorMessage = document.querySelector("#modal-message")
const hidden = document.querySelector('#modal')
hidden.classList.add('hidden')


listg.forEach(glyph =>{glyph.addEventListener('click',() =>
mimicServerCall()
.then(()=>{
  if (glyph.textContent !== FULL_HEART) {
    glyph.classList.add("activated-heart")
    glyph.textContent = FULL_HEART
  }
  else if (glyph.textContent === FULL_HEART) { 
    glyph.textContent = EMPTY_HEART
    glyph.classList.remove("activated-heart")
  }
})
.catch((error) => {
  hidden.classList.remove("hidden")
  errorMessage.textContent = error
  setTimeout(hideAgain, 3000)
})
)
}) 

function thishiden() {
  return hidden.classList.add("hidden")
}
console.log(listg)
