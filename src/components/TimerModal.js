import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'


export class TimerModal extends Component {

    state = {
        show: this.props.modal
    }

    handleClose = () => { 
        this.props.setModal(false);
    }

    handleExtend = () => {
        this.props.setModal(false);
        this.props.modalExtend()

    }

    handleLogout = () => {
        this.props.setModal(false);
        this.props.logout()
    }


    render() {
        if(this.props.auth && this.props.timer) {
            return ( 
              <Modal show={this.state.show} onHide={this.handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Session</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your session has expired, do you want to extend session?</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={this.handleExtend}>
                    Continue
                  </Button>
                  <Button variant="primary" onClick={this.handleLogout}>
                    Logout
                  </Button>
                </Modal.Footer>
              </Modal>
            )
        } else {
        return (
            <div>
            </div>
        )
        }
    }

}

export default TimerModal



