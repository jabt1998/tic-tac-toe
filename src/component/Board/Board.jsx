import React, { useState } from "react";
import styles from "./Board.module.scss";
import Square from "../Square";

const Board = (props) => {


  // const [boardSquares, setBoardSquares] = useState([Array(9).fill(null)])
// 
  // const [xIsNext, setXIsNext] = useState(true)
// 
  // const handleClick = (index) => {
//  
    // const squares = [...boardSquares];
// 
    // if(squares[index]) return;
// 
    // squares[index] = xIsNext ? "X" : "O";
// 
    // setBoardSquares(squares);
// 
    // setXIsNext(!xIsNext);
  // };
// 
  // const createSquare = (index) => {
    // return <Square value={squares[index]} onClick={() => handleClick(index)}/>
  // }

  // let status;

  // console.log(boardSquares)
  // console.log(xIsNext)

  // status = `Next player: ${xIsNext ? "X": "O"}`;



  // return (
  //   <section>
  //     <div >
  //       {createSquare(0)} {createSquare(1)} {createSquare(2)}
  //     </div> 
  //     <div>{createSquare(3)} {createSquare(4)} {createSquare(5)}</div>
  //     <div>{createSquare(6)} {createSquare(7)} {createSquare(8)}</div>
  //   </section>
  // );

  // return(
    // <Square />
  // )
};

export default Board;
