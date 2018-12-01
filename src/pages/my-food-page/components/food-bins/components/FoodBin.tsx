import * as React from 'react'
import styled from 'styled-components'
import { Colors } from 'styling.main'

const FoodBinContainer = styled.div`
    width: calc(90% - 40px);
    max-width: calc(500px - 40px);
    height: calc(125px - 40px);
    cursor: pointer;
    box-shadow: 0px 5px 15px rgba(100, 100, 100, 0.1);
    border-radius: 5px;
    background-color: white;
    margin-bottom: 5vh;

    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 3fr;
    grid-template-areas:
        "binIcon title"
        "binIcon description"
    ;
    padding: 20px;
    grid-gap: 10px;
`

const FoodBinTitle = styled.div`
    grid-area: title;
    font-size: 1.5em;
    color: ${Colors.HeaderColor};
`

const FoodBinDescription = styled.div`
    grid-area: description;
    font-size: 0.9em;
    color: rgb(50, 50, 50);
    padding-left: 10px;
`

const FoodBinIcon = styled.img`
    grid-area: binIcon;
    width: auto;
    height: 100%;
`

export default props => {

    const {
        name,
        description,
        iconSrc,
    } = props

    return (
        <FoodBinContainer>
            <FoodBinIcon src={iconSrc} />
            <FoodBinTitle>{name}</FoodBinTitle>
            <FoodBinDescription>
                {description}
            </FoodBinDescription>
        </FoodBinContainer>
    )
}