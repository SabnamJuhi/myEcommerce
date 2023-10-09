import React from 'react'

// import './card.css';
const FilteredCard = ({ filteredProducts }) => {
    // console.log(allproducts);
  return (
    <div className='right-card-body'>
         {
            filteredProducts .map((curElem)=>{
                return(
                    <div className='product-wraper'>
                        <div className='product'>
                            <div className='product-image'>
                                 <img src={curElem.images[0]} alt='image' />
                            </div>
                            <div className='product-details'>
                                <div>{curElem.brand}</div>
                                <div>{curElem.description}</div>
                            </div>
                            <div className='product-price'>{curElem.price}</div>
                        </div>
                    </div>
                   
                )
            })
         }
    </div>
  )
}

export default  FilteredCard ;