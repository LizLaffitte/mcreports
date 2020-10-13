import React, { Component } from 'react'
import {connect} from 'react-redux'
import {fetchCampaigns} from '../actions/campaignActions'

class Campaigns extends Component{
    componentDidMount(){
        this.props.fetchCampaigns()
    }
    render(){
        debugger
        return(
           <p>

           </p>
        )
    }
}
const mapStateToProps = ({campaigns}) => ({campaigns})
export default connect(mapStateToProps, {fetchCampaigns})(Campaigns)