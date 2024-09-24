// components/MealButton.js

import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MealInputScreen from './MealInputScreen';


const MealButton = ({label, navigation}) => {
  const handlePress = (label) => {
    // Alert.alert(`Button ${label} pressed`);
    // console.log(label + ' Button pressed!');
    navigation.navigate('MealInputScreen', { meal: label });
  };
  return (
    <TouchableOpacity
      style={styles.button} // Default to green
      onPress={() => handlePress(label)} // Pass the label when pressed
    >
      <Text style={styles.buttonText}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#0099CC', // Custom background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    alignItems: 'center',
//     height: 50,
    borderRadius: 8, // Rounded corners
  },
  buttonText: {
    color: '#fff', // Custom text color
    fontSize: 20, // Custom font size
  },
});

export default MealButton;
