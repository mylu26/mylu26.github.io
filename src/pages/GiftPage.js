import React from 'react'
import { Table } from 'react-bootstrap'
import ContainerComponent from '../components/ContainerComponent'

export default class GiftPage extends React.Component {
    render() {
        return (
            <div>
                <ContainerComponent fixed>
                    <div className={'container'}>
                        LISTA DE PRESENTES
                        <Table striped bordered hover borderless>
                            <thead>
                                <tr>
                                    <th>Loja</th>
                                    <th>Site</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Casas Bahia</td>
                                    <td>casasbahia.com.br</td>
                                </tr>
                                <tr>
                                    <td>Americanas.com</td>
                                    <td>https://www.americanas.com.br/</td>
                                </tr>
                                <tr>
                                    <td>Ponto Frio</td>
                                    <td>http://pontofrio.com.br/</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                </ContainerComponent>
            </div>
        )
    }
}
