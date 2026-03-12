import AddProduct from "./components/AddProduct";
import ProductList from "./components/ProductList";
import SearchProduct from "./components/SearchProduct";
import FilterCategory from "./components/FilterCategory";
import FilterPrice from "./components/FilterPrice";
import FilterStock from "./components/FilterStock";

function App(){

return(

<div className="container">

<h1>Store Inventory Management</h1>

<div className="card">
<AddProduct/>
</div>

<div className="card">
<SearchProduct/>
</div>

<div className="card">
<FilterCategory/>
</div>

<div className="card">
<FilterPrice/>
</div>

<div className="card">
<FilterStock/>
</div>

<div className="card">
<ProductList/>
</div>

</div>

)
}

export default App