import * as React from 'react';
import { useState, useEffect } from 'react';
import './projectCard.css';
import { Project } from '../projects/projects';
import Box from '@mui/material/Box';
import Popper, { PopperPlacementType } from '@mui/material/Popper';
import loading from '../../assets/loading.jpg';

function ProjectCard(props: Project) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [placement, setPlacement] = useState<PopperPlacementType>('right');
	const [count, setCount] = useState<number>(0);
	const [coverLoaded, setCoverLoaded] = useState<boolean>(false);
	const [showcaseImageLoaded, setShowcaseImageLoaded] = useState<boolean>(false);

	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popper' : undefined;

	useEffect(() => {
		const timerId = setInterval(() => {
			setCount(count => count + 1);
		}, 2000);

		return () => clearInterval(timerId);
	}, []);

	const image = props.imgs[count % props.imgs.length];

	type ConditonalWrapperProps = {
		children: React.ReactElement;
		condition: string | undefined;
		wrapper: (children: React.ReactElement) => JSX.Element;
	};
	const ConditonalWrapper: React.FC<ConditonalWrapperProps> = ({ condition, wrapper, children }) =>
		condition ? wrapper(children) : children

	const Cover = <img className='projectCover'
		aria-describedby={id}
		onMouseEnter={(e) => { setAnchorEl(e.currentTarget) }}
		onMouseLeave={(e) => { setAnchorEl(null) }}
		src={props.cover}
		alt="cover"
		onLoad={() => setCoverLoaded(true)}
	/>

	return (
		<div className="cardContainer">
			{!coverLoaded && <><img className='projectCover' src={loading}></img></>}
			{props.link ? <a href={props.link} target="_blank"><img className='projectCover'
				aria-describedby={id}
				onMouseEnter={(e) => { setAnchorEl(e.currentTarget) }}
				onMouseLeave={(e) => { setAnchorEl(null) }}
				src={props.cover}
				alt="cover"
				onLoad={() => setCoverLoaded(true)}
			/></a> : <img className='projectCover'
				aria-describedby={id}
				onMouseEnter={(e) => { setAnchorEl(e.currentTarget) }}
				onMouseLeave={(e) => { setAnchorEl(null) }}
				src={props.cover}
				alt="cover"
				onLoad={() => setCoverLoaded(true)}
			/>}
			<Popper id={id} open={open} anchorEl={anchorEl} placement={placement}>
				<Box sx={{ width: 300, border: 0, p: 1, bgcolor: '#D9DBD4', padding: 5 }}>
					<img className='showcaseImage'
						src={image}
						onLoad={() => setShowcaseImageLoaded(true)}
					></img>
					<ul>
						{props.description.map(s => (<li className='bulletPoint'>{s}</li>))}
					</ul>
				</Box>
			</Popper>

			<div className="cardBody">
				<p>{props.title}</p>
				{props.year && <p className='projectYear'>{props.year}</p>}
			</div>
		</div>
	);
}

export default ProjectCard;
