import { useEffect, useState } from "react";
function ManageProducts() {
  const defaultProducts = [
    {
      id: 1,
      name: "Kanchipuram Silk Saree",
      price: 12999,
      category: "Kanchipuram",
    },
    {
      id: 2,
      name: "Mysore Silk Saree",
      price: 9999,
      category: "Mysore",
    },
    {
      id: 3,
      name: "Dharmavaram Silk Saree",
      price: 10999,
      category: "Dharmavaram",
    },
  ];
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("sareeProducts");
    return savedProducts ? JSON.parse(savedProducts) : defaultProducts;
  });
  useEffect(() => {
    localStorage.setItem("sareeProducts", JSON.stringify(products));
  }, [products]);
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
  });
  const [editingId, setEditingId] = useState(null);
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.category) {
      alert("Please fill all fields.");
      return;
    }
    if (editingId) {
      setProducts(
        products.map((product) =>
          product.id === editingId
            ? {
                ...product,
                name: formData.name,
                price: Number(formData.price),
                category: formData.category,
              }
            : product
        )
      );
      setEditingId(null);
    } else {
      const newProduct = {
        id: Date.now(),
        name: formData.name,
        price: Number(formData.price),
        category: formData.category,
      };
      setProducts([...products, newProduct]);
    }
    setFormData({
      name: "",
      price: "",
      category: "",
    });
  };
  const handleEdit = (product) => {
    setEditingId(product.id);
    setFormData({name: product.name, price: product.price, category: product.category,});
  };
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };
  return (
    <div className="page">
      <h1>Manage Sarees</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Saree name"  value={formData.name} onChange={handleChange}/>
        <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
        <button type="submit">{editingId ? "Update Saree" : "Add Saree"}</button>
      </form>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>
            <p>₹{product.price}</p>
            <p>Category: {product.category}</p>
            <button onClick={() => handleEdit(product)}>Edit</button>
            <button className="remove-button" onClick={() => handleDelete(product.id)}> Delete </button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ManageProducts;