import {useState, useEffect} from 'react'
import {Text, View, StyleSheet} from 'react-native'

import Title from '../components/Title'
import PrimaryButton from '../components/PrimaryButton'

function generateRandomBetween(min, max, exclude) {
  let rndNum = Math.floor(Math.random() * (max-min)) + min

  while(rndNum == exclude) {
     rndNum = Math.floor(Math.random() * (max-min)) + min
  }
  return rndNum
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({userNumber, onGameOver}) {

  const intialGuess = generateRandomBetween(minBoundary, maxBoundary, userNumber)
  const [currentGuess, setCurrentGuess] = useState(intialGuess)

  useEffect(() => {

    if(currentGuess == userNumber) {
      minBoundary = 1
      maxBoundary = 100
      onGameOver()
    }

  }, [currentGuess, userNumber, onGameOver])


  function nextGuessHandler(direction) {
    if(direction === 'lower') {
      maxBoundary = currentGuess 
    } else {
      minBoundary = currentGuess 
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNumber)
  }

  return(
  <View style={styles.container}>
    <Title>Opponent's Guess</Title>

    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{currentGuess}</Text>
    </View>

    <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'higher')}>+</PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 15
  },
  numberContainer: {
     borderWidth: 4,
     borderColor: 'yellow',
     padding: 24,
     margin: 20,
     borderRadius: 8,
     alignItems: 'center',
     justifyContent: 'center'
  },
  numberText: {
    color: 'yellow',
    fontSize: 36,
    fontWeight: 'bold'
    
  }
})

export default GameScreen
