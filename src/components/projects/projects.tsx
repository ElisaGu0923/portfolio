import React, { useState } from 'react';
import './projects.css';
import ProjectCard from '../projectCard/projectCard';
import cover from '../../assets/cover.jpg';

export interface Project {
    title: string,
    cover: any,
    key: number
}

function Projects() {
    const [active, setActive] = useState("All");

    const projects: Project[] = [{ title: "project1", cover: cover, key: 1 }, { title: "project2", cover: cover, key: 2 }, { title: "project3", cover: cover, key: 3 }];

    return (
        <>
            <div className="projectsMenu">
                <button onClick={() => setActive("All")} className={active === 'All' ? 'active projectsMenuItem' : 'projectsMenuItem'}>All</button>
                <button onClick={() => setActive("Web")} className={active === 'Web' ? 'active projectsMenuItem' : 'projectsMenuItem'}>Web</button>
                <button onClick={() => setActive("Unity")} className={active === 'Unity' ? 'active projectsMenuItem' : 'projectsMenuItem'}>Unity</button>
                <button onClick={() => setActive("Softwares")} className={active === 'Softwares' ? 'active projectsMenuItem' : 'projectsMenuItem'}>Softwares</button>
            </div>
            <div className='cardsContainer'>
                {projects.map(proj => (<ProjectCard {...proj}></ProjectCard>))}
            </div>
        </>
    )
}

export default Projects