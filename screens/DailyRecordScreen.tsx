// components/InputScreen.js
import React, {useContext} from 'react';
import {useState} from 'react';
import { View, Text, TextInput, Padding, ScrollView, TouchableOpacity, Button, StyleSheet } from 'react-native';
import ItemRow from '../ItemRow';
import SummaryButtonPanel from '../components/SummaryButtonPanel';
import RNPickerSelect from 'react-native-picker-select';
import SummaryIcon from '../components/SummaryIcon.tsx';
import {GlobalContext} from '../GlobalContext.tsx';

const DailyRecordScreen = ({route, navigation}) => {
    const {label} = route.params;
    const meals = ['Breakfast', 'Lunch', 'Snack', 'Dinner', 'Overall'];
    const [meal, setMeal] = useState(label);
    const {globalState, setGlobalState} = useContext(GlobalContext);
    const calories = Math.round(globalState[meal].calories);
    const protein = Math.round(globalState[meal].protein);
    const fat = Math.round(globalState[meal].fat);
    const satFat = Math.round(globalState[meal].satFat);
    const carbs = Math.round(globalState[meal].carbs);
    const sugar = Math.round(globalState[meal].sugar);

    const checkNewMeal = (mealName) => {
        setMeal(mealName);
    }

    return (
    <View style = {{flex: 1, backgroundColor: '#ffeedd'}}>
        <View style = {{flex: 0.06, backgroundColor: '#99ffff', justifyContent: 'center',
                        alignItems: 'center',}}>
             <Text style = {{fontSize: 22, fontWeight: 'bold'}}>Today's Summary</Text>
        </View>
        <SummaryButtonPanel currentMeal={meal} meals={meals} preClickColor='#00ccff'
                postClickColor='#0088ff' newMealFunction={checkNewMeal}></SummaryButtonPanel>
        <View style = {{flex: 0.54, rowGap: 10, padding: 5, backgroundColor: '#faeeda', elevation: 5, marginHorizontal: 30,}}>
            <View style = {{flex: 1, flexDirection: 'row', columnGap: 20,
                justifyContent: 'space-evenly', alignItems: 'center', padding: 10,}}>
                <SummaryIcon label = 'Calories' data = {calories}/>
                <SummaryIcon label = 'Protein' data = {protein}/>
            </View>
            <View style = {{flex: 1, flexDirection: 'row', columnGap: 40,
                justifyContent: 'space-evenly', alignItems: 'center', padding: 10,}}>
                <SummaryIcon label = 'Carbs' data = {carbs}/>
                <SummaryIcon label = 'Fat' data = {fat}/>
            </View>
            <View style = {{flex: 1, flexDirection: 'row', columnGap: 40,
                justifyContent: 'space-evenly', alignItems: 'center', padding: 10,}}>
                <SummaryIcon label = 'Sat. Fat' data = {satFat}/>
                <SummaryIcon label = 'Sugar' data = {sugar}/>
            </View>
        </View>
    </View>
    );
    };

const styles = StyleSheet.create({
  itemRowStyle: {
    height: 80,
    backgroundColor: '#aaffff',
    padding: 10,
    flexDirection: 'row',
    columnGap: 10,
    justifyContent: 'space-evenly'
  },
  bigContainer: {
    flex: 1,
    padding: 60,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
  },
  subtitleText: {
    flex: 1,
    color: '#0077CC',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0099CC', // Custom background color
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 8, // Rounded corners
  },
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
  buttonContainer: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },
  itemRows: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  container: {
    flex: 4,
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#fff', // Custom text color
    fontSize: 18,// Custom font size
    fontWeight: 'bold'
  },
});

export default DailyRecordScreen;

// <View style = {{flex: 0.22, backgroundColor: '#ffeedd', paddingHorizontal: 10,
//                         paddingVertical: 25, rowGap: 20, marginBottom: 50}}>
//             <View style = {{flexDirection: 'row', columnGap: 20, alignSelf: 'center'}}>
//                 <TouchableOpacity style={[styles.circularButton, {backgroundColor: meal == 'Breakfast' ? '#0088ff' : '#00ccff'}]} onPress={() => checkNewMeal('Breakfast')}>
//                   <Text style={styles.buttonText}>Breakfast</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[styles.circularButton, {backgroundColor: meal == 'Lunch' ? '#0088ff' : '#00ccff'}]} onPress={() => checkNewMeal('Lunch')}>
//                   <Text style={styles.buttonText}>Lunch</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style = {{flexDirection: 'row', columnGap: 20, alignSelf: 'center'}}>
//                 <TouchableOpacity style={[styles.circularButton, {backgroundColor: meal == 'Snack' ? '#0088ff' : '#00ccff'}]} onPress={() => checkNewMeal('Snack')}>
//                   <Text style={styles.buttonText}>Snack</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={[styles.circularButton, {backgroundColor: meal == 'Dinner' ? '#0088ff' : '#00ccff'}]} onPress={() => checkNewMeal('Dinner')}>
//                   <Text style={styles.buttonText}>Dinner</Text>
//                 </TouchableOpacity>
//             </View>
//             <View style = {{flexDirection: 'row', columnGap: 20, alignSelf: 'center'}}>
//                 <TouchableOpacity style={[styles.circularButton, {backgroundColor: meal == 'Overall' ? '#0088ff' : '#00ccff'}]} onPress={() => checkNewMeal('Overall')}>
//                   <Text style={styles.buttonText}>Overall</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
