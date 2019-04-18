import React, { Component } from 'react'
import axios from 'axios';

export default class account extends Component {
  constructor(props){
    super(props);
    this.state = {size: 3}
  }
  gainLoss(cash){
    return parseInt(cash) - 100000;
  }


  componentDidMount() {
    console.log("HERE");
    axios.get(`https://hspapi.herokuapp.com/v1/account_info`)
      .then(res => {
        const account = JSON.parse(res.data.info);
        this.setState({ account });
      });
  }

  createcard(account){
    if (!account) return null;
    return <div><p>Account Value: ${account.portfolio_value}</p>
    <p>Buying Power: ${account.buying_power}</p>
    <p>Gain/Loss: ${this.gainLoss(account.cash)}</p> </div>;
  }

  render(){
    return(
        <div className="row">
        <div className="col s12 m12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">Account Information</span>
              {this.createcard(this.state.account)}             
            </div>
          </div>
        </div>
      </div>
    )
  }
}