import React, { useEffect, useState } from 'react';
import Work from '../Work/Work';
import './Projects.css';


const Projects = () => {

    const [files, setFiles] = useState([]);
    useEffect(() => {
        fetch('api.json')
            .then(res => res.json())
            .then(data => setFiles(data))

    }, []);
    return (
        
        <div className='work mt-4' id='projects'>
            <div className='my-projects'><h1>MY PROJECTS</h1></div>
            {
                files.map(file => <Work
                key={file.id}
                file={file}
                ></Work>)
            }

        </div>
    );
};

export default Projects;