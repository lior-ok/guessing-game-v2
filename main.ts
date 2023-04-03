namespace MathGame {
    let playerScore = 0 // player score to 0

    function equationAdd(value1min: number, value1max: number, value2min: number, value2max: number) {
        let guess = 0
        let value = randint(value1min, value1max)
        let secondValue = randint(value2min, value2max)
        game.showLongText("Answer the question!", DialogLayout.Bottom)
        while (guess != value + secondValue) { // Keep asking for input until the guess is correct
            guess = parseFloat(game.askForString("What is the sum of " + value + " and " + secondValue + "?", 3))
        }
        game.showLongText("Correct!", DialogLayout.Bottom) // Show "Correct" message
        playerScore++ // Increment the player score
    }

    function equationMult(value1min: number, value1max: number, value2min: number, value2max: number) {
        let guess = 0
        let correct = true
        let value = randint(value1min, value1max)
        let secondValue = randint(value2min, value2max)
        game.showLongText("Answer the question!", DialogLayout.Bottom)
        guess = parseFloat(game.askForString("What is " + value + " multiplied by " + secondValue + "?", 4))
        if (guess == value * secondValue) { // Check if the guess is correct
            correct = true
        } else {
            correct = false
        }
        if (correct) {
            game.showLongText("Correct!", DialogLayout.Bottom) // Show "Correct" message
            playerScore++ // Increment the player score
        } else {
            game.showLongText("Wrong answer, try again!", DialogLayout.Bottom) // Show "Wrong answer, try again" message
        }
        return correct // Return whether the guess is correct or not
    }

    function gameLoop() {
        let values: number[] = [2, 3, 4, 5, 6] // Array of numbers
        let currentPlayer = 1 // Set initial current player to 1
        while (true) { // Keep looping forever
            let getNums = values[randint(0, values.length - 1)] // Get a random number from the array

            if (equationMult(getNums, getNums * 2, 7, 9) == true) { // Check if the guess is correct
                game.showLongText("Player " + currentPlayer + " got it right!", DialogLayout.Center) // Show "Player <currentPlayer> got it right" message
                currentPlayer = currentPlayer == 1 ? 2 : 1 // Switch players
            } else {
                game.showLongText("Player " + currentPlayer + " got it wrong!", DialogLayout.Center) // Show "Player <currentPlayer> got it wrong" message
            }
            game.showLongText("Player 1 Score: " + playerScore + "\nPlayer 2 Score: " + playerScore, DialogLayout.Bottom) // Show the current scores for both players
        }
    }

    gameLoop() // Start the game loop
}





//EXTENSION WORKING
//ARRAYS WORKING


