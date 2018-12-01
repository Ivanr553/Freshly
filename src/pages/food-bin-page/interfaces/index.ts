import * as Interfaces from 'interfaces.main'

export interface MyFoodReducerInterface {
    bins: MyFoodBinInterface[]
}

export interface MyFoodBinInterface {
    name: string,
    iconSrc: string,
    description: string,
    food: [Interfaces.FoodInterface?]
}