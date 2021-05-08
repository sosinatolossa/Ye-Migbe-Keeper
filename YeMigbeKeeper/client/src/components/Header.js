import userEvent from "@testing-library/user-event";
import React, { useState, useContext } from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { UserContext } from "././user/UserProvider";

export default function Header() {
    const { isLoggedIn, logout } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar bg="warning" variant="light">
                <Navbar.Brand href="/">
                    Ye Migbe Keeper
                </Navbar.Brand>
                <Navbar.Toggle onClick={toggle} />
                <Navbar.Collapse isOpen={isOpen} navbar>


                    <Nav className="mr-auto" navbar>
                        {/* When isLoggedIn === true, we will render the Posts link */}
                        {isLoggedIn && (
                            <Nav.Item>
                                <Nav.Link href="/habeshaFood">
                                    Habesha Foods
                                </Nav.Link>
                            </Nav.Item>
                        )}
                    </Nav>

                    <Nav className="mr-auto" navbar>
                        {/* When isLoggedIn === true, we will render the My Posts link */}
                        {isLoggedIn && (
                            <Nav.Item>
                                <Nav.Link href="/myHabeshaFoods">
                                    My Habesha Foods
                                </Nav.Link>
                            </Nav.Item>
                        )}
                    </Nav>

                    <Nav className="mr-auto" navbar>
                        {isLoggedIn && (
                            <Nav.Item>
                                <Nav.Link href="/favoriteFood">
                                    My Favorite Habesha Foods
                                </Nav.Link>
                            </Nav.Item>
                        )}
                    </Nav>
                    <Nav className="mr-auto" navbar>
                        {isLoggedIn && (
                            <Nav.Item>
                                <Nav.Link href="/recipe">
                                    Recipes
                                </Nav.Link>
                            </Nav.Item>
                        )}
                    </Nav>

                    <Nav className="mr-auto" navbar>
                        {isLoggedIn && (
                            <NavDropdown title="Dropdown" className="justify-content-end">
                                <NavDropdown.Item href="#action/3.1">
                                    <Nav.Item>
                                        <a
                                            aria-current="page"
                                            className="nav-link"
                                            style={{ cursor: "pointer" }}
                                            onClick={logout}
                                        >
                                            Logout
                                </a>
                                    </Nav.Item>
                                </NavDropdown.Item>
                            </NavDropdown>
                        )}

                    </Nav>


                    {/* <Nav className="justify-content-end">
                        <Navbar.Text>
                            Signed in as: <a href="#login">`${User.firstName} ${User.Lastname}`</a>
                        </Navbar.Text>
                    </Nav> */}
                    <Nav navbar>
                        {/* {isLoggedIn && (
                            <>
                                <Nav.Item>
                                    <a
                                        aria-current="page"
                                        className="nav-link"
                                        style={{ cursor: "pointer" }}
                                        onClick={logout}
                                    >
                                        Logout
                                    </a>
                                </Nav.Item>

                            </>
                        )} */}

                        {!isLoggedIn && (
                            <>
                                <Nav.Item>
                                    <Nav.Link href="/login">
                                        Login
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/register">
                                        Register
                                    </Nav.Link>
                                </Nav.Item>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </div >
    );
}