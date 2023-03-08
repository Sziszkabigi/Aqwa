import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "bootstrap/dist/css/bootstrap.min.css";
import identity from './Navbar.module.css';


function OffcanvasExample() {
    
  return (
    <>
        {['lg'].map((expand) => (
        <Navbar key={expand}  expand={expand} id={identity.navbar} className="mb-3">
            <Container fluid>
                <Navbar.Brand href="#"></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-`}
                placement="top end"
                >
                <Offcanvas.Header id={identity.navbar_text_title} closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}> </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body id={identity.navbar_text}>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link id={identity.navbar_text} to="./home#sec_1" href="#sec_1">BEMUTATKOZAS</Nav.Link>
                    <Nav.Link id={identity.navbar_text} href="#sec_2">HOGYAN DOLGOZUNK</Nav.Link>
                    <Nav.Link id={identity.navbar_text} href="#sec_3">ARAK</Nav.Link>
                    <Nav.Link id={identity.navbar_text} href="#sec_4">KAPCSOLAT</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
        ))}
    </>
  );
}

export default OffcanvasExample;