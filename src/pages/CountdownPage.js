import React from 'react'
import { Table } from 'react-bootstrap'
import ContainerComponent from '../components/ContainerComponent'
import SeparatorComponent from '../components/SeparatorComponent'
import TitleComponent from '../components/TitleComponent'
import ImageBackground from '../assets/image/countdownOverlay.jpg'

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
        let countdownDate = new Date('Sep 26, 2020 18:50:00').getTime()
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
            justifyContent: 'center',
            textAlign: 'center',
            divBackground: {
                height: window.outerHeight,
                backgroundImage: `url(${ImageBackground})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }
        },
        divTime: {
            display: 'flex',
            justifyContent: 'center'
        },
        time: {
            days: {
                fontSize: 70,
                fontWeight: 900,
                color: '#fff',
                marginBottom: 0,
                daysDescription: {
                    fontSize: 20,
                    fontWeight: 300,
                    marginBottom: 0
                }
            },
            marginLeft: '1%',
            marginRight: '1%',
            width: 100,
            height: 100,
            borderRadius: 5,
            textAlign: 'center',
            fontSize: 30,
            fontWeight: 900,
            backgroundColor: '#fff',
            opacity: '0.8',
            alignItems: 'center',
            justifyContent: 'center',
            timeDescription: {
                fontSize: 15,
                fontWeight: 300
            }
        }
    }

    render() {
        let { days, hours, minutes, seconds } = this.state
        return (
            <div style={this.styles.div.divBackground}>
                <ContainerComponent fixedBottom>
                    <div className={'container'}>
                        <TitleComponent>Contagem regressiva</TitleComponent>
                        <SeparatorComponent />
                        <div style={this.styles.div}>
                            {days === 0 &&
                            hours === 0 &&
                            minutes === 0 &&
                            seconds === 0 ? (
                                <p>Carregando...</p>
                            ) : (
                                <div>
                                    <h1>Faltam apenas</h1>
                                    <div style={this.styles.time.days}>
                                        {days}
                                        <span
                                            style={this.styles.time.days.daysDescription}
                                        >
                                            dias
                                        </span>
                                    </div>
                                    <div style={this.styles.divTime}>
                                        <div style={this.styles.time}>
                                            <div>{hours}</div>
                                            <p style={this.styles.time.timeDescription}>
                                                horas
                                            </p>
                                        </div>
                                        <div style={this.styles.time}>
                                            <div>{minutes}</div>
                                            <p style={this.styles.time.timeDescription}>
                                                minutos
                                            </p>
                                        </div>
                                        <div style={this.styles.time}>
                                            <div>{seconds}</div>
                                            <p style={this.styles.time.timeDescription}>
                                                segundos
                                            </p>
                                        </div>
                                    </div>
                                    <SeparatorComponent />
                                    <h3>para o nosso casamento</h3>
                                </div>
                            )}
                        </div>
                    </div>
                </ContainerComponent>
            </div>
        )
    }
}
