import React from 'react';
import { Typography, Grid, TextField, Button, Card, CardActionArea, CardMedia, CardContent, CardActions} from '@material-ui/core';
import style from './JobCard.module.css';

const JobCard = (props) => {
  console.log(props);
    return (
        <Card className={style.root}>
        <CardActionArea>
          <CardMedia
            className={style.media}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Salary:</b> {props.salary}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Employer:</b> {props.company}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Position:</b> {props.position}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <b>Location:</b> {props.location}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" as="a" href={`tel:${props.phone}`}>
            Call now
          </Button>
          <Button size="small" color="primary" as="a" href={`mailto:${props.email}`}>
            Mail now
          </Button>
        </CardActions>
      </Card>
    );
}

export default JobCard;