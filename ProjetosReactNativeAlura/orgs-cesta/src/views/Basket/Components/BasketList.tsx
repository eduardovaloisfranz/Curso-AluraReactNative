import TextRender from "@shared/TextRender"
import React from "react"
import { FlatList, StyleProp, View, ViewStyle } from "react-native"
import { Avatar, ListItem } from "react-native-elements"
import { BasketItemModel, BasketItemsModel } from "../Basket.model"

const BasketList = (props: { style?: StyleProp<ViewStyle>, items: BasketItemsModel, basketHeaderComponent: JSX.Element}) => {    
    const { style, items } = props    
    const listItems : BasketItemModel[]= items.items;
    const renderBasketItem = (item: BasketItemModel) : JSX.Element => { return <>
          <ListItem bottomDivider >
                <Avatar source={item.image}/>
                        <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>      
                        </ListItem.Content>
                    <ListItem.Chevron />
         </ListItem>
    </> }    
    const header : JSX.Element =  
            <View style={style}>
                {props.basketHeaderComponent} 
                <TextRender mtType="bold" fontSize={"h3"} bothPadding={10}>{items.title}</TextRender>
            </View>
    return <>        
        <FlatList
            ListHeaderComponent={header}
            nestedScrollEnabled={true}
            renderItem={({item}) => renderBasketItem(item)}
            data={listItems}
            keyExtractor={(item, index) => index.toString()}
        >
        </FlatList>
    </>    
}
export default BasketList