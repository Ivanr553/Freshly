import * as React from 'react';
import styled from 'styled-components'
import MyFoodHeader from './components/my-food-header/MyFoodHeader';
import FoodBins from './components/food-bins';

const MyFoodPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fcfcfc;
`

export default props => {

    const {

    } = props

    return (
        <MyFoodPage>
            <MyFoodHeader />
            <FoodBins />
        </MyFoodPage>
    )
}