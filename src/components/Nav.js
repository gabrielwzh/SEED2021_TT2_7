import React, { Component } from 'react'
import logo from '../DBSLogo.png'
import { Link } from 'react-router-dom'
import './Login.css'

export class Nav extends Component {

  // constructor(props) {
  //   super(props)

  //   this.state = {
  //     timer: this.props.timer
  //   }
  // }

  // componentDidMount() {
  //   this.myInterval = setInterval(() => {
  //     var newCount = this.state.timer - 1;
  //     if(newCount >= 0) {
  //     this.setState(prevState => ({ 
  //       timer: prevState.timer - 1
  //     })) }
  //     else {
  //       clearInterval(this.myInterval)
  //       this.props.setTimer(0)
  //     }
  //   }, 1000)
  // }

  // componentWillUnmount() {
  //   clearInterval(this.myInterval);
  // }


  // handleLogout = () => {
  //   sessionStorage.clear();
  //   clearInterval(this.myInterval)
  //   // this.setState({ timer: 20 })
  //   this.props.setUser(null);
  //   this.props.setToken(null);
  //   this.props.setAuth(null);
  //   this.props.setTimer(null);
  // }

    render() {
      let buttons;

      if (this.props.user && this.props.auth ) {
        buttons = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
          {/* <span className="navbar-brand h1">{this.props.timer}</span> */}
          </li>
          <li className="nav-item">
            <Link to={'/login'} onClick={this.props.logout} className="nav-link">Logout</Link>
          </li>
        </ul>
      
        )

      } else {
        buttons = (
          <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to="/login" className="nav-link">Login</Link>
          </li>
        </ul>
        )
      }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
            <Link to="/" className="navbar-brand">
              <img src={logo} width="100" alt="dbs logo"/>
            </Link>
              <Link to="/account" className="navbar-brand">Account</Link>
              <Link to="/transfer" className="navbar-brand">Transfer</Link>
              <Link to="/history" className="navbar-brand">History</Link>
              {/* <div className="collapse navbar-collapse"> */}
              {buttons}
              </div>
            {/* </div> */}
          </nav>
        )
    }
}

export default Nav
