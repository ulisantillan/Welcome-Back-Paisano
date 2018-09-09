import React from "react";
import ResourceItem from "./ResourceItem.jsx";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";

const ResourcesList = props => (
	<Col>
		{props.resources.map((resource, index) => (
			<ResourceItem resource={resource} index={index} />
		))}
	</Col>
);
export default ResourcesList;