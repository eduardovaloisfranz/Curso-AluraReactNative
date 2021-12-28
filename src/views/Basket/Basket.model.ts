export class BasketModel {
    top: BasketTop;
    detail: BasketDetailModel
    constructor(basketDetail?: BasketModel) {
        this.top = basketDetail?.top  || new BasketTop();
        this.detail = basketDetail?.detail || new BasketDetailModel();
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