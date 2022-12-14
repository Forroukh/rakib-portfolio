import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './SendEmail.css';



const SendEmail = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d3b9zm9', 'template_frkg7pj', form.current, '_vWSAbeFKEWX-2v6s')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
        
      });
      e.target.reset();
      toast('Thank you!')
  };

  return (

    <Form  ref={form} onSubmit={sendEmail}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" name="user_name" placeholder="Enter Your Name" />
        <Form.Label>Email</Form.Label>
        <Form.Control required  type="email" name="user_email" placeholder="Enter Your Email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Subject</Form.Label>
        <Form.Control required  type="text" name="user_subject" textarea placeholder="Enter Your Subject" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Message</Form.Label>
        <Form.Control required  type="text" name="user_message" textarea placeholder="Enter Your Message" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
      <ToastContainer></ToastContainer>
    </Form>

  );
};

export default SendEmail;