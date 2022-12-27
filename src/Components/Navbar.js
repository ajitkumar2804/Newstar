import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link  } from 'react-router-dom';



export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand  >NewsStar </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link > <Link to='/' className='text-white text-decoration-none'>Home</Link></Nav.Link>
                        <NavDropdown title="Categories" id="basic-nav-dropdown">
                            <NavDropdown.Item><Link to='/business'>Business</Link></NavDropdown.Item>
                            <NavDropdown.Item >
                               <Link to='/health'>Health</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/science'>Science</Link>
                                </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link to='/sports'>Sports</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link to='/login' className='text-white text-decoration-none'> Login</Link></Nav.Link>
                        <Nav.Link eventKey={2} >
                            <Link to='/Signup' className='text-white text-decoration-none'>Signup</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>




    )
}