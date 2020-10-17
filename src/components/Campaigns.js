import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchCampaigns} from '../actions/campaignActions'
import {Link} from 'react-router-dom'
import Button from './Button'

class Campaigns extends Component{
    componentDidMount(){
        this.props.fetchCampaigns()
        
    }

    renderCampaigns = () => {
        return this.props.campaigns.map(campaign => {
            return(<li key={campaign.id}>{campaign.campaign_title} <Link to={`/reports/${campaign.id}`}><Button text="See Report"/></Link></li>)
        })

    }
    render(){
        return(
           <div>
               <h1>Recent Campaigns:</h1>
               <ul>
                   {this.renderCampaigns()}
               </ul>
           </div>
        )
    }
}
const mapStateToProps = ({campaigns}) => ({campaigns})
export default connect(mapStateToProps, {fetchCampaigns})(Campaigns)