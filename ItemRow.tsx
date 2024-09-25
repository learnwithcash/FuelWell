// components/InputScreen.js
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Padding,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const ItemRow = ({title, dropDownItems, updateParent}) => {
  const [unit, setUnit] = useState('');
  const [itemName, setItemName] = useState('Default Item Name');
  const [qty, setQuantity] = useState(0);

  const handleItemSelection = (value) => {
    if(value in Ingredients){
        setItemName(value);
        if(Ingredients[value].isweight){
            setUnit('g');
        }
        else{setUnit('#')}
    }
  }

//   useEffect(() => {
//     updateParent(itemName, qty);
//     }, [qty]);

  const updateItemNutrition = (text) => {
        // Old Regex - /^\d*$/ - Used parseInt(text) instead of parseFloat.
        if (/\d+(\.\d+)?/.test(text)) {
          const screenQty = parseFloat(text);
          if(text != ''){
            updateParent(itemName, screenQty - qty);
            setQuantity(screenQty);
          }
        }
//         updateParent(itemName, qty);
  }

  return (
    <View style = {styles.rowStyle}>
                    <View style = {styles.dropDownStyle}>
                        <RNPickerSelect
                              placeholder = {{label: title, color: 'grey'}}
                              onValueChange={handleItemSelection}
                              items={dropDownItems}
                            />
                    </View>
                    <View style = {styles.textContainerStyle}>
                        <View style={styles.textInputStyle}>
                            <TextInput style = {{flex: 3,}} placeholder = {'Qty'} placeholderColor = 'grey' value = {qty} keyboardType = 'numeric'
                                onChangeText = {updateItemNutrition}
                            />
                            <Text style = {{flex: 1,}}>{unit}</Text>
                        </View>
                    </View>
                </View>
  );
};

const styles = StyleSheet.create({
  rowStyle: {
      height: 60,
      backgroundColor: '#aaffff',
      padding: 5,
      marginBottom: 20,
      flexDirection: 'row',
      columnGap: 5,
      justifyContent: 'space-evenly',
      alignItems: 'stretch',
    },
  dropDownStyle:{
      flex: 3,
      backgroundColor: '#eeffee',
      padding: 10,
      justifyContent: 'center'
    },
  textContainerStyle:{
      flex: 1,
      backgroundColor: '#eeffee',
      justifyContent: 'center'
    },
  textInputStyle:{
      flexDirection: 'row',
      padding: 5,
      justifyContent: 'space-evenly',
      alignItems: 'center'
    },
});

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


export default ItemRow;
