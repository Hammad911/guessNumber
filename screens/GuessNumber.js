import {Text,View,StyleSheet, Alert} from 'react-native'
import React from 'react'
import Title from '../components/Title'
import { useState , useEffect} from 'react';
import GuessContainer from '../components/GuessContainer';
import PropTypes from 'prop-types';
import PrimaryButton from '../components/PrimaryButton';
import ButtonContainer from '../components/ButtonContainer';
import LogsContainer from '../components/LogsContainer';


function generateRandomNumber(min,max,exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomNumber(min,max,exclude);
    }
    return rndNum;
}


let minBoundary =1
let maxBoundary = 100
function GuessNumber({userNumber,onGameOver}){
    const initialGuess = generateRandomNumber(1,100,userNumber);

const [guessNumber,setGuessNumber] = useState(initialGuess);
const [guessRounds,setGuessRounds] = useState([initialGuess]);




console.log(guessNumber)

useEffect(()=>{
    if(guessNumber === userNumber){
        onGameOver(guessRounds.length, guessRounds);
    }
},[guessNumber,userNumber,onGameOver, guessRounds]);


useEffect(()=>{
    minBoundary = 1;
    maxBoundary = 100;
},[])


function nextGuessHandler(direction){
    if((direction === 'lower' && guessNumber < userNumber) || (direction === 'higher' && guessNumber > userNumber)){
        Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text:'Sorry!', style:'cancel'}]);
        return;
    }

    if(direction === 'lower'){
        maxBoundary = guessNumber;
    }else{
        minBoundary = guessNumber + 1;
    }
    const newRndNumber = generateRandomNumber(minBoundary, maxBoundary, guessNumber);
    setGuessNumber(newRndNumber);
    setGuessRounds((prevGuessRounds)=>[newRndNumber,...prevGuessRounds]);
}

    return(
        <View style={styles.gameroot}>
            <Title>Guess My Number</Title>
            <GuessContainer>{guessNumber}</GuessContainer>
            <ButtonContainer>
                <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}>Lower</PrimaryButton>
                <PrimaryButton onPress={nextGuessHandler.bind(this,'higher')}>Higher</PrimaryButton>
            </ButtonContainer>
            <LogsContainer guessNumbers={guessRounds} />
        </View>
    )
}

GuessNumber.propTypes = {
    userNumber: PropTypes.number.isRequired,
    onGameOver: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    gameroot:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        padding:24,
    }
})

export default GuessNumber;