import React from 'react'
import { ResponsiveEmbed } from 'react-bootstrap'
import Video from '../assets/video/mylenalucas_web.webm'

export default class VideoComponent extends React.Component {
    styles = {
        videoTag: {
            marginTop: '10%'
        }
    }
    render() {
        return (
            <>
                <video width="80%" controls style={this.styles.videoTag}>
                    <source src={Video} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </>
        )
    }
}
{
    /* <ResponsiveEmbed aspectRatio={'21by9'}>
        <embed type="image/svg+xml" src={Video} />
    </ResponsiveEmbed> */
}
