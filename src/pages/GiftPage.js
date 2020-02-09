import React from 'react'
import { Table } from 'react-bootstrap'
import ContainerComponent from '../components/ContainerComponent'
import TitleComponent from '../components/TitleComponent'

export default class GiftPage extends React.Component {
    render() {
        return (
            <div>
                <ContainerComponent fixedBottom>
                    <div className={'container'}>
                        <TitleComponent>Lista de presente</TitleComponent>
                        <Table striped hover borderless>
                            <thead>
                                <tr>
                                    <th>Ir para loja</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a
                                            target={'_blank'}
                                            href={'www.casasbahia.com.br'}
                                        >
                                            Casas Bahia
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            target={'_blank'}
                                            href={'https://www.americanas.com.br/'}
                                        >
                                            Americanas.com
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            target={'_blank'}
                                            href={'https://pontofrio.com.br/'}
                                        >
                                            Ponto Frio
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </ContainerComponent>
            </div>
        )
    }
}
