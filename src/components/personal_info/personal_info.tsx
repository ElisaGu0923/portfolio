import React from 'react';
import './personal_info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function PersonalInfo() {
    return (
        <div className='personal_info_container'>
            <div className='top'>
                <img id='profile' src={require('../../assets/profile.jpeg')} alt='avatar'></img>
                <p className='name'>Elisa Gu</p>
                <p className='title'>Full-stack Developer</p>
                <p className='title'>Software & Unity Game</p>
            </div>
            <div className="middle">
                <div className="card">
                    <div className="infoRowContainer">
                        <p>Residence:</p>
                        <p className='infoDetail'>Canada</p>
                    </div>
                    <div className="infoRowContainer">
                        <p>Faculty:</p>
                        <p className='infoDetail'>Computer Science </p>
                    </div>
                    <div className="infoRowContainer">
                        <p>School:</p>
                        <p className='infoDetail'>University of Waterloo</p>
                    </div>
                </div>
                <div className="card">
                    <p className='cardTitle'>Languages</p>
                    <div className="infoRowContainer">
                        <p>C++</p>
                        <p>2+ Years</p>
                    </div>
                    <div className="infoRowContainer">
                        <p>Html + CSS</p>
                        <p>1.5+ Years</p>
                    </div>
                    <div className="infoRowContainer">
                        <p>JS/TS</p>
                        <p>Work Experience</p>
                    </div>
                    <div className="infoRowContainer">
                        <p>Jave</p>
                        <p>Work Experience</p>
                    </div>
                    <div className="infoRowContainer">
                        <p>C#</p>
                        <p>Personal Projects</p>
                    </div>
                </div>
                <div className="card">
                    <p className="cardTitle">Tools & Frameworks</p>
                    <ul>
                        <li>React</li>
                        <li>Next.JS</li>
                        <li>Redux</li>
                        <li>Unity</li>
                    </ul>
                </div>
            </div>
            <div className='footer'>
                <a href='https://google.com' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon id='linkedIn' icon={faLinkedin} />
                </a>
                <a href='https://google.com' target="_blank" rel="noreferrer">
                    <FontAwesomeIcon id='github' icon={faGithub} />
                </a>
            </div>
        </div>
    );
}

export default PersonalInfo;
