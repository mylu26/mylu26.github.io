import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import SeparatorComponent from '../components/SeparatorComponent'
import ContainerComponent from '../components/ContainerComponent'

export default class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <ContainerComponent>
                    <div className={'container'}>
                        <Row>
                            <Col>
                                <h1>CONTATO</h1>
                                <SeparatorComponent />
                                <Form.Group>
                                    <Form.Label>
                                        Escreva seu nome, a família ou casal.
                                    </Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="text"
                                        placeholder="Família"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Insira seu e-mail</Form.Label>
                                    <Form.Control
                                        size="lg"
                                        type="email"
                                        placeholder="email@email.com"
                                    />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>
                                        Escreva sua mensagem para nós 😁
                                    </Form.Label>
                                    <Form.Control as="textarea" rows="5" />
                                </Form.Group>
                                <Button block>Enviar mensagem</Button>
                            </Col>
                            <Col>
                                <h1>Entre em contato diretamente conosco</h1>
                                <p>WhatsApp</p>
                            </Col>
                        </Row>
                    </div>
                </ContainerComponent>
            </div>
        )
    }
}
