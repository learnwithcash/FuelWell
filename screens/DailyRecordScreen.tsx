// components/InputScreen.js
import React from 'react';
import {useState} from 'react';
import { View, Text, TextInput, Padding, ScrollView, TouchableOpacity, Button, StyleSheet } from 'react-native';
import ItemRow from '../ItemRow';
import RNPickerSelect from 'react-native-picker-select';
import SummaryIcon from '../components/SummaryIcon.tsx';

const DailyRecordScreen = ({route, navigation}) => {
    const {label, calories, protein, fat, satFat, carbs, sugar} = route.params;
    const [meal, setMeal] = useState('Overall');

    const setBreakFast = () => {
        console.log('Set Breakfast!');
    }
    return (
    <View style = {{flex: 1, backgroundColor: '#ffeedd'}}>
        <View style = {{flex: 0.08, backgroundColor: '#99ffff', justifyContent: 'center',
                        alignItems: 'center',}}>
             <Text style = {{fontSize: 22, fontWeight: 'bold'}}>{label} Summary</Text>
        </View>
        <View style = {{flex: 0.22, backgroundColor: '#ffeedd', paddingHorizontal: 10,
                        paddingVertical: 25, rowGap: 20, marginBottom: 50}}>
            <View style = {{flexDirection: 'row', columnGap: 20, alignSelf: 'center'}}>
                <TouchableOpacity style={styles.circularButton} onPress={console.log('Breakfast selected!')}>
                  <Text style={styles.buttonText}>Breakfast</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circularButton} onPress={console.log('Lunch selected!')}>
                  <Text style={styles.buttonText}>Lunch</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection: 'row', columnGap: 20, alignSelf: 'center'}}>
                <TouchableOpacity style={styles.circularButton} onPress={console.log('Snack selected!')}>
                  <Text style={styles.buttonText}>Snack</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.circularButton} onPress={console.log('Dinner selected!')}>
                  <Text style={styles.buttonText}>Dinner</Text>
                </TouchableOpacity>
            </View>
            <View style = {{flexDirection: 'row', columnGap: 20, alignSelf: 'center'}}>
                <TouchableOpacity style={styles.circularButton} onPress={console.log('Overall selected!')}>
                  <Text style={styles.buttonText}>Overall</Text>
                </TouchableOpacity>
            </View>
        </View>
        <View style = {{flex: 0.54, rowGap: 10, backgroundColor: '#ffffff', padding: 20, marginHorizontal: 30,}}>
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
