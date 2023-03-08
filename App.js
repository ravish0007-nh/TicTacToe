import {useState} from 'react'

import {
  StyleSheet,
  SafeAreaView,
  ImageBackground
} from 'react-native';

import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

function App() {

  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState(true)

  function pickedNumber(number) {
    setUserNumber(number)
    setGameIsOver(false)
  }

  function gameOverHandler() {
    setGameIsOver(true)
  }

  function replay(){
    setUserNumber()
  }

  let screen = <StartGameScreen onPickNumber={pickedNumber} />

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen onReplay={replay} />
  }


  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground 
        style={styles.container} 
        source={require('./assets/image.jpg')} 
        resizeMode='cover'
        imageStyle={{opacity: 0.26}}
      >
      {screen}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ddb52f',
    flex: 1
  }
});

export default App;
