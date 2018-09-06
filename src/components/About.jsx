import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './About.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Row className="show-grid text-center">
          <Col sm={6} md={3} className="person-wrapper">
            <Image src="assets/uli.jpg" circle className="profile-pic"/>
            <h3>ULI</h3>
            <p>HERE I ADD ABOUT ULI LOL </p>
          </Col>

          <Col sm={6} md={3} className="person-wrapper">
            <Image src="assets/fer.jpg" circle className="profile-pic"/>
            <h3>Fernando</h3>
            <p>About Mr.Fernando.</p>
          </Col>
          </Row>
        <Row>
          <Col sm={6} md={3} className="person-wrapper">
            <Image src="assets/moi.jpg" circle className="profile-pic"/>
            <h3>MOI</h3>
            <p>Lets SEE wht moi HAS to say</p>
          </Col>
          <Col sm={6} md={3} className="person-wrapper">
            <Image src="assets/defpic.jpg" circle className="profile-pic"/>
            <h3>Brian</h3>
            <p>about brian </p>
          </Col>
        </Row>
      </Grid>
    )
  }
}
