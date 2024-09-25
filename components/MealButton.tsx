// components/MealButton.js
import React , {useContext} from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import MealSummaryScreen from '../screens/MealSummaryScreen.tsx';
import { GlobalContext } from '../GlobalContext.tsx';


const MealButton = ({label, navigation}) => {
  const {globalState, setGlobalState} = useContext(GlobalContext);
  const calPos = (globalState[label].calories > 0);
  const handlePress = (label) => {
    // First check if the label has any data already filled. If globalContext.label.calories > 0, we move to MealSummaryScreen
        // Code to move to MealSummaryScreen here!
        if(calPos){
            navigation.navigate('MealSummaryScreen',{label: label});
        }
    // Else, navigate to MealInputScreen
        else{
            navigation.navigate('MealInputScreen', { meal: label });
        }
  };
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: '#0088ff'}]} // Default to green
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
    width: 120,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default MealButton;
