import * as React from 'react'
import styled from 'styled-components'
import { Colors } from 'styling.main'

const MainPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default props => {

    const {
        CurrentPage
    } = props

    return (
        <MainPageContainer>
            <CurrentPage />
        </MainPageContainer>
    )
}