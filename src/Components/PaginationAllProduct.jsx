import React, { useState, useEffect } from 'react';



const PaginationAllProduct = ({recordsPerPage, allproducts}) => {

  
    const allProductLength = localStorage.getItem('allProduct');
    console.log(allProductLength);
    const [currentPage, setCurrentPage]=useState(1);
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const nPage1 = Math.ceil(allproducts.length / recordsPerPage);
    const numbers1 = [...Array(nPage1 + 1).keys()].slice(1);
    
    const currentCategories = allproducts.slice(firstIndex, lastIndex);
    // const [records1, setRecords1]=useState('');
    // setRecords1(()=>{allProductLength.slice(firstIndex1, lastIndex1)}) ;
    


   

    function prePage(){
        if(currentPage !== 1){
            setCurrentPage(currentPage-1);
        }
      }
      function changeCPage(id){
        setCurrentPage(id);
      }
      function nextPage(){
        if(currentPage !== nPage1){
            setCurrentPage(currentPage +1);
        }
      }
  return (
    <div>
    {
        <div className='right-card-body'>
         {
            currentCategories.map((curElem, i)=>{
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
    }
        {<nav>
            <ul className='pagination'>
                <li className='page-item'>
                    <a href='#' className='page-link'
                    onClick={prePage}>Prev</a>
                </li>
                    {
                    numbers1.map((n, i) =>(
                        <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                            <a href='#' className='page-link'
                            onClick={()=>changeCPage(n)}>{n}</a>
                        </li>
                    ) )
                    }
                <li className='page-item'>
                    <a href='#' className='page-link'
                    onClick={nextPage}>Next</a>
                </li>
            </ul>
        </nav>}
    </div>
  )
}

export default PaginationAllProduct;

