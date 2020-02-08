import React from 'react'
import ContainerComponent from '../components/ContainerComponent'

export default class GiftPage extends React.Component {
    render() {
        return (
            <div>
                <ContainerComponent fixed>
                    LISTA DE PRESENTES
                    <ul>
                        <li>Casas Bahia</li>
                        <li>Ponto Frio</li>
                        <li>Americanas.com</li>
                    </ul>
                </ContainerComponent>
            </div>
        )
    }
}
