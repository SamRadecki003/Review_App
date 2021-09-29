import React, { useState } from "react";
import reviews from "../reviews";
import StarRatings from "react-star-ratings";
import { Typography, Card, CardContent } from "@material-ui/core";

export default function IndividualReview(props) {
  const individualReviewId = props.match.params.reviewId;
  let review = "";
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].id === individualReviewId) {
      review = reviews[i];
      console.log("set state!");
    }
  }
  const [singleReview] = useState(review);
  const date = singleReview.published_at.slice(0, 14);
  console.log(singleReview);
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography gutterBottom>{singleReview.place}</Typography>
        <StarRatings
          rating={singleReview.rating}
          starRatedColor="#FFD700"
          numberOfStars={5}
          starDimension="30px"
          starSpacing="5px"
          name="rating"
        />
        <Typography variant="body2">{singleReview.content}</Typography>
      </CardContent>
      <CardContent>
        <Typography sx={{ mb: 1.5 }} gutterBottom>
          {singleReview.author}
        </Typography>
        <Typography align="right" gutterBottom>
          {date}
        </Typography>
      </CardContent>
    </Card>
  );
}
