import { Image, StyleSheet, Text, View } from "react-native"

export interface ImageRenderProps {    
    description: string,    
    image: any
}
const ImageRender = (props: ImageRenderProps) : JSX.Element => {    
    return <View>
         <Image
            style={styles.imageStyle}
            source={props.image}
         >
         </Image>         
        <Text style={styles.descriptionStyle} >{props.description} </Text>   
         </View>
}
const styles = StyleSheet.create({
    imageStyle: {
        width: '100%',
        maxHeight: '60%'
    },
    descriptionStyle: {
        position: 'absolute',
        width: '100%',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#f7f7f7',
        paddingTop: 16
    }
})
export default ImageRender
