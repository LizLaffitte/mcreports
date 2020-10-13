import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchCampaigns} from '../actions/campaignActions'

class Button extends Component{
    
    getCampaigns = (e) =>{
        e.preventDefault()
        this.fetchCampaigns()
        
    }
    render(){
        return(
            <button onClick={this.props.fetchCampaigns}>Get Campaigns</button>
        )
    }
}
export default connect(null, {fetchCampaigns})(Button)