import { StyleSheet ,View,ImageBackground,SafeAreaView} from 'react-native';
import React from 'react';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import GuessNumber from './screens/GuessNumber';
import { useState } from 'react';
import GameOver from './screens/GameOver';



export default function App() {

const [userNumber, setUserNumber] = useState(null);
const [gameIsOver, setGameIsOver] = useState(true)
const [guessCount,setGuessCount] = useState(0)
const [guessNumbers, setGuessNumbers] = useState([])


  function startNewGameHandler(){
    setUserNumber(null)
    setGuessCount(0)
    setGuessNumbers([])
  }

function pickedNumberHandler(pickedNumber){
  setUserNumber(pickedNumber);
  setGameIsOver(false)
}
function gameOverHandler(guessCount, guessNumbersArr){
  setGameIsOver(true)
  setGuessCount(guessCount)
  setGuessNumbers(guessNumbersArr)
}

let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />
if(userNumber){
  screen = <GuessNumber userNumber={userNumber} onGameOver={gameOverHandler} />
}
if(gameIsOver && userNumber)
{
  screen = <GameOver guessCount={guessCount} userNumber={userNumber} guessNumbers={guessNumbers} onStartNewGame={startNewGameHandler} />
}


  return (
    <ImageBackground source={require('./assets/images/riho-kroll-m4sGYaHYN5o-unsplash.jpg')} resizeMode="cover" style={{flex:1}} imageStyle={{opacity:0.7}}>
      <LinearGradient colors={["rgba(123, 67, 151, 0.7)", "rgba(255, 107, 107, 0.6)"]} style={{flex:1, justifyContent:'center'}}>
   <SafeAreaView style= {styles.rootContainer}>
    {screen}
</SafeAreaView>
</LinearGradient>
</ImageBackground>
   
  );
}

const styles = StyleSheet.create({
rootContainer:{
  flex:1,

}
});
