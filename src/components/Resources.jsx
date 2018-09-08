import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Resources.css';
import $ from 'jquery';
import ResourcesList from './ResourcesList.jsx';

export default class Resources extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list:[]
    };
    this.getList = this.getList.bind(this);
  }
  componentDidMount() {
    this.getList()
      }
  getList() {
    $.ajax({
      url: '/resources',
      success: (data) => {
      this.setState({
        list: data.data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render() {
    return (
      <div>
        <style>{'body { background-color: HoneyDew; }'}</style>
        <Grid>
          <Col xs={12} sm={4} smOffset={2}>
            <Image src="assets/resources.jpg" className="about-profile-pic" rounded />
            <h3>RESOURCES</h3>
            <Col xs={12} sm={7} className="sidebar-section">
              <ResourcesList  resources={this.state.list}/>
            </Col>
          </Col>
        </Grid>
      </div>
    )
  }
}
