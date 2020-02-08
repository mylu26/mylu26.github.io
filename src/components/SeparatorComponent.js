import React from 'react'
import { ResponsiveEmbed } from 'react-bootstrap'
import Video from '../assets/video/mylenalucas_web.webm'

export default class SeparatorComponent extends React.Component {
    styles = {
        div: {
            marginTop: 10,
            marginBottom: 10,
            height: 10,
            width: '100%',
            backgroundColor: 'red'
        }
    }
    render() {
        return <div style={this.styles.div}></div>
    }
}
{
    /* <ResponsiveEmbed aspectRatio={'21by9'}>
        <embed type="image/svg+xml" src={Video} />
    </ResponsiveEmbed> */
}
