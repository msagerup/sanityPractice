import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <Navbar collapseOnSelect expand='md' bg='dark' variant='dark'>
        <Container fluid>
          <LinkContainer to='/'>
            <Navbar.Brand>Instagram Clone</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className='me-auto'>
              <LinkContainer to='/'>
                <Nav.Link>Feed</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/search'>
                <Nav.Link>Search</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/create-post'>
                <Nav.Link>Post</Nav.Link>
              </LinkContainer>
            </Nav>
            <Nav>
              <Navbar.Text>
                <Link to='/signup'>Signup</Link>
                <Link to='/login'>Logout</Link>
              </Navbar.Text>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
