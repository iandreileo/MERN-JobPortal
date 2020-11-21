import React, {createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const JobsContext = createContext();

export const JobsProvider = (props) => {
    const [jobs, setJobs] = useState([]);
    
    useEffect(() => {
        //fetch from server
        axios.get("http://localhost:3001/getjobs")
        .then(res => {
            setJobs(res.data);
        });
    }, []);

    return (
        <JobsContext.Provider value={[jobs, setJobs]}>
          {props.children}
        </JobsContext.Provider>
      )
}