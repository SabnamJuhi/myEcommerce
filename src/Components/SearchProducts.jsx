import React, {useState} from 'react'

const SearchProducts = ({ filterproducts, recordsPerPage }) => {

    const [currentPage, setCurrentPage]=useState(1);
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const nPage2 = Math.ceil(filterproducts.length / recordsPerPage)
    const numbers2 = [...Array(nPage2 + 1).keys()].slice(1);
    const currentCategories = filterproducts.slice(firstIndex, lastIndex);

    function prePage(){
        if(currentPage !== 1){
            setCurrentPage(currentPage-1);
        }
      }
      function changeCPage(id){
        setCurrentPage(id);
      }
      function nextPage(){
        if(currentPage !== nPage2){
            setCurrentPage(currentPage +1);
        }
      }

  return (
    <div className='right-card-body'>
    
         {
            currentCategories.map((curElem)=>{
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
         {<nav>
            <ul className='pagination'>
                <li className='page-item'>
                    <a href='#' className='page-link'
                    onClick={prePage}>Prev</a>
                </li>
                    {
                    numbers2.map((n, i) =>(
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

export default SearchProducts