import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
                        <Nav.Link > <Link to='/health' className='text-white text-decoration-none'>Health</Link></Nav.Link>
                        <Nav.Link > <Link to='/science' className='text-white text-decoration-none'>Science</Link></Nav.Link>
                        <Nav.Link > <Link to='/sports' className='text-white text-decoration-none'>Sports</Link></Nav.Link>
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