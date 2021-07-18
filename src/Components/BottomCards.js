import React from 'react';
import Card from 'react-bootstrap/Card'
import featImage from './featCard.jpg';
import './FeatCard.css';
import bigWeight from './bigW.jpg';
import lilWeight from './lilW.jpg';

import CardGroup from 'react-bootstrap/CardGroup';
import Modal from 'react-bootstrap/Modal';

class BottomCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //showModal: false
        };

      //this.toggleASwitch = this.toggleASwitch.bind(this);
    }



    render() {
        return (
            <div>
                <CardGroup>
                    <Card border="danger">
                        <Card.Img variant="top" src={lilWeight} />
                        <Card.Body>
                        <Card.Title><b>Beast</b></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">$20 One Time</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">2 Months of Workouts</Card.Subtitle>
                        <Card.Text>
                            Custom tailored plan based on an individuals current progess and future goals.
                        </Card.Text>
                        <Card.Link href="#" onClick={() => this.setState({showModal: true})}>Buy it Now</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                    <Card border="danger">
                        <Card.Img variant="top" src={bigWeight} />
                        <Card.Body>
                        <Card.Title><b>Hero</b></Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">$50 One Time</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">3 Months of Workouts</Card.Subtitle>
                        <Card.Text>
                            Custom plan that includes access to form checks, nutritonal advice, and more.
                        </Card.Text>
                        <Card.Link href="#" onClick={() => this.setState({showModal: true})}>Buy it Now</Card.Link>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </CardGroup>
            </div>
        );
    }
}

export default BottomCard