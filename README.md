- **v2 - Daily calculation and display nutrition + Save daily history + UI standardisation - Done**
	- **f1** : Display all data from GlobalContext in MealSummary and DailyRecord - **Done**
	- **f2** : Change button clicks to display meal specific nutrition. - **Done**
   - **f3** : Initialize App.js by checking if there is any saved data for key=today in AsyncStorage, if yes, retrieve data and update it to globalContext. Whenever globalState is updated, AsyncStorage[key] is also updated. If data is not available in asyncStorage, set a default data object to both globalState and AsyncStorage.
	- **f4** : Create NutritionHistory.js which stores buttons for all the days whose historical data is present in AsyncStorage. - **Done**
            - **f4.1** : Update DailyRecordScreen(date) to first check if its attribute date == currentday. If yes, display data from globalState. If no, check for the same data in               AsyncStorage with key=date - **Done**

	  
