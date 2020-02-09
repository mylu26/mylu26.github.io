import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default class HeaderComponent extends React.Component {
    styles = {
        navbar: {
            backgroundColor: '#000'
        },
        mylenaLucas: {
            color: '#d6ac20',
            paddingTop: 5,
            marginLeft: 10,
            marginRight: 10
        },
        linkColor: {
            color: '#fff',
            paddingTop: 5,
            marginLeft: 10,
            marginRight: 10
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
                    <Link to={'/home'}>
                        <p style={this.styles.mylenaLucas}>Mylena & Lucas</p>
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle
                    aria-controls="responsive-navbar-nav"
                    style={this.styles.toggle}
                />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to={'/home'}>
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

                        <Link to={'/contact'}>
                            <p style={this.styles.linkColor}>Nos envie uma mensagem</p>
                        </Link>

                        <Link to={'/countdown'}>
                            <p style={this.styles.linkColor}>Contagem regressiva</p>
                        </Link>

                        <Link to={'/address'}>
                            <p style={this.styles.linkColor}>Como chegar?</p>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
