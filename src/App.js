import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


import Title from './Components/Title';
import reactDom from 'react-dom';
import React from 'react';
import { render } from '@testing-library/react';
import AboutModal from './Components/AboutModal';

class DisplayApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aboutModal: false, //when true aboutModal is displayed
      contactModal: false //when true contactModal is displayed
    };
    this.toggleASwitch = this.toggleASwitch.bind(this);

  }

  toggleASwitch() {
    this.setState({ aboutModal: !this.state.aboutModal });
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Row className="justify-content-md-center">
            <Col xs lg="2">
              <Button onClick={() => {this.toggleASwitch()} }>Large modal</Button>
              <AboutModal aboutSwitch={this.state.aboutModal}  />
            </Col>
            <Col md="auto">
              <Title />
              </Col>
            <Col xs lg="2">
              3 of 3
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default DisplayApp;
