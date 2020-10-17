import React from 'react';
import './App.css';
import Campaigns from './components/Campaigns'
import {Component} from 'react'
import Report from './components/Report'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchCampaigns} from './actions/campaignActions'

class App extends Component {
  componentDidMount(){
    this.props.fetchCampaigns()
}

  findCampaign = (id) =>{
    return (this.props.campaigns.find(campaign => campaign.id == id))
  }

  render(){
    return (
      <Router>
      <div className="App">
        <h1>MailChimp Reports</h1>
        <Switch>
          <Route exact path='/' render={props => <Campaigns {...props} /> } />
          <Route exact path="/reports/:id" render={props => <Report {...props} campaign={this.findCampaign(props.match.params.id)}/>} />
        </Switch>
      </div>
      </Router>
    );
  }

}
const mapStateToProps = ({campaigns}) => ({campaigns})
export default connect(mapStateToProps, {fetchCampaigns})(App)
