import React, {useReducer, useState} from "react";
import "./GBstyles.css";

function GameBoard(props) {

    const [questionKey, setQuestionKey] = useState();
    const [location, setLocation] = useState();
    const [config, setConfig] = useState();
    const [properties, setProperties] = useState();


    const initialBoard = config.map;

    const [board, setBoard] = useState(initialBoard);
    const [inputOne, setInputOne] = useState("");
    const [inputTwo, setInputTwo] = useState("");
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);
    let gameOver = false;
    let i = 500;
    let firstRobotInitialPosition;
    let secondRobotInitialPosition;
    let isFirstFinished = false
    let isSecondFinished = false

    const [finishedGame, setFinishedGame] = useState(false);

    function handleInputOne(e) {
        setInputOne(e.target.value);
    }

    function handleInputTwo(e) {
        setInputTwo(e.target.value);
    }

    function startGame() {
        firstRobotInitialPosition = najitPoziciPrvku(board, 2);
        secondRobotInitialPosition = najitPoziciPrvku(board, 3)
        moveRobots();
    }

    function najitPoziciPrvku(dvourozmernyPole, hledanyPrvek) {
        for (let i = 0; i < dvourozmernyPole.length; i++) {
            for (let j = 0; j < dvourozmernyPole[i].length; j++) {
                if (dvourozmernyPole[i][j] === hledanyPrvek) {
                    return {radek: i, sloupec: j};
                }
            }
        }
        return null; // Prvek nebyl nalezen
    }

    function moveRobots() {
        const firstPath = inputOne.toUpperCase().split('')
        const secondPath = inputTwo.toUpperCase().split('')
        moveRobot(firstPath, 2)
        moveRobot(secondPath, 3)
        const timeoutTime =  secondPath.length > firstPath.length ? secondPath.length : firstPath.length
        setTimeout(() => {
            answer();
        }, i * timeoutTime +500)

    }

    function moveRobot(path, numOfRobot) {
        const opositeRobot = numOfRobot === 2 ? 3 : 2;
        const opositeRobotStartingPosition = numOfRobot === 2 ? secondRobotInitialPosition : firstRobotInitialPosition
        let x = 0;
        path.forEach(value => {
            switch (value) {
                case 'V':
                    x++;
                    setTimeout(() => {
                        const position = najitPoziciPrvku(board, numOfRobot)
                        if (board[position.radek][position.sloupec + 1] !== 0 || board[position.radek][position.sloupec + 1] == opositeRobot || gameOver) {
                            alert("GameOver");
                            gameOver = true
                        }
                        else {
                            const newBoard = board
                            newBoard[position.radek][position.sloupec] = 0
                            newBoard[position.radek][position.sloupec + 1] = numOfRobot
                            setBoard(newBoard)
                            forceUpdate()
                            const currentPosition = najitPoziciPrvku(board, numOfRobot)
                            if(currentPosition.radek === opositeRobotStartingPosition.radek && currentPosition.sloupec === opositeRobotStartingPosition.sloupec){
                                numOfRobot ===2 ? isFirstFinished = true : isSecondFinished = true
                            }else{
                                numOfRobot ===2 ? isFirstFinished = false : isSecondFinished = false
                            }
                        }

                    }, i * x)

                    break;
                case 'Z':
                    x++;
                    setTimeout(() => {
                        const position = najitPoziciPrvku(board, numOfRobot)
                        if (board[position.radek][position.sloupec - 1] !== 0 || board[position.radek][position.sloupec - 1] == opositeRobot || gameOver) {
                            alert("GameOver");
                            gameOver = true
                        } else {
                            const newBoard = board
                            newBoard[position.radek][position.sloupec] = 0
                            newBoard[position.radek][position.sloupec - 1] = numOfRobot
                            setBoard(newBoard)
                            forceUpdate()
                            const currentPosition = najitPoziciPrvku(board, numOfRobot)
                            if(currentPosition.radek === opositeRobotStartingPosition.radek && currentPosition.sloupec === opositeRobotStartingPosition.sloupec){
                                numOfRobot ===2 ? isFirstFinished = true : isSecondFinished = true
                            }else{
                                numOfRobot ===2 ? isFirstFinished = false : isSecondFinished = false
                            }
                        }

                    }, i * x)

                    break;
                case 'J':
                    x++;
                    setTimeout(() => {
                        const position = najitPoziciPrvku(board, numOfRobot)
                        if (board[position.radek + 1][position.sloupec] !== 0 || board[position.radek + 1][position.sloupec] == opositeRobot || gameOver) {
                            alert("GameOver");
                            gameOver = true
                        } else {
                            const newBoard = board
                            newBoard[position.radek][position.sloupec] = 0
                            newBoard[position.radek + 1][position.sloupec] = numOfRobot
                            setBoard(newBoard)
                            forceUpdate()
                            const currentPosition = najitPoziciPrvku(board, numOfRobot)
                            if(currentPosition.radek === opositeRobotStartingPosition.radek && currentPosition.sloupec === opositeRobotStartingPosition.sloupec){
                                numOfRobot ===2 ? isFirstFinished = true : isSecondFinished = true
                            }else{
                                numOfRobot ===2 ? isFirstFinished = false : isSecondFinished = false
                            }
                        }

                    }, i * x)

                    break;
                case 'S':
                    x++;
                    setTimeout(() => {
                        const position = najitPoziciPrvku(board, numOfRobot)
                        if (board[position.radek - 1][position.sloupec] !== 0 || board[position.radek - 1][position.sloupec] == opositeRobot || gameOver) {
                            alert("GameOver");
                            gameOver = true
                        } else {
                            const newBoard = board
                            newBoard[position.radek][position.sloupec] = 0
                            newBoard[position.radek - 1][position.sloupec] = numOfRobot
                            setBoard(newBoard)
                            forceUpdate()
                            const currentPosition = najitPoziciPrvku(board, numOfRobot)
                            if(currentPosition.radek === opositeRobotStartingPosition.radek && currentPosition.sloupec === opositeRobotStartingPosition.sloupec){
                                numOfRobot ===2 ? isFirstFinished = true : isSecondFinished = true
                            }else{
                                numOfRobot ===2 ? isFirstFinished = false : isSecondFinished = false
                            }
                        }

                    }, i * x)

                    break;
            }
        })
    }
    
    function answer() {
        if (isFirstFinished === true && isSecondFinished === true){
            console.log(true)
            setFinishedGame(true);
            return(true);
        } else {
            console.log(false)
            setFinishedGame(false);
            return(false);
        }
    }


    return (
        <div className="game-board">
            <div>
                <label>Robot 1 </label>
                <input type={"text"} onChange={handleInputOne}/>
            </div>
            <div>
                <label>Robot 2 </label>
                <input type={"text"} onChange={handleInputTwo}/>
            </div>
            <div>
                <button type={"submit"} onClick={startGame}>Zahájit hru</button>
                <button type={"submit"} onClick={answer}>Další otázka</button>
            </div>
            <div>
                {board.map((row, rowIndex) => (
                    <div className="board-row" key={rowIndex}>
                        {row.map((col, colIndex) => (
                            <div
                                className={`square ${col === 0 ? 'white' : col === 1 ? 'gray' : col === 2 ? 'green' : 'red'}`}
                                key={`${rowIndex}-${colIndex}`}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GameBoard;