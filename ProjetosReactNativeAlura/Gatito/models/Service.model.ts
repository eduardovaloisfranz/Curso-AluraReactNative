export class ServiceModel {
    id: number
    name: string
    price: number
    description: string
    constructor(service?: ServiceModel) {
        this.id = service?.id || 0
        this.name = service?.name || ''
        this.description = service?.description || ''
        this.price = service?.price || 0
    }
}