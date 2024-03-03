import React from 'react';
import './SubsCard.css';

const SubsCard = ({ Title, Prices, Description, News }) => {
  return (
    <div className='Subs-card'>

        

      {/* Type title */}
      <div className='Sub-Title'>
        {Title && <h1>{Title}</h1>}
      </div>

      {/* Price */}
      <div className='Sub-price'>
        {Prices && <h1>{Prices}</h1>}<h5 id='month-tag'>/month</h5>
      </div>

      {/* description */}
      <div className='description'>
        {Description && <p>{Description}</p>}
      </div>

      {/* company name */}
      <div className='Sub-news'>
        {News && <p>{News}</p>}
      </div>

      {/* button */}
      
        <button className='Sub-btn'>Subscribe now</button>
      

    </div>
  );
};

export default SubsCard;
