import React, { Component } from 'react'
// import {connect} from 'react-redux'
// import {fetchCampaigns} from '../actions/campaignActions'
// import Button from './Button'

class Report extends Component {
    
    render(){
        return(
            <p>
                {this.props.campaign.campaign_title}
                {console.log(this.props.campaign)}
            </p>
        )
        
    }
}

export default Report