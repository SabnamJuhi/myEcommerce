import React from 'react';


const Search = ({ inputValue, setInputValue, setFilterproducts, setShowProductList,categoriesList, setCategoriesList, setAllproduct }) => {
    // const [filterproducts, setFilterproducts] = useState([]);

const handleSearch = async (e) => {
    e.preventDefault();
    // setSearchText(inputValues.toLowerCase());
    setShowProductList(true);
    try {
        const res = await fetch(`https://dummyjson.com/products/search?q=${inputValue}`);
        const data = await res.json();
        if(categoriesList.length>0){
            const filteredProducts = data.products.filter((product) => {
                // Your condition to check if product matches with category data
                // Example: Assuming categoriesList is an array of category names
                return categoriesList.includes(product.category); // You can customize this condition
              });
              setFilterproducts(filteredProducts);
            //   setCategoriesList([])
            //   setAllproduct([])
        }else{
            setFilterproducts(data.products);
            setCategoriesList([])
            setAllproduct([])
        }
       
    } catch (error) {
        console.log(error);
    }
  };

//   console.log(filterproducts);

  return (
    <>
        
        <form onSubmit={handleSearch}>
         
                <input 
                    type='text' 
                    placeholder='search here...'
                    value={inputValue}
                    onChange={(e)=>{setInputValue(e.target.value)}}
                />
                <button type='submit'>Search</button>
            
        </form>
        
    </>
  )
}

export default Search