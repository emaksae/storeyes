import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProductStore } from "../../store/productStore";
import './CreateProduct.scss'


const CreateProduct = () => {
  const navigate = useNavigate()
  const addProduct = useProductStore((state) => state.addProduct)

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!title || !description) {
      alert("Не хватает данных")
    }

    const newProduct = {
      id: Date.now(),
      title,
      description,
      image,
      liked: false,
    }

    addProduct(newProduct)
    navigate("/products")
  }

  return (
    <div className="create-product">
      <h2 className="create-product__title">create new product</h2>
      <form 
        onSubmit={handleSubmit}
        className="create-product__form"
      >
        <ul className="create-product__list">
          <li className="create-product__item">
            <label>title:</label>
            <input 
              className="create-product__input"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </li>
          <li className="create-product__item">
            <label>description:</label>
            <input 
              className="create-product__input"
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </li>
          <li className="create-product__item">
            <label>image URL:</label>
            <input
              className="create-product__input"
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </li>
        </ul>

        <button className="create-product__button" type="submit">create product</button>
      </form>
    </div>
  )
}

export default CreateProduct