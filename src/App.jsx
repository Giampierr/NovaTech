import { BrowserRouter, Routes, Route } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import { ScrollToTop } from "./components/ScrollToTop"

import { HomePage } from "./Pages/HomePage"
import { ProductsPage } from "./Pages/ProductsPage"
import { ProductDetailPage } from "./Pages/ProductsDetailPage"
import { NosotrosPage } from "./Pages/NosotrosPage"
import "./styles/styles.css"

function App() {
  return (
    <BrowserRouter>

    <ScrollToTop></ScrollToTop>

      <Header />

      <Routes>

    <Route
        path="/"
        element={<HomePage />}
    />

    <Route
        path="/productos"
        element={<ProductsPage />}
    />

    <Route path="/nosotros"
          element={<NosotrosPage/>}
    />

    <Route
        path="/productos/:id"
        element={<ProductDetailPage />}
    />

</Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App