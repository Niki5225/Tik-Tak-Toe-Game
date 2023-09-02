function ticTacToe(arrayOfPlaces) {

    function checkForWinnerOrDraw() {
        for (let i = 0; i < 3; i++) {
            if (
                (ticTakToeTable[i][0] === 'X' &&
                    ticTakToeTable[i][1] === 'X' &&
                    ticTakToeTable[i][2] === 'X') ||
                (ticTakToeTable[0][i] === 'X' &&
                    ticTakToeTable[1][i] === 'X' &&
                    ticTakToeTable[2][i] === 'X')
            ) {
                player1Won = true;
            } else if (
                (ticTakToeTable[i][0] === 'O' &&
                    ticTakToeTable[i][1] === 'O' &&
                    ticTakToeTable[i][2] === 'O') ||
                (ticTakToeTable[0][i] === 'O' &&
                    ticTakToeTable[1][i] === 'O' &&
                    ticTakToeTable[2][i] === 'O')
            ) {
                player2Won = true;
            }
        }

        if (ticTakToeTable[0][0] === 'X' &&
            ticTakToeTable[1][1] === 'X' &&
            ticTakToeTable[2][2] === 'X') {
            player1Won = true;
        } else if (ticTakToeTable[0][0] === 'O' &&
            ticTakToeTable[1][1] === 'O' &&
            ticTakToeTable[2][2] === 'O') {
            player2Won = true;
        }



        let hasAnEmptyField = false;

        for (let row of ticTakToeTable) {
            for (let el of row) {
                if (el === false) {
                    hasAnEmptyField = true;
                    break;
                }
            }
        }
        if (hasAnEmptyField === false) {
            draw = true;
        }

        return player2Won || player1Won || draw;
    }

    function validateIndices(row, col) {
        let result = '';
        if (row >= ticTakToeTable.length || row < 0) {
            result += 'Invalid row\n';
        }
        if (col >= ticTakToeTable[row].length || col < 0) {
            result += 'Invalid col';
        }

        return result;
    }

    function printResultOfGame() {
        if (player1Won) {
            console.log(`Player 1 won the game!`);
        } else if (player2Won) {
            console.log(`Player 2 won the game!`);
        } else if (draw) {
            console.log(`Unfortunately no one won the game`);
        }
    }

    function printTheTable() {
        for (let row of ticTakToeTable) {
            console.log(row.join('\t'));
        }
    }

    let ticTakToeTable =
        [[false, false, false],
            [false, false, false],
            [false, false, false]];

    let player1Won = false;
    let player2Won = false;
    let draw = false;
    let counter = 0;


    for (let i = 0; i < arrayOfPlaces.length; i++) {

        let symbol = '';
        if (counter % 2 === 0) {
            symbol = 'X';
        } else {
            symbol = 'O';
        }
        if (checkForWinnerOrDraw()) {
            printResultOfGame()
            printTheTable();
            return;
        }
        let command = arrayOfPlaces[i];
        let [row, col] = command.split(' ').map(x => Number(x));
        if (validateIndices(row, col).length > 0) {
            console.log(validateIndices(row, col));
            continue;
        }

        if (ticTakToeTable[row][col] !== false) {
            console.log('This place is already taken! Please choose other!');
            continue;
        }

        ticTakToeTable[row][col] = symbol;
        counter++;
    }
}

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 1",
    "1 2",
    "2 2",
    "2 1",
    "0 0"]

);
// Constraints: the elements in the input array will always be enough to end the game (win or draw)