import React, { Component } from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'

export class History extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            eGift: '',
            dateTime: '',
            expensesCat: '',
            amount: '',
            message: '',
            payeeID: '',
            data: [],
            isLoading: false,
        }
      }

    handleChangeCustID = async event => {
        const custID = event.target.value
        this.setState({ custID })
    }

    handleSubmit = async event => {
        event.preventDefault(); 
        const data = {
          custID: this.state.custID
        }
        const header = {
          headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': 'eLQcqhBtUk9dZqxRhrCF2ahQH2TQUlXF7rlm1ug0'
                    }
        }
      const url = 'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020'
  
      axios.post(url + "/transaction/view", data, header)
      .then(res => {
        console.log('Data fetched', res)
        this.setState({
          custID: data,
          data: res.data
        })
      })
        
      .catch(err =>  { console.log(err.response)
          // this.setState({
          //   message: err.response.data.error,
          //   invalidLogin: true
          // })
        
        })
      }

    
    render() {

        const { custID } = this.state
        if(this.props.user) {
            return ( 
            <div>
            <h4> Transaction History </h4>
              <div className='form-group' style={{ margin: '0px' }}>
                <label>Customer ID: </label>
                <input className='form-control' type="number" min='0' value={custID} onChange={this.handleChangeCustID}/>
              
                <div>
                <table className="accounts-table">
                  <thead>
                    <tr>
                      <th align="right">Date / Time</th>
                      <th align="right">Payee Id</th>
                      <th align="right">Amount</th>
                      <th align="left">Expenses Cat</th>
                      <th align="left">Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((elem, idx) => (
                      <tr key={idx}>
                        <th align="left">{elem.dateTime}</th>
                        <th scope="left">{elem.payeeID}</th>
                        <th scope="left">{elem.amount}</th>
                        <th align="left">{elem.expensesCat}</th>
                        <th align="left">{elem.message}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            
              
              </div>
              <div style={{textAlign: 'center', marginTop: '30px'}}>
              <button className='btn btn-light btn-md' style={{width: '150px'}} onClick={this.handleSubmit}>Submit</button>
              </div>
            </div>

            
            )
        } else {
        return (
            <div>
                <h2> You're not logged in </h2> 
            </div>
        )
        }

      }
}

export default History
