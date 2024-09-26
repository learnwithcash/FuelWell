import MealInputScreen from './screens/MealInputScreen';
import MealSummaryScreen from './screens/MealSummaryScreen';
import DailyRecordScreen from './screens/DailyRecordScreen';
import MealSelectionScreen from './MealSelectionScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {GlobalProvider} from './GlobalContext.tsx';
import {View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Stack = createStackNavigator();

const FuelWellApp = () => {

  return (
        <GlobalProvider>
            <NavigationContainer>
              <Stack.Navigator initialRouteName = "MealSelectionScreen">
                <Stack.Screen name="MealSelectionScreen" component = {MealSelectionScreen} options = {{headerShown: false}}/>
                <Stack.Screen name="MealInputScreen" component={MealInputScreen} options = {{headerShown: false}} />
                <Stack.Screen name="MealSummaryScreen" component={MealSummaryScreen} options = {{headerShown: false}} />
                <Stack.Screen name="DailyRecordScreen" component={DailyRecordScreen} options = {{headerShown: false}} />
              </Stack.Navigator>
            </NavigationContainer>
        </GlobalProvider>
  );
};


export default FuelWellApp;
