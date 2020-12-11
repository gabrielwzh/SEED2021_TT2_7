import React, { Component } from 'react'

export class Home extends Component {
    

    render() {
        if(this.props.user) {
            return ( 
            <h2>HOME PAGE </h2> 
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

export default Home
