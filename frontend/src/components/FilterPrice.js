import { useState } from "react";
import api from "../api";

function FilterPrice(){

 const [min,setMin]=useState("");
 const [max,setMax]=useState("");
 const [products,setProducts]=useState([]);

 const filter=async()=>{

  const res=await api.get("/products");

  const filtered=res.data.filter(p=>
   p.unitPrice>=min && p.unitPrice<=max
  );

  setProducts(filtered);
 }

 return(

  <div>

   <h2>Filter by Price</h2>

   <input placeholder="Min Price" onChange={(e)=>setMin(e.target.value)} />

   <input placeholder="Max Price" onChange={(e)=>setMax(e.target.value)} />

   <button onClick={filter}>Filter</button>

   {products.map(p=>(
    <div key={p._id}>
     {p.productName} - {p.unitPrice}
    </div>
   ))}

  </div>

 )
}

export default FilterPrice