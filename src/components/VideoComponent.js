import React from 'react'
import Video from '../assets/video/mylenalucas_web.webm'

export default class VideoComponent extends React.Component {
    render() {
        return (
            <>
                <video width="100%" autoPlay>
                    <source src={Video} type="video/webm" />
                    Your browser does not support the video tag.
                </video>
            </>
        )
    }
}
