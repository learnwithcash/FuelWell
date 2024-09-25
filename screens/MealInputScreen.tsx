// components/InputScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Padding, ScrollView, TouchableOpacity, Button, StyleSheet } from 'react-native';
import ItemRow from '../ItemRow';
import RNPickerSelect from 'react-native-picker-select';
import MealSummaryScreen from './MealSummaryScreen.tsx';
import {GlobalContext} from '../GlobalContext.tsx';

const MealInputScreen = ({route, navigation}) => {
    const [calories, setCalories] = useState(0);
    const [protein, setProtein] = useState(0);
    const [fat, setFat] = useState(0);
    const [satFat, setSatFat] = useState(0);
    const [carbs, setCarbs] = useState(0);
    const [sugar, setSugar] = useState(0);

    const {meal} = route.params;
    const {globalState, setGlobalState} = useContext(GlobalContext);

    const updateNutrition = (name, quantity) => {
            // Gets called from inside each itemRow with the selected name of food item and its quantity
            if(name in Ingredients){

                const newCal = (Ingredients[name]['calories']*quantity)/Ingredients[name]['unit'];
                const newProtein = (Ingredients[name]['protein']*quantity)/Ingredients[name]['unit'];
                const newFat = (Ingredients[name]['fat']*quantity)/Ingredients[name]['unit'];
                const newSatFat = (Ingredients[name]['satFat']*quantity)/Ingredients[name]['unit'];
                const newCarbs = (Ingredients[name]['carbs']*quantity)/Ingredients[name]['unit'];
                const newSugar = (Ingredients[name]['sugar']*quantity)/Ingredients[name]['unit'];

                setCalories((prevCalories) => prevCalories + newCal);
                setProtein((prevProtein) => prevProtein + newProtein);
                setFat((prevFat) => prevFat + newFat);
                setSatFat((prevSatFat) => prevSatFat + newSatFat);
                setCarbs((prevCarbs) => prevCarbs + newCarbs);
                setSugar((prevSugar) => prevSugar + newSugar);
            }
    }

    const onSubmit = () => {
        if(calories != 0){
            // Updating the calculated nutrition values to the GlobalProvider so that it can be read in the MealSummaryScreen
            setGlobalState((prevState) => ({
                ...prevState,
                [meal]: {
                     ...prevState[meal],
                     calories: calories,
                     protein: protein,
                     fat: fat,
                     satFat: satFat,
                     carbs: carbs,
                     sugar: sugar,
                },
                ['Overall']: {
                    ...prevState['Overall'],
                    calories: prevState['Overall'].calories - prevState[meal].calories + calories,
                    protein: prevState['Overall'].protein - prevState[meal].protein + protein,
                    fat: prevState['Overall'].fat - prevState[meal].fat + fat,
                    satFat: prevState['Overall'].satFat - prevState[meal].satFat + satFat,
                    carbs: prevState['Overall'].carbs - prevState[meal].carbs + carbs,
                    sugar: prevState['Overall'].sugar - prevState[meal].sugar + sugar,
                },
            }));
            navigation.replace("MealSummaryScreen", {label: meal});
        }
        // Navigating to the mealSummaryScreen
//         navigation.pop();

        }

    const [items, setItems] = useState([
        <ItemRow key = "1" title = {'Protein'} dropDownItems = {MacroItems.protein} updateParent = {updateNutrition}/>,
        <ItemRow key = "2" title = {'Carbs'} dropDownItems = {MacroItems.carb} updateParent = {updateNutrition}/>,
        <ItemRow key = "3" title = {'Oil/Milk'} dropDownItems = {MacroItems.fat} updateParent = {updateNutrition}/>,
        <ItemRow key = "4" title = {'Vegetables'} dropDownItems = {MacroItems.veg} updateParent = {updateNutrition}/>
      ]);

    const addItem = (itemObjectArray) => {
        const newItem = (
          <ItemRow
            key={(items.length + 1).toString()}
            title={'Food Item'}
            dropDownItems={itemObjectArray}
            updateParent = {updateNutrition}
          />
        );
        setItems([...items, newItem]);
      };

    return (
    <View style = {{flex: 1}}>
        <View style = {{flex: 0.06, backgroundColor: '#99ffff', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{fontSize: 24, fontWeight: 'bold'}}>{meal}</Text>
        </View>
        <View style = {{flex: 1, backgroundColor: '#ffeedd', paddingHorizontal: 20, rowGap: 5}}>
            <Text style = {{fontSize: 18, alignSelf: 'center', fontWeight: 'bold', padding: 20,}}>What did you have in {meal}?</Text>
            <ScrollView style = {{flex: 0.8, rowGap: 10}}>
                {items}
            </ScrollView>
        </View>
        <View style = {{flex: 0.06, backgroundColor: '#ddffff', padding: 10,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'
            }}>
            <TouchableOpacity style={styles.circularButton} onPress={() => addItem(MacroItems.food)}>
              <Text style={styles.buttonText}>Add Item</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.circularButton, {backgroundColor: calories>0 ? '#0088ff' : '#00ccff'}]} onPress={onSubmit}>
               <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
    };

