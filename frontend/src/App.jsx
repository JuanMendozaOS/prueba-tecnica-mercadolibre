import { SearchIcon } from "./assets/SearchIcon";
import "./App.css";
import { useState } from "react";
import { createAxiosInstance } from "./config";
import { Toaster, toast } from "sonner";

const LOGO_URL ="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/6.4.1/mercadolibre/logo__large_plus.png";
const client = createAxiosInstance();


function App() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSearchClick = async (event) => {
    event.preventDefault();
    if (!search) return;

    try {
      const response = await client.get(`/items?q=${search}`);
      const { data } = response;
      setProducts(data);
    } catch {
      toast.error("Ocurrió un error");
    }
  };

  return (
    <>
      <Toaster richColors/>
      <div className="app-container">
        <nav className="navbar-container">
          <img src={LOGO_URL} alt="Logo de Mercado Libre" className="navbar-logo" />
          <form className="search-form">
            <input type="text" placeholder="Nunca dejes de buscar" onChange={handleChange} />
            <button className="search-button" onClick={handleSearchClick}>
              <SearchIcon />
            </button>
          </form>
        </nav>
        <main className="main-container">
          <div className="breadcrumb">
            breadcrumb 
          </div>
          <section className="products-container">
            
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
