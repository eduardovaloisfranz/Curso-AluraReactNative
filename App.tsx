import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
//import Basket from '@views/Basket/Basket';
import Basket from './src/views/Basket/Basket'
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';
import { BasketModel } from 'views/Basket/Basket.model';
import basketMock from './mocks/Basket.mock';
import React from 'react';
import AppLoading from 'expo-app-loading';
export default function App() {
  const  [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    "MontserratItalic": Montserrat_400Regular_Italic
  })
  const basket: BasketModel = basketMock
  if(!fontLoaded) { 
    return <AppLoading/>
  }else {
    
    return (
      <SafeAreaView>
      <ScrollView>
      <StatusBar/>      
      <Basket basket={basket}></Basket>
      </ScrollView>      
    </SafeAreaView>
  );
}
}

