import { useState } from "react";
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Gramophone from '../../assets/images/Gramophone_name.png'

//REACT BOOTSTRAP import

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  const navigate = useNavigate();
  const user = useSelector((state)=> state.userReducer.user)

  
// const idUser= user._id;
  const goUserProfile = (idUser) => {
    navigate('/profile',{
        state: {
            idUser,
        }
    },
        console.log(user.role)
    )
}

const goLogOut = () => {
  navigate('/')
}

  return (
    <div>
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid d-flex flex-row">
                <a className="navbar-brand" href="#">Gramophone</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav d-flex flex-row">
                    <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    
                    <a className="nav-link" href="#" onClick={()=>goUserProfile(user._id)} style={{fontWeight:24, color:'#4CCD99', textTransform:'uppercase'}}>{user.name}</a>
                        
                    </li>
                    <li className="nav-item">
                    <a  className="nav-link" href="#">Contact</a>
                    </li>
                    <li className="nav-item">
                    <a  className="nav-link" href="/" >Log out</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav> */}

<Navbar collapseOnSelect fixed="top" expand="lg" className="bg-body-tertiary ">
      <Container className="navbar-container">
        <Navbar.Brand href="#hero-banner">
          <img src={Gramophone} width="20"
              height="20"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"/>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" style={{justifyContent:'flex-end'}}>
          <Nav >
            <Nav.Link href="#hero-banner">Home</Nav.Link>
            <Nav.Link href="#contact-area">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link  style={{color:'green'}}>@{user.name}</Nav.Link>
            
            <Nav.Link eventKey={2} href="/">
              Log out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    </div>
  )
}

export default NavbarComponent