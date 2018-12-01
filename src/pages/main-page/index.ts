import MainPage from './MainPage'
import SelectorFactory from './selector-factory'
import { connectAdvanced } from 'react-redux'


export default connectAdvanced(SelectorFactory)(MainPage)