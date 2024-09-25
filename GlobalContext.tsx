import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const [globalState, setGlobalState] = useState(
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
    });

    return (
        <GlobalContext.Provider value={{globalState, setGlobalState}}>
            {children}
        </GlobalContext.Provider>
    );
};