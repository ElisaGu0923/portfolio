import React from 'react'
import { Experience } from '../history/history'
import './historyCard.css'

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
            <p className='history_title'>{props.title}</p>
        </div>
    )
}

export default HistoryCard