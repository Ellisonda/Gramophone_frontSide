import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { createNewProduct } from '../../core/services/productsService';
const ProductCreationComponent = () => {

    const navigate = useNavigate()

    const [newProduct, setNewProduct] = useState();
    const newProductHandler = (fieldNamae, fieldValue) => {
        setNewProduct({
            ...newProduct,
            [fieldNamae]: fieldValue
        })
    }

    const goHomePage = () => {
        navigate('/home')
    }

    const createHandler= ()=> {
        createNewProduct(newProduct)
        navigate('/home')
    }
  return (

    <div className='creation-maincontainer'>

        <div className='creation-container'>
            <div>
                <h2>Introduce en nuestra base de datos un nuevo festival:</h2>
                <button onClick={goHomePage}>Volver</button>
            </div>
            <div>
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="nombre" name='nombre' onChange={(e) => newProductHandler(e.target.name, e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Ciudad</Form.Label>
                        <Form.Control type="text" placeholder="ciudad" name='localidad' onChange={(e) => newProductHandler(e.target.name, e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Estilo de musica del festival</Form.Label>
                        <Form.Control type="text" placeholder="estilo musical" name='estilo_musica' onChange={(e) => newProductHandler(e.target.name, e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Precio de la entrada</Form.Label>
                        <Form.Control type="number" placeholder="precio" name='precio_entrada' onChange={(e) => newProductHandler(e.target.name, e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descripción del festival</Form.Label>
                        <Form.Control as="textarea" rows={3} name='descripcion' onChange={(e) => newProductHandler(e.target.name, e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Imagen de presentacion</Form.Label>
                        <Form.Control type="text" placeholder="direccion url imagen" name='url_imagen_localidad' onChange={(e) => newProductHandler(e.target.name, e.target.value)}/>
                    </Form.Group>
            </Form>
            <div>
                <button onClick={createHandler}>Guardar en Gramophone</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ProductCreationComponent