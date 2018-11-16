import MyFood from "./MyFood";
import SelectorFactory from './SelectorFactory'
import { connectAdvanced } from 'react-redux'

export default connectAdvanced(SelectorFactory)(MyFood)