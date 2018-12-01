import * as Interfaces from 'interfaces.main'
import * as MyFoodInterfaces from 'page.my-food-page/interfaces'

const initialState : MyFoodInterfaces.MyFoodReducerInterface = {
    bins: [
        {
            name: 'Refrigerator',
            iconSrc: '/images/fast-food-icon.png',
            description: 'Test Bin!',
            food: [
                {
                    name: 'Apricot'
                }
            ]
        },
        {
            name: 'Pantry',
            iconSrc: '/images/fast-food-icon.png',
            description: 'Test Bin!',
            food: [
                {
                    name: 'Apricot'
                }
            ]
        },
        {
            name: 'Freezer',
            iconSrc: '/images/fast-food-icon.png',
            description: 'Test Bin!',
            food: [
                {
                    name: 'Apricot'
                }
            ]
        },
        {
            name: 'Pantry',
            iconSrc: '/images/fast-food-icon.png',
            description: 'Test Bin!',
            food: [
                {
                    name: 'Apricot'
                }
            ]
        },
        {
            name: 'Cabinet',
            iconSrc: '/images/fast-food-icon.png',
            description: 'Test Bin!',
            food: [
                {
                    name: 'Apricot'
                }
            ]
        },
    ] as MyFoodInterfaces.MyFoodBinInterface[]
}

export default initialState