import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import StarRatings from "react-star-ratings";
import history from "../history";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
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
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
  },
}));

export default function SingleReview(props) {
  const date = props.review.published_at.slice(0, 14);
  const classes = useStyles();

  return (
    <Link to={`/${props.review.id}`} className={classes.link}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent className={classes.main}>
          <Typography className={classes.title} gutterBottom>
            {props.review.place}
          </Typography>
          <StarRatings
            rating={props.review.rating}
            starRatedColor="#FFD700"
            numberOfStars={5}
            starDimension="30px"
            starSpacing="5px"
            name="rating"
          />
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
        {props.button ? (
          <CardActions>
            <Button
              size="small"
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => history.push(`/${props.review.id}`)}
            >
              Details
            </Button>
          </CardActions>
        ) : (
          " "
        )}
      </Card>
    </Link>
  );
}
