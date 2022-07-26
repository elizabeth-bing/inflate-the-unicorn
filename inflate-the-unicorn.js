// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Inflate The Unicorn!')

let gameIsOver = false
let uniArray = {
  one: 0,
  two: 0,
  three: 0,
}
let sources = [
  'images/unicorn-0.png',
  'images/unicorn-1.png',
  'images/unicorn-2.png',
  'images/unicorn-3.png',
]

const unicorns = Array.from(document.getElementsByClassName('inflate-an-image')) //creates an array that can be selected per click
for (let i = 0; i < unicorns.length; i++) {
  unicorns[i].onclick = handleClick
}

function handleClick(e) {
  if (!gameIsOver) {
    const unicorn = e.target
    const id = unicorn.id

    if (uniArray[id] < 3) {
      uniArray[id]++
      stopConfetti()
    } else if ((uniArray[id] = 3)) {
      toggleConfetti()
      var audio = new Audio('horse.mp3')
      audio.play()
      alert(`Thank you for inflating unicorn ${id}`)

      if ((uniArray[id] = 3)) {
        gameIsOver = true
      }
    }
    unicorn.src = sources[uniArray[id]]
  }
  gameIsOver = false
}
