import React from 'react'
import HeaderComponent from '../components/HeaderComponent'
import CarouselComponent from '../components/CarouselComponent'
import VideoComponent from '../components/VideoComponent'
import SectionComponent from '../components/SectionComponent'
import SeparatorComponent from '../components/SeparatorComponent'
import FooterComponent from '../components/FooterComponent'
import HistoryPage from './HistoryPage'

import '../App.css'

export default class HomePage extends React.Component {
    styles = {
        div: {
            color: '#fff',
            backgroundColor: '#000000',
            width: '100%',
            height: window.outerHeight
        }
    }
    render() {
        return (
            <div className="App" style={this.styles.div}>
                <HeaderComponent />
                <SeparatorComponent />
                {/* <CarouselComponent src={'https://picsum.photos/200'} /> */}
                <VideoComponent />
                <HistoryPage />
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
