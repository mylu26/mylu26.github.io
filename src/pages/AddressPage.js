import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { Card, Button } from 'react-bootstrap'
import ContainerComponent from '../components/ContainerComponent'
import MapContainer from '../components/MapContainer'
import TitleComponent from '../components/TitleComponent'
import SeparatorComponent from '../components/SeparatorComponent'

export default class AddressPage extends React.Component {
    state = {
        value:
            'Rua Marechal Deodoro da Fonseca, Lota 04, Quadra 1 s/n - Santa Cruz da Serra, RJ, 25260-300',
        copied: false
    }

    styles = {
        textMap: {
            textAlign: 'center',
            fontSize: 20
        }
    }

    copyToClipboard = () => {
        setInterval(() => {
            this.setState({ copied: false })
        }, 5000)
    }

    render() {
        let { copied, value } = this.state
        return (
            <div>
                <ContainerComponent fixedBottom>
                    <div className={'container'}>
                        <TitleComponent>Como chegar?</TitleComponent>
                        <SeparatorComponent />
                        <Card className="text-center">
                            <Card.Header>Sítio do Meu Pai</Card.Header>
                            <Card.Body>
                                <Card.Text>{value}</Card.Text>
                                <CopyToClipboard
                                    text={value}
                                    onCopy={() => this.setState({ copied: true })}
                                >
                                    <Button
                                        block
                                        variant="outline-info"
                                        size="sm"
                                        onClick={this.copyToClipboard}
                                    >
                                        Copiar endereço
                                    </Button>
                                </CopyToClipboard>
                            </Card.Body>
                            {copied ? (
                                <Card.Footer className="text-muted">
                                    Endereço copiado para a área de transferência
                                </Card.Footer>
                            ) : (
                                ''
                            )}
                        </Card>
                        <SeparatorComponent />
                    </div>
                    <p style={this.styles.textMap}>Toque no mapa para navegar</p>
                    <MapContainer />
                </ContainerComponent>
            </div>
        )
    }
}
