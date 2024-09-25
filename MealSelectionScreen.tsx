import { Text, View, StyleSheet} from 'react-native';
import MealButton from './components/MealButton';

const MealSelectionScreen = ({navigation}) => {
  return (
    <View style={styles.titleBox}>
        <Text style={styles.subtitleText}>
            What did you eat today?
          </Text>
      <View style={styles.container}>
        <View style={styles.row}>
          <MealButton label = 'Breakfast' navigation = {navigation}/>
          <MealButton label = 'Lunch' navigation = {navigation}/>
        </View>
        <View style={styles.row}>
          <MealButton label = 'Dinner' navigation = {navigation}/>
          <MealButton label = 'Snack' navigation = {navigation}/>
        </View>
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
});

export default MealSelectionScreen;
