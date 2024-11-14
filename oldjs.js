let turn = (Math.random() < 0.5) ? "X" : "O";
        console.log(turn + "turn");

        function entry(button) {
            if (button.value === "") {
                button.value = turn;
                const winner = checkWin();
                if (winner) {
                    alert(winner + " wins!");
                    resetGame();
                } else {
                    turn = (turn === "X") ? "O" : "X";
                    console.log(turn + " turn");
                }
            }
        }

        function checkWin() {
            const winningCombinations = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9], // rows
                [1, 4, 7],
                [2, 5, 8],
                [3, 6, 9], // columns
                [1, 5, 9],
                [3, 5, 7]  // diagonals
            ];
            
            for (let combination of winningCombinations) {
                const [a, b, c] = combination;
                if (
                    document.getElementById(a).value &&
                    document.getElementById(a).value === document.getElementById(b).value &&
                    document.getElementById(b).value === document.getElementById(c).value
                ) {
                    return document.getElementById(a).value;
                }
            }
            return null;
        }

        function resetGame() {
            for (let i = 1; i <= 9; i++) {
                document.getElementById(i).value = "";
            }
            turn = (Math.random() < 0.5) ? "X" : "O";
            console.log(turn + " turn");
        }