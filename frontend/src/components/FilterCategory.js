import { useState } from "react";
import api from "../api";

function FilterCategory(){

 const [category,setCategory]=useState("");
 const [products,setProducts]=useState([]);

 const filter=async()=>{

  const res=await api.get(`/products/category?cat=${category}`);

  setProducts(res.data);
 }

 return(

  <div>

   <h2>Filter by Category</h2>

   <input
    placeholder="Category"
    onChange={(e)=>setCategory(e.target.value)}
   />

   <button onClick={filter}>Filter</button>

   {products.map(p=>(
    <div key={p._id}>
     {p.productName} - {p.category}
    </div>
   ))}

  </div>

 )
}

export default FilterCategory