import React from 'react';
import { Col, Container, Row, Footer,Button,Fa } from 'mdbreact';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './Footer.css'


class FooterPage extends React.Component {
    render(){
        return(
            <Footer color="unique-color-dark" className="page-footer font-small pt-0">
                <div style={{backgroundColor: '#2892D7'}}>
                    <Container>
                        <Row className="py-4 d-flex align-items-center">
                            <Col md="6" lg="5" className="text-center text-md-left mb-4 mb-md-0">
                                <h4>Get connected with us on social networks!</h4>
                            </Col>
                            <Col md="6" lg="7" className="text-center text-md-right">
                                <SocialIcon network="twitter" color="#00aced" url="https://twitter.com/?lang=en" />
                                <SocialIcon network="facebook" color="#3b5998" url="https://facebook.com" />
                                <SocialIcon network="linkedin" color="#007bb6" url="https://www.linkedin.com/" />
                                <SocialIcon network="instagram" color="#bc2a8d" url="https://www.instagram.com/" />
                                <SocialIcon network="github" color="blue" url="https://github.com/CodersMostWanted/Welcome-Back-Paisano" />

                            </Col>
                        </Row>
                    </Container>

                </div>
                <Container className="mt-5 mb-4 text-center text-md-left">
                    <Row className="mt-3">
                        <Col md="3" lg="4" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>CODERS MOST WANTED</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p>Here we can add info about us as a group.</p>
                        </Col>
                        <Col md="2" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Products We Used</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><a href="https://reactjs.org/">REACT</a></p>
                            <p><a href="https://reacttraining.com/react-router/">React-Router-Dom</a></p>
                            <p><a href="https://mdbootstrap.com/react/">MDBReact</a></p>
                            <p><a href="https://react-bootstrap.github.io/">React-Bootstrap</a></p>
                        </Col>
                        <Col md="3" lg="2" xl="2" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Useful links</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><a href="link goes here">helpful link</a></p>
                            <p><a href="link goes here">other link</a></p>
                            <p><a href="link goes here">holacode</a></p>
                            <p><a href="link goes here">Help</a></p>
                        </Col>
                        <Col md="4" lg="3" xl="3" className="mb-4">
                            <h6 className="text-uppercase font-weight-bold"><strong>Contact</strong></h6>
                            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{width: '60px'}}/>
                            <p><i className="fa fa-home mr-3"></i> Mexico City, Mexico</p>
                            <p><i className="fa fa-envelope mr-3"></i> CodersMostWanted@HC.com</p>
                            <p><i className="fa fa-phone mr-3"></i> + 52 55 8686 3708</p>
                            <p><i className="fa fa-print mr-3"></i> + 52 55 8675 7654</p>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Copyright: <a href="https://github.com/CodersMostWanted/Welcome-Back-Paisano"> Coders Most Wanted </a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default FooterPage;
