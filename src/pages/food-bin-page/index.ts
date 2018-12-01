import FoodBinPage from "./FoodBinPage";
import SelectorFactory from './SelectorFactory'
import { connectAdvanced } from 'react-redux'

export default connectAdvanced(SelectorFactory)(FoodBinPage)