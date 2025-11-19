import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProductStore } from "../../store/productStore";
import { fetchProducts } from "../../store/productsApi";
import './ProductPage.scss'

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const toggleLike = useProductStore((state) => state.toggleLike)

  const { products, setProducts } = useProductStore();
  const [product, setProduct] = useState<any>(null);

  useEffect(() => { 
    const load = async() => {   
      if (products.length === 0) {
        const data = await fetchProducts()
        setProducts(data) 

        const found = data.find((p) => String(p.id) === id)
        setProduct(found) 
      } else {
        const found = products.find((p) => String(p.id) === id)
        setProduct(found) 
      }
    }

    load()
  }, [products, id]);

  if (!product) {
    return (
    <div className="">loading...</div>
    )
  }

  return (
    <div className="product-page">
      <img 
        src={product.image || '/noImage.png' } 
        alt={product.title}
        className="product-page__image" 
      />
      <div className="product-page__about">
        <h2 className="product-page__title">{product.title}</h2>
        <p className="product-page__description">{product.description}</p>
        <div className="product-page__buttons">
          <button 
          onClick={() => toggleLike(product.id)}
          className={`product-page__like ${product.liked ? "liked" : ""}`}
        >
          ♥
        </button>
        <button
          className="product-page__back"
          onClick={() => navigate("/products")}      
        >
          ← back to products
        </button>
        </div>
      </div>
    </div>
  )


}
export default ProductPage;