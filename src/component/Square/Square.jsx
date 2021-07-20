import React from "react";
import styles from "./Square.module.scss";
import { useState } from 'react';

const Square = (props) => {

  // const { onclick, value } = props

  // const [value, setValue] = useState(null)

  // const handleValue = () => {
    // if(value === null ) {
      // return setValue("X")
    // } else if( value === "X") {
      // return setValue("O")
    // } else if(value === "O") {
      // return setValue("X")
    // }
  // }
// 
  // const createSquare = () => {
    // return <button onClick={() => handleValue()}>{value}</button>
  // }
  const [boardSquares, setBoardSquares] = useState(Array(9).fill(null))
  console.log(boardSquares)
  const [xIsNext, setXIsNext] = useState(true)

  const [reset, setReset] = useState("Click to reset game")
  
  console.log(boardSquares)



  const handleTheClick = (index) => {
     console.log(index)
    
    let squares = boardSquares

    console.log(squares)

    if(squares[index]) return

    let newValue = squares[index] = xIsNext ? "X" : "O";

    setXIsNext(!xIsNext)

    setBoardSquares(squares)

    console.log(squares)
    console.log(newValue)
    
    setReset("Click to reset game")
   

  }

  
  const calclulateWinner = (squares) => {

    let winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for( let i = 0; i < winCondition.length; i++) {
    const [a, b, c] = winCondition[i]
    if( squares[a] && squares[a] === squares[b] && squares[b] === squares[c]) {
      return squares[a]
    }
  }
  return null
}


  let status = null;

  const winner = calclulateWinner(boardSquares);

  status = winner ? `Winner is ${winner}`: `Next Player: ${xIsNext ? "X" : "O"}`;



  // const handleTheClick = (index) => {
    // boardSquares[index] = xIsNext ? "X" : "O"
// 
    // console.log(boardSquares)
// 
  // }

  // const handleClick = (index) => {
//  
    // const squares = [...boardSquares];
// 
    // console.log(squares)
// 
    // if(squares[index]) return;
// 
    // console.log(squares)
// 
    // squares[index] = xIsNext ? "X" : "O";
// 
    // console.log(squares)
// 
    // setBoardSquares(squares);
// 
    // console.log(squares)
// 
    // setXIsNext(!xIsNext);
  // };


  const createSquare = (index) => {
    return <button className={styles.theButton} onClick={ () => handleTheClick(index)}>{boardSquares[index]}</button>
  }

  const resetGame = () => {
    boardSquares.splice(0, boardSquares.length)
    console.log(boardSquares)
   
    boardSquares.fill(null, 9)
    console.log(boardSquares)

    setReset("Click on a square to start new game")
    
    
  }
console.log(boardSquares)
  return (
    <section>
      <nav className={styles.navbar}>
    <div>
      <h2 className={styles.status}>{status}</h2>
    </div>    
    <div className={styles.resetGroup}>
    <h2 className={styles.theReset}>
        {reset}
    </h2>
      <button className={styles.resetButton} onClick={() => resetGame()}>Reset</button>
    </div>
    </nav>
    <section className={styles.board}>
  <div className={styles.row}>
    {createSquare(0)} {createSquare(1)} {createSquare(2)} 
  </div>
  <div className={styles.row}>
    {createSquare(3)} {createSquare(4)} {createSquare(5)} 
  </div>
  <div className={styles.row}>
    {createSquare(6)} {createSquare(7)} {createSquare(8)} 
  </div>
  </section>

  </section>

    
);
  };

export default Square;
