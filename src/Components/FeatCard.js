import React from 'react';
import Card from 'react-bootstrap/Card'
import featImage from './featCard.jpg';
import './FeatCard.css';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

class FeatCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false
        };

      //this.toggleASwitch = this.toggleASwitch.bind(this);
    }



    render() {
        return (
            <div>
                <Card border="danger" >
                    <Card.Header>New Site Special!</Card.Header>
                    <Card.Img variant="top" src={featImage} style={{ width: '60rem', height: '30rem'}} />
                <Card.Body>
                    <Card.Title><b>One for All</b></Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">$8 One Time</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">2 Months of Workouts</Card.Subtitle>
                    <Card.Text>
                        Premium workout plan that will allow anyone to make extreme progress at any level.
                    </Card.Text>
                    <Card.Link href="#" onClick={() => this.setState({showModal: true})}>Buy it Now</Card.Link>
                    <Modal
                    open={this.state.showModal}
                    show={this.state.showModal}
                    onHide={() => this.setState({showModal: false})}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="example-custom-modal-styling-title" className="modTitle">
                                Limited Time Offer!
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>
                                Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                                commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                                ipsam atque a dolores quisquam quisquam adipisci possimus
                                laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                deleniti rem!
                            </p>
                        </Modal.Body>
                    </Modal>
                </Card.Body>
                </Card>
                <br />
            </div>
        );
    }
}

export default FeatCard