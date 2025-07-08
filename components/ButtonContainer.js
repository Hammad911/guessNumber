import { View,StyleSheet } from "react-native";
import PropTypes from 'prop-types';
import React from "react";  

function ButtonContainer({children}){
    return(
        <View style= {styles.inputContainer}>
            {children}
        </View>
    )
}

ButtonContainer.propTypes = {
    children: PropTypes.node.isRequired,
}

const styles = StyleSheet.create({
    inputContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 32,
        padding: 16,
        marginHorizontal: 24,
        borderRadius: 16,
        elevation: 12,
        backgroundColor: 'rgba(0,0,0,0.45)',
        flexDirection: 'row',
        gap: 12,
    },
})



export default ButtonContainer;