import React from "react";
import CustomerReview from "../../Atoms/ReviewAtom";
import './style.css';

const Reviews = () => {

  const reviewsData = [
    {
      h1: "Rose",
      text: "I recently purchased a Solar battery from E-Taka, and I couldn’t be happier with my online shopping experience. Their app was user-friendly, making it easy to find the perfect item.",
      imageUrl: "images/Ellipse1.png",
    },
    {
      h1: "Sammy",
      text: "The idea of a marketplace for recyclables is fantastic, and this e-waste platform is on the right track. I appreciate the effort to turn waste into valuable products.",
      imageUrl: "images/Ellipse2.png",
    },
    {
      h1: "Imani",
      text: "Dealing with e-waste used to be a headache for me until I discovered this website. The process of arranging a pickup for my old electronics was incredibly simple and quick.",
      imageUrl: "images/Ellipse3.png",
    },
  ];

  return (
    <div className="review-centred-section">
      <div className="review-section-container">
        <div className="review-header" id="reviews">
          <h1 id="review-title">Reviews</h1>
        </div>
        <div className="customer-reviews">
          {reviewsData.map((review, index) => (
            <CustomerReview
              key={index}
              h1={review.h1}
              text={review.text}
              imageUrl={review.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Reviews;