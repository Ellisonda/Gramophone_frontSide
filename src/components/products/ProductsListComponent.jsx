import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { getAllProducts, getProductByStyle } from "../../core/services/productsService";
import { loadByStyle, loadProducts } from "./ProductActions";
import { useEffect, useState } from "react";
import './ProductListComponent.css'
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';



const ProductsListComponent = () => {

    const dispatch = useDispatch();
    const products = useSelector((state)=>state.productReducer.products);
    const user = useSelector((state)=> state.userReducer.user)
    // const [productsFiltered, setProductsFiltered] = useState()
    // const [searchInfo, setSearchInfo] = useState();
    const [selectedStyle, setSelectedStyle] = useState('')
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

// const filter = (nombre, localidad, estilo_musica) => {
//     const productsFilteredAux = products.filter(p => (p.nombre.toLowerCase().includes(nombre) || p.localidad.toLowerCase().includes(localidad) || p.estilo_musica.toLowerCase().includes(estilo_musica)) )
//     setProductsFiltered(productsFilteredAux)
// }

//////////////////
// const selectedHandler = () => {
//     setSelectedStyle({
//         ...selectedStyle,
//         [name]: value
//     })
// }



const loadSelectedList = async () => {
    try {
        if(selectedStyle){
        const selectedAux = await getProductByStyle(selectedStyle)
        dispatch(
            loadByStyle({
                products: selectedAux
            })
        ) }
        else {
            loadProductList()
        }
    } catch (error) {
        console.error("Error loading selected products:", error);
    }
   
}
//////////////////////
// const searchHandler = () => {
//     setSearchInfo({
//         ...searchInfo,
//         [name]: value
//     })
// }


useEffect(() => {
    loadSelectedList()
},[selectedStyle])

//?

    useEffect(()=> {
        loadProductList()
        
    },[])

  return (
    <div>
        <div className="productList-header">
            <div className="hero-banner" id="hero-banner">
                <div className="text-banner">
                    <h2>Bienvenido a <span>Gramophone</span> al mejor sitio para los amantes de la música. Relajate y sigue al reno.</h2>
                </div>
                <div className="img-banner"></div>

            </div>

            <div className="search-create-panel">
                            <div>
                                <span>Filtrar por estilo: </span>
                                {/* <input type="text" onChange={(e) => searchStyle(e.target.value)}/> */}
                                <Form.Select aria-label="Default select example" onChange={e=> setSelectedStyle(e.target.value)}>
                                    <option value=''>Mostrar todos</option>
                                    <option value="Rock">Rock</option>
                                    <option value="Folk">Folk</option>
                                    <option value="Indie">Indie</option>
                                </Form.Select>
                            </div>
                            {userRole === 'admin' && (<div> <button onClick={goCreation}>Introducir festival</button></div>)}
                        </div>

        </div>
        {/*  */}
        
            {/*  */}
        <div className="cardProduct-maincontainer">
            {
                !products ? <div>Cargando festivales...</div>
                : (
                    <>
                        
                        
                    
                    
                    {/* <Row xs={1} md={2} lg={4} className="cardProduct-container g-4">
        
                        {
                            products.map((p, idx)=> (
                                <Col style={{display:'flex', justifyContent:'center', marginBottom:'2rem'}} key={idx}>
                                    <Card style={{ width: '18rem' , height: '20rem'}}>
                                        <Card.Img style={{ height: '10rem' }} variant="top" src={p.url_imagen_localidad} />
                                        <Card.Body>
                                            <Card.Title style={{ fontWeight:'bolder'}}>{p.nombre}</Card.Title>
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
                        </Row> */}

                        {
                            products.map((p, idx)=> (
                                
                                    <Card className="card" key={idx} style={{ width: '18rem' , height: '20rem'}}>
                                        <Card.Img style={{ height: '10rem' }} variant="top" src={p.url_imagen_localidad} />
                                        <Card.Body>
                                            <Card.Title style={{ fontWeight:'bolder'}}>{p.nombre}</Card.Title>
                                            <Card.Text>
                                                {p.localidad}
                                            </Card.Text>
                                            <Card.Footer>
                                                <small className="text-muted">{p.estilo_musica}</small>
                                                <button onClick={()=>goInfo(p._id)}>+ Info</button>
                                                
                                                
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                               
                            ))
                        }

                        </>
                )
            }
        </div>
    </div>
  )
}

export default ProductsListComponent