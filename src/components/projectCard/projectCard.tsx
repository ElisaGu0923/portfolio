import * as React from 'react';
import { useState } from 'react';
import './projectCard.css';
import { Project } from '../projects/projects';
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';

function ProjectCard(props: Project) {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const [placement, setPlacement] = React.useState<PopperPlacementType>('right');

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	return (
		<div className="cardContainer">
			<img
				aria-describedby={id}
				// onClick={handleClick}
				onMouseEnter={handleClick}
				onMouseLeave={handleClick}
				src={props.cover}
				alt="cover"
			></img>
			<Popper id={id} open={open} anchorEl={anchorEl} placement={placement}>
				<Box sx={{ width: 300, border: 0, p: 1, bgcolor: '#D9DBD4' }}>
					<img className='showcaseImage'
						src={props.cover}></img>
					<ul>
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, molestiae.</li>
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, molestiae.</li>
						<li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga, molestiae.</li>
					</ul>
				</Box>
			</Popper>
			<div className="cardBody">
				{props.title}
				Hello
			</div>
		</div>
	);
}

export default ProjectCard;
