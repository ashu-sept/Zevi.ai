import React, { useState } from 'react';
import * as Styles from './product-style';
import LatestTrend from '../latest-trend/latest-trend';
import Sidebar from './Sidebar';
import './sidebar.css'
interface CustomProps {
  apiData: any[]; // Define the prop here
}

const Product: React.FC<CustomProps> = ({ apiData }) => {
  const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<string>('');
  const [likedProducts, setLikedProducts] = useState<string[]>([]);
  const [liked, setLiked] = useState(false);
  
    const toggleLike = () => {
      setLiked(!liked);
    };

  // Define your brand, price, and rating options here
  const toggleLikeProduct = (productId: string) => {
    if (likedProducts.includes(productId)) {
      // Product is already liked, remove it from the liked products list
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      // Product is not liked, add it to the liked products list
      setLikedProducts([...likedProducts, productId]);
    }
  };

  return (
    <Styles.Container>
      <p className="title" style={{marginTop:0}}>Search Results</p>
      <div className="itemArea">
      <Sidebar />
      <div className="main-content">
        
        <Styles.Main>
          {apiData
            .filter((item) => {
              // Apply brand filter
              if (selectedBrand && selectedBrand !== item.brand) {
                return false;
              }

              // Apply price filter
              if (selectedPrice === 'Low to High') {
                return item.price > 0;
              } else if (selectedPrice === 'High to Low') {
                return item.price < 0;
              }

              // Apply rating filter
              if (selectedRating === '5 Stars') {
                return item.rating === 5;
              } else if (selectedRating === '4 Stars & Up') {
                return item.rating >= 4;
              } else if (selectedRating === '3 Stars & Up') {
                return item.rating >= 3;
              } else if (selectedRating === '2 Stars & Up') {
                return item.rating >= 2;
              } else if (selectedRating === '1 Star & Up') {
                return item.rating >= 1;
              }

              return true; // Show items that pass all filters
            })
            .map((item: any) => (
                <div key={item.id} className="cards">
                  <img src={item.image} alt="" />
                  <p className="card-title">{item.title}</p>
                  <p className="card-price">Rs.{item.price}</p>
                  <button
                    className="view-product-button"
                    // onClick={() => viewProduct(item.id)}
                  >
                    View Product
                  </button>
                  <div className={`like-button ${liked ? 'liked' : ''}`} onClick={toggleLike}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 16.47 2 13.36 2 9.5 2 6.42 4.42 4 7.5 4c1.74 0 3.41.81 4.5 2.09C13.09 4.81 14.76 4 16.5 4 19.58 4 22 6.42 22 9.5c0 3.86-3.4 7.97-8.55 10.54L12 21.35z" />
      </svg>
    </div>
                </div>
              ))}
          </Styles.Main>
        </div>
      </div>
      
      

      
      </Styles.Container>
  );
};

export default Product;
