import FoodBins from './FoodBins'
import SelectorFactory from './selector-factory'
import { connectAdvanced } from 'react-redux'


export default connectAdvanced(SelectorFactory)(FoodBins)