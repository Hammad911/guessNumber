import React from "react";
import { View, Text , StyleSheet,Image, ScrollView } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import PropTypes from 'prop-types';

function GameOver({ guessCount, userNumber, onStartNewGame }){
    return (
        <View style={styles.rootContainer}>
           <Title>Game Over!</Title>
<View style = {styles.imageContainer}>
<Image source={require("../assets/images/sasha-matic-POKVzE1RWJ0-unsplash.jpg")} style={styles.image}/>
</View>
<Text style = {styles.textSummary}>
    Your phone needed <Text style = {styles.highlight}>{guessCount}</Text> rounds to guess the number <Text style = {styles.highlight}>{userNumber}</Text>.
</Text>


<PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

GameOver.propTypes = {
  guessCount: PropTypes.number.isRequired,
  userNumber: PropTypes.number.isRequired,
 
  onStartNewGame: PropTypes.func.isRequired,
}

const styles = StyleSheet.create({
    rootContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
imageContainer:{
borderRadius: 150,
width: 300,
height: 300,
borderWidth: 3,
borderColor: '#ddb52f',
overflow: 'hidden',
margin: 36,
    },
    image:{
        width:'100%',
        height:'100%',
    }   ,
    textSummary:{
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    }   ,
    highlight:{
        fontFamily: 'open-sans-bold',
        color: '#ddb52f',
    },
    guessItem: {
      fontSize: 18,
      textAlign: 'center',
      marginVertical: 2,
    }
})

export default GameOver;

