import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


class AboutModal extends React.Component {
    constructor(props) {
        super(props);
    }

    
        render() {
            return (
            <>  
                <Modal
                    size="lg"
                    //show={lgShow}
                   // onHide={() => setLgShow(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Large Modal
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>...</Modal.Body>
                </Modal>
            </>
        );
        }
    }
        
    







export default AboutModal