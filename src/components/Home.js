import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export class Home extends Component {

    render() {
        if(this.props.user) {
            return ( 
            <h2>Hi {this.props.user}! </h2> 
            )
        } else


            return (
                <header id="home">

                    <div className="row banner">
                        <div className="banner-text">
                            <h2>Welcome to DBS</h2>
                            <ReactTypingEffect
                                text="Please login to your e-wallet!"
                                className="typing"
                                speed="100"
                                eraseDelay="9999999999999"
                            />

                            <br></br><br></br>
                            <ul className="social">
                                <a href="https://www.facebook.com/dbs.sg/" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="fb" icon={faFacebook} />
                                </a>

                                <a href="https://twitter.com/dbsbank?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="twitter" icon={faTwitter} />
                                </a>
                                <a href="https://www.instagram.com/dbsbank/?hl=en" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon className="insta" icon={faInstagram} />
                                </a>

                            </ul>

                        </div>
                    </div>

                    <p className="scrolldown">
                        <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                    </p>

                </header>
            );
    }
}


export default Home
