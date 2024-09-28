// components/InputScreen.js
import React, {useContext} from 'react';
import { View, Text, TextInput, Padding, ScrollView, TouchableOpacity, Button, StyleSheet } from 'react-native';
import ItemRow from '../ItemRow';
import RNPickerSelect from 'react-native-picker-select';
import DailyRecordScreen from './screens/DailyRecordScreen';
import SummaryIcon from '../components/SummaryIcon.tsx';
import {GlobalContext, currentDate} from '../App.tsx';

const MealSummaryScreen = ({route, navigation}) => {
    const {label, date} = route.params;
    const {globalState, setGlobalState} = useContext(GlobalContext);
    const calories = Math.round(globalState[label].calories);
    const protein = Math.round(globalState[label].protein);
    const fat = Math.round(globalState[label].fat);
    const satFat = Math.round(globalState[label].satFat);
    const carbs = Math.round(globalState[label].carbs);
    const sugar = Math.round(globalState[label].sugar);

    const onSubmit = () => {
        navigation.replace("DailyRecordScreen",
            {label: label, date: currentDate});
    }

    const onClickingUpdate = () => {
        navigation.replace("MealInputScreen",
            {meal: label});
    }
    return (
    <View style = {{flex: 1}}>
        <View style = {{flex: 0.06, backgroundColor: '#99ffff', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{fontSize: 22, fontWeight: 'bold'}}>{label} Summary</Text>
        </View>
        <View style = {{flex: 1, backgroundColor: '#ffeedd', padding: 20, rowGap: 5}}>
            <Text style = {{fontSize: 18, alignSelf: 'center', fontWeight: 'bold', paddingHorizontal: 20,}}>Macro Breakdown</Text>
            <View style = {{flex: 0.8, rowGap: 20}}>
                <View style = {{flex: 1, flexDirection: 'row', columnGap: 40,
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
                <TouchableOpacity style={[styles.circularButton, {marginTop: 20, backgroundColor: '#00ccff', width: 180}]}
                                  onPress={onClickingUpdate}>
                  <Text style={styles.buttonText}>Reset {label}</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style = {{flex: 0.08, backgroundColor: '#ddffff', padding: 10,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'
            }}>
            <TouchableOpacity style={styles.circularButton} onPress={onSubmit}>
              <Text style={styles.buttonText}>Check Today's Nutrition</Text>
            </TouchableOpacity>
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
      width: 240, // Diameter of 60 (2 * radius)
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

export default MealSummaryScreen;
