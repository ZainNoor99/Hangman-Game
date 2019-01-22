const div = document.createElement('div')
const puzzleElement = document.createElement('div')
const guessElement = document.createElement('p')
const resetBtn = document.createElement('button')
const title = document.createElement('h1')
const breakElement = document.createElement('br')

puzzleElement.setAttribute('id', 'puzzle')
puzzleElement.setAttribute('class', 'puzzle')

guessElement.setAttribute('id', 'guesses')

resetBtn.setAttribute('id', 'reset')
resetBtn.setAttribute('class', 'button')
resetBtn.textContent = 'Reset'

title.textContent = 'Second Guesser'


document.querySelector('body').appendChild(div)
div.appendChild(title)
div.appendChild(breakElement)
div.appendChild(puzzleElement)
div.appendChild(guessElement)
div.appendChild(resetBtn)

let game1

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.guess(guess)
    render()
})

const render = () => {
    puzzleElement.innerHTML = ''
    guessElement.textContent = game1.statusMessage

    game1.puzzle.split('').forEach((letter) => {
        const spanElement = document.createElement('span')
        spanElement.textContent = letter
        puzzleElement.appendChild(spanElement)
    })
}

const startGame = async () => {
    const puzzle = await getPuzzle('2') 
    game1 = new Hangman(puzzle, 5)
    render()
}

document.querySelector('#reset').addEventListener('click', startGame)

startGame()
