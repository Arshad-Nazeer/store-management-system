import { useState } from "react";
import api from "../api";

function AddProduct(){

const [product,setProduct]=useState({
productName:"",
productCode:"",
category:"",
supplierName:"",
quantityInStock:"",
reorderLevel:"",
unitPrice:"",
productType:"Non-Perishable"
})

const handleChange=(e)=>{
setProduct({...product,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{
e.preventDefault()

await api.post("/products",product)

alert("Product Added")

window.location.reload()
}

return(

<div>

<h2>Add Product</h2>

<form onSubmit={handleSubmit}>

<input name="productName" placeholder="Product Name" onChange={handleChange}/>

<input name="productCode" placeholder="Product Code" onChange={handleChange}/>

<input name="category" placeholder="Category" onChange={handleChange}/>

<input name="supplierName" placeholder="Supplier Name" onChange={handleChange}/>

<input name="quantityInStock" placeholder="Stock Quantity" onChange={handleChange}/>

<input name="reorderLevel" placeholder="Reorder Level" onChange={handleChange}/>

<input name="unitPrice" placeholder="Unit Price" onChange={handleChange}/>

<select name="productType" onChange={handleChange}>
<option>Perishable</option>
<option>Non-Perishable</option>
</select>

<button type="submit">Add Product</button>

</form>

</div>

)
}

export default AddProduct