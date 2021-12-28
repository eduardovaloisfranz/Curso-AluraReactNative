export class BasketModel {
    top: BasketTop;
    detail: BasketDetailModel
    items: BasketItemsModel
    constructor(basketDetail?: BasketModel) {
        this.top = basketDetail?.top  || new BasketTop();
        this.detail = basketDetail?.detail || new BasketDetailModel();
        this.items = basketDetail?.items || new BasketItemsModel();
    }
}

export class BasketTop {
    title: string
    image: any
    constructor(basketTop?: BasketTop) {
        this.title = basketTop?.title || ''
        this.image = basketTop?.image
    }
}

export class BasketDetailModel { 
    name: string
    farmOwner: string
    price: number
    image?: any
    description: string    
    constructor(basketDetail?: BasketDetailModel) {
        this.name = basketDetail?.name || ''
        this.farmOwner = basketDetail?.farmOwner || ''
        this.price = basketDetail?.price || 0        
        this.description = basketDetail?.description || ''
        this.image = basketDetail?.image
    }
}

export class BasketItemsModel {
    title: string
    items: BasketItemModel[]
    constructor(basketItems?: BasketItemsModel) {
        this.title = basketItems?.title || ''
        this.items = basketItems?.items || []
    }
}

export class BasketItemModel {
    name: string
    image: any
    constructor(basketItem?: BasketItemModel) { 
        this.name = basketItem?.name || ''
        this.image = basketItem?.image
    }
}