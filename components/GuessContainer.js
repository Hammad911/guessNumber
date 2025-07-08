import {View,Text,StyleSheet} from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';


function GuessContainer({children}){
return(
    <View style={styles.container}> 
        <Text style={styles.numberText}>
            {children}
        </Text>
    </View>
)
}

GuessContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

const styles = StyleSheet.create({
    container:{
        borderWidth: 4,
        borderColor: '#ddb52f',
        padding: 24,
        borderRadius: 8,
        marginVertical: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText:{
        color: '#ddb52f',
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})

export default GuessContainer;  