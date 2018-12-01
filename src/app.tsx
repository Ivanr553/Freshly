import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store/store'
import styled from 'styled-components'

import MainPage from 'page.main-page'

const AppWrapper = styled.div`
    font-family: 'Lato', sans-serif;
`

class App extends React.Component {

    render() {
        return (
            <Provider store={Store}>
                <AppWrapper>
                    <MainPage />
                </AppWrapper>
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)