import { Dimensions, Image, StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native"

export interface ImageRenderProps {  
    description: string,    
    image: any,
    style?: StyleProp<ViewStyle>,
}
const windowHeight = Dimensions.get('screen').height;
const ImageRender = (props: ImageRenderProps) : JSX.Element => {    
    return <>
         <Image
            style={{...styles.imageStyle, ...props.style as any}}
            source={props.image}
         >
         </Image>
        <Text style={styles.descriptionStyle} >{props.description}</Text>   
         </>
}
const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        height: windowHeight * 0.4,
    },
    descriptionStyle: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f7f7f7',
        paddingTop: 16,
    }
})
export default ImageRender

