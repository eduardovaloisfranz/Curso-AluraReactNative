import TextRender from "@shared/TextRender"

import { Alert, Image, Pressable, StyleSheet, View } from "react-native";
import { BasketDetailModel } from "../Basket.model";
interface BasketDetailProps {
  detail: BasketDetailModel
}
const BasketDetail = (props: BasketDetailProps) => {
    const onPress = () => { Alert.alert('Test press btn!')}
    return <>
    
    <TextRender color={'#363536'} fontSize="h1" mtType="bold">{props.detail.name}</TextRender>
      <View style={{ ...styles.padding, ...styles.flexRow, ...styles.aiCenter}}>
        <Image style={styles.smallIcon} source={props.detail.image}></Image>        
        <TextRender bothPadding={10} color="black" mtType='regular' fontSize={'h4'}>{props.detail.farmOwner}</TextRender>
      </View>
      <TextRender color="#7b7b7b" fontSize={'h5'} bothPadding={10}>{props.detail.description}</TextRender>
      <TextRender fontSize={'h1'} color='#009B75' mtType='bold' bothPadding={10}>{'R$: ' + props.detail.price}</TextRender>
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