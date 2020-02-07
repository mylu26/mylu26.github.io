import React from 'react'
import { Navbar } from 'react-bootstrap'

export default class FooterComponent extends React.Component {
    styles = {
        footer: {
            color: '#fff'
        },
        footerBackground: {
            backgroundColor: '#000'
        }
    }

    render() {
        return (
            <Navbar fixed={'bottom'} style={this.styles.footerBackground}>
                <Navbar.Brand href="#home" style={this.styles.footer}>
                    Mylena & Lucas
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={this.styles.footer}>
                        Desenvolvido por:{' '}
                        <a href="#login" style={this.styles.footer}>
                            Lucas Sodré
                        </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