const MacroItems = {
  protein: [
            { label: 'Paneer', value: 'Paneer'},
            { label: 'Chicken Breast', value: 'Chicken Breast'},
            { label: 'Eggs Boiled', value: 'Eggs Boiled'},
            { label: 'Eggs Fried', value: 'Eggs Fried'},
            { label: 'Soya Chunks', value: 'Soya Chunks'},
            { label: 'Dahi', value: 'Dahi'},
            { label: 'Almond', value: 'Almond'},
            { label: 'Peanuts', value: 'Peanuts'},
            { label: 'Moong Sprouts', value: 'Moong Sprouts'},
            { label: 'Chana Sprouts', value: 'Chana Sprouts'},
          ],
  carb:   [
            { label: 'Roti', value: 'Roti'},
            { label: 'Rice', value: 'Rice'},
            { label: 'Poha', value: 'Poha'},
            { label: 'Brown Bread', value: 'Brown Bread'},
            { label: 'Banana', value: 'Banana'},
          ],
  veg:   [
              { label: 'Peas', value: 'Peas'},
              { label: 'Gobhi', value: 'Gobhi'},
              { label: 'Cucumber', value: 'Cucumber'},
              { label: 'Onion', value: 'Onion'},
              { label: 'Tomato', value: 'Tomato'},
              { label: 'Potato', value: 'Potato'},
            ],
  fat:    [
            { label: 'Mustard Oil', value: 'Mustard Oil'},
            { label: 'Ghee', value: 'Ghee'},
            { label: 'Olive Oil', value: 'Olive Oil'},
            { label: 'Milk', value: 'Milk'},
          ],
  food:    [
            { label: 'Paneer', value: 'Paneer'},
            { label: 'Chicken Breast', value: 'Chicken Breast'},
            { label: 'Eggs Boiled', value: 'Eggs Boiled'},
            { label: 'Eggs Fried', value: 'Eggs Fried'},
            { label: 'Soya Chunks', value: 'Soya Chunks'},
            { label: 'Dahi', value: 'Dahi'},
            { label: 'Almond', value: 'Almond'},
            { label: 'Peanuts', value: 'Peanuts'},
            { label: 'Moong Sprouts', value: 'Moong Sprouts'},
            { label: 'Chana Sprouts', value: 'Chana Sprouts'},
            { label: 'Roti', value: 'Roti'},
            { label: 'Rice', value: 'Rice'},
            { label: 'Poha', value: 'Poha'},
            { label: 'Brown Bread', value: 'Brown Bread'},
            { label: 'Banana', value: 'Banana'},
            { label: 'Peas', value: 'Peas'},
              { label: 'Gobhi', value: 'Gobhi'},
              { label: 'Cucumber', value: 'Cucumber'},
              { label: 'Onion', value: 'Onion'},
              { label: 'Tomato', value: 'Tomato'},
              { label: 'Potato', value: 'Potato'},
              { label: 'Mustard Oil', value: 'Mustard Oil'},
              { label: 'Ghee', value: 'Ghee'},
              { label: 'Olive Oil', value: 'Olive Oil'},
              { label: 'Milk', value: 'Milk'},
          ]
};

