import React, {useEffect, useState,useContext} from "react";
// import {DropdownMenu, DropdownList, DropdownItem} from
// "../component/Dropdown";
import{ Nav,Navbar,NavDropdown,Col,Button} from 'react-bootstrap'
import AnchorLink from "react-anchor-link-smooth-scroll";
import { AuthContext,AdminAuthContext } from "../../appContext";


const Header = (props) => {
    const { authState, authDispatch } = useContext(AuthContext);
    const { adminAuth,AdminDispatch } = useContext(AdminAuthContext);

    const [index,setIndex] = useState(false)
    const [infoShow, setInfoShow] = useState(false);
    const [memberShow,setMemberShow] = useState(false);
    const [adminShow,setAdminShow] = useState(false);

    const [registerShow,setRegisterShow] = useState(false)
    useEffect(()=>{
        console.log(props.type)
        if(props.type==="index") {
            setIndex(true)
        }
    },[])
    const showDropdown = (e)=>{
        if(e.target.id==='info'){
            setInfoShow(!infoShow);
        }
        else if(e.target.id==='member'){
            setMemberShow(!memberShow)
        }
        else if(e.target.id==='register'){
            setRegisterShow(!registerShow)
        }
        else if(e.target.id==='admin'){
            setAdminShow(!adminShow)
        }
    }
    const hideDropdown = e => {
        setInfoShow(false);
        setMemberShow(false);
    }
    
    return ( <> 
        {/* <div style={{'height':'72px','background-color':'#fff'}}>
         {
               authState.user?(
               <div className="float-right mt-3 mr-3 pr-3">
                   <span>{authState.user}</span>
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
        </div> */}
        <div >
        {/* <div className="header">

        </div> */}
        
        < Navbar collapseOnSelect expand = "lg" bg = "" variant = "dark" className="navbar"> 
            <a href="/"><img src="../assets/image/logo2.png"></img></a>
            <span>臺灣盃學生方程式聯賽</span>
            {/* <Navbar.Brand href="#home" className="ml-5">React-Bootstrap</Navbar.Brand>  */}
            <Col className="text-right">
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    {/* <span className="custom-navbar-toggler-icon"></span> */}
                </Navbar.Toggle>
            </Col>            
            <Navbar.Collapse id="basic-navbar-nav"  className="">
            <Nav className="mx-auto">
            </Nav>
            <Nav className="mr-auto">
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
                {
                    index?(
                    <AnchorLink href="#about">
                        <Nav.Link href="" className="nav-link">About</Nav.Link>
                    </AnchorLink>)
                    :(<Nav.Link href="/#about" className="nav-link">About</Nav.Link>)
                }
                
                
                <NavDropdown title={<a><sapn className="">Info</sapn></a>} 
                    id="info"
                    show={infoShow}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                    >
                    <NavDropdown.Item href="/info/rule">比賽規範</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.1">活動花絮</NavDropdown.Item>
                    <NavDropdown.Item href="/info/sponser">贊助回饋</NavDropdown.Item>

                </NavDropdown>

                <Nav.Link href="/news" className="nav-link">Latest news</Nav.Link>
                <Nav.Link href="/register" className="nav-link">Register</Nav.Link>
                {/* <NavDropdown title={<a><sapn className="white-text">Register</sapn></a>} 
                    id="register"
                    show={registerShow}
                    onMouseEnter={showDropdown} 
                    onMouseLeave={hideDropdown}
                    >
                    <NavDropdown.Item href="/register/files">報名檔案下載</NavDropdown.Item>
                  
                </NavDropdown> */}

                <Nav.Link href="/contact" className="nav-link">Contact us</Nav.Link>

                {
                    authState.user?
                    (
                        <NavDropdown 
                        title={<a><sapn className="">{authState.car_num}</sapn></a>} 
                        id="member"
                        show={memberShow}
                        onMouseEnter={showDropdown} 
                        onMouseLeave={hideDropdown}
                        >
                        <NavDropdown.Item href="/member/upload">上傳資料</NavDropdown.Item>
                        <NavDropdown.Item href="/member/qa">Q&A</NavDropdown.Item>

                        <NavDropdown.Item onClick={() =>
                        authDispatch({
                          type: "LOGOUT",
                        })}>登出</NavDropdown.Item>

                    </NavDropdown>
                    ):(
                    
                        adminAuth.user?(
                            <NavDropdown 
                            title={<a><sapn className="">Admin</sapn></a>} 
                            id="admin"
                            show={adminShow}
                            onMouseEnter={showDropdown} 
                            onMouseLeave={hideDropdown}
                            >
                           
                            <NavDropdown.Item href="/admin/files">List all files</NavDropdown.Item>
                            <NavDropdown.Item href="/member/qa">Q&A</NavDropdown.Item>
                            <NavDropdown.Item onClick={() =>
                            AdminDispatch({
                              type: "LOGOUT",
                            })}>Logout</NavDropdown.Item>
                            </NavDropdown>

                        ):(<Nav.Link href="/login" className="nav-link">Login</Nav.Link>)
            
                    
                    )
                }
            </Nav>
        
        </Navbar.Collapse> 
        </Navbar>
        </div>
        {/* <div className="absolute-logo">
            <a href="/"><img src="../assets/image/logo.jpg" ></img></a>
        </div> */}
       </>
       )
}

export {Header}