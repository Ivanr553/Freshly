import * as React from 'react'
import styled from 'styled-components'
import { Colors } from 'styling.main'
import FoodBin from './components/FoodBin';

const FoodBinsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    z-index: 5;
    margin-top: 125px;
`

export default props => {

    const {
        bins
    } = props

    return (
        <FoodBinsContainer>
            {bins.map(bin => {
                return <FoodBin {...bin} />
            })}
        </FoodBinsContainer>
    )
}