const Ingredients = {

   // Protein Sources
   'Paneer': { calories: 320, unit: 100, protein: 22, fat: 24,
   satFat:17, carbs: 4, sugar: 1, isweight: true},

   'Chicken Breast': { calories: 165, unit: 100, protein: 31, fat: 3.6,
      satFat:1.1, carbs: 0, sugar: 0, isweight: true },

   'Eggs Boiled': { calories: 78, unit: 1, protein: 6, fat: 5,
      satFat:1.7, carbs: 1, sugar: 0, isweight: false },

   'Eggs Fried': { calories: 102, unit: 1, protein: 6, fat: 8,
      satFat:3, carbs: 1, sugar: 0, isweight: false },

   'Soya Chunks': { calories: 354, unit: 100, protein: 53, fat: 1.0,
      satFat:0.7, carbs: 34, sugar: 0, isweight: true },

   'Dahi': { calories: 62, unit: 100, protein: 4, fat: 3,
         satFat:2, carbs: 5, sugar: 0, isweight: true },

   'Almond': { calories: 576, unit: 100, protein: 21, fat: 49,
      satFat:4, carbs: 16, sugar: 0, isweight: true },

   'Peanuts': { calories: 567, unit: 100, protein: 26, fat: 61,
         satFat:8, carbs: 16, sugar: 0, isweight: true },

   'Moong Sprouts': { calories: 347, unit: 100, protein: 24, fat: 1.2,
     satFat:0.2, carbs: 63, sugar: 0, isweight: true },

  'Chana Sprouts': { calories: 360, unit: 100, protein: 19, fat: 6,
     satFat:1, carbs: 61, sugar: 0, isweight: true },

  // Carb Sources

  'Roti': { calories: 120, unit: 1, protein: 3, fat: 3.7,
   satFat:1.3, carbs: 18, sugar: 1, isweight: false },

  'Rice': { calories: 130, unit: 100, protein: 2.7, fat: 0.3,
   satFat:0.1, carbs: 28, sugar: 0, isweight: true },

   'Poha': { calories: 361, unit: 100, protein: 6, fat: 1.3,
      satFat:0.3, carbs: 81, sugar: 1, isweight: true },

   'Brown Bread': { calories: 61, unit: 1, protein: 3, fat: 0,
      satFat:0, carbs: 11, sugar: 1, isweight: false },

   'Banana': { calories: 105, unit: 1, protein: 1, fat: 0.4,
      satFat:0.1, carbs: 27, sugar: 12, isweight: false },


   // Vegetables

   'Peas': { calories: 84, unit: 100, protein: 7, fat: 0,
      satFat:0, carbs: 14, sugar: 5, isweight: true },

    'Gobhi': { calories: 146, unit: 1, protein: 11, fat: 2,
      satFat:0, carbs: 29, sugar: 11, isweight: false },

    'Cucumber': { calories: 30, unit: 1, protein: 3, fat: 0,
         satFat:0, carbs: 6, sugar: 2, isweight: false },

    'Onion': { calories: 40, unit: 1, protein: 1, fat: 0,
         satFat:0, carbs: 9, sugar: 4, isweight: false },

    'Tomato': { calories: 18, unit: 1, protein: 1, fat: 0,
         satFat:0, carbs: 4, sugar: 3, isweight: false },

    'Potato': { calories: 110, unit: 1, protein: 3, fat: 0,
             satFat:0, carbs: 26, sugar: 1, isweight: false },

   // Fat Source

   'Mustard Oil': { calories: 898, unit: 100, protein: 0, fat: 100,
   satFat:8, carbs: 0, sugar: 0, isweight: true },

   'Ghee': { calories: 899, unit: 100, protein: 0, fat: 100,
   satFat:71, carbs: 0, sugar: 0, isweight: true },

   'Olive Oil': { calories: 821, unit: 100, protein: 0, fat: 91,
      satFat:15, carbs: 0, sugar: 0, isweight: true },

   'Milk': { calories: 59, unit: 100, protein: 3, fat: 3,
         satFat:2, carbs: 5, sugar: 5, isweight: true },
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
      padding: 5, // Adjust for padding from the bottom
      alignSelf: 'center', // Center horizontally
      width: 150, // Diameter of 60 (2 * radius)
      height: 40, // Same as width to make it a circle
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
    fontSize: 16,// Custom font size
    fontWeight: 'bold'
  },
});


export default MealInputScreen;
