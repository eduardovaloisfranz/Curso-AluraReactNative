import TextRender from "@shared/TextRender"

import { Alert, Image, Pressable, StyleSheet, View } from "react-native";
const BasketDetail = () => {
    const onPress = () => { Alert.alert('Test press btn!')}
    return <>
    
    <TextRender color={'#363536'} fontSize="h1" mtType="bold">Cesta de Verduras</TextRender>
      <View style={{ ...styles.padding, ...styles.flexRow, ...styles.aiCenter}}>
        <Image style={styles.smallIcon} source={require('@assets/logo.png')}></Image>        
        <TextRender bothPadding={10} color="black" mtType='regular' fontSize={'h4'}> Jenny Jack Farm</TextRender>
      </View>
      <TextRender color="#7b7b7b" fontSize={'h5'} bothPadding={10}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</TextRender>      
      <TextRender fontSize={'h1'} color='#009B75' mtType='bold' bothPadding={10}>R$ 40,00</TextRender>
      <Pressable style={{...styles.btnStyle, ...styles.aiCenter, ...styles.jcCenter}} onPress={onPress} >        
        <TextRender color="#fff" mtType='bold' fontSize={'h4'}>Comprar</TextRender>
      </Pressable>
    </>
}
const styles = StyleSheet.create({
    padding: {    
      paddingVertical: 10,
      paddingHorizontal: 10
    },
    smallIcon: {
      width: 40,
      height: 40,
    },
    jcCenter : {
      justifyContent: 'center',
    },
    flexRow: {
      flexDirection: 'row',
    },
    jcEnd: {
      justifyContent: 'flex-end',
    },
    aiCenter: {
      alignItems: 'center',
    },
    aiEnd: {
      alignItems: 'flex-end',
    }, 
    btnStyle:  {
      margin: 10,
      backgroundColor: '#009B75',
      height: 50,
      borderRadius: 10
    }  
  })

export default BasketDetail;