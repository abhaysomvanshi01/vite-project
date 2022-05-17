import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact'
import Product from './Components/Products/Product';
import Services from './Components/Services/Services';
import { Routes  , Route ,Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import {LinkContainer} from 'react-router-bootstrap'
import { Nav, Navbar } from 'react-bootstrap';
function App() { 
  
  return (
    <div className="App">
      <Navbar bg='success' variant="dark" sticky="top" expand="sm">
        <Navbar.Brand>
          <img src={logo} width="40px" height="40px"/>
          
        </Navbar.Brand>

        <Navbar.Toggle/>
        <Navbar.Collapse>

        <Nav>

          <LinkContainer to="/">
          <Nav.Link >Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/about">
          <Nav.Link >About</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/products">
          <Nav.Link>Products</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/services">
          <Nav.Link>Services</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/contact">
          <Nav.Link>Contact</Nav.Link>
          </LinkContainer>

        </Nav>
        </Navbar.Collapse>

        

      </Navbar>
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/products" element= {<Product/>}/>
        <Route path = "/services" element = {<Services/>}/>
      </Routes>
    </div>
  )
}

export default App
