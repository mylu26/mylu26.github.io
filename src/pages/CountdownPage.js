import React from 'react'
import { Navbar } from 'react-bootstrap'
import ContainerComponent from '../components/ContainerComponent'
import FooterComponent from '../components/FooterComponent'

export default class CountdownPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    tick = () => {
        let countdownDate = new Date('Sep 26, 2020 18:45:00').getTime()
        let now = new Date().getTime()
        let between = countdownDate - now
        let days = Math.floor(between / (1000 * 60 * 60 * 24))
        let hours = Math.floor((between % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((between % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((between % (1000 * 60)) / 1000)

        this.setState({ days, hours, minutes, seconds })
    }

    styles = {
        div: {
            marginTop: 300,
            marginBottom: 100
        }
    }

    render() {
        let { days, hours, minutes, seconds } = this.state
        return (
            <div>
                <ContainerComponent fixedBottom>
                    <div style={this.styles.div}>
                        {days === 0 && hours == 0 && minutes === 0 && seconds === 0 ? (
                            <p>Carregando...</p>
                        ) : (
                            <div>
                                <h1>Contagem regressiva</h1>
                                <span>
                                    <p>
                                        Faltam {days} dias, {hours}:{minutes}:{seconds}{' '}
                                        para o nosso casamento
                                    </p>
                                    <hr></hr>
                                    <p>26 de setembro de 2020</p>
                                </span>
                            </div>
                        )}
                    </div>
                </ContainerComponent>
            </div>
        )
    }
}
