import React from "react"; 
import Footer from "./components/Footer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <ItemListContainer greeting={"no se encontro el producto!"} />
      <Footer />
    </div>
  );
}

export default App;
