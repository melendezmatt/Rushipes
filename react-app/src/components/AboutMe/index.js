import React from 'react';
import { IconContext } from 'react-icons';
import { FaLinkedin, FaAngellist, FaGithub } from 'react-icons/fa';
import { MdWeb } from 'react-icons/md';
import './AboutMe.css'
const AboutMe = () => {
    return (
        <div className='about-me-container'>
            <div className='about-me'>
                <IconContext.Provider value={{ className: 'react-icons', size: 55 }}>
                <div className='about-me-inner'>
                    <div className='about-me-content'>
                        <h1> About Me</h1>
                        <img alt="MattPhoto" className='about-me-profilePic' src='https://avatars.githubusercontent.com/u/79602970?v=4' />
                        <h2>Matthew Melendez</h2>
                        <h3> matthewemelendez@gmail.com </h3>
                    </div>
                    <div className='about-me-links'>
                        <div className='single-link'>
                            <a rel="noreferrer" href='https://github.com/melendezmatt' target='_blank'>
                                <FaGithub />
                            </a>
                            <a rel="noreferrer" href='https://github.com/melendezmatt' target='_blank'>
                                <h1>Github</h1>
                            </a>
                        </div>
                        <div className='single-link'>
                        <a rel="noreferrer" href='https://angel.co/u/matthew-melendez-1' target='_blank'>
                            <FaAngellist />

                        </a>
                        <a rel="noreferrer" href='https://angel.co/u/matthew-melendez-1' target='_blank'>
                            <h1> Angellist </h1>

                        </a>
                        </div>
                        <div className='single-link'>
                        <a rel="noreferrer" href='https://github.com/melendezmatt' target='_blank'>
                            <MdWeb />
                        </a>
                        <a rel="noreferrer" href='https://github.com/melendezmatt' target='_blank'>
                            <h1> Portfolio </h1>
                        </a>
                        </div>
                        <div className='single-link'>
                        <a
                            rel="noreferrer"
                            href='https://www.linkedin.com/in/matthew-melendez/'
                            target='_blank'
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            rel="noreferrer"
                            href='https://www.linkedin.com/in/matthew-melendez/'
                            target='_blank'
                        >
                            <h1> LinkedIn </h1>
                        </a>
                        </div>
                    </div>
                </div>
                </IconContext.Provider>
            </div>
        </div>
    )
}

export default AboutMe;
