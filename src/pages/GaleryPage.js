import React from 'react'
import { Navbar, Col, Row } from 'react-bootstrap'
import ContainerComponent from '../components/ContainerComponent'

export default class GaleryPage extends React.Component {
    render() {
        return (
            <ContainerComponent>
                <div>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col md={12}></Col>
                    </Row>
                    <Row>
                        <Col md={4}></Col>
                        <Col md={8}></Col>
                    </Row>
                    <Row>
                        <Col md={3}></Col>
                        <Col md={3}></Col>
                        <Col md={3}></Col>
                        <Col md={3}></Col>
                    </Row>
                    <Row>
                        <Col md={10}></Col>
                        <Col md={2}></Col>
                    </Row>
                </div>
            </ContainerComponent>
        )
    }
}
