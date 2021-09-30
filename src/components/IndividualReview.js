import React, { useState } from "react";
import reviews from "../reviews";
import SingleReview from "./SingleReview";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  Button,
  CardContent,
  Typography,
  TextField,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  review: {
    height: 150,
    marginTop: "50px",
    marginLeft: "50px",
    paddingTop: "0%",
  },
  second: {
    height: 50,
    paddingTop: "0%",
    cursor: "pointer",
  },
  content: {
    margin: "0%",
    height: 50,
  },
  date: {
    color: "grey",
  },
  button: {
    marginTop: "20px",
  },
  formCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceEvenly",
    marginTop: "25px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceEvenly",
    padding: "25px",
  },
  span: {
    fontSize: "14px",
    marginLeft: "25px",
    color: "red",
    marginBottom: "15px",
  },
  formField: {
    padding: "15px",
    border: "0",
  },
}));

export default function IndividualReview(props) {
  const individualReviewId = props.match.params.reviewId;
  let review = "";
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].id === individualReviewId) {
      review = reviews[i];
    }
  }
  const classes = useStyles();
  const [singleReview] = useState(review);
  //const [toDisable, setToDisable] = useState(true);
  const [response, setReponse] = useState({
    content: "",
    name: "",
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleContentChange = (event) => {
    setReponse({ ...response, content: event.target.value });
  };
  const handleNameChange = (event) => {
    setReponse({ ...response, name: event.target.value });
  };
  const handleDateChange = (event) => {
    setReponse({ ...response, date: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (response.content) {
      setValid(true);
    }
    console.log(response);
  };

  return (
    <div>
      <SingleReview review={singleReview} />
      {submitted && valid ? (
        <Card sx={{ minWidth: 275 }} className={classes.review}>
          <CardContent className={classes.content}>
            <Typography gutterBottom>{response.content}</Typography>
          </CardContent>
          <CardContent className={classes.second}>
            <Typography sx={{ mb: 1.5 }} gutterBottom>
              {response.name}
            </Typography>
            <Typography align="right" gutterBottom className={classes.date}>
              {response.date}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <Card className={classes.formCard}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Typography sx={{ mb: 1.5 }} color="primary" gutterBottom>
              Write a response below:
            </Typography>
            <TextField
              onChange={handleContentChange}
              placeholder="Message"
              name="content"
              value={response.content}
              className={classes.formField}
            />
            {submitted && !response.content ? (
              <span className={classes.span}>Please enter a message</span>
            ) : null}
            <TextField
              onChange={handleNameChange}
              placeholder="Name"
              name="name"
              value={response.name}
              className={classes.formField}
            />
            <TextField
              onChange={handleDateChange}
              placeholder="Date"
              name="date"
              value={response.date}
              className={classes.formField}
            />
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
              // disabled={toDisable}
              // onClick={}
            >
              Add a Response
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
}
