import React, { useState, Suspense } from 'react';
import './navbar.css';
import './style.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BrowserRouter as Router, Route, NavLink, Routes} from 'react-router-dom';
// import  AnimatedBackground  from "./BackAnimation.jsx";


const LazyTea = React.lazy(() => import('./Connectors'));
const LazyTeas = React.lazy(() => import('./PhrasalVerbs'));

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
          👌Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <NavDropdown title='Vocabulario'>
                <NavDropdown.Item as={NavLink} to='/Connectors' onClick={handleTeaClick}  >
                  Connectors
                  
                </NavDropdown.Item>
                <NavDropdown.Item as={NavLink} to='/PhrasalVerbs' onClick={handleTeaClick}>
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
        <div>
      <div className="context">
      <Routes>
              
              {showTea && (
                <Route path='/Connectors' element={<Suspense fallback={<div>Loading...</div>}><LazyTea /></Suspense>} />
              )}
              {showTea && (
                <Route path='/PhrasalVerbs' element={<Suspense fallback={<div>Loading...</div>}><LazyTeas /></Suspense>} />
              )}
            </Routes>
      </div>

      <div className="area">
        <ul className="circles">
          {Array.from({ length: 10 }, (_, index) => (
            <li key={index}></li>
          ))}
        </ul>
      </div>
    </div>
         
        </div>
    </Router>
  );
}

export default Navbars;

