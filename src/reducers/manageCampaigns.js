export default function manageCampaigns(state=[], action){
    switch(action.type){
        case 'ADD_CAMPAIGNS':
            return action.campaigns
        case 'ADD_CAMPAIGN':
            return [...state, action.campaign]
        default:
            return state
    }
    
}