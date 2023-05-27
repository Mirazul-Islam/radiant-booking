import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample({currentPage, handlePage}) {
    return (
        <Navbar style={{backgroundColor:"#566875"}} expand="lg">
            <Container>
                <Navbar.Brand href="#home"> <img src="/logo_cleaning.png" alt="company logo" style={{'height':'80px', 'width':'130px'}}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link style={{color:"#ECEDEE"}} href="#home">Home</Nav.Link>
                        <Nav.Link style={{color:"#ECEDEE"}} href="#link">Packages</Nav.Link>
                        <NavDropdown className="custom-dropdown" title="Booking" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/booking-history">Booking History</NavDropdown.Item>
                            <NavDropdown.Item href="/"> Create Booking</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                FAQ & Contact Us
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;