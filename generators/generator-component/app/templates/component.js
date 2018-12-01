import * as React from 'react'
import styled from 'styled-components'
import { Colors } from 'styling.main'

const <%= component %>Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export default props => {

    const {

    } = props

    return (
        <<%= component %>Container>

        </<%= component %>Container>
    )
}