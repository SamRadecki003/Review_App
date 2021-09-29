import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Card,
  CardContent,
  // CardActions,
  // Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    height: 250,
    paddingTop: "0%",
    cursor: "pointer",
  },
  second: {
    height: 50,
    paddingTop: "0%",
    cursor: "pointer",
  },
  content: {
    margin: "0%",
  },
  date: {
    color: "grey",
  },
  title: {
    fontSize: 25,
    color: "pink",
    alignItems: "center",
  },
}));

export default function SingleReview(props) {
  const date = props.review.published_at.slice(0, 14);
  const classes = useStyles();

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent className={classes.main}>
        <Typography className={classes.title} gutterBottom>
          {props.review.place}
        </Typography>
        <Typography sx={{ mb: 1.5 }}>rating: {props.review.rating}</Typography>
        <Typography variant="body2" className={classes.content}>
          {props.review.content}
        </Typography>
      </CardContent>
      <CardContent className={classes.second}>
        <Typography sx={{ mb: 1.5 }} gutterBottom>
          {props.review.author}
        </Typography>
        <Typography align="right" className={classes.date} gutterBottom>
          {date}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">More Details</Button>
      </CardActions> */}
    </Card>
  );
}
