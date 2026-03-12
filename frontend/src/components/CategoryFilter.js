import { useState } from "react";
import api from "../api";

function CategoryFilter(){

  const [products,setProducts]=useState([]);

  const filter=async(cat)=>{
    const res=await api.get(`/products/category?cat=${cat}`);
    setProducts(res.data);
  };

  return(

    <div>

      <h2>Filter by Category</h2>

      <button onClick={()=>filter("Electronics")}>Electronics</button>
      <button onClick={()=>filter("Food")}>Food</button>
      <button onClick={()=>filter("Clothing")}>Clothing</button>
      <button onClick={()=>filter("Furniture")}>Furniture</button>

      {products.map(p=>(
        <div key={p._id}>
          {p.productName} - {p.category}
        </div>
      ))}

    </div>
  );
}

export default CategoryFilter;