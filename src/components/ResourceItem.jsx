import React from "react";
import {Grid, Row, Col, Image} from "react-bootstrap";

const ResourceItem = props => (<Grid>
  <Row>
    <Col xs={12} sm={7} className="sidebar-section">
      <Image src="assets/holacode.jpg" rounded="rounded"/>
      <p>
        {
          `${props.resource.name}
    ${props.resource.description}
    ${props.resource.url}`
        }{" "}
      </p>

    </Col>
  </Row>
</Grid>);
export default ResourceItem;
