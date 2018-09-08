import React from 'react';
import ResourceItem from './ResourceItem.jsx';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';


const ResourcesList = props => (
  <Col>
    {props.list.map((resource, index) =>(
      <ResourcesList resource={resource} /* index={id}*/ />
    ))}
  </Col>
);
export default ResourcesList;
