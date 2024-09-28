import MealInputScreen from './screens/MealInputScreen';
import MealSummaryScreen from './screens/MealSummaryScreen';
import DailyRecordScreen from './screens/DailyRecordScreen';
import NutritionHistoryScreen from './screens/NutritionHistoryScreen';
import MealSelectionScreen from './MealSelectionScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState, useEffect } from 'react';

export const GlobalContext = createContext();
export const storeData = async (key, value) => {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
};
// export const currentDate = new Date().toLocaleString().slice(0,10);
export const currentDate = new Date().toLocaleString('default', { month: 'long', day: 'numeric' });
const Stack = createStackNavigator();
const FuelWellApp = () => {
  const key = currentDate;
  const defaultObject =
  {'Breakfast':{'calories': 0, 'protein': 0, 'fat':0,
                   'satFat':0, 'carbs':0, 'sugar':0},
    'Lunch':{'calories': 0, 'protein': 0, 'fat':0,
                        'satFat':0, 'carbs':0, 'sugar':0},
    'Dinner':{'calories': 0, 'protein': 0, 'fat':0,
                        'satFat':0, 'carbs':0, 'sugar':0},
    'Snack':{'calories': 0, 'protein': 0, 'fat':0,
                        'satFat':0, 'carbs':0, 'sugar':0},
    'Overall':{'calories': 0, 'protein': 0, 'fat':0,
                         'satFat':0, 'carbs':0, 'sugar':0},
  };
  const [globalState, setGlobalState] = useState(defaultObject);

  useEffect(() => {
    const initializeData = async () => {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue != null) {
        let initialObject = JSON.parse(jsonValue);
        setGlobalState(initialObject);
      } else {
        await AsyncStorage.setItem(key, JSON.stringify(defaultObject));
      }
    };

    initializeData();  // Call the function here
  }, []);

  return (
        <GlobalContext.Provider value={{globalState, setGlobalState}}>
             <NavigationContainer>
               <Stack.Navigator initialRouteName = "MealSelectionScreen">
                 <Stack.Screen name="MealSelectionScreen" component = {MealSelectionScreen} options = {{headerShown: false}}/>
                 <Stack.Screen name="MealInputScreen" component={MealInputScreen} options = {{headerShown: false}} />
                 <Stack.Screen name="MealSummaryScreen" component={MealSummaryScreen} options = {{headerShown: false}} />
                 <Stack.Screen name="DailyRecordScreen" component={DailyRecordScreen} options = {{headerShown: false}} />
                 <Stack.Screen name="NutritionHistoryScreen" component={NutritionHistoryScreen} options = {{headerShown: false}} />
               </Stack.Navigator>
             </NavigationContainer>
        </GlobalContext.Provider>
  );
};


export default FuelWellApp;
