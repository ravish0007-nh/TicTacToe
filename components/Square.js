import {View, Text, Pressable, StyleSheet} from 'react-native'

function Square({ value, onSquareClick }) {
  return (

    <Pressable className="square" onPress={onSquareClick}>
      <View style={styles.square}>
          <Text style={styles.text}>{value}</Text>
      </View>
    </Pressable>
  );
}

export default Square

const styles = StyleSheet.create({
  square: {
    borderWidth: 2,
    borderColor: 'white',
    padding: 28,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 37,
    fontWeight:  '500'
  }
})
