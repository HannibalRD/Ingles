import React, { useState, Suspense } from 'react';
import './navbar.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';
// import { BrowserRouter as Routes} from 'react-router-dom';

const LazyTea = React.lazy(() => import('./App copy'));
const LazyTeas = React.lazy(() => import('./App'));

function Navbars() {
  const [showTea, setShowTea] = useState(false);


  const handleTeaClick = () => {
    setShowTea(true);
  };

  return (
    <Router>
      <div className='navbar'>
        <Navbar className='hola' bg='myRed' variant='dark' sticky='top'  expand='lg' collapseOnSelect>
          <Navbar.Brand>
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <NavDropdown title='Products'>
                <NavDropdown.Item as={NavLink} to='/App copy' onClick={handleTeaClick}>
                  Connectors
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/App' onClick={handleTeaClick}>
                  Phrasals Verbs
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to='/blog'>Blog</Nav.Link>
              <Nav.Link as={NavLink} to='/about-us'>About us</Nav.Link>
              <Nav.Link as={NavLink} to='/contact-us'>Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        </div>
        <div className='content'>
          <Routes>  
            {showTea && (
              <Route path='/App copy' element={<Suspense fallback={<div>Loading...</div>}><LazyTea /></Suspense>} />
            )}
            {showTea && (
              <Route path='/App' element={<Suspense fallback={<div>Loading...</div>}><LazyTeas /></Suspense>} />
            )}
          </Routes>
        </div>

    </Router>
  );
}

export default Navbars;

