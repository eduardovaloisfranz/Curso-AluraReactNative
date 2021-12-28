
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';
import ImageRender from '../Shared/ImageRender';

const Basket = () => {
  const onPress = () => { Alert.alert('Test press btn!')}
  return <View>
    <ImageRender image={require('@assets/topo.png')} description='Detalhe da Cesta'></ImageRender>
      <View style={styles.padding}>
      <Text style={{...styles.h1, ...styles.padding}}>Cesta de Verduras</Text>
      <View style={{ ...styles.padding, ...styles.flexRow, ...styles.aiCenter}}>
        <Image style={styles.smallIcon} source={require('@assets/logo.png')}></Image>
        <Text style={{...styles.padding, ...styles.farmerOwner}}>Jenny Jack Farm</Text>
      </View>
      <Text style={{...styles.padding, ...styles.basketDescription}}>
        Uma cesta com produtos seleecionados cuidadosamente da fazenda direto para sua cozinha
      </Text>      
      <Text style={{...styles.padding, ...styles.priceLabel}}>R$ 40,00</Text>    
      <Pressable style={{...styles.btnStyle, ...styles.aiCenter, ...styles.jcCenter}} onPress={onPress} >
        <Text style={styles.buyButton}>Comprar</Text>
      </Pressable>
      </View>

  </View>    
  
}
export default Basket

const styles = StyleSheet.create({
  padding: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  farmerOwner: {
    fontSize: 16,
    fontWeight: 'normal',
    color: 'black'
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
  h1: {
    fontSize: 24,
    color: '#363536',
    fontWeight: 'bold',    
  },
  basketDescription : {
    fontSize: 16,
    color: '#7B7B7B',
  },
  priceLabel: {
    fontSize: 30,
    color: '#009B75',
    fontWeight: 'bold'
  },
  btnStyle:  {
    margin: 10,
    backgroundColor: '#009B75',
    height: 50,
    borderRadius: 10
  },
  buyButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
})