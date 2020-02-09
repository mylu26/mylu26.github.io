import React from 'react'
import VideoComponent from '../components/VideoComponent'
import SectionComponent from '../components/SectionComponent'
import SeparatorComponent from '../components/SeparatorComponent'
import ContainerComponent from '../components/ContainerComponent'
import HistoryPage from './HistoryPage'

import '../App.css'

export default class HomePage extends React.Component {
    styles = {
        div: {
            color: '#fff',
            backgroundColor: '#000000',
            height: window.outerHeight
        }
    }
    render() {
        return (
            <div className="App" style={this.styles.div}>
                <ContainerComponent>
                    <SeparatorComponent />
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
                </ContainerComponent>
            </div>
        )
    }
}
