import { BasketModel, BasketDetailModel, BasketTop } from "@views/Basket/Basket.model";


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
    })
})
export default basketMock;
