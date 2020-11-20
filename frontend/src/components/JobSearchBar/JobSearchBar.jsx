import React from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button, Grid, Paper, TextField} from '@material-ui/core';
import style from './JobSearchBar.module.css';

const JobSearchBar = (props) => {
    return (
        <Grid 
            className={style.grid}
            container
            direction="row"
            justify="center"
            alignItems="center">
            <Typography>Filtreaza job-urile dupa cuvinte cheie: </Typography>
            <form className={style.form} noValidate autoComplete="off">
                <TextField id="outlined-basic" label="Cuvinte cheie" variant="outlined" />
            </form>
        </Grid>
    );
}

export default JobSearchBar;