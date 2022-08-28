import React, { useState } from 'react';
import { Grid } from '@mui/material';
import './projects.css';
import ProjectCard from '../projectCard/projectCard';
import { Category } from '../Categories';
import { projects } from '../../assets/projectsList';

export interface Project {
    category: Category,
    title: string,
    cover: any,
    key: number,
    imgs: any[],
    description: string[]
    link?: string
    year?: number
}

function Projects() {
    const [active, setActive] = useState(Category.ALL);

    return (
        <div className='projects'>
            <div className="projectsMenu">
                <button onClick={() => setActive(Category.ALL)} className={active === Category.ALL ? 'active projectsMenuItem' : 'projectsMenuItem'}>All</button>
                <button onClick={() => setActive(Category.WEB)} className={active === Category.WEB ? 'active projectsMenuItem' : 'projectsMenuItem'}>Web</button>
                <button onClick={() => setActive(Category.GAMES)} className={active === Category.GAMES ? 'active projectsMenuItem' : 'projectsMenuItem'}>Games</button>
                <button onClick={() => setActive(Category.SOFTWARES)} className={active === Category.SOFTWARES ? 'active projectsMenuItem' : 'projectsMenuItem'}>Softwares</button>
            </div>
            <Grid container className="Grid">
                {active === Category.ALL ? projects.map(proj => (<Grid item xs={12} md={6}><ProjectCard {...proj}></ProjectCard></Grid>)) : projects.filter(proj => proj.category === active).map(proj => (<Grid item xs={12} md={6}><ProjectCard {...proj}></ProjectCard></Grid>))}
            </Grid>
        </div>
    )
}

export default Projects