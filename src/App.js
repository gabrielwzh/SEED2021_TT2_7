import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Nav from './components/Nav'
import Login from './components/Login'
import Account from './components/Account'
import Transfer from './components/Transfer'
import History from './components/History'
import TimerModal from './components/TimerModal'

export class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      user: sessionStorage.getItem("username"),
      auth: sessionStorage.getItem("auth"),
      timer: false,
      modal: true
    }
  }

  componentDidMount() {
    if (this.state.auth) {
      this.startTimer()
    }
  }

  setUser = user => {
    this.setState({ user })
  }

  setAuth = auth => {
    this.setState({ auth })
  }

  startTimer = () => {
    setTimeout(() => {
      this.setState({timer: true})
      console.log('extend session');
    }, 3* 60000) //
  }

  
  logout = () => {
    sessionStorage.clear(); 
    this.setState({
      user: null,
      auth: null,
      timer: false
    })
  }

  modalExtend = () => {
    this.setState({
      timer: false
    })
    this.startTimer()
  }

  setModal = modal => {
    this.setState({ modal })
  }


  render() {
    return (
      <div className="App">
        <Router>
        <Nav user={this.state.user} auth={this.state.auth} logout={this.logout}/>
        <TimerModal auth={this.state.auth} timer={this.state.timer} modalExtend={this.modalExtend} logout={this.logout}
        modal={this.state.modal} setModal={this.setModal} />
        <div className="wrapper">
          <div className="form-wrapper">
              <Switch>
              <Route path="/" exact component={() => <Home user={this.state.user}/>}/>
              <Route path="/login" exact component={() => 
                <Login setUser={this.setUser} setAuth={this.setAuth} startTimer={this.startTimer}/>}/>
                <Route path="/account" exact component={() => <Account user={this.state.user}/>}/>
                <Route path="/transfer" exact component={() => <Transfer user={this.state.user}/>}/>
                <Route path="/history" exact component={() => <History user={this.state.user}/>}/>
              </Switch>
          </div>
        </div>
        </Router>
      </div>
    )
  }
}

export default App
