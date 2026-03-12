import {useEffect,useState} from "react"
import api from "../api"

function ProductList(){

const [products,setProducts]=useState([])

const fetchProducts=async()=>{
const res=await api.get("/products")
setProducts(res.data)
}

useEffect(()=>{
fetchProducts()
},[])

const deleteProduct=async(id)=>{
await api.delete(`/products/${id}`)
fetchProducts()
}

const updateProduct=async(id,product)=>{
await api.put(`/products/${id}`,product)
alert("Updated")
fetchProducts()
}

const handleChange=(index,field,value)=>{

const updated=[...products]

updated[index][field]=value

setProducts(updated)
}

return(

<div>

<h2>All Products</h2>

<div className="product-grid">

{products.map((p,index)=>(

<div key={p._id} className="product-card">

<input value={p.productName} onChange={(e)=>handleChange(index,"productName",e.target.value)}/>

<input value={p.productCode} onChange={(e)=>handleChange(index,"productCode",e.target.value)}/>

<input value={p.category} onChange={(e)=>handleChange(index,"category",e.target.value)}/>

<input value={p.supplierName} onChange={(e)=>handleChange(index,"supplierName",e.target.value)}/>

<input value={p.quantityInStock} onChange={(e)=>handleChange(index,"quantityInStock",e.target.value)}/>

<input value={p.reorderLevel} onChange={(e)=>handleChange(index,"reorderLevel",e.target.value)}/>

<input value={p.unitPrice} onChange={(e)=>handleChange(index,"unitPrice",e.target.value)}/>

<select value={p.productType} onChange={(e)=>handleChange(index,"productType",e.target.value)}>
<option>Perishable</option>
<option>Non-Perishable</option>
</select>

<button className="update-btn" onClick={()=>updateProduct(p._id,p)}>Update</button>

<button className="delete-btn" onClick={()=>deleteProduct(p._id)}>Delete</button>

</div>

))}

</div>

</div>

)
}

export default ProductList