import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class HeaderComponent extends React.Component {
    styles = {
        navbar: {
            backgroundColor: '#000'
        },
        mylenaLucas: {
            color: '#d6ac20',
            paddingTop: 5,
            paddingLeft: 10,
            paddingRight: 10
        },
        linkColor: {
            color: '#fff',
            paddingTop: 5,
            paddingLeft: 10,
            paddingRight: 10
        },
        toggle: {
            color: 'red',
            backgroundColor: '#d6ac20',
            outline: 'none'
        }
    }
    render() {
        return (
            <Navbar fixed={'top'} collapseOnSelect expand="lg" style={this.styles.navbar}>
                <Navbar.Brand>
                    <Link to={'/'}>
                        <p style={this.styles.mylenaLucas}>Mylena & Lucas</p>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    style={this.styles.toggle}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to={'/history'}>
                            <p style={this.styles.linkColor}>Nossa história</p>
                        </Link>
                        <Link to={'/photos'}>
                            <p style={this.styles.linkColor}>Fotos</p>
                        </Link>
                        <a
                            href={
                                'https://www.casamentos.com.br/web/mylenaelucas/confirmeasuapresenca-3'
                            }
                            target={'_blank'}
                        >
                            <p style={this.styles.linkColor}>Confirme sua presença</p>
                        </a>

                        <Link to={'/giftList'}>
                            <p style={this.styles.linkColor}>Lista de presentes</p>
                        </Link>

                        <Link to={'/sendMessage'}>
                            <p style={this.styles.linkColor}>Nos envie uma mensagem</p>
                        </Link>

                        {/* <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">
                                Something
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    {/* <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
