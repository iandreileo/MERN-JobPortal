import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button, Grid, Paper, TextField} from '@material-ui/core';
import style from './JobSearchBar.module.css';
import { useContext } from 'react';
import { JobsContext } from '../JobsProvider';
import axios from 'axios';
import { useState } from 'react';

const JobSearchBar = (props) => {
    const [jobs, setJobs] = useContext(JobsContext);
    const [search, setSearch] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        //get from server
        const params = {name : jobs};
        axios.get("http://localhost:3001/filterbyname", {params : {name: search}})
        .then(res => {
            setJobs(res.data);
        });
        setSearch('');
    }

    const handleOnChange = (e) => {
        setSearch(e.target.value);
        console.log(search);
    }


    return (

        <Grid 
            className={style.grid}
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Typography>Filtreaza job-urile dupa cuvinte cheie: </Typography>
            <form className={style.form} noValidate autoComplete="off" onSubmit={handleOnSubmit}>
                <TextField id="outlined-basic" label="Cuvinte cheie" variant="outlined" value={search} onChange={handleOnChange}/>
            </form>
        </Grid>
    );
}

export default JobSearchBar;