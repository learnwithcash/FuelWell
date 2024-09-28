import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import MealButton from './components/MealButton';
import {currentDate} from './App.tsx';

const MealSelectionScreen = ({navigation}) => {
  return (
    <View style = {{flex: 1}}>
        <View style = {{flex: 0.06, backgroundColor: '#99ffff', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{fontSize: 24, fontWeight: 'bold'}}>Home</Text>
        </View>
        <View style = {{flex: 1, backgroundColor: '#ffeedd', paddingHorizontal: 20, rowGap: 20, alignItems: 'center'}}>
            <Text style = {{fontSize: 20, fontWeight: 'bold', padding: 20,}}>What did you eat today?</Text>
            <View style={styles.row}>
              <MealButton label = 'Breakfast' navigation = {navigation}/>
              <MealButton label = 'Lunch' navigation = {navigation}/>
            </View>
            <View style={styles.row}>
              <MealButton label = 'Dinner' navigation = {navigation}/>
              <MealButton label = 'Snack' navigation = {navigation}/>
            </View>
            <TouchableOpacity style={[styles.circularButton, {width: 270, height: 60, backgroundColor: '#7744aa'}]}
                    onPress={() => navigation.navigate("DailyRecordScreen",{label: 'Overall', date: currentDate})}>
              <Text style={[styles.buttonText, {fontSize: 20, fontWeight: 'bold'}]}>Check Today's Nutrition</Text>
            </TouchableOpacity>
        </View>
        <View style = {{flex: 0.08, backgroundColor: '#ddffff', padding: 10,
            flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly'
            }}>
            <TouchableOpacity style={[styles.circularButton, {width: 270, height: 60, backgroundColor: '#0088ff'}]}
                    onPress={() => navigation.navigate("NutritionHistoryScreen",{label: 'History'})}>
              <Text style={[styles.buttonText, {fontSize: 20, fontWeight: 'bold'}]}>Nutrition History</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleBox: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffeedd'
  },
  subtitleText: {
    color: '#0077CC',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 60,
  },
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
  },
  row: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10, // Gap between rows
    width: 350,
  },
  circularButton: {
        padding: 10, // Adjust for padding from the bottom
        alignSelf: 'center', // Center horizontally
        width: 150, // Diameter of 60 (2 * radius)
        height: 50, // Same as width to make it a circle
        borderRadius: 30, // Half of width/height for circular shape
        backgroundColor: '#0088ff',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5, // Adds shadow for Android
    },

    buttonText: {
      color: '#fff', // Custom text color
      fontSize: 18,// Custom font size
      fontWeight: 'bold'
    },
});

export default MealSelectionScreen;
