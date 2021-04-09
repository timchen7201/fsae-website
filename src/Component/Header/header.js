import React, {useEffect, useState,useContext} from "react";
// import {DropdownMenu, DropdownList, DropdownItem} from
// "../component/Dropdown";
import{ Nav,Navbar,NavDropdown,Col,Button} from 'react-bootstrap'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AuthContext } from "../../appContext";


const IndexHeader = () => {
    const { authState, authDispatch } = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const showDropdown = (e)=>{
        setShow(!show);
    }
    const hideDropdown = e => {
        setShow(false);
    }
    return ( <> 
        <div style={{'height':'72px','background-color':'#fff'}}>
         {
               authState.user?(
               <div className="float-right mt-3 mr-3 pr-3">
                   <span>{authState.user.name}</span>
                   <Button 
                    variant="secondary" 
                    className="ml-3"
                    onClick={() =>
                        authDispatch({
                          type: "LOGOUT",
                        })
                      }
                    >
                    Logout
                </Button>
               </div>
               ):(<a href="/login">
               <Button 
                    variant="secondary" 
                    className="float-right mt-3 mr-3"
                >Login
                </Button>
               </a>)
         }
          
        </div>
        < Navbar collapseOnSelect expand = "lg" bg = "" variant = "dark" className="navbar"> 
            {/* <Navbar.Brand href="#home" className="ml-5">React-Bootstrap</Navbar.Brand>  */}
            <Col className="text-right">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            </Col>            
            <Navbar.Collapse id="basic-navbar-nav"  className="mr-3">
            <Nav className="mr-auto">
            </Nav>
            <Nav className="mx-auto">
                <Nav.Link href="/" className="nav-link">Home</Nav.Link>
                    {/* <NavDropdown title={<a className="white-text">Home</a>} id="collasible-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                    >
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown> */}
                <AnchorLink href="#about">
                    <Nav.Link href="" className="nav-link">About</Nav.Link>
                </AnchorLink>
                
                <NavDropdown title={<a><sapn className="white-text">Info</sapn></a>} id="collasible-nav-dropdown"
                    show={show}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                    >
                    <NavDropdown.Item href="/info/rule">比賽規範</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">活動花絮</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">行事曆</NavDropdown.Item>

                </NavDropdown>

                <Nav.Link href="/news" className="nav-link">Latest news</Nav.Link>
                <Nav.Link href="/register" className="nav-link">Register</Nav.Link>
                <Nav.Link href="/contact" className="nav-link">Contact us</Nav.Link>

            </Nav>
        
        </Navbar.Collapse> 
        </Navbar>
        
        <div className="absolute-logo">
            <img src="../assets/image/title_pic2.png" ></img>
        </div>
       </>
       )
}

export {IndexHeader}