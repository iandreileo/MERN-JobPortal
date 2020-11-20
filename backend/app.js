const express = require("express")
const app = express()
const mongoose = require("mongoose");
var cors = require('cors');
app.use(cors());

const jobSchema = new mongoose.Schema({
    name: {
        type: String
    },
    location: {
        type: String
    },
    description: {
        type: String
    },
    salary: {
        type: Number
    },
    company: {
        type: String
    },
    position: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String
    }
});

let job = mongoose.model('posts', jobSchema);

app.get('/', (req, res) => {
    res.send('Server Running');
});

app.get('/getjobs', async (req, res) => {
    const jobs = await job.find();
    res.json(jobs);
});

app.get('/filterbyname', async (req, res) => {
    const jobs = await job.find({name: {$regex: req.query.name, $options: "$i"}});
    res.json(jobs);
});

app.post('/addjob', (req, res) => {
    console.log(req.query);
    let currentJob = new job(req.query);
    currentJob.save()
        .then(() => {
            res.send('Job saved successfully');
        })
        .catch(() => {
            res.status(400).send("Unable to save");
        })
})

module.exports = app;
