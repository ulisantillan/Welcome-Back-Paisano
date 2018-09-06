import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button,Panel} from 'react-bootstrap';
import './LearnMore.css';



export default class LearnMore extends Component {
  render() {
    return (
    <div>
    <style>{'body { background-color: green; }'}</style>
<Panel bsStyle="primary">
  <Panel.Heading>
    <Panel.Title componentClass="h3">EXTRA 1</Panel.Title>
  </Panel.Heading>
  <Panel.Body>ADD TXT here for in the info of the extra 1</Panel.Body>
</Panel>

<Panel bsStyle="success">
  <Panel.Heading>
    <Panel.Title componentClass="h3">EXTRA 2</Panel.Title>
  </Panel.Heading>
  <Panel.Body>ADD TXT here for in the info of the extra 2</Panel.Body>
</Panel>

<Panel bsStyle="info">
  <Panel.Heading>
    <Panel.Title componentClass="h3">EXTRA 3</Panel.Title>
  </Panel.Heading>
  <Panel.Body>ADD TXT here for in the info of the extra 3</Panel.Body>
</Panel>

<Panel bsStyle="warning">
  <Panel.Heading>
    <Panel.Title componentClass="h3">EXTRA 4</Panel.Title>
  </Panel.Heading>
  <Panel.Body>ADD TXT here for in the info of the extra 4</Panel.Body>
</Panel>

<Panel bsStyle="danger">
  <Panel.Heading>
    <Panel.Title componentClass="h3">EXTRA 5</Panel.Title>
  </Panel.Heading>
  <Panel.Body>ADD TXT here for in the info of the extra 5</Panel.Body>
</Panel>
</div>

    )
  }
}
