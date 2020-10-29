import React, { Component } from 'react'
import {connect} from 'react-redux'
import Button from './Button'
import {Link} from 'react-router-dom'
import Downloads from './Downloads'
import Test from './Test'
import {fetchCampaign} from '../actions/campaignActions'

const reportData = {
    title: 'title'      
}
class Report extends Component {    
    render(){
        return(
            <div>
                <h2>Email Campaign Report</h2>
            <p>
                {this.props.campaign.campaign_title}
                {console.log(this.props.campaign)}
            </p>
            <a href={`http://localhost:9000/campaigns/${this.props.campaign.id}/download`} target="_blank"><button>Download</button></a>


            </div>
        )
        
    }
}

export default connect(null, {fetchCampaign})(Report)