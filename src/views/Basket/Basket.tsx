import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import ImageRender from '../../shared/ImageRender';
import { BasketModel } from './Basket.model';
import BasketDetail from './Components/BasketDetail';

interface BasketProps {
  basket: BasketModel
}

const Basket = (props: BasketProps) => {     
    return <View>
    <ImageRender image={props.basket.top.image} description={props.basket.top.title}></ImageRender>
    <View style={styles.padding}>
      <BasketDetail detail={props.basket.detail}></BasketDetail>  
     </View>
  </View>    
  
  
  
}
export default Basket

const styles = StyleSheet.create({
  padding: {    
    paddingVertical: 10,
    paddingHorizontal: 10
  },
})
