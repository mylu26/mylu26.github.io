import React from 'react'
import ContainerComponent from '../components/ContainerComponent'
import GaleryOne from '../components/subcomponents/GaleryOne'
import TitleComponent from '../components/TitleComponent'
import SeparatorComponent from '../components/SeparatorComponent'

export default class GaleryPage extends React.Component {
    styles = {
        container: {
            backgroundColor: '#000'
        },
        div: {
            marginTop: 70
        },
        images: {
            width: 300
        }
    }

    render() {
        return (
            <div style={this.styles.container}>
                <ContainerComponent>
                    <div className={'container'}>
                        <TitleComponent>Galeria de fotos</TitleComponent>
                        <SeparatorComponent />
                        <div style={this.styles.div}>
                            <GaleryOne />
                        </div>
                    </div>
                </ContainerComponent>
            </div>
        )
    }
}
