import {View, Text, Pressable, StyleSheet} from 'react-native'

function PrimaryButton({children, onPress}) {
  return(
    <View style={styles.outerContainer}>
      <Pressable 
        style={styles.innerContainer} 
        android_ripple={{color: '#C7F9CC'}}
        onPress={onPress}
      >
          <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PrimaryButton

const styles  = StyleSheet.create({
  outerContainer: {
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
    width: '100%'
  },
  innerContainer: {
    backgroundColor:  '#38a3a5',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  },
  pressed: {
    opacity: 0.5
  }
})
