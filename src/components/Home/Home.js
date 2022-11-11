import React from 'react';
import Typewriter from 'typewriter-effect'
import './Home.css'
import img from '../../background.jpg'
import Button from 'react-bootstrap/Button';



const Home = () => {
    return (
        <div className='homeContainer'>
            <div className='text'>

              
              <Typewriter
                    onInit={(typewriter) => {
                        typewriter
                        .typeString("WELCOME !")
                        .pause(1500)
                        .deleteAll()
                            .typeString("I'm Forroukh Ahmed Rakib")
                            .pause(2000)
                            .deleteAll()
                            .typeString(" Web Designer")
                            .pause(2000)
                            .deleteAll()
                            .typeString("Frontend Web Developer")
                            .pause(2000)
                            .deleteAll()
                            .typeString("PPT Designer")
                            .pause(2000)
                            .deleteAll()
                            .typeString(" Forroukh Ahmed Rakib")
                            .start()
                    }}
                />
            
                 <Button  variant="light">
                 <a href="../assets/Resume/ResumeOfficial.pdf" download="ResumeOfficial.pdf">
                        Download resume
                    </a>
                 </Button>

            </div>
            <div className='image'>
                <img className='img-fluid' src={img} alt="" />
            </div>
        </div>
    );
};

export default Home;