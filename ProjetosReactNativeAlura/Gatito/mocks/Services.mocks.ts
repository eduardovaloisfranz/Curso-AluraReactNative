import { ServiceModel } from "../models/Service.model";

const serviceList: ServiceModel[] = [
    new ServiceModel({
        id: 1,
        name: 'Banho',
        price: 79.9,
        description: 'NÃO DE BANHO NO SEU GATO! Mas se precisar, nós damos'
    }),
    new ServiceModel({
        id: 2,
        name: 'Vacina V4',
        price: 89.9,
        description: 'Uma dose da vacina, seu gato precisa de 2'
    }),
    new ServiceModel({ 
        id: 3,
        name: 'Vacina Anti-Rabica',
        price: 99.9,
        description: 'Uma dose da vacina antirabica, seu gato precisa de 1 por ano'
    })
]

export default serviceList;