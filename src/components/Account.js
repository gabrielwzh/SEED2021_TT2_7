import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

export class Account extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            custID: '',
            accountName: '',
            accountNumber: '',
            availableBal: '',
            linked: ''
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
  
      axios.post(url + "/accounts/view", data, header )
        .then(res => { console.log('Data fetched', res)
            this.setState({
              data: res
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

        const { custID, accountName, accountNumber, availableBal, linked } = this.state

        if(this.props.user) {
            return ( 
            <div>
            <h4> Registration</h4>
              <div className='form-group' style={{ margin: '0px' }}>
                <div className='form-group'>
                <label>Customer ID: </label>
                <input className='form-control' type="int" value={custID} onChange={this.handleChangeCustID}/>
                <span>{accountName}</span> 
                <span>{accountNumber}</span>
                <span>{availableBal}</span>
                <span>{linked}</span>
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

export default Account
