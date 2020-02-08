import React from 'react'
import { Navbar, Col, Row } from 'react-bootstrap'
import ContainerComponent from '../components/ContainerComponent'
import MapContainer from '../components/MapContainer'

export default class AddressPage extends React.Component {
    // styles = {
    //     div: {
    //         marginTop: 70
    //     },
    //     images: {
    //         width: 300
    //     }
    // }

    render() {
        return (
            <ContainerComponent>
                <div>
                    <h1>Toque no mapa para navegar</h1>

                    <MapContainer />
                </div>
            </ContainerComponent>
        )
    }
}
