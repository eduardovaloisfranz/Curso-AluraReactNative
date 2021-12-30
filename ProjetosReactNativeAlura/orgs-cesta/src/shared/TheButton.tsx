import TextRender, { AuxProps } from "@shared/TextRender";
import { StyleSheet, TouchableOpacity } from "react-native";

interface TheButtonProps extends AuxProps {
    onPress: Function,    
}

const TheButton : Function = (props: TheButtonProps) => {
    return <>
    <TouchableOpacity style={{...styles.btnStyle, ...styles.aiCenter, ...styles.jcCenter}} onPress={(evt) => { props.onPress(evt)}} >
        <TextRender color="#fff" mtType='bold' fontSize={'h4'}>{props.children}</TextRender>
      </TouchableOpacity>
    </>
}

export default TheButton

const styles = StyleSheet.create({ 
    btnStyle:  {
        margin: 10,
        backgroundColor: '#009B75',
        height: 50,
        borderRadius: 10
      },
      aiCenter: {
        alignItems: 'center',
      },
      jcCenter : {
        justifyContent: 'center',
      },
})