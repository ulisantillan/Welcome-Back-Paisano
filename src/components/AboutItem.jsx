import React from "react";
import {Grid, Row, Col, Image} from "react-bootstrap";

const AboutItem = props => (<Grid>
  <Row>
    <Col sm={6} md={3} className="person-wrapper">
      <Image src={`https://imgur.com/${props.teamMember.photo}`} circle="circle" className="profile-pic"/>
      <p>
        {`${props.teamMember.name}`}
        <br/>
			  {`${props.teamMember.about}`}
      </p>
    </Col>
  </Row>
</Grid>);
export default AboutItem;
