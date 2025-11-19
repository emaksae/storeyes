import { Link, Outlet } from "react-router-dom";
import './Layout.scss'

const Layout = () => {
  return (
    <div className="layout">
      <header className="layout__header">
        <h1 className="layout__title">storeyes</h1>

        <nav className="layout__menu">
          <Link className="layout__link" to="/products">products</Link>
          <Link className="layout__link" to="/create-product">create</Link>
        </nav>
      </header>

      <main className="layout__main">
        <Outlet />
      </main>

      <footer className="layout__footer">
        © 2025 storeyes
      </footer>
    </div>
  );
}
export default Layout

