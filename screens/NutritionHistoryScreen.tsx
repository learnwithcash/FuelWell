// components/InputScreen.js
import React, {useContext} from 'react';
import {useState, useEffect} from 'react';
import { View, Text, TextInput, Padding, ScrollView, TouchableOpacity, Button, StyleSheet } from 'react-native';
import ItemRow from '../ItemRow';
import SummaryButtonPanel from '../components/SummaryButtonPanel';
import RNPickerSelect from 'react-native-picker-select';
import SummaryIcon from '../components/SummaryIcon.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GlobalContext, currentDate} from '../App.tsx';

const NutritionHistoryScreen = ({route, navigation}) => {
    // On starting check all the available data in asyncStorage where key is a date.
    // Use useEffect to ensure it runs only once.
    const {label} = route.params;
    const [historyDateKeys, setHistoryDateKeys] = useState([]);

    useEffect(() => {
        const setHistoricalDataRows = async () => {
            // Get all data keys from AsyncStorage
            const historyKeys = await AsyncStorage.getAllKeys();
            setHistoryDateKeys(historyKeys.toReversed());
        };
        setHistoricalDataRows();
    }, []);
    return (
    <View style = {{flex: 1, backgroundColor: '#ffeedd'}}>
        <View style = {{flex: 0.06, backgroundColor: '#99ffff', justifyContent: 'center', alignItems: 'center'}}>
             <Text style = {{fontSize: 22, fontWeight: 'bold'}}>{label}</Text>
        </View>
        <View style = {{flex: 0.94}}>
            <ScrollView style={{rowGap: 10}}>
                {historyDateKeys.map((dateKey, index) => (
                  <TouchableOpacity key={index} style={styles.buttonStyle}
                                    onPress={() => navigation.navigate("DailyRecordScreen",{label: 'Overall', date: dateKey})}>
                    <Text style={[styles.buttonText, {fontSize: 20, fontWeight: 'bold'}]}>{dateKey}</Text>
                  </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    </View>
    );
    };

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#0055ff',
    padding: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    alignSelf: 'stretch',
    justifyContent:'center'
  },
  buttonText: {
    color: '#fff', // Custom text color
    fontSize: 18,// Custom font size
    fontWeight: 'bold',
    alignSelf: 'center'
  },
});

export default NutritionHistoryScreen;

