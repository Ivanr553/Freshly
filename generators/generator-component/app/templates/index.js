import <%= component %> from './<%= component %>'
import SelectorFactory from './selector-factory'
import { connectAdvanced } from 'react-redux'


export default connectAdvanced(SelectorFactory)(<%= component %>)