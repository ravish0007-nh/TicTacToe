import {useState} from 'react'
import {TextInput, Alert, View, StyleSheet} from 'react-native'

import PrimaryButton from '../components/PrimaryButton'

function StartGameScreen({onPickNumber}) {

  const [enteredNumber, setEnteredNumber] = useState('')

  const numberInputHandler = (text) => {
          setEnteredNumber(text)
  }

  const resetInputHandler = () => {
    setEnteredNumber('')
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber)  
    if( isNaN(chosenNumber) || (chosenNumber > 99) || chosenNumber <= 0) {
      Alert.alert(
        'Invalid Number!', 
        'Number has to be between 1 and 99',
        [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}]
      )
    }

    onPickNumber(chosenNumber)
  }

  return(
    <View style={styles.inputContainer}> 
    <TextInput 
        maxLength={2} 
        style={styles.numberInput} 
        placeholder='' 
        value={enteredNumber}
        onChangeText={numberInputHandler}
        keyboardType='number-pad'
        autoCapitalize="none"
        autoCorrect={false}
        />
      <View style={styles.buttonContainers}>
        <View style={styles.buttonContainer}>
         <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer} >
         <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen

const styles = StyleSheet.create({
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 34,
    backgroundColor: '#57cc99',
    borderRadius:  10,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 10
  },
  numberInput: {
    height: 50,
    width: 50,
    textAlign: 'center',
    fontSize: 25,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 3,
    color: '#ddb52f',
    marginVertical: 8,
    fontWeight: 'bold'
  },
  buttonContainers: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex:1, 
    marginHorizontal: 5
  }
})
