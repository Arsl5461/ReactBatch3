import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbarr = () => {
  return (
    <Navbar expand="lg" style={{backgroundColor:"#F85606"}}>
      <Container>
        <Navbar.Brand href="#home"><img src='https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png' className='image'/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto" >
            <Nav.Link><Link to={"/"} className='nav-list'>Home</Link></Nav.Link>
            <Nav.Link><Link to={"/about"}  className='nav-list'>About</Link></Nav.Link>
            <Nav.Link><Link to={"/products"}  className='nav-list'>Products</Link></Nav.Link>
            <Nav.Link><Link to={"/signup"}  className='nav-list'>Signup/Login</Link></Nav.Link>
            <Nav.Link><Link to={"/contact"}  className='nav-list'>Contact</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navbarr