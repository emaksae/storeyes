import { useNavigate } from "react-router"
import { useProductStore } from "../../store/productStore"
import './ProductCard.scss'

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate()
  const toggleLike = useProductStore((state) => state.toggleLike)
  const removeProduct = useProductStore((state) => state.removeProduct)


  const handleOpen = (e: React.MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("button")) return;
    navigate(`/products/${product.id}`);
  };

  return (
    <div
      onClick={handleOpen}
      className={`product-card ${product.liked ? "liked" : ""}`}
    >
      <img
        src={product.image || "/noImage.png"}
        alt={product.title}
        className="product-card__image"
      />

      <h3 className="product-card__title">
        {product.title.length > 25
          ? product.title.slice(0, 25) + "..."
          : product.title}
      </h3>

      <p className="product-card__description">
        {product.description}
      </p>

      <div className="product-card__buttons">
        <button
          onClick={() => toggleLike(product.id)}
          className="product-card__like"
          style={{color: product.liked ? "rgb(228, 117, 117)" : "var(--color-base)"}}
        >
          ♥
        </button>
        <button
          onClick={() => removeProduct(product.id)}
          className="product-card__remove"
          style={{color: "var(--color-base)"}}
        >
          ✖
        </button>
      </div>
    </div>
  );

}

export default ProductCard