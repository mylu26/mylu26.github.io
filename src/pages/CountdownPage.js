import React from 'react'
import { Table } from 'react-bootstrap'
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
            marginTop: 200,
            marginBottom: 100,
            justifyContent: 'center',
            textAlign: 'center'
        },
        title: {
            fontSize: 50
        },
        textDate: {
            fontSize: 25,
            fontWeight: 800
        },
        textDescription: {
            fontSize: 20,
            fontWeight: 500
        }
    }

    render() {
        let { days, hours, minutes, seconds } = this.state
        return (
            <div>
                <ContainerComponent fixedBottom>
                    <div className={'container'}>
                        <div style={this.styles.div}>
                            {days === 0 &&
                            hours === 0 &&
                            minutes === 0 &&
                            seconds === 0 ? (
                                <p>Carregando...</p>
                            ) : (
                                <div>
                                    <h1 style={this.styles.title}>Faltam</h1>
                                    <Table striped bordered hover borderless>
                                        <thead>
                                            <tr>
                                                <th style={this.styles.textDate}>
                                                    {days}
                                                </th>
                                                <th style={this.styles.textDate}>
                                                    {hours}
                                                </th>
                                                <th style={this.styles.textDate}>
                                                    {minutes}
                                                </th>
                                                <th style={this.styles.textDate}>
                                                    {seconds}
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={this.styles.textDescription}>
                                                    dias
                                                </td>
                                                <td style={this.styles.textDescription}>
                                                    horas
                                                </td>
                                                <td style={this.styles.textDescription}>
                                                    minutos
                                                </td>
                                                <td style={this.styles.textDescription}>
                                                    segundos
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <h1 style={this.styles.title}>
                                        para o nosso casamento
                                    </h1>
                                </div>
                            )}
                        </div>
                    </div>
                </ContainerComponent>
            </div>
        )
    }
}
