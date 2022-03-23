import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default function AddBudgetModal({ show, handleClose }) {

    function handleSubmit() {

    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>

                <Modal.Header closeButton>
                    <Modal.Title>New Budget</Modal.Title>
                </Modal.Header>

                <Modal.Body>

                    <Form.Group controlId='name' className='mb-3'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' required />
                    </Form.Group>

                    <Form.Group controlId='max' className='mb-3'>
                        <Form.Label>Maximum Spending</Form.Label>
                        <Form.Control type='number' min={0} step={0.01} required />
                    </Form.Group>

                </Modal.Body>

                <Modal.Footer className='d-flex justify-content-end'>
                    <Button variant='primary' type='submit'>Add</Button>
                </Modal.Footer>

            </Form>
        </Modal>
    );
}