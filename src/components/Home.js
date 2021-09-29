import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import reviews from "../reviews";
import SingleReview from "./SingleReview";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
      justifyContent: "center",
      display: "flex",
    },
  },
  header: {
    padding: 30,
    display: "flex",
    textAlign: "center",
  },
}));

export default function Home() {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo(0, 0);
  };
  const numOfPages = Math.ceil(reviews.length / 9);
  const pageStart = 9 * (page - 1);
  const pageEnd = 9 * page;

  return (
    <Container className="account-wrapper">
      <Typography
        className={classes.header}
        variant="h4"
        component="h3"
        color="primary"
      >
        Read the Reviews:
      </Typography>
      <Grid container spacing={3}>
        {reviews.length !== 0 ? (
          reviews.slice(pageStart, pageEnd).map((review) => (
            <Grid item key={review.id} xs={12} md={6} lg={4}>
              <SingleReview review={review} />
            </Grid>
          ))
        ) : (
          <h3>Loading</h3>
        )}
      </Grid>
      <div className={classes.root}>
        <Typography></Typography>
        <Pagination count={numOfPages} page={page} onChange={handleChange} />
      </div>
    </Container>
  );
}
