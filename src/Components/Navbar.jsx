import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    NavItem,
    Nav,
    Button,
    Fade,
    Toast,
    ToastBody,
    ToastHeader
} from 'reactstrap';
import {toast} from 'react-toastify'
import { NavLink } from 'react-router-dom'
import Login from './Login'
import RubberBand from 'react-reveal/RubberBand';


class NavBar extends Component {
    state = {
        loginModal: false
    }

    
    render() {
        return (
            <Fade>
                <Navbar>
             

         
       
  
                <NavbarBrand href="/"> <RubberBand>
          <h5>Appcademix</h5>
        </RubberBand></NavbarBrand>
    

                   
                    <Nav className="mr-auto" >
                        <NavItem>
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </NavItem>
                        <NavItem>
                                </NavItem>
                        {localStorage.getItem("access_token") !== "" && localStorage.getItem("access_token") !== null &&
                            <>
                                <NavItem>
                                    <NavLink className="nav-link" to={"/profile/" + localStorage.getItem("username")}>Profile</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to={"/createpost"}>Create Post</NavLink>
                                </NavItem>
                            </>
                        }
                    </Nav>
                    {localStorage.getItem("access_token") === "" || localStorage.getItem("access_token") === null
                        ? <Button onClick={this.toggleLoginModal}>Log in / Register</Button>
                        : <Button onClick={this.toggleLogout}>Log out</Button>}
                </Navbar>
                {this.state.loginModal && <Login toggle={this.toggleLoginModal} open={this.state.loginModal} />}
                {/* <div style={{position: "absolute"}} className="p-3 mb-2 rounded toast">
                    <Toast>
                        <ToastHeader>
                            Appcademix
                        </ToastHeader>
                        <ToastBody>
                            Logged out successfully!
                        </ToastBody>
                    </Toast>
                </div> */}
            </Fade>
        );
    }

    toggleLoginModal = () => this.setState({ loginModal: !this.state.loginModal })

    toggleLogout = () => {
        localStorage.setItem("access_token", "")
        localStorage.setItem("username", "")
        this.setState({})
        toast.success(`Good bye`)

    }
}

export default NavBar;