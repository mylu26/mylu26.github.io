import React from 'react'
import { Navbar } from 'react-bootstrap'

export default class FooterComponent extends React.Component {
    styles = {
        footer: {
            color: '#fff',
            fontSize: 10,
            footerDeveloper: {
                fontSize: 6,
                color: '#fff'
            }
        },
        footerBackground: {
            backgroundColor: '#000'
        }
    }

    render() {
        const { fixedBottom } = this.props
        let properties = {}
        !fixedBottom ? (properties.sticky = 'bottom') : (properties.fixed = 'bottom')

        return (
            <Navbar {...properties} style={this.styles.footerBackground}>
                <Navbar.Brand href="#home" style={this.styles.footer}>
                    Mylena & Lucas
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text style={this.styles.footer.footerDeveloper}>
                        Desenvolvido por:{' '}
                        <a href="#login" style={this.styles.footer.footerDeveloper}>
                            Lucas Sodré
                        </a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
