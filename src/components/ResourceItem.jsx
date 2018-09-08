import React from 'react';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';


const ResourceItem = props => (
  <Col xs={12} sm={7} className="sidebar-section">
    <Image src={`https://imgur.com/${props.resource.photo}`} rounded />
  <p>{`${props.resource.name}
    ${props.resource.description}
    ${props.resource.url}`} </p>
  </Col>
);
export default ResourceItem;
