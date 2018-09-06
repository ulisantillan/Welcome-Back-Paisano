import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import './News.css';

export default class News extends Component {
  render() {
    return (
      <div>
      <style>{'body { background-color: lightblue; }'}</style>
        <Image src="assets/rights.jpg" className="header-image" />
        <Grid>
          <h2>News</h2>
          <Row>
            <Col xs={12} sm={8} className="main-section">
              <p>maybe we could add a news for like to be ware of this here in cdmx  </p>
              <p>add text here</p>
              <p>add text here</p>
              <p>add text here</p>
              <p>add text here</p>
            </Col>
            <Col xs={12} sm={4} className="sidebar-section">
              <Image src="assets/newpaper.jpg" />
              <p>talk about this headline </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
