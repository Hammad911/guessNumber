import {View,Text, TextInput,StyleSheet, ImageBackground,Alert} from 'react-native'
import React, { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { LinearGradient } from 'expo-linear-gradient';
import PropTypes from 'prop-types';
import ButtonContainer from '../components/ButtonContainer';

function StartGameScreen({onPickNumber}){
const [enteredNumber,setEnteredNumber] = useState('')

function numberInputHandler(enteredText){
    setEnteredNumber(enteredText)
}

function resetInputHandler(){
    setEnteredNumber('')
}

function confirmInputHandler(){

const number = parseInt(enteredNumber)

if (isNaN(number) || number<=0|| number>99){
    Alert.alert('Invalid Number!', 'Number should be between 1 and 99', [{text:'Okay', style:'destructive', onPress:resetInputHandler}])
    return;
}

onPickNumber(number)

}

return(
    <View style={styles.rootContainer}>
        <Text style={styles.title}> Game</Text>
        <TextInput style= {styles.numberInput} maxLength={2}
            keyboardType="number-pad"
            autoCorrect= {false}
            autoCapitalize="none"
            placeholder="Enter "
            placeholderTextColor="#fff9"
            value={enteredNumber}
            onChangeText={numberInputHandler} 
        />
        <ButtonContainer>
            <View style={styles.buttonsContainer}>
                <View style={styles.button}>
                    <PrimaryButton onPress={()=>resetInputHandler()}>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </ButtonContainer>
    </View>
)
}

StartGameScreen.propTypes = {
    onPickNumber: PropTypes.func.isRequired,
}


const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    title: {
        fontSize: 28,
        color: '#fff',
        fontWeight: 'bold',
        marginBottom: 16,
        letterSpacing: 1.2,
    },
    numberInput:{
        fontWeight:"bold",
        borderBottomWidth: 2,
        color: "#ddb52f",
        fontSize: 28,
       marginVertical:8,
        textAlign: "center",
        marginVertical: 8,
        height: 55,
        fontFamily: "open-sans-bold",
        borderBottomColor: "#72063c",
        width: 150,
    },
    buttonsContainer:{
        flexDirection: 'row',
        marginTop: 24,

    },
    buttonContainer:{
        flex: 1,
    },
    button: {
        flex: 1,
        marginHorizontal: 4,
    },
})
export default StartGameScreen;