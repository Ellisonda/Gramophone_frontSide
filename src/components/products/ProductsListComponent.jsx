import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../../core/services/productsService";
import { loadProducts } from "./ProductActions";
import { useEffect, useState } from "react";
import './ProductListComponent.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ProductsListComponent = () => {

    const dispatch = useDispatch();
    const products = useSelector((state)=>state.productReducer.products);
    const user = useSelector((state)=> state.userReducer.user)
    const [productsFiltered, setProductsFiltered] = useState()
    const [searchInfo, setSearchInfo] = useState();
    const navigate= useNavigate();
    

   
    const userRole = user.role;
    const goInfo = (idProduct,) => {
        navigate('/info',{
            state: {
                idProduct,
                
            }
        },
            console.log(user.role)
        )
    }
    const goCreation = () => {
        navigate('/creation')
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
//? Buscador con filtro

const filter = (nombre, localidad, estilo_musica) => {
    const productsFilteredAux = products.filter(p => (p.nombre.toLowerCase().includes(nombre) || p.localidad.toLowerCase().includes(localidad) || p.estilo_musica.toLowerCase().includes(estilo_musica)) )
    setProductsFiltered(productsFilteredAux)
}
const searchStyle = () => {

}

const searchHandler = () => {
    setSearchInfo({
        ...searchInfo,
        [name]: value
    })
}

//!BORRAR const doLogin = async () => {
//     const userInfo = await loginFetch(loginInfo.email, loginInfo.password)
//     dispatch(doLoginActions({
//         user: userInfo
//     }))
//     console.log('Usuario logeado')
// }
// !BORARconst handlerLoginInfo = (name, value) => {
//     setLoginInfo({
//         ...loginInfo,
//         [name]: value
//     })
// }

useEffect(() => {
    setProductsFiltered(products)
},[products])

//?

    useEffect(()=> {
        loadProductList()
        
    },[])

  return (
    <div>
        <div className="productList-header">
            <h3>Aquí te listamos los mejores festivales de musica a lo largo y ancho del mundo:</h3>
        </div>
        {/*  */}
        <div>
                <span>Buscar: </span>
                <input type="text" onChange={(e) => searchStyle(e.target.value)}/>
            </div>
            {/*  */}
        <div>
            {
                !products ? <div>Cargando festivales...</div>
                : (
                    <>
                    
                        {userRole === 'admin' && (<div> <button onClick={goCreation}>Introducir festival</button></div>)}
                    
                    
                    <Row xs={1} md={2} lg={4} className="cardProduct-container g-5 p-5">
        {/* //? He importado cardgroup y card desde la libreria de react-bootstrap */}
                        {
                            products.map((p, idx)=> (
                                <Col key={idx}>
                                    <Card >
                                        <Card.Img variant="top" src={p.url_imagen_localidad} />
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
                        </>
                )
            }
        </div>
    </div>
  )
}

export default ProductsListComponent