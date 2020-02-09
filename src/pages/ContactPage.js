import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import SeparatorComponent from '../components/SeparatorComponent'
import ContainerComponent from '../components/ContainerComponent'
import TitleComponent from '../components/TitleComponent'

export default class ContactPage extends React.Component {
    render() {
        return (
            <div>
                <ContainerComponent>
                    <div className={'container'}>
                        <TitleComponent>Nos envie uma mensagem</TitleComponent>
                        <SeparatorComponent />
                        <Row>
                            <Col>
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
                                <SeparatorComponent />
                                <TitleComponent>
                                    Entre em contato diretamente conosco
                                </TitleComponent>
                                <p>WhatsApp</p>
                            </Col>
                        </Row>
                    </div>
                </ContainerComponent>
            </div>
        )
    }
}
