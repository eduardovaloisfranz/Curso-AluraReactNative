import Services from "@services/Index";
import { NativeBaseProvider } from "native-base";
import React from "react";
import { SafeAreaView, StatusBar } from "react-native";
import serviceList from "./mocks/Services.mocks";
export default function App() {  
  const config = {
    dependencies: { 
      'linear-gradient': require('expo-linear-gradient').LinearGradient
    }
  }
  return <>
   <NativeBaseProvider config={config}>
        <SafeAreaView>
          <StatusBar/>
            <Services services={serviceList}></Services>
        </SafeAreaView>
    </NativeBaseProvider>
  </>
}

