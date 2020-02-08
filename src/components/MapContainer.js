import React from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends React.Component {
    mapStyles = {
        width: '100%',
        height: '70%'
    }

    openMaps = () => {
        window.open(
            'https://www.google.com/maps/dir//S%C3%ADtio+do+Meu+Pai+-+Santa+Cruz+da+Serra,+RJ/@-22.636178,-43.3038298,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x997348620e892b:0x8a6790e439e004a5!2m2!1d-43.2688102!2d-22.636261!3e0'
        )
    }

    render() {
        return (
            <span>
                <Map
                    google={this.props.google}
                    style={this.mapStyles}
                    center={{
                        lat: -22.6364817,
                        lng: -43.2690527
                    }}
                    initialCenter={{ lat: -22.6364817, lng: -43.2690527 }}
                    zoom={15}
                    onClick={this.openMaps}
                >
                    <Marker position={{ lat: -22.6364817, lng: -43.2690527 }} />
                </Map>
            </span>
        )
    }
}

export default GoogleApiWrapper({
    apiKey: ''
})(MapContainer)
