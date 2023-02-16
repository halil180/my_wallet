import React, { useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'
import * as service from '../services/walletService'

function Home() {
    const [type, setType] = useState('shopping');
    const [cost, setConst] = useState(null);
    const [item, setItem] = useState('');

    const addExpense = async () => {
        const newExpense = { item, cost: Number(cost), type };
        const repsonse = await service.addExpense(newExpense);
        if (repsonse) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your expense has been saved',
                showConfirmButton: false,
                timer: 1500
            })
        }
        clearForm();
    }

    const clearForm = () => {
        setConst('');
        setItem('');
        setType('');
    }

    return (
        <Container>
            <h1 className='text-center'>Add a new Expense</h1>
            <Row>
                <Col sm="4">
                    <Form.Select size="md" className='my-3 my-lg-0' value={type} onChange={(e) => setType(e.target.value)}>
                        <option value="shopping">Shopping</option>
                        <option value="taxes">Taxes</option>
                        <option value="insurance">Insurance</option>
                    </Form.Select>
                </Col>
                <Col sm="4">
                    <InputGroup>
                        <Form.Control
                            aria-label="Dollar amount (with dot and two decimal places)"
                            placeholder="Item"
                            onChange={(e) => setItem(e.target.value)}

                        />
                    </InputGroup>
                </Col>
                <Col sm="3">
                    <InputGroup className='my-3 my-lg-0'>
                        <Form.Control


                            aria-label="Dollar amount (with dot and two decimal places)"
                            placeholder="Cost"
                            type='number'
                            onChange={(e) => setConst(e.target.value)}

                        />
                        <InputGroup.Text>CHF</InputGroup.Text>
                    </InputGroup>
                </Col>
                <Col sm="1">

                    <Button variant="secondary" size="sm" className='my-3 my-lg-0'
                        onClick={addExpense}
                    >
                        add
                    </Button></Col>

            </Row>
        </Container>

    )
}

export default Home