// components/MealButton.js

import React from 'react';
import {Text, View} from 'react-native';

const SummaryIcon = ({label, data}) => {
  return (
    <View style = {{flex: 1, justifyContent: 'space-evenly', backgroundColor: '#fffafd',
                    alignItems: 'center', elevation: 10,  padding: 15,}}>
        <Text style = {{fontSize: 18, fontWeight: 'bold'}}>{label}</Text>
        <View style = {{flex: 0.2}}></View>
        <Text style = {{fontSize: 16, fontWeight: 'bold'}}>{data}</Text>
    </View>
  );
};

export default SummaryIcon;
