import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../core/services/productsService";
import { loadProducts } from "./ProductActions";
import { useEffect, useState } from "react";
import './ProductListComponent.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


const ProductsListComponent = () => {

    const dispatch = useDispatch();
    const products = useSelector((state)=>state.productReducer.products);
    const navigate= useNavigate();
    const [show, setShow] = useState(false);



    const goInfo = (idProduct, show) => {
        navigate('/info',{
            state: {
                idProduct,
                show
            }
        },
        setShow(true)
        )
    }

    const loadProductList = async ()=> {
        const productsAux = await getAllProducts()
        console.log(productsAux)
        dispatch(
            loadProducts({
                products: productsAux
            })
        )
    }

    useEffect(()=> {
        loadProductList()
    },[])

  return (
    <div>
        <div className="productList-header">
            <h3>Aquí te listamos los mejores festivales de musica a lo largo y ancho del mundo:</h3>
        </div>
        <div>
            {
                !products ? <div>Cargando festivales...</div>
                : (
                    <Row xs={1} md={2} lg={4} className="cardProduct-container g-5 p-5">
        {/* //? He importado cardgroup y card desde la libreria de react-bootstrap */}
                        {
                            products.map((p, idx)=> (
                                <Col key={idx}>
                                    <Card >
                                        <Card.Img variant="top" src="https://fastly.picsum.photos/id/158/4836/3224.jpg?hmac=Gu_3j3HxZgR74iw1sV0wcwlnSZSeCi7zDWLcjblOp_c" />
                                        <Card.Body>
                                            <Card.Title>{p.nombre}</Card.Title>
                                            <Card.Text>
                                                {p.localidad}
                                            </Card.Text>
                                            <Card.Footer>
                                                <small className="text-muted">{p.estilo_musica}</small>
                                                <button onClick={()=>goInfo(p._id)}>+ Info</button>
                                                
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                        </Row>
                    
                )
            }
        </div>
    </div>
  )
}

export default ProductsListComponent