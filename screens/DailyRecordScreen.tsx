// components/InputScreen.js
import React, {useContext} from 'react';
import {useState, useEffect} from 'react';
import { View, Text, TextInput, Padding, ScrollView, TouchableOpacity, Button, StyleSheet } from 'react-native';
import ItemRow from '../ItemRow';
import SummaryButtonPanel from '../components/SummaryButtonPanel';
import RNPickerSelect from 'react-native-picker-select';
import SummaryIcon from '../components/SummaryIcon.tsx';
import {GlobalContext, currentDate} from '../App.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DailyRecordScreen = ({route, navigation}) => {
    const {label, date} = route.params;
    const todayDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
    let displayDate = 'Today';
    const meals = ['Breakfast', 'Lunch', 'Snack', 'Dinner', 'Overall'];
    const [meal, setMeal] = useState(label);
    const [historicalDateObject, setHistoricalDateObject] = useState(null);
    const {globalState, setGlobalState} = useContext(GlobalContext);
    let calories = 0, protein = 0, fat = 0, satFat = 0, carbs = 0, sugar = 0;
    if(date == todayDate){
        // Key is currentDate, so we update from globalState
        calories = Math.round(globalState[meal].calories);
        protein = Math.round(globalState[meal].protein);
        fat = Math.round(globalState[meal].fat);
        satFat = Math.round(globalState[meal].satFat);
        carbs = Math.round(globalState[meal].carbs);
        sugar = Math.round(globalState[meal].sugar);
    }
    else{
       displayDate = date;
        // Key is not today's date, so need to find data for key date.
       useEffect(() => {
           const setDataFromHistory = async () => {
               const jsonValue = await AsyncStorage.getItem(date);
               if (jsonValue) {
                   setHistoricalDateObject(JSON.parse(jsonValue));
               }
           };
           setDataFromHistory();
       }, [date]);  // Re-run when `date` changes

       if (!historicalDateObject) {
//            console.log('Historical Data Not found!');
       }
       if(historicalDateObject != null){
        calories = Math.round(historicalDateObject[meal].calories);
        protein = Math.round(historicalDateObject[meal].protein);
        fat = Math.round(historicalDateObject[meal].fat);
        satFat = Math.round(historicalDateObject[meal].satFat);
        carbs = Math.round(historicalDateObject[meal].carbs);
        sugar = Math.round(historicalDateObject[meal].sugar);
       }
    }

    const checkNewMeal = (mealName) => {
        setMeal(mealName);
    }

    return (
    <View style = {{flex: 1, backgroundColor: '#ffeedd'}}>
        <View style = {{flex: 0.06, backgroundColor: '#99ffff', justifyContent: 'center',
                        alignItems: 'center',}}>
             <Text style = {{fontSize: 22, fontWeight: 'bold'}}>{displayDate}</Text>
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
