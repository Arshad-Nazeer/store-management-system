import {useState} from "react"
import api from "../api"

function SearchProduct(){

 const [name,setName]=useState("")
 const [products,setProducts]=useState([])

 const search=async()=>{

  const res=await api.get(`/products/search?name=${name}`)

  setProducts(res.data)
 }

 return(

  <div>

   <h2>Search Product</h2>

   <input placeholder="Enter name" onChange={e=>setName(e.target.value)}/>

   <button onClick={search}>Search</button>

   {products.map(p=>(
    <div key={p._id}>
     {p.productName} - {p.unitPrice}
    </div>
   ))}

  </div>
 )
}

export default SearchProduct