import { combineReducers } from 'redux'
import manageCampaigns from './manageCampaigns'

const rootReducer = combineReducers({
    campaigns: manageCampaigns
})

export default rootReducer