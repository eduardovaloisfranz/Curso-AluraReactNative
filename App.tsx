import { SafeAreaView, StatusBar } from 'react-native';
import Basket from './src/views/Basket';

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar/>      
      <Basket/>
      
    </SafeAreaView>
  );
}

