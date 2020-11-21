import React, {useState} from 'react';
import { Typography, Grid, TextField} from '@material-ui/core';
import style from './JobsArea.module.css';
import JobCard from '../JobCard/JobCard';
import { useEffect } from 'react';
import axios from 'axios';
import {JobsContext} from '../JobsProvider';
import { useContext } from 'react';

const JobsArea = () => {

    //jobs from context
    const [jobs, setJobs] = useContext(JobsContext);

    return (
        <Grid 
            className={style.grid}
            container
            direction="row"
            justify="center"
            alignItems="center">
                {
                    jobs !== undefined ? 
                        jobs.map((itemData, i) => {
                            return (
                                itemData.salary !== '' ? 
                                    <Grid key={i} item xs={12} lg={3} md={6} className={style.jobCard}>
                                        <JobCard {...itemData} />
                                    </Grid> 
                                : null
                            );
                        }) : null
                }
        </Grid>
    );
}

export default JobsArea;