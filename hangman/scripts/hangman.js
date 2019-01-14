class Hangman {
    constructor(word, guesses) {
        this.word = word.toLowerCase().split('')
        this.guesses = guesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        })
    
        return `Puzzle: ${puzzle}`
    }
    getStatus() {
        const isFinished = this.word.every((letter) => this.guessedLetters.includes(letter) || letter === ' ')
    
        if (this.guesses === 0) {
            this.status = 'failed'
        } else if (isFinished) { 
            this.status = 'finished'
        } else {
            this.status = 'playing'
        }
    }
    guess(letter) {
        if (this.guesses > 0) {
            if (!this.guessedLetters.includes(letter.toLowerCase())) {
                this.guessedLetters.push(letter.toLowerCase())
                if (!this.word.includes(letter.toLowerCase())) {
                    this.guesses--
                }
            }
            this.getStatus()
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.guesses}`
        } else if (this.status === 'failed') {
            return `Nice try! The word was "${this.word.join('')}"`
        } else {
            return 'Great work! You guessed the word.'
        }        
    }
}