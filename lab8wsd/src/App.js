import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import './App.css';
import bg9 from './svg/bg9.jpg';
import bg10 from './svg/bg10.jpg';
import bg11 from './svg/bg11.jpg';
import bg12 from './svg/bg12.jpg';
import bg13 from './svg/bg13.jpg';
import bg15 from './svg/bg15.jpg';
import heart from './svg/heart.jpg';

const initialRestaurants = [
  {
    id: 1,
    title: 'Avocado and Brownies',
    features: ['Desert', 'Ambience', 'Special Offers'],
    images: [bg9],
    liked: 0, 
  },
  {
    id: 2,
    title: 'Cafe DYU',
    features: ['Ambience', 'Feasible Prices', 'Food Variaties'],
    images: [bg10],
    liked: 0,
  },
  {
    id: 3,
    title: 'PlanB',
    features: ['Bands', 'Drinks', 'Food'],
    images: [bg11],
    liked: 0,
  },
  {
    id: 4,
    title: 'Alchemist',
    features: ['Drinks', 'Food','Ambience'],
    images: [bg12],
    liked: 0,
  },
  {
    id: 5,
    title: 'Swiss Castle',
    features: ['Deserts', 'Cakes', 'Food'],
    images: [bg13],
    liked: 0,
  },
  {
    id: 6,
    title: 'Art&Meet',
    features: ['Art','Food','Greenary'],
    images: [bg15],
    liked: 0,
  }
];

function App() {
  const [restaurants, setRestaurants] = useState(initialRestaurants);

  const toggleLike = (id) => {
    setRestaurants(restaurants.map(restaurant =>
      restaurant.id === id
        ? { ...restaurant, liked: restaurant.liked === 15 ? 0 : restaurant.liked + 1 }
        : restaurant
    ));
  };

  return (
    <div className="container">
      <div className="columns is-multiline">
        {restaurants.map(restaurant => (
          <div className="column is-one-third" key={restaurant.id}>
            <div className="card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={restaurant.images[0]} alt={restaurant.title} />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">{restaurant.title}</p>
                    <ul>
                      {restaurant.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <footer className="card-footer">
                <a href="#!" className="card-footer-item" onClick={() => toggleLike(restaurant.id)}>
                  <img src={heart} alt="Like" className="heart-icon" style={{ width: `${10 + 10 * restaurant.liked}px` }} />
                </a>
              </footer>
            </div>
          </div>
        ))}
      </div>
      </div>
);
}
export default App;