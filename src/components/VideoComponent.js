import React from 'react'
import { ResponsiveEmbed } from 'react-bootstrap'
import Video from '../assets/video/mylenalucas_web.webm'

export default class VideoComponent extends React.Component {
    render() {
        return (
            <ResponsiveEmbed aspectRatio={'16by9'}>
                <embed type="image/svg+xml" src={Video} />
            </ResponsiveEmbed>
        )
    }
}
