import React from 'react'
import { Experience } from '../history/history'
import './historyCard.css'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function HistoryCard(props: Experience) {
    return (
        <div className="historyCardContainer">
            <div className="historyFirstLine">
                <p className='history_name'>{props.name}</p>
                <div className="history_date">
                    <span>{props.startDate.toLocaleString('default', { month: 'short' })}&nbsp;{props.startDate.getFullYear()}</span>
                    <span>-</span>
                    <span>{props.endDate.toLocaleString('default', { month: 'short' })}&nbsp;{props.endDate.getFullYear()}</span>
                </div>
            </div>
            <div className="historyFirstLine">
                <p className='history_title'>{props.title}</p>
                {props.evaluation && <p className="history_evaluation">{props.evaluation}</p>}
            </div>
            <ul>
                {props.description.map(ptr => <li className='historyTxtPt'>{ptr}</li>)}
            </ul>
            {
                props.file && <div className='file_row'><a className="history_file" href={props.file} target='_blank' rel="noreferrer" >Employer Evaluation</a><KeyboardArrowRightIcon fontSize='small' className='file_arrow'></KeyboardArrowRightIcon></div>
            }
        </div>
    )
}

export default HistoryCard