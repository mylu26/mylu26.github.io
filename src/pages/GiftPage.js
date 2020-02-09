import React from 'react'
import { Card, Button } from 'react-bootstrap'
import ContainerComponent from '../components/ContainerComponent'
import SeparatorComponent from '../components/SeparatorComponent'
import TitleComponent from '../components/TitleComponent'
import GiftBackground from '../assets/image/giftImage.png'
import Leader from '../assets/image/giftStores/leader.png'
import UtiliCasa from '../assets/image/giftStores/utilicasa.png'
import CasasBahia from '../assets/image/giftStores/casasbahia.png'

export default class GiftPage extends React.Component {
    styles = {
        divBackground: {
            height: window.outerHeight,
            backgroundImage: `url(${GiftBackground})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        },
        card: {
            div: {
                backgroundColor: '#fff',
                display: 'flex'
            },
            p: {
                color: '#000',
                fontSize: 25
            },
            img: {
                width: 120,
                height: 120
            },
            button: {
                borderWidth: 0,
                border: 'none',
                borderColor: '#fff',
                outline: 'none',
                backgroundColor: '#0000ff'
            }
        }
    }
    render() {
        return (
            <div style={this.styles.divBackground}>
                <ContainerComponent fixedBottom>
                    <SeparatorComponent />
                    <div className={'container'}>
                        <TitleComponent>Listas de presentes</TitleComponent>
                        <SeparatorComponent />
                        <Card>
                            <div style={this.styles.card.div}>
                                <Card.Img src={Leader} style={this.styles.card.img} />
                                <Card.Body>
                                    <Card.Title>Leader</Card.Title>
                                    <Card.Text>
                                        <Button style={this.styles.card.button} block>
                                            acessar
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                        <SeparatorComponent />
                        <Card>
                            <div style={this.styles.card.div}>
                                <Card.Img src={UtiliCasa} style={this.styles.card.img} />
                                <Card.Body>
                                    <Card.Title>
                                        <p>UtiliCasa</p>
                                    </Card.Title>
                                    <Card.Text>
                                        <Button style={this.styles.card.button} block>
                                            acessar
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                        <SeparatorComponent />
                        <Card>
                            <div style={this.styles.card.div}>
                                <Card.Img src={CasasBahia} style={this.styles.card.img} />
                                <Card.Body>
                                    <Card.Title>
                                        <p>Casas Bahia</p>
                                    </Card.Title>
                                    <Card.Text>
                                        <Button style={this.styles.card.button} block>
                                            acessar
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        </Card>
                    </div>
                </ContainerComponent>
            </div>
        )
    }
}
