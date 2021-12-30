import { Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold, useFonts } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';
import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BasketModel } from 'views/Basket/Basket.model';
import basketMock from './mocks/Basket.mock';
import Basket from './src/views/Basket/Basket';
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
      <SafeAreaProvider style={{flex: 1}}>
        <StatusBar/>      
      <Basket basket={basket}></Basket>
        </SafeAreaProvider>    
  );
}
}

