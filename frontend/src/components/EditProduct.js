import { useState } from "react";
import api from "../api";

function EditProduct({ product, refresh }) {

  const [form, setForm] = useState(product);

  const handleChange = (e) => {
  let value = e.target.value;

  if (["quantityInStock","reorderLevel","unitPrice"].includes(e.target.name)) {
    value = Number(value);
  }

  setForm({ ...form, [e.target.name]: value });
    };

  const updateProduct = async () => {

    await api.put(`/products/${product._id}`, form);

    alert("Product Updated");
    refresh();
  };

  return (
    <div style={{border:"1px solid gray",padding:"10px"}}>

      <input name="productName" value={form.productName} onChange={handleChange}/>
      <input name="productCode" value={form.productCode} onChange={handleChange}/>
      <input name="category" value={form.category} onChange={handleChange}/>
      <input name="supplierName" value={form.supplierName} onChange={handleChange}/>
      <input name="quantityInStock" value={form.quantityInStock} onChange={handleChange}/>
      <input name="reorderLevel" value={form.reorderLevel} onChange={handleChange}/>
      <input name="unitPrice" value={form.unitPrice} onChange={handleChange}/>

      <button onClick={updateProduct}>Update</button>

    </div>
  );
}

export default EditProduct;