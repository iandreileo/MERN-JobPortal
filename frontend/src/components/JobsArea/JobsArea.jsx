import React, {useState} from 'react';
import { Typography, Grid, TextField} from '@material-ui/core';
import style from './JobsArea.module.css';
import JobCard from '../JobCard/JobCard';
import { useEffect } from 'react';
import axios from 'axios';

const JobsArea = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        //fetch from server
        axios.get("http://localhost:3001/getjobs")
        .then(res => {
            setJobs(res.data);
        });
    }, []);

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