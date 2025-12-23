import { useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Modal from "../components/Modal";

export default function Dashboard() {
  const [products, setProducts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const addProduct = () => {
    setProducts([...products, { name, price }]);
    setName("");
    setPrice("");
    setIsOpen(false);
  };

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen text-center">
      <Button onClick={() => setIsOpen(true)}>Add Product</Button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {products.map((p, index) => (
          <Card
            key={index}
            title={p.name}
            price={p.price}
            footer={
              <Button variant="danger" onClick={() => deleteProduct(index)}>
                Delete
              </Button>
            }
          >
            Product description here
          </Card>
        ))}
      </div>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Add Product">
        <input
          className="border p-2 w-full mb-2"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />  
        <input
          className="border p-2 w-full mb-2"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button onClick={addProduct}>Save</Button>
      </Modal>
    </div>
  );
}
