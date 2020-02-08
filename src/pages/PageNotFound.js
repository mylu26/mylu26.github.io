import React from 'react'
import { Navbar } from 'react-bootstrap'
import ContainerComponent from '../components/ContainerComponent'

export default class PageNotFound extends React.Component {
    render() {
        return (
            <div>
                <ContainerComponent>
                    <h1>Página Não Encontrada</h1>
                </ContainerComponent>
            </div>
        )
    }
}
