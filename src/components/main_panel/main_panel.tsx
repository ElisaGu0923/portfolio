import React, { useState } from 'react'
import './main_panel.css';
import Typewriter from 'typewriter-effect';
import Projects from '../projects/projects';

function MainPanel() {
    const [mainContent, setMainContent] = useState("Home");
    return (
        <div className='mainPanel'>
            <div className="menuContainer">
                <button onClick={() => setMainContent("Home")} className={mainContent === 'Home' ? 'active menuItem' : 'menuItem'}>Home</button>
                <button onClick={() => setMainContent("Projects")} className={mainContent === 'Projects' ? 'active menuItem' : 'menuItem'}>Projects</button>
                <button onClick={() => setMainContent("History")} className={mainContent === 'History' ? 'active menuItem' : 'menuItem'}>History</button>
                <button onClick={() => setMainContent("Contact")} className={mainContent === 'Contact' ? 'active menuItem' : 'menuItem'}>Contact</button>
                <button onClick={() => setMainContent("Download")} className={mainContent === 'Download' ? 'active menuItem' : 'menuItem'}>CV Download</button>
            </div>
            {mainContent === "Home" ?
                <>
                    <div className="titleCard">
                        <div className="titleContent">
                            <h1>Hi, I'm Elisa</h1>
                            <Typewriter
                                options={{ loop: true }}
                                onInit={(typewriter) => {
                                    typewriter
                                        .typeString("I'm a full-stack developer")
                                        .pauseFor(2500)
                                        .deleteChars(20)
                                        .pauseFor(500)
                                        .typeString("React developer")
                                        .pauseFor(2500)
                                        .deleteChars(15)
                                        .pauseFor(500)
                                        .typeString("Software developer")
                                        .pauseFor(2500)
                                        .deleteChars(18)
                                        .pauseFor(500)
                                        .typeString("Unity developer")
                                        .pauseFor(2500)
                                        .deleteChars(15)
                                        .pauseFor(500)
                                        .typeString("third year CS student")
                                        .pauseFor(2500)
                                        .deleteChars(21)
                                        .pauseFor(500)
                                        .typeString("game enthusiast")
                                        .pauseFor(2500)
                                        .deleteChars(5)
                                        .pauseFor(500)
                                        .start();
                                }}
                            />
                        </div>
                    </div>
                    <div className="experienceContainer">
                        <p><span>3+</span>Years Experience</p>
                        <p><span>2</span>Worked Companies</p>
                        <p><span>10+</span>Projects</p>
                    </div>
                </>
                : mainContent === "Projects" ? <Projects></Projects>
                    : mainContent === "History" ? <div> History</div>
                        : mainContent === "Contact" ? <div className='contactCard'>
                            <div className="infoRowContainer">
                                <p>Email:</p>
                                <p className='infoDetail'>z53gu@uwaterloo.ca</p>
                            </div>
                            <div className="infoRowContainer">
                                <p>Phone (text preferred):</p>
                                <p className='infoDetail'>1(647)867-0923</p>
                            </div>
                        </div>
                            : mainContent === "Download" ? <div>Download</div>
                                : null
            }
        </div>
    )
}

export default MainPanel