import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Col, Image, Button} from 'react-bootstrap';
import './Home.css';

export default class About extends Component {
  render() {
    return (<div>
      <style>
        {
          'body { background-color: gold; }'
        }</style>
      <Grid>
        <Jumbotron>
          <h2>Welcome Home</h2>
          <p>here i can add text wht ever i want
          </p>
          <Link to="/learnMore">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <Col xs={12} sm={4} smOffset={2}>
          <h3>COMING HOME</h3>
          <Image src="assets/mexlife.jpg" className="about-profile-pic" rounded="rounded"/>
          <p>add wht ever text we want
          </p>
          <p>and moreeee</p>
          <p>waitt just moreee textt</p>
          <p>and last text lol
          </p>
        </Col>
      </Grid>
    </div>)
  }
}
