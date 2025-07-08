import {Text,StyleSheet} from 'react-native'
import React from 'react'
import PropTypes from 'prop-types';

function Title({children}){
    return(
        <Text style={styles.title}>
            {children}
        </Text>
    )
}


const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        alignSelf: 'center',
        borderWidth: 3,
        borderColor: '#ddb52f',
        padding: 12,
        marginHorizontal: 24,
        marginTop: 56,
        maxWidth: '80%',
        width: 300,
    }
})

Title.propTypes = {
    children: PropTypes.string.isRequired,
}

export default Title;