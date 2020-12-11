import React, { Component } from 'react'

export class Account extends Component {

    render() {
        if(this.props.user) {
            return ( 
            <h2>Hi {this.props.user} </h2> 
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
