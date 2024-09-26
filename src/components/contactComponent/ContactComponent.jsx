import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { addNewMail } from '../../core/services/userServices';
import { useState } from 'react';
const ContactComponent = () => {


    const [newMail, setNewMail] = useState();
    const newMailHandler = (fieldName, fieldValue) => {
        setNewMail({
            ...newMail,
            [fieldName]: fieldValue
        })
    }
    const newSuscriptionHandler=()=> {
        addNewMail(newMail)
    }
  return (
    <Container fluid className='newsletter-container'>
        <div className='text-newsletter'>
            <div><h3>Apuntante a nuestra maravillosa newsletter, y de esta manera nuestro
                reno entrenado con IA y alimentado con cariño te avisará
                siempre que aparezcan nuevos festivales.</h3></div>
            <div>
                {/* <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="reno@email.com" />
                    
                </FloatingLabel>
                <Button >Suscribete</Button> */}
                <span>Email</span>
                <input type="text" name='email' onChange={(e)=>newMailHandler(e.target.name, e.target.value)}></input>
                <button onClick={newSuscriptionHandler}>Follow us</button>
            </div>
        </div>
        <div className='logo-newsletter'>
            
        </div>
    </Container>
  )
}

export default ContactComponent
