import React from 'react'
import { Navbar, Col, Row } from 'react-bootstrap'
import ContainerComponent from '../components/ContainerComponent'
import GaleryOne from '../components/subcomponents/GaleryOne'
import TitleComponent from '../components/TitleComponent'

export default class GaleryPage extends React.Component {
    styles = {
        div: {
            marginTop: 70
        },
        images: {
            width: 300
        }
    }

    render() {
        return (
            <ContainerComponent>
                <div className={'container'}>
                    <TitleComponent>Galeria de fotos</TitleComponent>
                    <div style={this.styles.div}>
                        <GaleryOne />
                    </div>
                </div>
            </ContainerComponent>
        )
    }
}
