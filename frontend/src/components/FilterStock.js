import { useState } from "react";
import api from "../api";

function FilterStock(){

 const [min,setMin]=useState("");
 const [max,setMax]=useState("");
 const [products,setProducts]=useState([]);

 const filter=async()=>{

  const res=await api.get("/products");

  const filtered=res.data.filter(p=>
   p.quantityInStock>=min && p.quantityInStock<=max
  );

  setProducts(filtered);
 }

 return(

  <div>

   <h2>Filter by Stock</h2>

   <input placeholder="Min Stock" onChange={(e)=>setMin(e.target.value)} />

   <input placeholder="Max Stock" onChange={(e)=>setMax(e.target.value)} />

   <button onClick={filter}>Filter</button>

   {products.map(p=>(
    <div key={p._id}>
     {p.productName} - {p.quantityInStock}
    </div>
   ))}

  </div>

 )
}

export default FilterStock