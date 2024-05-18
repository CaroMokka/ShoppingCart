import React from "react";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
//components
import { Navbar } from "./components/Navbar";
//pages
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";
//context
import { ShoppingCartProvider } from "./context/ShoppingCartContext"

function App() {
  return (
    //<ShoppingCartContext>
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
      </ShoppingCartProvider>
   
    //</ShoppingCartContext>
  );
}

export default App;
