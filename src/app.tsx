import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store/store'

import MyFood from 'component.my-food'


class App extends React.Component {

    render() {
        return (
            <Provider store={Store}>
                <MyFood />
            </Provider>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("root")
)