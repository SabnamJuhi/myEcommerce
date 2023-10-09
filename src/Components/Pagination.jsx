import React from 'react';
import PaginationAllProduct from './PaginationAllProduct'
import PaginationAllCategories from './PaginationAllCategories';


const Pagination = () => {

  return (
    <div>
        {
        categoriesList.length > 0 ? (
            <PaginationAllCategories />
        ) : (
            <PaginationAllProduct />
        )}
    </div>
  )
}

export default Pagination;
export {records1, records2}