import React, { useState } from "react";
import reviews from "../reviews";
import SingleReview from "./SingleReview";

export default function IndividualReview(props) {
  console.log(props);
  const individualReviewId = props.match.params.reviewId;
  let review = "";
  for (let i = 0; i < reviews.length; i++) {
    if (reviews[i].id === individualReviewId) {
      review = reviews[i];
      console.log("set state!");
    }
  }
  const [singleReview] = useState(review);

  return <SingleReview review={singleReview} />;
}
