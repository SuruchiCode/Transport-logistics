import React from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ count }) => {
  return (
    <div className="flex">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  count: PropTypes.number.isRequired,
};

const DriverProfile = ({ name, rating, contact, activities, reviews }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md" role="region" aria-label="Driver Profile">
      <h2 className="text-2xl font-semibold mb-4">Driver Profile</h2>
      <div className="space-y-4">
        <p><span className="font-semibold">Name:</span> {name}</p>
        <p><span className="font-semibold">Rating:</span> {rating}</p>
        <p><span className="font-semibold">Contact no.:</span> {contact}</p>
      </div>
      <h3 className="text-xl font-semibold mt-6 mb-4">Activities</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex justify-between items-center bg-gray-100 p-4 rounded">
            <div>
              <p className="font-semibold">{activity.truckType}</p>
              <p>{activity.route}</p>
              <p>{activity.load} ton</p>
            </div>
          </div>
        ))}
      </div>
      <h3 className="text-xl font-semibold mt-6 mb-4">Ratings</h3>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded" role="article" aria-label={`Review by ${review.reviewer}`}>
            <div className="flex items-center mb-2">
              <div className="w-10 h-10 bg-gray-300 rounded-full mr-3" aria-hidden="true"></div>
              <p className="font-semibold">{review.reviewer}</p>
            </div>
            <div className="flex mb-2">
              <StarRating count={review.stars} />
            </div>
            <p className="text-sm text-gray-600">
              {review.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

DriverProfile.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  contact: PropTypes.string.isRequired,
  activities: PropTypes.arrayOf(PropTypes.shape({
    truckType: PropTypes.string.isRequired,
    route: PropTypes.string.isRequired,
    load: PropTypes.number.isRequired,
  })).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    reviewer: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  })).isRequired,
};

export default DriverProfile;
