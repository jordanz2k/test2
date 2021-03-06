import './Welcome.css';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import React, { Component } from "react";
import NavBar from './Navbar'

class FrontPage extends Component{

    componentDidMount() {
         fetch('/user', {credentials: 'include'}).then((response) => {
            response.json().then(body => {
                if (body.username) {
                    this.props.history.push('/home');
                }
            });
        });
    }

    render() {

        return(

            <div>
                <NavBar />

                <br />
                    <div className="container p-3 m-md-3 position-relative overflow-hidden ">
                          <h1 className="display-4 font-weight-bold purple-text">RunNErrand</h1>
                            <br />
                          <p className="lead font-weight-normal">Find someone to do your random or every tasks!</p>
                          <Link to="/login"><Button className="purple-btn font-weight-bold px-5" >Lets Go</Button></Link>

                    </div>


            </div>
        );
    }
}

export default FrontPage;


