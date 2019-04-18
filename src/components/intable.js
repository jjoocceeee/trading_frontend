import React, { Component } from 'react'
import {Table} from 'react-materialize';
import axios from 'axios';

export default class Intable extends Component {
  constructor(props){
    super(props);
    this.state = {size: 3}
  }

  componentDidMount() {
    console.log("HERE");
    axios.get(`https://hspapi.herokuapp.com/v1/trades`)
      .then(res => {
        const trades = JSON.parse(res.data.trades);
        this.setState({ trades });
      });
  }

  getRows(trades){
    if (!trades) return null;
    return trades.map(trade => {
      return <tr><td>{trade.filled_at}</td><td>{trade.symbol}</td><td>{trade.qty}</td><td>${trade.filled_avg_price}</td><td>{trade.side}</td></tr>
    });
  }

  render(){
    // let rows = [];
    // for (var i = 0; i < this.state.size; i++){
    //   let rowID = `row${i}`
    //   let cell = []
    //   for (var idx = 0; idx < this.state.size; idx++){
    //     let cellID = `cell${i}-${idx}`
    //     cell.push(<td key={cellID} id={cellID}>{idx}</td>)
    //   }
    //   rows.push(<tr key={i} id={rowID}>{cell}</tr>)
    // }
    return(
      <div className='container'>
        <Table>
          <thead>
            <tr>
                <th>Date</th>
                <th>Stock</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Buy/Sell</th>
            </tr>
          </thead>
            <tbody>
              {this.getRows(this.state.trades)}
            </tbody>
          </Table>
      </div>
    )
  }
}