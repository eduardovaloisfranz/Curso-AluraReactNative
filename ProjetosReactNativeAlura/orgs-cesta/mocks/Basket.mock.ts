import { BasketModel, BasketDetailModel, BasketTop, BasketItemsModel, BasketItemModel } from "@views/Basket/Basket.model";


const basketMock: BasketModel = new BasketModel({    
    top: new BasketTop({ 
       title: 'Detalhe da Cesta',
       image: require('@assets/topo.png')
    }),

    detail: new BasketDetailModel({
        name: 'Cesta de Verduras',
        farmOwner: 'Jerry Jack Farm',
        price: 40.00,
        description: 'Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha',
        image: require('@assets/logo.png')
    }),

    items: new BasketItemsModel({
        title: 'Itens da Cesta',
        items: [
            new BasketItemModel({
                name: 'Tomate',
                image: require('@assets/frutas/Tomate.png')
            }),
            new BasketItemModel({ 
                name: 'Brócolis',
                image: require('@assets/frutas/Brócolis.png')
            }),
            new BasketItemModel({
                name: 'Batata',
                image: require('@assets/frutas/Batata.png')
            }),
            new BasketItemModel({
                name: 'Pepino',
                image: require('@assets/frutas/Pepino.png')
            }),
            new BasketItemModel({
                name: 'Abóbora',
                image: require('@assets/frutas/Abóbora.png')
            })
        ]
    })

})
export default basketMock;
