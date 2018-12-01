import * as React from 'react';
import styled from 'styled-components'
import FoodBinHeader from './components/food-bin-header/FoodBinHeader';

const FoodBinPageContainer = styled.div`
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
        <FoodBinPageContainer>
            <FoodBinHeader />
        </FoodBinPageContainer>
    )
}