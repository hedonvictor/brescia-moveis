
import { Navbar, Nav, NavbarBrand, Dropdown, Container } from 'react-bootstrap';

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logoImg from '../../../images/bresciaLogoCinzaBasic.png'


export const CustomHeader = () => {

    // const navigate = useNavigate();

    // const [activeLink, setActiveLink] = useState(window.location.pathname);

    const handleClick = () => {
        alert('clicado')
    }


    return (
        <header className="playfar shadow-lg bg-darkwoodFH">
            <Navbar expand="lg" className="p-0">
                <Container>
                    <NavbarBrand className="p-3" onClick={() => handleClick()}>
                        <img src={logoImg} alt="logo Dimobili" style={{ height: '50px' }} />
                    </NavbarBrand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="custom-toggle" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto me-5">
                            <ul className="navbar-nav">
                                <li className="nav nav-item me-3" >
                                    <button
                                        onClick={() => handleClick()}
                                    // className={`nav-link ${activeLink === "/" ? "active-link" : ""}`}
                                    >
                                        Home
                                    </button>
                                </li>
                                <li className="nav nav-item me-3">
                                    <button
                                        onClick={() => handleClick()}
                                    // className={`nav-link ${activeLink === "/sobrenos" ? "active-link" : ""}`}
                                    >
                                        Quem somos
                                    </button>
                                </li>
                                <li className="nav nav-item">
                                    <Dropdown>
                                        <Dropdown.Toggle className="nav-link align-items-center">
                                            Trabalhe Conosco
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu>
                                            <Dropdown.Item onClick={() => handleClick()}>
                                                Seja um Revendedor
                                            </Dropdown.Item>
                                            <Dropdown.Item onClick={() => handleClick()}>
                                                Trabalhe conosco
                                            </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </li>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}


