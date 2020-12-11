import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Redirect } from 'react-router-dom'
import './Login.css'
import axios from 'axios'


export class Login extends Component {

    constructor(props) {
      super(props)
  
      this.state = {
        username: '',
        password: '',
        isChecked: false
      }
    }

    componentDidMount() {
      if(localStorage.getItem('username') !== null) {
        this.setState({
          username: localStorage.getItem('username'),
          password: localStorage.getItem('password'),
          isChecked: true
        })
      }
    }

    handleChangeUsername = async event => {
      const username = event.target.value
      this.setState({ username })
  }

    handleChangePassword = async event => {
      const password = event.target.value
      this.setState({ password })
  }


    handleLogin = async event => {
      event.preventDefault(); 
      const {username, password} = this.state
      const payload = {
        username: username,
        password: password
      }
      const header = {
        headers: {
                  'Content-Type': 'application/json',
                  'x-api-key': 'eLQcqhBtUk9dZqxRhrCF2ahQH2TQUlXF7rlm1ug0'
                  }
      }
    const url = 'https://u8fpqfk2d4.execute-api.ap-southeast-1.amazonaws.com/techtrek2020'

    axios.post(url + "/login", payload, header )
      .then(res => { console.log(res); 
        console.log(res.data.firstName)
        sessionStorage.setItem('username', res.data.firstName)
        sessionStorage.setItem('auth', true)
        sessionStorage.setItem('custID', res.data.custID)
        this.setState({
          loggedIn: true,
        })
        this.props.setUser(payload.username)
        this.props.setAuth(true)
        this.props.startTimer()

        if(this.state.isChecked) {
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        } else {
          localStorage.clear();
        }
        
      })
      .catch(err =>  { console.log(err.response)
        // this.setState({
        //   message: err.response.data.error,
        //   invalidLogin: true
        // })
      
      })
    }

    handleClose = () => {
      this.setState({
        invalidLogin: false
      })
    }

    onChangeCheckbox = event => {
        this.setState({
            isChecked: event.target.checked
        })
    }
 
    render() {

      if(this.state.loggedIn) {
        console.log('login success');
        return <Redirect to ='/'/>;
      }

      let error = '';

      if (this.state.invalidLogin) {
        error = (
          <div className="alert alert-danger" role="alert" style={{display: 'inline', padding: '10px 50px'}}>{this.state.message}
            <div style={{display: 'inline', padding: '0 10px 0 60px'}}>
            <button style={{background:'none', border:'none'}} onClick={this.handleClose}>
              <i className="fas fa-times"></i>
            </button>
            </div>
          </div>
        )
      } else {
        error = '';
      }

      const { username, password, isChecked } = this.state

      return(
        <div className ='form-group'>
            <h2>Login</h2>
            {error}
          
            <label className="form-label">Username: </label>
            <input className='form-control' type="text" value={username} onChange={this.handleChangeUsername} placeholder='Username'/>
        
          
            <label>Password: </label>
            <input className='form-control' type="password" value={password} onChange={this.handleChangePassword} placeholder='Password'/>
          <label> 
          <input className="checkbox" type="checkbox" checked={isChecked} onChange={this.onChangeCheckbox} />
          Remember Me
          </label>
          <button className='btn btn-primary btn-block' onClick={this.handleLogin}>Login</button>

        </div>

      )
    }
}

export default Login
