import React from 'react'
import { Navbar, Row, Col } from 'react-bootstrap'
import './Footer.scss'

export default class FooterComponent extends React.Component {
    styles = {
        footer: {
            color: '#fff',
            fontSize: 20,
            height: 100,
            footerDeveloper: {
                fontSize: 10,
                color: '#fff',
                backgroundColor: 'red',
                textAlign: 'center',
                justifyContent: 'center'
            }
        },
        footerBackground: {
            backgroundColor: '#000'
        }
    }

    render() {
        const { fixedBottom } = this.props
        let properties = {}
        !fixedBottom ? (properties.sticky = 'bottom') : (properties.fixed = 'bottom')

        return (
            <div class="mt-5 pt-5 pb-5 footer">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 col-xs-12 about-company">
                            <h2>Mylena & Lucas</h2>
                            <p class="pr-5">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Nullam ac ante mollis quam tristique convallis{' '}
                            </p>
                            <p>
                                <a href="#">
                                    <i class="fa fa-facebook-square mr-1"></i>
                                </a>
                                <a href="#">
                                    <i class="fa fa-linkedin-square"></i>
                                </a>
                            </p>
                        </div>
                        <div class="col-lg-3 col-xs-12 links">
                            <h4 class="mt-lg-0 mt-sm-3">Links</h4>
                            <ul class="m-0 p-0">
                                <li>
                                    - <a href="#">Lorem ipsum</a>
                                </li>
                                <li>
                                    - <a href="#">Nam mauris velit</a>
                                </li>
                                <li>
                                    - <a href="#">Etiam vitae mauris</a>
                                </li>
                                <li>
                                    - <a href="#">Fusce scelerisque</a>
                                </li>
                                <li>
                                    - <a href="#">Sed faucibus</a>
                                </li>
                                <li>
                                    - <a href="#">Mauris efficitur nulla</a>
                                </li>
                            </ul>
                        </div>
                        <div class="col-lg-4 col-xs-12 location">
                            <h4 class="mt-lg-0 mt-sm-4">Local</h4>
                            <h5>Sítio do Meu Pai</h5>
                            <p>
                                Rua Marechal Deodoro da Fonseca, Lota 04, Quadra 1 s/n -
                                Santa Cruz da Serra, RJ, 25260-300
                            </p>
                            <p>
                                <i class="fa fa-phone"></i>(21) 98888-7777
                            </p>
                            <p>
                                <i class="fa fa-envelope-o"></i>
                                lucas.sodre.teixeira@outlook.com
                            </p>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col copyright">
                            <p class="">
                                <small>
                                    {new Date().getFullYear()} • Todos os direitos
                                    reservados
                                </small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
