import {useState} from 'react'
import {StyleSheet, Button, View} from 'react-native'

import Square from '../components/Square'
import Title from '../components/Title'

function Board() {

  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function reset() {
    setXIsNext(true)
    setSquares(Array(9).fill(null))
  }


  function handleClick(i) {

    if (squares[i] || calculateWinner(squares)) {
      return;
    }
    const nextSquares = squares.slice();

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }


  const winner = calculateWinner(squares);
  let status
  let gameOver = false

  if (winner) {
    status = "Winner: " + winner;
    gameOver = true
  } else if(squares.every(x => x)){
    status = "Draw"
    gameOver = true
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  return(
    <View style={styles.boardContainer}>
      <Title>{status}</Title>
      { 
        [0,3,6].map(i => {
          return(
          <View key={i} style={styles.boardRow}>
            {[0, 1, 2].map(j => <Square key={i+j} value={squares[i+j]} onSquareClick={() => handleClick(i+j)} />)}
          </View>
          )
        })
      }

      {(gameOver &&
      <View style={styles.reset}>
        <Button title='Reset' onPress={reset}/>
      </View>
      )}
    </View>
  )
}

export default Board

const styles = StyleSheet.create({
  boardContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50
  },
  boardRow: {
    flexDirection: 'row'
  },
  reset: {
    marginTop: 100
  }
})

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
