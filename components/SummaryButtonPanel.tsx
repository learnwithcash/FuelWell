// components/MealButton.js
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import MealInputScreen from './MealInputScreen';
import SummaryButton from './SummaryButton';


const SummaryButtonPanel = ({currentMeal, meals, preClickColor, postClickColor, newMealFunction}) => {
  // Consider meals = ['Breakfast', 'Lunch', 'Snack', 'Dinner', 'Overall']
  return (
    <View style = {{flex: 0.22, backgroundColor: '#ffeedd', paddingHorizontal: 10,
                    paddingVertical: 25, rowGap: 20, marginBottom: 50}}>
        <View style = {{flexDirection: 'row', columnGap: 20, alignSelf: 'center'}}>
            <SummaryButton currentMeal={currentMeal} myMeal={meals[0]} callback={newMealFunction}></SummaryButton>
            <SummaryButton currentMeal={currentMeal} myMeal={meals[1]} callback={newMealFunction}></SummaryButton>
        </View>
        <View style = {{flexDirection: 'row', columnGap: 20, alignSelf: 'center'}}>
            <SummaryButton currentMeal={currentMeal} myMeal={meals[2]} callback={newMealFunction}></SummaryButton>
            <SummaryButton currentMeal={currentMeal} myMeal={meals[3]} callback={newMealFunction}></SummaryButton>
        </View>
        <View style = {{flexDirection: 'row', columnGap: 20, alignSelf: 'center'}}>
            <SummaryButton currentMeal={currentMeal} myMeal={meals[4]} callback={newMealFunction}></SummaryButton>
        </View>
    </View>
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

export default SummaryButtonPanel;
