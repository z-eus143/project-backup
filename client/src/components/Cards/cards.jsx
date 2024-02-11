import React from 'react'
import './Cards.css';
const Cards = ({imgSrc, imgAlt, Title, description, buttontext, link}) => {
  return (
    <div className='Card-container'>
      {/* image */}
      {imgSrc && imgAlt && (<img src={imgSrc} alt={imgAlt} className='Card-Img'/>)}

      {/* title */}
      {Title && (<h1 className='Card-title'>{Title}</h1>)}

      {/* desciption */}
      {description &&(<p className='Card-description'>{description}</p>)}

      {/* link */}
      {buttontext &&(<a href={link} className='card-btn'>{buttontext}</a>)} 
    </div>
  )
}

export default Cards