import { SafeAreaView, ScrollView, StatusBar } from 'react-native';
import Basket from '@views/Basket';
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
      <StatusBar/>      
      <Basket/>
      </ScrollView>      
    </SafeAreaView>
  );
}

