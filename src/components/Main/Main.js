import React from 'react';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import Skill from '../Skill/Skill';
import './Main.css';

const Main = () => {
    return (
        <div className='main-container'>
            <Home className='home'></Home>
            <Services className='services'></Services>
            <Projects></Projects>
            <Skill></Skill>
        </div>
    );
};

export default Main;