import MealInputScreen from './screens/MealInputScreen';
import MealSummaryScreen from './screens/MealSummaryScreen';
import DailyRecordScreen from './screens/DailyRecordScreen';
import MealSelectionScreen from './MealSelectionScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
const Stack = createStackNavigator();

const FuelWellApp = () => {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName = "MealSelectionScreen">
            <Stack.Screen name="MealSelectionScreen" component = {MealSelectionScreen} options = {{headerShown: false}}/>
            <Stack.Screen name="MealInputScreen" component={MealInputScreen} options = {{headerShown: false}} />
            <Stack.Screen name="MealSummaryScreen" component={MealSummaryScreen} options = {{headerShown: false}} />
            <Stack.Screen name="DailyRecordScreen" component={DailyRecordScreen} options = {{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
  );
};


export default FuelWellApp;
