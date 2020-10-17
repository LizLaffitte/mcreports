import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchCampaigns} from '../actions/campaignActions'
import Button from './Button'

class Campaigns extends Component{
    componentDidMount(){
        this.props.fetchCampaigns()
        
    }

    getReport = () =>{
        console.log("Click")
    }

    renderCampaigns = () => {
        return this.props.campaigns.map(campaign => {
            return(<li>{campaign.campaign_title} <Button text="See Report" click={this.getReport} /></li>)
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