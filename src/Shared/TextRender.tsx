import { ReactChild, ReactChildren } from "react";
import { Text } from "react-native";
export interface AuxProps {
    children: ReactChild | ReactChildren;
  }
interface propsType extends AuxProps{
    mtType?: montserratType,
    fontSize?: number | fontTypeSize;
    paddingHorizontal?: number;
    paddingVertical?: number;
    style?: any,
    color?: string
    bothPadding?: number
}

type montserratType = 'regular' | 'bold' | 'regularItalic'

type fontTypeSize = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6'

const TextRender = (props: propsType) => {
    const getFontSize = (fontSize: fontTypeSize | number | undefined) : Number => {
        if(fontSize) {
            const fontSizeIsANumber : boolean = !Number.isNaN(Number(fontSize))
            if(fontSizeIsANumber) {
                return fontSize as Number;
            }else {
                switch(fontSize) {
                case 'h1':
                    return 24
                case 'h2':
                    return 20
                case 'h3':
                    return 18
                case 'h4':
                    return 16
                case 'h5':
                    return 14
                case 'h6':
                    return 12
                case 'p1':
                    return 12
                case 'p2':
                    return 10
                case 'p3':
                    return 8
                case 'p4':
                    return 6
                case 'p5':
                    return 4
                case 'p6':
                    return 2
                default:
                    return fontSize
            }
        }     
        }else {
            return 16
        }
           
    
    }

    const getFontFamily = (fontType: montserratType | undefined) : string => {
        switch(fontType) {
            case 'regular':
                return 'MontserratRegular'
            case 'bold':
                return 'MontserratBold'
            case 'regularItalic':
                return 'MontserratRegularItalic'
            default:
                return 'MontserratRegular'
        }
     }

     const getPadding = (props: propsType, sideComparator: 'vertical' | 'horizontal') : number => {
        if(props.bothPadding) {
            return props.bothPadding
        }else {
            if(sideComparator === 'vertical') {
                return props.paddingVertical || 0
            }else {
                return props.paddingHorizontal || 0
            }
        }
     }
    const style : any  = {
        fontSize: getFontSize(props.fontSize),
        fontFamily: getFontFamily(props.mtType),
        paddingHorizontal: getPadding(props, 'horizontal'),
        paddingVertical: getPadding(props, 'vertical'),
        color: props.color || 'black',
        ...props.style,
    }
    return <Text style={style}> {props.children}</Text>
}

export default TextRender;