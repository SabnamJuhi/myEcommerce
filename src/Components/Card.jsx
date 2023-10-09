
// import CategoryListData from './CategoryListData';
// import ProductListData from './ProductListData';
import SearchProducts from './SearchProducts';
import PaginationAllCategories from './PaginationAllCategories';
import PaginationAllProduct from './PaginationAllProduct';

function Card({ categoriesList, allproducts, filterproducts, showProductList }) {
  const recordsPerPageProducts = 9;
  const recordsPerPageCategories = 5;

  return (
    <div>
      {
        categoriesList.length > 0 ? (
            <PaginationAllCategories categoriesList={categoriesList} recordsPerPage={recordsPerPageCategories} />
        ) : (
            <PaginationAllProduct allproducts={allproducts} recordsPerPage={recordsPerPageProducts}/>
        )}
        {
            showProductList && <SearchProducts filterproducts={filterproducts}  recordsPerPage={recordsPerPageProducts}/>
        }
    </div>
  );
}

export default Card;
