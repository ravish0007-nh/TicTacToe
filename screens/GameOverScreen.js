import {View, Text, StyleSheet, Button} from 'react-native'

function GameOverScreen({onReplay}) {

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Game Over</Text>
      <Button title='replay' onPress={onReplay} />
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop: 10
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})

export default GameOverScreen
