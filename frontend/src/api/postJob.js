import axios from 'axios';

const postJob = (data) => {
    axios.post("http://localhost:3001/addjob", null, {params: data})
        .then(res => {
            return res;
        });

}

export default postJob;