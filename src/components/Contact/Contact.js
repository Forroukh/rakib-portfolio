import React from 'react';
import programmer from './programmer.png';
import './Contact.css'
import SendEmail from '../SendEmail/SendEmail';


const Contact = () => {
    return (
        <div className='contact-container' id='contact'>
            <div className='image'>
                <img className='img-fluid' src={programmer} alt="programmer" />
            </div>
            <div className='contact-details'>
                <h3>I'd love to hear from you</h3>
                <p>Got a project you would like me to work on? <br/> Or how about just a friendly chat</p>
               <SendEmail></SendEmail>

            </div>
            
        </div>
    );
};

export default Contact;