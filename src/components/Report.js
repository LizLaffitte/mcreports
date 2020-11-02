import React, { Component } from 'react'
import Button from './Button'


const reportData = {
    title: 'title'      
}
class Report extends Component {    
    render(){
        return(
            <div>
                <a href="/">Back</a>
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

export default Report