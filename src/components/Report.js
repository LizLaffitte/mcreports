import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Button from './Button'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Downloads from './Downloads'
import Test from './Test'

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
            {/* <Downloads data={this.props.campaign} /> */}
            <Test />
            </div>
        )
        
    }
}

export default Report