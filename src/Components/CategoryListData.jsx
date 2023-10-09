import React from 'react'
// import './card.css';
const CategoryListData = ({categoriesList}) => {
  return (
    <div className='right-card-body'>
        {
            categoriesList.map((curElem, i)=>{
                return(
                    <div className='product-wraper'>
                        <div className='product' key={i}>
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

export default CategoryListData;