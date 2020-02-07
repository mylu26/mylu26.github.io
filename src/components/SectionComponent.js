import React from 'react'
import { Navbar } from 'react-bootstrap'

export default class SectionComponent extends React.Component {
    render() {
        return (
            <Navbar fixed={'bottom'}>
                <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: <a href="#login">Mark Otto</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}