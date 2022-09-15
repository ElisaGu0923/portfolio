import React from 'react'
import './history.css'
import { Grid } from '@mui/material'
import HistoryCard from '../historyCard/historyCard'
import { educationHistoryList } from '../../assets/educationHistoryList'
import { workHistoryList } from '../../assets/workHistoryList'

export interface Experience {
    name: string,
    title?: string,
    startDate: Date,
    endDate: Date,
    description: string[],
    file?: any,
    evaluation?: string
}

function History() {
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <p className='history_page_category'>Education</p>
                {educationHistoryList.sort((a, b) => b.endDate.getTime() - a.endDate.getTime()).map(history => <HistoryCard {...history}></HistoryCard>)}
            </Grid>
            <Grid item xs={12} md={6}>
                <p className='history_page_category'>Work History</p>
                {workHistoryList.map(history => <HistoryCard {...history}></HistoryCard>)}
            </Grid>
        </Grid>
    )
}

export default History