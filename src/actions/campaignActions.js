export const addCampaigns = campaigns => {
    return {
        type: "ADD_CAMPAIGNS",
        campaigns
    }

}





//Async

export const fetchCampaigns = () => {
    const baseUrl = `http://localhost:3001/api/v1/campaigns`
    return dispatch => {
        return fetch(baseUrl, {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          })
        .then(response => response.json())
        .then(campaignsData => dispatch(addCampaigns(campaignsData)))
        .catch(console.log())
    }
}
