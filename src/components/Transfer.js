import React, { Component } from 'react'

export class Transfer extends Component {

    render() {
        if(this.props.user) {
            return ( 
            <h2>TRANSFER PAGE </h2> 
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

export default Transfer
