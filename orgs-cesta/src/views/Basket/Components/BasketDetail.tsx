import TextRender from "@shared/TextRender";
import TheButton from '@shared/TheButton';
import { Alert, Image, StyleSheet, View } from "react-native";
import { BasketDetailModel } from "../Basket.model";
interface BasketDetailProps {
  detail: BasketDetailModel
}
const BasketDetail = (props: BasketDetailProps) => {
    const onPress = () => {
       Alert.alert('Test press btn!');        
      }

      const parseNumberToLocaleMoney = (number: number)  => {
        return `R$ ${number.toFixed(2)}`
      }
    return <View>
    <TextRender color={'#363536'} fontSize="h1" mtType="bold">{props.detail.name}</TextRender>
      <View style={{ ...styles.padding, ...styles.flexRow, ...styles.aiCenter}}>
        <Image style={styles.smallIcon} source={props.detail.image}></Image>
        <TextRender bothPadding={10} color="black" mtType='regular' fontSize={'h4'}>{props.detail.farmOwner}</TextRender>
      </View>
      <TextRender color="#7b7b7b" fontSize="h5" bothPadding={10}>{props.detail.description}</TextRender>
      <TextRender fontSize={'h1'} color='#009B75' mtType='bold' bothPadding={10}>{parseNumberToLocaleMoney(props.detail.price)}</TextRender>
      <TheButton onPress={onPress}>Comprar</TheButton>      
    </View>
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
    flexRow: {
      flexDirection: 'row',
    },
    aiCenter: {
      alignItems: 'center',
    },     
  })

export default BasketDetail;