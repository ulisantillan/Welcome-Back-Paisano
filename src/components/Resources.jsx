import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Resources.css';


export default class Resources extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={4} smOffset={2}>
            <Image src="assets/resources.jpg" className="about-profile-pic" rounded />
            <h3>RESOURCES</h3>
            <Col xs={12} sm={7} className="sidebar-section">
              <Image src="assets/sed.jpg" rounded />
              <p>talk about this headline </p>
            </Col>
            <Col xs={12} md={7} className="sidebar-section">
              <Image src="assets/oda.jpg" rounded />
              <p>talk about this headline </p>
            </Col>
            <Col xs={12} sm={7} className="sidebar-section">
              <Image src="assets/styfe.jpg" rounded />
              <p>talk about this headline </p>
            </Col>
            <Col xs={12} sm={7} className="sidebar-section">
              <Image src="assets/holacode.jpg" />
              <p>talk about this headline </p>
            </Col>
          </Col>
        </Grid>
      </div>
    )
  }
}
