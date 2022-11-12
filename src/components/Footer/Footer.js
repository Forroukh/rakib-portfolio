import React from 'react';
import './Footer.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import app from '../Firebse.init';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast } from 'react-toastify';

const auth = getAuth(app)

const Footer = () => {
    const provider = new GoogleAuthProvider();
  const handleGoogleSignIn= () => {
    signInWithPopup(auth,provider)
    .then((result) => {
        const user = result.user
        console.log(user)
    })
    .catch((error) => {
        console.log(error)

    })
    toast("Thank You For Subscribing")
  }
    return (
        <Card className="text-center mt-4 p-2 ">
            <Card.Body className='footer'>
                <Card.Title className='footer-title'>Subscribe To Our News Letter</Card.Title>
                <Button onClick={handleGoogleSignIn} variant="info">Subscribe</Button>
            </Card.Body>
        </Card>
    );
};

export default Footer;