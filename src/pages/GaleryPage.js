import React from 'react'
import { Navbar, Col, Row } from 'react-bootstrap'
import ContainerComponent from '../components/ContainerComponent'
import GaleryOne from '../components/subcomponents/GaleryOne'

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
                <div style={this.styles.div}>
                    <GaleryOne />
                </div>
            </ContainerComponent>
        )
    }
}
