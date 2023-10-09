import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import './MenuPage.css';
import Card from './Card';
// import  PaginationAllProduct from './PaginationAllProduct'
import './card.css';
import Search from './Search';
import {HomeFilled, LogoutOutlined} from '@ant-design/icons';

// import { Pagination } from 'antd';
// import PaginationAllCategories from './PaginationAllCategories';
// import PaginationAllProduct, {recordsPerPage} from './PaginationAllProduct';
// import Pagination, {records1, records2} from './Pagination';


const MenuPage = () => {

    // const startTime = performance.now();

    const[products,setProducts]=useState([]);
    const[categoriesList,setCategoriesList]=useState([]);
    const[allproducts,setAllproduct]=useState([]);
    const [username, setUsername]= useState('');
    const [image, setImage] = useState('');
    // const [searchText, setSearchText] = useState('');
    const [activeCategory, setActiveCategory] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [filterproducts, setFilterproducts] = useState([]);
    const [showProductList, setShowProductList] = useState(false);
  

    
  
    

    // we are storing login data to local storage
    useEffect(()=>{
        const storedUsername = localStorage.getItem('username');
        const storedImage = localStorage.getItem('image');

        if(storedUsername){
            setUsername(storedUsername);
        }
        if(storedImage){
            setImage(storedImage);
        }
    },[])




  //onclick we are getting category names
    const getCategories = async ()=>{
        const res = await fetch('https://dummyjson.com/products/categories')
        const data = await res.json();
        setProducts(data);
        localStorage.setItem('allCategories', JSON.stringify(data))
    }
    useEffect(()=>{
       getCategories();
    },[])

  
  
    // onClicking we will get all data
    const getAllProducts = async ()=>{
        setShowProductList(false)
        try {
            const res = await fetch('https://dummyjson.com/products?limit=0')
            const data = await res.json();
            setAllproduct(data.products);
            setCategoriesList([]);
            localStorage.setItem('allProduct', JSON.stringify(data.products));
        } catch (error) {
            console.log(error)
        }
        
    }
    useEffect(()=>{
       getAllProducts();
    },[])

// onclicking we will get category data
    const getCategoryName= async(categoryName)=>{
        setShowProductList(false)
        try {
            const res = await fetch(`https://dummyjson.com/products/category/${categoryName}`)
            const  data = await res.json()
            setCategoriesList(data.products);
            localStorage.setItem('categoryWise', JSON.stringify(data.products))
        } catch (error) {
            console.log(error);
        }
    }
    
  return (
    <>
         <div className='menu-div'>
            <div className='navbar'>
                <div className='product-catalog'>
                    <div style={{color: 'blue', fontSize: '18px'}}><HomeFilled /></div>
                    <div style={{textAlign: 'center', fontWeight: 'bold', fontSize: '18px'}}>Product CataLog</div>
                </div>

                <div>
                    <Search  
                        inputValue={inputValue}
                        setInputValue={setInputValue}
                        filterproducts={filterproducts}
                        setFilterproducts={setFilterproducts}
                        setShowProductList={setShowProductList}
                        categoriesList={categoriesList}
                        setCategoriesList={setCategoriesList}
                        allproducts={allproducts}
                        setAllproduct={setAllproduct}

                    />
                </div>
                {/* <div>{data}</div> */}
                <div className='user'>
                    <div style={{fontWeight: 'bold'}}>{username}</div>
                    <div className='user-image'><img src={image}></img></div>
                    <div><Link to={'/'}><LogoutOutlined /></Link></div>
                </div>
            </div>
            <div className='body'>
                <div className='left-body'>
                <div  className='first' onClick={getAllProducts}>All Products</div>
                {products.map((curElem) => {
                    return (
                        <>
                            <div className={activeCategory === curElem ? 'left-navbar active' : 'left-navbar'} 
                            onClick={(e)=>{

                            getCategoryName(curElem); 
                            setActiveCategory(curElem);
                            }}>{curElem}</div>
                        </>
                    )
                })}
                </div>
                <div className='right-body'>
                    <div>
                        <Card 
                            categoriesList={categoriesList} 
                            allproducts={allproducts} 
                            showProductList={showProductList}
                            filterproducts={filterproducts} 
                        />
                        {/* <PaginationAllProduct recordsPerPage={recordsPerPageProducts}/>
                        <PaginationAllCategories recordsPerPage={recordsPerPageCategories}/> */}
                    </div>
                  
                </div>
            </div>
        </div>
    </>
   
  )
  
}
export default MenuPage;