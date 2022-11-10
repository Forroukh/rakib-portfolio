import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './Skill.css'



const Skill = () => {
    return (
        <div className='skill' >
            <h1 >MY SKILL</h1>
            <h5>HTML5</h5>
            <ProgressBar variant="success" now={90} />
            <h5>CSS3</h5>
            <ProgressBar variant="info" now={75} />
            <h5>JAVASCRIPT</h5>
            <ProgressBar variant="warning" now={65} />
            <h5>REACT</h5>
            <ProgressBar variant="success" now={65} />
        </div>
    );
};

export default Skill;