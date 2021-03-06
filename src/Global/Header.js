import React, {useState} from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {Avatar, Image, notification} from "antd";
import { SmileOutlined } from '@ant-design/icons';
import GuestAvatar from "../images/guest-avatar.svg";
import MaleAvatar from "../images/male-avatar.svg";
import Logo from "../logo.svg";
import {Link, NavLink} from "react-router-dom";

export default function Header() {
    const [user, setUser] = useState('Guest')
    const [img, setImg] = useState(GuestAvatar)
    const loggedIn = (user !== 'Guest')? true: false;

    const openNotification = () => {
        const msg = (!loggedIn)? {
            title: "Welcome User!",
            description: "Welcome to The Home Work Buddy! Feel free to explore our all content on our site. \n|©code by Excellent Willie-Pepple 2021|"
            }:{
            title: "Goodbye",
            description:"Thanks for taking the time to explore my Demo. let me know What you think of this site.\n|©code by Excellent Willie-Pepple 2021|"
        }
      notification.open({
        message: msg.title,
        description: msg.description,
        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
      });
    };

    const handleLogin = () => {
        setUser(prev => (!loggedIn)? 'User': 'Guest');
        setImg(prev => (!loggedIn)? GuestAvatar: MaleAvatar);
        openNotification();
    }

    return (
        <>
            <Navbar collapseOnSelect expand="md" className="border-3 border-bottom border-warning" bg="dark" variant="dark">
              <Container>
                <Link className="navbar-brand" to="/">
                    <img
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                      />
                    The Home-Work Buddy

                </Link><div className="me-auto vr bg-info"/>
                <Navbar.Toggle aria-controls="nav-content"/>

                <Navbar.Collapse className="justify-content-end" id="nav-content">
                    <Nav className="me-auto">
                      <NavLink className="nav-link" to="/classes">Classes</NavLink>
                      <NavLink className="nav-link" to="/planner">Planner</NavLink>
                    </Nav>
                  <Navbar.Text className="ms-auto">
                    Signed in as: <div className="hr d-none d-sm-block d-md-none"/><a className="ms-3" href="#login" onClick={handleLogin}> <Avatar className="border border-info mx-1" src={img}/> <span className="mx-auto ">{user}</span></a>
                  </Navbar.Text>

                </Navbar.Collapse>
              </Container>
            </Navbar>
        </>
    );
}
 
