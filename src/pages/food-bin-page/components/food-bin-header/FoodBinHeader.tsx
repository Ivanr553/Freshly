import * as React from 'react'
import styled from 'styled-components'
import { Colors } from 'styling.main'

const FoodBinHeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to bottom right, ${Colors.HeaderColor} 0%, ${Colors.HeaderColorGradient} 100%);
    position: fixed;
    z-index: 1;
    top: 0;
    box-shadow: 0px 5px 15px rgba(100, 100, 100, 0.1);
    opacity: 0.9;
`

const FoodBinHeaderImage = styled.img`
`

const FoodBinHeaderTitle = styled.div`
    font-size: 2.5em;
    font-weight: 300;
    color: white;
    cursor: default;
`

export default props => {

    const {

    } = props

    return (
        <FoodBinHeaderContainer>
            <FoodBinHeaderImage />
            <FoodBinHeaderTitle>My Food</FoodBinHeaderTitle>
        </FoodBinHeaderContainer>
    )
}