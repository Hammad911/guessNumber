import { View, Text,Pressable,StyleSheet } from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import { Colors } from 'react-native/Libraries/NewAppScreen';


function PrimaryButton({ children,onPress }) {
  return (
    <View style={styles.buttonOuterContainer}  >
    <Pressable onPress={onPress} style={(pressed)=>pressed?[styles.pressed,styles.buttonInnerContainer]:styles.buttonInnerContainer} android_ripple={{color: '#809899'}} >
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
    </View>
  );
}
PrimaryButton.propTypes = {
    children: PropTypes.node.isRequired,
    onPress: PropTypes.func.isRequired,
  };


const styles = StyleSheet.create({
  buttonOuterContainer:{
    margin: 4,
    borderRadius: 28,
    overflow: 'hidden',
    minWidth: 120,
    alignSelf: 'center',
  },
  buttonInnerContainer:{
    backgroundColor: '#787799',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.25,
    paddingHorizontal: 16,
  },
  buttonText:{
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  pressed:{
    opacity: 0.75,
  }
})

export default PrimaryButton;
