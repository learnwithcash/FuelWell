// components/MealButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MealInputScreen from './MealInputScreen';


const SummaryButton = ({currentMeal, myMeal, callback}) => {
  return (
    <TouchableOpacity style={[styles.circularButton, {backgroundColor: currentMeal == myMeal ? '#0088ff' : '#00ccff'}]} onPress={() => callback(myMeal)}>
       <Text style={styles.buttonText}>{myMeal}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circularButton: {
        padding: 10, // Adjust for padding from the bottom
        alignSelf: 'center', // Center horizontally
        width: 150, // Diameter of 60 (2 * radius)
        height: 50, // Same as width to make it a circle
        borderRadius: 20, // Half of width/height for circular shape
        backgroundColor: '#0088ff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Adds shadow for Android
    },
    buttonText: {
      color: '#fff', // Custom text color
      fontSize: 18,// Custom font size
      fontWeight: 'bold'
    },
});

export default SummaryButton;
