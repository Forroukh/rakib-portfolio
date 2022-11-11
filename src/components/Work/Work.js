
import React from 'react';
import { Button } from 'react-bootstrap';
import './Work.css'


const Work = (props) => {
    const { title, description } = props.file;
    return (
        <div className='work-text'>
            
            <h1>{title}</h1>
            <p>{description}</p>
            <Button variant='outline-secondary'>See More</Button>
        </div>


    )
};

export default Work;