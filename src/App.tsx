import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductsList from "./pages/ProductsList/ProductsList";
import ProductPage from "./pages/ProductPage/ProductPage";
import CreateProduct from "./pages/CreateProduct/CreateProduct";
import Layout from './components/Layout/Layout';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Navigate to="products" replace />} />
          <Route path="products" element={<ProductsList />} />
          <Route path="products/:id" element={<ProductPage />} />
          <Route path="create-product" element={<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
