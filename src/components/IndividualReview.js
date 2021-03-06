import React, { useState } from "react";
import reviews from "../reviews";
import SingleReview from "./SingleReview";
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from "@material-ui/icons/Edit";
import {
  Card,
  Button,
  CardContent,
  Typography,
  TextField,
  Box,
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
  editButton: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
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
  const [response, setReponse] = useState({
    content: "",
    name: "",
    date: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    if (response.content) {
      setValid(true);
    }
  };
  const handleEdit = (evt) => {
    evt.preventDefault();
    setEdit(!edit);
  };

  return (
    <div>
      <SingleReview review={singleReview} />
      {submitted && valid ? (
        edit ? (
          <Card className={classes.formCard}>
            <form onSubmit={handleEdit} className={classes.form}>
              <Typography sx={{ mb: 1.5 }} color="primary" gutterBottom>
                Edit Your Response
              </Typography>
              <TextField
                onChange={(evt) =>
                  setReponse({ ...response, content: evt.target.value })
                }
                placeholder="Message"
                name="content"
                value={response.content}
                className={classes.formField}
              />
              {submitted && !response.content ? (
                <span className={classes.span}>Please enter a message</span>
              ) : null}
              <TextField
                onChange={(evt) =>
                  setReponse({ ...response, name: evt.target.value })
                }
                placeholder="Name"
                name="name"
                value={response.name}
                className={classes.formField}
              />
              <TextField
                onChange={(evt) =>
                  setReponse({ ...response, date: evt.target.value })
                }
                id="date"
                label="Date"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={response.date}
                className={classes.formField}
              />
              <Button
                className={classes.button}
                variant="contained"
                type="submit"
                color="primary"
                fullWidth
              >
                Edit
              </Button>
            </form>
          </Card>
        ) : (
          <Card sx={{ minWidth: 275 }} className={classes.review}>
            <CardContent className={classes.content}>
              <Box className={classes.editButton}>
                <Button onClick={handleEdit}>
                  <EditIcon color="primary" />
                </Button>
              </Box>
              <Typography data-testid="message" gutterBottom>
                {response.content}
              </Typography>
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
        )
      ) : (
        <Card className={classes.formCard}>
          <form onSubmit={handleSubmit} className={classes.form}>
            <Typography sx={{ mb: 1.5 }} color="primary" gutterBottom>
              Write a response below:
            </Typography>
            <TextField
              onChange={(evt) =>
                setReponse({ ...response, content: evt.target.value })
              }
              placeholder="Message"
              name="content"
              value={response.content}
              className={classes.formField}
              inputProps={{ "data-testid": "message" }}
            />
            {submitted && !response.content ? (
              <span className={classes.span}>Please enter a message</span>
            ) : null}
            <TextField
              onChange={(evt) =>
                setReponse({ ...response, name: evt.target.value })
              }
              placeholder="Name"
              name="name"
              value={response.name}
              className={classes.formField}
              data-testid="name"
            />
            <TextField
              onChange={(evt) =>
                setReponse({ ...response, date: evt.target.value })
              }
              id="date"
              label="Date"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
              value={response.date}
              className={classes.formField}
              data-testid="date"
            />
            <Button
              className={classes.button}
              variant="contained"
              type="submit"
              color="primary"
              fullWidth
              data-testid="addResponseBtn"
            >
              Add a Response
            </Button>
          </form>
        </Card>
      )}
    </div>
  );
}
