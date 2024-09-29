import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getAllProducts,
  getProductByStyle,
} from "../../core/services/productsService";
import { loadByStyle, loadProducts } from "./ProductActions";
import { useEffect, useState } from "react";
import "./ProductListComponent.css";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const ProductsListComponent = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer.products);
  const user = useSelector((state) => state.userReducer.user);
  const [selectedStyle, setSelectedStyle] = useState("");
  const navigate = useNavigate();

  const userRole = user.role;
  const goInfo = (idProduct) => {
    navigate(
      "/info",
      {
        state: {
          idProduct,
        },
      },
      console.log(user.role)
    );
  };
  const goCreation = () => {
    navigate("/creation");
  };

  const loadProductList = async () => {
    const productsAux = await getAllProducts();
    console.log(productsAux);
    dispatch(
      loadProducts({
        products: productsAux,
      })
    );
  };

  useEffect(() => {
    const loadSelectedList = async () => {
      try {
        if (selectedStyle) {
          const selectedAux = await getProductByStyle(selectedStyle);
          dispatch(
            loadByStyle({
              products: selectedAux,
            })
          );
        } else {
          loadProductList();
        }
      } catch (error) {
        console.error("Error loading selected products:", error);
      }
    };

    loadSelectedList();
  }, [selectedStyle]);

  //?

  useEffect(() => {
    loadProductList();
  }, []);

  return (
    <div>
      <div className="productList-header">
        <div className="hero-banner" id="hero-banner">
          <div className="text-banner">
            <h2>
              Bienvenido a <span>Gramophone</span>, el mejor sitio para los
              amantes de la música. Relajate y sigue al reno.
            </h2>
          </div>
          <div className="img-banner"></div>
        </div>

        <div className="search-create-panel">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <span>Filtrar por estilo: </span>
            {/* <input type="text" onChange={(e) => searchStyle(e.target.value)}/> */}
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => setSelectedStyle(e.target.value)}
            >
              <option value="">Mostrar todos</option>
              <option value="Rock">Rock</option>
              <option value="Folk">Folk</option>
              <option value="Indie">Indie</option>
              <option value="Clásica">Clásica</option>
              <option value="Reggae">Reggae</option>
              <option value="World Music">World Music</option>
              <option value="Fusión">Fusión</option>
              <option value="Experimental">Experimental</option>
              <option value="Jazz">Jazz</option>
              <option value="Flamenco">Flamenco</option>
              <option value="Celta">Celta</option>
              <option value="Ambient">Ambient</option>
              <option value="Samba">Samba</option>
              <option value="Hip-Hop">Hip-Hop</option>
              <option value="Dance">Dance</option>
              <option value="Indie Rock">Indie Rock</option>
              <option value="Dancehall">Dancehall</option>
              <option value="Jazz Fusión">Jazz Fusion</option>
              <option value="Techno">Techno</option>
              <option value="Cumbia">Cumbia</option>
              <option value="EDM">EDM</option>
              <option value="Música Árabe">Música Árabe</option>
              <option value="Trance">Trance</option>
              <option value="House">House</option>
              <option value="Metal">Metal</option>
              <option value="Balkan Beats">Balkan Beats</option>
              <option value="Fusion">Fusion</option>
            </Form.Select>
          </div>
          {userRole === "admin" && (
            <div>
              {" "}
              <button onClick={goCreation}>Introducir festival</button>
            </div>
          )}
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="cardProduct-container">
        {!products ? (
          <div>Cargando festivales...</div>
        ) : (
          <>
            {products.map((p, idx) => (
              <Card
                className="card"
                key={idx}
                style={{ width: "18rem", height: "20rem" }}
              >
                <Card.Img
                  style={{ height: "10rem" }}
                  variant="top"
                  src={p.url_imagen_localidad}
                />
                <Card.Body>
                  <Card.Title style={{ fontWeight: "bolder" }}>
                    {p.nombre}
                  </Card.Title>
                  <Card.Text>{p.localidad}</Card.Text>
                  <Card.Footer>
                    <small className="text-muted">{p.estilo_musica}</small>
                    <button onClick={() => goInfo(p._id)}>+ Info</button>
                  </Card.Footer>
                </Card.Body>
              </Card>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsListComponent;
