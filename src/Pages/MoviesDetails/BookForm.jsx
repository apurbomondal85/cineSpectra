
import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useForm } from "react-hook-form";
import { json } from 'react-router-dom';
import { toast } from 'react-toastify';

function BookForm({ show, setShowModal, movie }) {
    const handleClose = () => setShowModal(false);
    const { register, reset, handleSubmit } = useForm();
    const onSubmit = data => {
        const cart = JSON.parse(localStorage.getItem("user-cart"));
        if (cart) {
            return localStorage.setItem("user-cart", JSON.stringify([...cart, data]))
        }
        localStorage.setItem("user-cart", JSON.stringify([data]))
        reset();
        toast('Your Movie Cart added', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setShowModal(false)
    };

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{movie?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <div className='d-flex align-items-center gap-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Movie Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={movie?.name}
                                    autoFocus
                                    name='movie'
                                    {...register("Movie")}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Network</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={movie?.network?.name}
                                    autoFocus
                                    name='network'
                                    {...register("network")}
                                />
                            </Form.Group>
                        </div>
                        <div className='d-flex align-items-center gap-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Language</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={movie?.language}
                                    autoFocus
                                    name='language'
                                    {...register("language")}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Country</Form.Label>
                                <Form.Control
                                    type="text"
                                    defaultValue={movie?.network?.country?.name}
                                    autoFocus
                                    name='country'
                                    {...register("country")}
                                />
                            </Form.Group>
                        </div>
                        <div className='d-flex align-items-center gap-4'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Your Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    autoFocus
                                    required
                                    name='name'
                                    {...register("name")}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                    required
                                    name='email'
                                    {...register("email")}
                                />
                            </Form.Group>
                        </div>
                        <Form.Group
                            className="mb-3"
                            controlId="message"
                        >
                            <Form.Label>Write some message</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <Button type='submit' className='mt-3' variant="primary">Add Cart</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default BookForm
