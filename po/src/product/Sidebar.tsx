import { useState } from 'react';
import './sidebar.css'
const Sidebar = () => {
    const [selectedBrand, setSelectedBrand] = useState<string>('');
  const [selectedPrice, setSelectedPrice] = useState<string>('');
  const [selectedRating, setSelectedRating] = useState<string>('');
  const [likedProducts, setLikedProducts] = useState<string[]>([]);
    const brandOptions = ['Mango', 'H&M', 'Zara'];
  const priceOptions = ['Low to High', 'High to Low'];
  const ratingOptions = ['★ ★ ★ ★ ★', '★ ★ ★ ★ ☆', '★ ★ ★ ☆ ☆ ', '★ ★ ☆ ☆ ☆  ', '★ ☆ ☆ ☆ ☆ '];
    
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);

  const toggleAccordion1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleAccordion2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleAccordion3 = () => {
    setIsOpen3(!isOpen3);
  };

    return ( <>
    <div className="sidebar">
    <div className={`accordion ${isOpen1 ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion1}>
        <span style={{fontSize : "18px"}}>Brand</span>
        {isOpen1 ? <span className="arrow">▼</span> : <span className="arrow">►</span>}
      </div>
      {isOpen1 && (
        <div className="accordion-content">
          {brandOptions.map((option) => (
               <div className="checkbox-container">
               <input type="checkbox" id="option1"/>
               <label  key={option} >{option}</label>
           </div>
            ))}
        </div>
      )}
    </div>
    <div className={`accordion ${isOpen2 ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion2}>
        Price
        {isOpen2 ? <span className="arrow">▼</span> : <span className="arrow">►</span>}
      </div>
      {isOpen2 && (
        <div className="accordion-content">
          {priceOptions.map((option) => (
              <div className="checkbox-container">
              <input type="checkbox" id="option1"/>
              <label  key={option} >{option}</label>
          </div>
            ))}
        </div>
      )}
    </div>
    <div className={`accordion ${isOpen3 ? 'open' : ''}`}>
      <div className="accordion-header" onClick={toggleAccordion3}>
        Rating
        {isOpen3 ? <span className="arrow">▼</span> : <span className="arrow">►</span>}
      </div>
      {isOpen3 && (
        <div className="accordion-content">
          {ratingOptions.map((option) => (
              <div className="checkbox-container">
              <input type="checkbox" id="option1"/>
              <label  key={option}style={{color:'gold'}} >{option}</label>
          </div>
             
            ))}
        </div>
      )}
    </div>
       

   
      </div>

   
    </> );
}
 
export default Sidebar;