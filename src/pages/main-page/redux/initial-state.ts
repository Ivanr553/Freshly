import * as Interfaces from 'interfaces.main'
import * as MainPageInterfaces from 'page.main-page/interfaces'

import MyFood from 'page.my-food-page'

const initialState: MainPageInterfaces.MainPageReducerInterface = {
    currentPage: MyFood 
}

export default initialState