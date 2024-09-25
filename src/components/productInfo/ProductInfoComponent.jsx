/* eslint-disable react-hooks/rules-of-hooks */
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom'
import { loadProduct, loadProducts } from '../products/ProductActions';
import { deleteProduct, getProductById, modifyProduct } from '../../core/services/productsService';


const productInfoComponent = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = useNavigate();
    const {state} = useLocation();
    const {idProduct} = state;
    const [productInfo, setProductInfo] = useState(undefined);
    const [productInit, setProductInit] = useState(undefined);
    const [newProductModification, setNewProductModification]= useState();
    const [isEditing, setIsEditing] = useState(undefined);

    const user = useSelector((state)=> state.userReducer.user)

    const product = useSelector((state) => state.productReducer.product);
    const dispatch = useDispatch();

    const userRole = user.role;
    console.log("product", product);

    const load = async () => {
        const productAux = await getProductById(idProduct);
    
        dispatch(
          loadProduct({
            product: productAux,
          })
        );
        console.log("idProduct", idProduct);
      };

//?HANDLERS

      const saveHandler = async () => {
        setIsEditing(false);
        setProductInit(productInfo);
        const saveAux = await modifyProduct(idProduct, newProductModification);
    
        dispatch(
          loadProduct({
            product: saveAux,
          })
        );
    
        console.log("idProduct", idProduct);
      };

      const cancelHandler = () => {
        setIsEditing(false);
        setProductInfo(productInit);
      };
    
      const productModificationHandler = (fieldName, fieldValue) => {
        setNewProductModification({
          ...newProductModification,
          [fieldName]: fieldValue,
        });
      };


      //! 
      const deleteProductHandler = async(idProduct) => {
        await deleteProduct(idProduct)
        console.log(`El festival ${product.nombre} ha sido borrado`)
        // await loadProductList()
        navigate('/home')
        
      }
    
//?Navigates

      const goHomePage = () => {
        navigate('/home')
      }
useEffect(() => {
    load()
}, []);

  return (
    <div>
        

      {/* { <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            <h2>{product.nombre}</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4>{product.localidad}</h4>
            <p>{product.estilo_musica}</p>
          <p>
            {product.descripcion}
          </p>
        </Modal.Body>
        <Modal.Footer>
            <q>{product.precio_entrada}€</q>
        </Modal.Footer>
      </Modal>  */
      
      <div>
      <div>
          <h3 style={{ fontWeight: "bold", textTransform: "uppercase" }}>
            Información sobre el festival
          </h3>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 5,
              justifyContent: "center",
            }}
          >
            {
            userRole === 'admin' &&  
            <div>
                <button
                  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  onClick={() => setIsEditing(true)}
                >
                  Modificar datos del festival
                </button>
                <button  style={{ fontWeight: "bold", textTransform: "uppercase" }}
                  onClick={() => deleteProductHandler(product._id)}>Eliminar</button>

            </div>
            }
            
            <button
              onClick={goHomePage}
              style={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              Volver
            </button>
            
          </div>
        </div>

        {isEditing && (
          <>
            <div
              style={{
                marginTop: 5,
                display: "flex",
                flexDirection: "row",
                gap: 5,
                justifyContent: "center",
              }}
            >
              <button onClick={saveHandler}>Guardar</button>
              <button onClick={cancelHandler}>Cancelar</button>
              {/* {userRole === 'admin' && (<div> <button onClick={deleteProductHandler}>Eliminar</button></div>)} */}
            </div>
          </>
        )}

        <div>
          {!product ? (
            <div>Loading...</div>
          ) : (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <div>
                <span style={{ fontWeight: "bold", fontSize: 24 }}>
                  Nombre:{" "}
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    name="nombre"
                    onChange={(e) =>
                      productModificationHandler(e.target.name, e.target.value)
                    }
                  />
                ) : (
                  <span style={{ color: "#CA5D35" }}> {product.nombre}</span>
                )}
              </div>
              <div>
                <span style={{ fontWeight: "bold", fontSize: 24 }}>El sitio:</span>
                {isEditing ? (
                  <input
                    type="text"
                    name="tipo"
                    onChange={(e) =>
                      productModificationHandler(e.target.name, e.target.value)
                    }
                  />
                ) : (
                  <span style={{ color: "#CA5D35" }}> {product.localidad}</span>
                )}
              </div>
              <div>
                <span style={{ fontWeight: "bold", fontSize: 24 }}>
                  Estilo de música:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    name="estilo_musica"
                    onChange={(e) =>
                      productModificationHandler(e.target.name, e.target.value)
                    }
                  />
                ) : (
                  <span style={{ color: "#CA5D35" }}> {product.estilo_musica}</span>
                )}
              </div>
              <div>
                <span style={{ fontWeight: "bold", fontSize: 24 }}>
                  Precio:
                </span>
                {isEditing ? (
                  <input
                    type="number"
                    name="precio"
                    onChange={(e) =>
                      productModificationHandler(e.target.name, e.target.value)
                    }
                  />
                ) : (
                  <span style={{ color: "#CA5D35" }}> {product.precio_entrada}</span>
                )}
              </div>
              <div>
                <span style={{ fontWeight: "bold", fontSize: 24 }}>
                  Descripcion:
                </span>
                {isEditing ? (
                  <input
                    type="text"
                    name="descripcion"
                    onChange={(e) =>
                      productModificationHandler(e.target.name, e.target.value)
                    }
                  />
                ) : (
                  <span style={{ color: "#CA5D35" }}>
                    {" "}
                    {product.descripcion}
                  </span>
                )}
              </div>
              <div>
                {
                    isEditing ? (
                        <div>
                            <span style={{ fontWeight: "bold", fontSize: 24 }}>
                            Imagen:
                        </span>
                        <input
                          type="text"
                          
                          name="url_imagen_localidad"
                          onChange={(e) =>
                            productModificationHandler(e.target.name, e.target.value)
                          }/>
                        </div>
                        
                      ) : ('')
                }
              </div>
              <div>
                <span style={{ fontWeight: "bold", fontSize: 24 }}>Id:</span>
                {isEditing ? (
                  <input
                    type="number"
                    value={product._id}
                    name="_id"
                    disabled
                  />
                ) : (
                  <span style={{ color: "#CA5D35" }}> {product._id}</span>
                )}
              </div>
            </div>
          )}
        </div>
      
      
     </div>
      }
</div>
  )
}

export default productInfoComponent