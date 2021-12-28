import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import Basket from '@views/Basket';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold, Montserrat_400Regular_Italic } from '@expo-google-fonts/montserrat';
export default function App() {
  const  [fontLoaded] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
    "MontserratItalic": Montserrat_400Regular_Italic
  })
  if(!fontLoaded) { 
    return <View></View>
  }else {
    return (
      <SafeAreaView>
      <ScrollView>
      <StatusBar/>      
      <Basket/>
      </ScrollView>      
    </SafeAreaView>
  );
}
}

