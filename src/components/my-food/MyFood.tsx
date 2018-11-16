import * as React from 'react';
import styled from 'styled-components'

const MyFoodContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default props => {

    const {
        testing,
        onClickHandler
    } = props

    return (
        <MyFoodContainer onClick={onClickHandler}>
            Hello from My Food Container, {testing ? "true" : "false"}
        </MyFoodContainer>
    )
}