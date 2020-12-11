import React, { Component } from 'react'
import axios from 'axios'

export class Transfer extends Component {



    constructor(props) {
        super(props)
    
        this.state = {
         custID: sessionStorage.getItem("username"),
          payeeID: '',
          amount: '',
          message: '',
          expensesCat: '',
          eGift: false,

          errorPayeeID: '',
          errorAmt: '',
          errorMsg: '',
          errorSubmit: ''
        }
      }


    handleEmptyForm = () => {
        this.setState({
            payeeID: '',
            amount: '',
            message: '',
            expensesCat: '',
            eGift: false,  
        })
    }

    handleTransfer = async event => {
        if(window.confirm('Confirm transfer?')) {
         
        event.preventDefault(); 
        if ( this.state.errorPayeeID !== '' || this.state.errorAmt !== '' || this.state.errorMsg !== '' 
        || this.state.payeeID === '' || this.state.amount === '' || this.state.message === '')
        {
            this.setState({errorSubmit: 'Invalid - Check your form details'})            
            console.log('submit error')
        } else {

            const header = {
                headers: {
                          'Content-Type': 'application/json',
                          'x-api-key': 'eLQcqhBtUk9dZqxRhrCF2ahQH2TQUlXF7rlm1ug0',
                          'Access-Control-Allow-Origin' : '*',
                          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS' 
                        }
              }
              const data = {
                custID: this.state.custID,
                payeeID: this.state.payeeID,
                dateTime: Date.now(),
                amount: this.state.amount,
                expensesCat: this.state.expensesCat,
                eGift: this.state.eGift,
                message: this.state.message

                }
            


              const url = 'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020'

              axios.post(url + "/transaction/add", data, header )
                .then(res => { console.log(res);
                    console.log('success');
                  
                })
                .catch(err =>  { console.log(err.response)
                  // this.setState({
                  //   message: err.response.data.error,
                  //   invalidLogin: true
                  // })
                
                })


    
        }
    }
}

    

handleChangePayeeID = async event => {
    const payeeID = event.target.value
    this.setState({payeeID})
    // if((/^[0-9]*$/).test(payeeID)) {
    // this.setState({ payeeID, errorPayeeID: '', errorSubmit: ''})
    // } else {
    //     this.setState({ payeeID, errorPayeeID: 'Integer only'})
    // }
  }

    handleChangeAmt = async event => {
    const amount = event.target.value
    this.setState({ amount })
    }

    handleChangeMessage = async event => {
        const message = event.target.value
        this.setState({ message })
        }



    handleChangeProduct = async event => {
    const expensesCat = event.target.value
    this.setState({ expensesCat })
}

    onChangeCheckbox = async event => {
    const eGift = event.target.value
    this.setState({ eGift })
}


    render() {

        const { payeeID, amount, message, expensesCat, eGift } = this.state

        if(!this.props.user) {
            return ( 
            <h2>Hi {this.props.user}! </h2> 
            )
        } else { 
        return (
            <div>
            <h2>Transfer Payment</h2>
          <div className='form-group' style={{ margin: '10px 10px' }}>
            <label>Recepient ID: </label>
            <input className='form-control' type="text" value={payeeID} onChange={this.handleChangePayeeID} placeholder='Recepient ID'/>
            <span className="errorMessage">{this.state.errorPayeeID}</span>
          </div>
          <div className='form-group' style={{ margin: '10px 10px' }}>
            <label>Amount: </label>
            <input className='form-control' type="number"  min="1" step="1" value={amount} onChange={this.handleChangeAmt} placeholder='Amount'/>
            <span className="errorMessage">{this.state.errorAmt}</span>
          </div>
          <div className='form-group' style={{ margin: '10px 10px' }}>
            <label>Message: </label>
            <input className='form-control' type="text"  value={message} onChange={this.handleChangeMessage} placeholder='Message'/>
            <span className="errorMessage">{this.state.errorMsg}</span>
          </div>
          <div className='form-group' style={{ margin: '10px 10px' }}>
            <label>Expense Category: </label>
            {/* <select className="form-control" defaultValue={expensesCat} onChange={this.handleChangeProduct}>
                    <option value='Food'>Food</option>
                    <option value='Transport'>Transport</option>
                    <option value='Insurance'>Insurance</option>
                    <option value='Shopping'>Shopping</option>
                    <option value='Entertainment'>Entertainment</option>
            </select> */}
            <input className='form-control' type="text"  value={expensesCat} onChange={this.handleChangeProduct} placeholder='Message'/>
          </div>
          <input type="checkbox" checked={eGift} onChange={this.onChangeCheckbox} />
          <label>E-Gift</label>
          <button className='btn btn-primary btn-block' onClick={this.handleTransfer}>Submit Transfer</button> 
          
            </div>

        )
        }
    }
}

export default Transfer
