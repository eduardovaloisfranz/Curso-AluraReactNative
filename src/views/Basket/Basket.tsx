import { StyleSheet, View } from 'react-native';
import ImageRender from '../../shared/ImageRender';
import BasketDetail from './Components/BasketDetail';

const Basket = () => {
  
  return <View>
    <ImageRender image={require('@assets/topo.png')} description='Detalhe da Cesta'></ImageRender>
    <View style={styles.padding}>
      <BasketDetail></BasketDetail>  
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