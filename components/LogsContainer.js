import React from 'react';
import { View, Text, ScrollView } from "react-native";
import PropTypes from 'prop-types';
import { StyleSheet } from "react-native";


function LogsContainer({guessNumbers}){
    return(
        <View style={styles.container}>
            <Text style={styles.logsTitle}>Logs</Text>
            <View style={styles.scrollContainer}>
                
                <ScrollView >
                    {guessNumbers.map((guess,index)=>(
                        <Text  style={styles.textContainer} key={index}>{guess}</Text>
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

LogsContainer.propTypes = {
    guessNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        width: '100%',
    },
    textContainer:{
        borderRadius: 20,
        backgroundColor: '#ddb52f',
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 8,
        marginVertical: 4,
        marginHorizontal: 10,
        overflow: 'hidden',
        borderWidth: 2,
        borderColor: '#ddb82h',
    },
    scrollContainer: {
        maxHeight: 500,
        width: '100%',
        paddingHorizontal: 10,
    },
    logsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
        color: '#333',
    }
})

export default LogsContainer;