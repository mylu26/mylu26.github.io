import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import CarouselComponent from '../components/CarouselComponent'
import VideoComponent from '../components/VideoComponent'
import SectionComponent from '../components/SectionComponent'
import FooterComponent from '../components/FooterComponent'

import '../App.css'

export default class HomePage extends React.Component {
    styles = {
        div: {
            color: '#fff',
            backgroundColor: '#000',
            width: '100%',
            height: window.outerHeight
        }
    }
    render() {
        return (
            <div className="App" style={this.styles.div}>
                <HeaderComponent />
                <CarouselComponent src={'https://picsum.photos/200'} />
                {/* <VideoComponent /> */}
                <SectionComponent>
                    <h1>S1</h1>
                </SectionComponent>
                <SectionComponent>
                    <h1>S1</h1>
                </SectionComponent>
                <SectionComponent>
                    <h1>S1</h1>
                </SectionComponent>
                <FooterComponent />
            </div>
        )
    }
}
