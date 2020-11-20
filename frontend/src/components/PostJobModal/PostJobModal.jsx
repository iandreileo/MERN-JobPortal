import React from 'react';
import {Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';
import style from './PostJobModal.module.css';
import { useState } from 'react';
import postJob from '../../api/postJob';


const PostJobModal = (props) => {
    const [currentJob, setCurrentJob] = useState({
        name: '',
        description: '',
        salary: 0,
        company: '',
        position: '',
        phone: '',
        email: '',
        location: ''
    })

    const handleOnChange = (e) => {
        console.log(currentJob);
        setCurrentJob(prev => ({
            ...currentJob,
            [e.target.id] : e.target.value
        }))
    }

    const handleOnSubmit = () => {
        //trimite la server
        console.log(postJob(currentJob));
        //setState la gol
        setCurrentJob({
            name: '',
            description: '',
            salary: 0,
            company: '',
            position: '',
            phone: '',
            email: '',
            location: ''
        });
        //inchide modalu
        props.handleClose();
    }

    return (
        <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Posteaza job</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Pentru a posta un job trebuie sa completezi formularul de mai jos.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            onChange={handleOnChange}
          />
          <TextField
            autoFocus
            multiline
            rowsMax={4}
            rows={3}
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            onChange={handleOnChange}
          />
        <TextField
            autoFocus
            margin="dense"
            id="salary"
            label="Salary"
            type="number"
            fullWidth
            onChange={handleOnChange}
          />
        <TextField
            autoFocus
            margin="dense"
            id="company"
            label="Company"
            type="text"
            fullWidth
            onChange={handleOnChange}
          />
        <TextField
            autoFocus
            margin="dense"
            id="position"
            label="Position"
            type="text"
            fullWidth
            onChange={handleOnChange}
          />
        <TextField
            autoFocus
            margin="dense"
            id="phone"
            label="Phone"
            type="text"
            fullWidth
            onChange={handleOnChange}
          />
        <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email"
            type="text"
            fullWidth
            onChange={handleOnChange}
          />
        <TextField
            autoFocus
            margin="dense"
            id="location"
            label="Location"
            type="text"
            fullWidth
            onChange={handleOnChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={handleOnSubmit}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    );
}

export default PostJobModal;