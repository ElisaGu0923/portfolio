import React from 'react'
import './history.css'
import { Grid } from '@mui/material'
import HistoryCard from '../historyCard/historyCard'
import { educationHistoryList } from '../../assets/educationHistoryList'

export interface Experience {
    name: string,
    title?: string,
    startDate: Date,
    endDate: Date,
    description: string[],
    file?: any
}

function History() {
    return (
        <Grid container>
            <Grid item xs={12} md={6}>
                <p>Education</p>
                {educationHistoryList.map(history => <HistoryCard {...history}></HistoryCard>)}
            </Grid>
            <Grid item xs={12} md={6}>
                <p>Work History</p>
            </Grid>
        </Grid>
    )
}

export default History