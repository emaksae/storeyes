import { useEffect, useState } from "react";
import { useProductStore } from "../../store/productStore";
import { fetchProducts } from "../../store/productsApi";
import ProductCard from "../../components/ProductCard/ProductCard";
import './ProductsList.scss'

const ProductsList = () => {
  const { products, setProducts } = useProductStore();
  const [search, setSearch] = useState("");
  const [showLiked, setShowLiked] = useState(false);

  useEffect(() => {
    if (products.length === 0) {
      const load = async () => {
        const data = await fetchProducts();
        setProducts(data);
      }
      load();
    }
  }, [products, setProducts]);

  const filtered = products.filter((p) => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    const matchesLike = !showLiked || p.liked;
    return matchesSearch && matchesLike;
  })

  return (
    <div className="products-list">
      <div className="products-list__search">
        <input 
          className="products-list__input"
          type="text" 
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <label htmlFor="">
          <input 
          className="products-list__checkbox"
          type="checkbox"
          checked={showLiked}
          onChange={() => setShowLiked(!showLiked)} 
          />
          Liked
        </label>
      </div>
      <div className="products-list__products">
        {filtered.length > 0 ? (
          filtered.map((p) => <ProductCard key={p.id} product={p} />)
        ) : (
          <p>There are no products matching your search criteria.</p>
        )}
      </div>
    </div>
  )
}

export default ProductsList;