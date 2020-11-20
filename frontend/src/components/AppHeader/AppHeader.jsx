import React , {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core';
import style from './AppHeader.module.css';
import PostJobModal from '../PostJobModal/PostJobModal';

const AppHeader = () => {

    const [open, setOpen] = useState(false);
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <>
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={style.menuButton} color="inherit" aria-label="menu">
                </IconButton>
                <Typography variant="h6" className={style.title}>
                Portal de job-uri MERN
                </Typography>
                <Button color="inherit" className={style.adauga} onClick={() => setOpen(true)}>Adauga job</Button>
            </Toolbar>
        </AppBar>
        
        <PostJobModal open={open} handleClose={handleClose}/>
        </>
    );
}

export default AppHeader;