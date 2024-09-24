import NavbarComponent from "../components/navbar/NavbarComponent"
import ProductsListComponent from "../components/products/ProductsListComponent"
import './Homepage.css'


const HomePage = () => {
  return (

    <div>
      <header>
        <NavbarComponent/>
      </header>
      <main>
        <ProductsListComponent/>
      </main>
    </div>
  )
}

export default HomePage