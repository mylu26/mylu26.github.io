import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default class HistoryPage extends React.Component {
    styles = {
        div: {
            paddingTop: '10%',
            paddingBottom: '10%',
            backgroundColor: '#000',
            color: '#fff'
        },
        images: {
            width: '100%',
            height: 400
        },
        image1: {
            width: '80%',
            marginTop: 10
        },
        text: {
            textAlign: 'left'
        }
    }
    render() {
        return (
            <div style={this.styles.div} data-from={'History Page'}>
                <Col>
                    <Row>
                        <Col md={4}>
                            <img
                                src={require('../assets/image/galeria1.jpg')}
                                style={this.styles.image1}
                                alt={'Imagem de Mylena e Lucas'}
                            />
                        </Col>
                        <Col md={7}>
                            <p style={this.styles.text}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Aliquam consectetur varius mi, a pulvinar odio porta non.
                                Maecenas nisl lorem, vulputate eu tincidunt vel, ultricies
                                quis lectus. Vivamus eget aliquam nibh. Duis accumsan mi
                                sed tincidunt lobortis. Quisque porta magna mauris, ut
                                tristique tellus dapibus id. Proin et malesuada sem.
                                Aliquam bibendum justo nulla, nec porttitor nisi porttitor
                                et. Aenean lobortis est neque, non vestibulum urna luctus
                                vel. In feugiat, ex et porta pretium, elit est mattis
                                urna, sit amet gravida augue ipsum in augue. Mauris nec
                                tempor nulla. Vestibulum sodales dui et neque sollicitudin
                                pharetra. Aliquam nec vehicula felis. Nunc malesuada
                                lectus sit amet lacus sagittis, sit amet ultrices enim
                                viverra. Donec vel nibh posuere, venenatis mauris vel,
                                cursus sapien. Duis vel ullamcorper nisl, id condimentum
                                nulla. Ut dapibus est non nibh aliquam, nec sodales ante
                                eleifend. In efficitur nibh commodo, vulputate felis id,
                                euismod justo. Mauris porta risus convallis sollicitudin
                                lobortis. Praesent accumsan diam vehicula, tincidunt odio
                                ut, iaculis risus. Donec placerat nunc ac blandit
                                efficitur. Morbi sed rhoncus purus, eget pellentesque sem.
                                Morbi consequat diam non sapien vulputate, quis commodo
                                sapien ultricies. In hac habitasse platea dictumst. Nam
                                lobortis ligula non eros placerat sagittis. Integer
                                luctus, risus eu tristique dapibus, nisl enim eleifend
                                enim, vel pretium leo augue in lacus. Etiam volutpat
                                rhoncus turpis, hendrerit tincidunt leo volutpat eu.
                                Vivamus bibendum, nisl id accumsan dignissim, odio ipsum
                                consequat purus, ac tincidunt nulla diam et nisl. Quisque
                                commodo placerat felis, quis iaculis augue consectetur
                                sed. Duis rutrum, purus vel hendrerit condimentum, sapien
                                augue convallis enim, ac aliquam lacus orci in lacus.
                                Vivamus ut risus nec neque pulvinar condimentum nec eu
                                purus. Vestibulum ante ipsum primis in faucibus orci
                                luctus et ultrices posuere cubilia Curae; Vivamus vitae
                                consectetur libero. Nullam eget vestibulum mauris. Sed non
                                congue nisi. Curabitur in placerat mi, at lacinia nisl.
                                Phasellus dictum sapien sem. Etiam finibus condimentum
                                scelerisque. Fusce pellentesque auctor tempor. Proin
                                condimentum rhoncus mi vitae dapibus. Orci varius natoque
                                penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Quisque semper pretium ligula, et
                                pellentesque enim dictum id. Nulla iaculis odio elit, id
                                fermentum mauris bibendum eu. Curabitur nec diam neque.
                                Duis pharetra et nulla vitae interdum. Etiam sit amet mi
                                et nisi auctor aliquet. Sed facilisis egestas neque a
                                pulvinar. Suspendisse placerat vitae leo eu bibendum.
                                Donec elementum lacinia egestas. Quisque sit amet dolor
                                pellentesque, pharetra ligula aliquam, finibus mauris. Sed
                                lorem leo, rhoncus eu vehicula tempus, efficitur ut nisi.
                                Sed velit velit, auctor et maximus vel, pretium ut ex. Sed
                                sit amet orci nisi. Donec id fermentum lorem. Aliquam quis
                                libero a sapien pellentesque tempus ac et metus. Orci
                                varius natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus. Cras dapibus, est sit amet
                                pellentesque placerat, nulla odio tristique elit, in
                                sagittis erat quam non orci. Ut cursus ante sit amet elit
                                faucibus blandit. Quisque interdum lacus id imperdiet
                                tempor.
                            </p>
                        </Col>
                    </Row>
                </Col>
            </div>
        )
    }
}
