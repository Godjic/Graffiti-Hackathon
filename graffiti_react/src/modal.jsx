
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { Collapse, CardBody, Card } from 'reactstrap';
import {  CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import le31 from './31.png';
import le32 from './32.png';
import le70 from './70.png';
import leA from './groupea.png';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      collapse: true
    };

    this.toggle = this.toggle.bind(this);
    this.togglemodal = this.togglemodal.bind(this);
    this.state = { collapse: true };
  }


  togglemodal() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
    this.setState(state => ({ collapse: !state.collapse }));
  }

  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }



  render() {
    return (
      <div>
        <Button color="danger" style={{
          paddingLeft: '4px', paddingRight: '2px',
          paddingTop: '4px',
          paddingBottom: '2px', alignContent: 'flex', marginTop: '450px'
        }} onClick={this.togglemodal}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.togglemodal} className={this.props.className}>
          <ModalHeader toggle={this.togglemodal}></ModalHeader>
          <ModalBody>
            <Row>
              <Col ><div>
                <Button color="primary" onClick={this.toggle} style={{ padding: '0px' }}><img src={le31} alt="31" width='80px' /></Button>
                <Collapse isOpen={this.state.collapse}>
                  <Card>
                  <img src={leA} alt="A" width='60px'/>
                  <h2>12 min</h2>
                  <p>Vieux Port</p>
                  <p>Arnavaux</p>
                  </Card>
                </Collapse>
              </div></Col>
              <Col><img src={le32} alt="32" width='80px' /></Col>
              <Col><img src={le70} alt="70" width='80px' /></Col>
            </Row>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;