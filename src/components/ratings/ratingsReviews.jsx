import React, { useState } from 'react';
// import bulma from 'bulma';
import OverallStarRating from './OverallStarRating';
import NewReview from './NewReview';

const testProduct = {
  id: 18201,
  campus: 'hr-bld',
  name: 'Ernesto Sweatpants',
  slogan: 'Odit dolorem nemo id tempora qui.',
  description: 'A sapiente hic. Facilis et sit voluptatem. Ex sunt reiciendis qui ut perferendis qui soluta quod.',
  category: 'Sweatpants',
  default_price: '56.00',
  created_at: '2021-02-23T05:08:00.520Z',
  updated_at: '2021-02-23T05:08:00.520Z',
};

// COMPONENT
const RatingsReviews = (props) => {
  // const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const product = props.product;

  return (
    <div className="RatingsReviews">
      <button type="button" className="button is-black" onClick={(e) => { console.log('hello'); }}>
        TEST BUTTON2
      </button>
      <section className="hero is-grey-dark is-fullheight">
          <div className="container is-fluid">
            <h1 className="title">Hello, Ryne Schroder!</h1>
            <h2 className="subtitle">This is Ratings and reviews</h2>
            {/* <OverallStarRating /> */}
            <OverallStarRating product={product} />
          </div>
      </section>
    </div>
  );
};

// EXPORTS
export default RatingsReviews;
