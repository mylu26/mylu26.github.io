import React from 'react'
import './galery.css'

export default class GaleryOne extends React.Component {
    function() {
        var selectedClass = ''('.filter').click(function() {
            selectedClass = this.attr('data-rel')('#gallery')
                .fadeTo(
                    100,
                    0.1
                )('#gallery div')
                .not('.' + selectedClass)
                .fadeOut()
                .removeClass('animation')
            setTimeout(function() {
                ;('.' + selectedClass)
                    .fadeIn()
                    .addClass('animation')('#gallery')
                    .fadeTo(300, 1)
            }, 300)
        })
    }

    render() {
        return (
            <div class="gallery" id="gallery">
                <div class="mb-3 pics animation all 2">
                    <img
                        class="img-fluid"
                        src={require('../../assets/image/galery/foto1.jpg')}
                        alt="foto1"
                    />
                </div>

                <div class="mb-3 pics animation all 1">
                    <img
                        class="img-fluid"
                        src={require('../../assets/image/galery/foto2.jpg')}
                        alt="foto2"
                    />
                </div>

                <div class="mb-3 pics animation all 1">
                    <img
                        class="img-fluid"
                        src={require('../../assets/image/galery/foto3.jpg')}
                        alt="foto3"
                    />
                </div>

                <div class="mb-3 pics animation all 2">
                    <img
                        class="img-fluid"
                        src={require('../../assets/image/galery/foto4.jpg')}
                        alt="foto4"
                    />
                </div>

                <div class="mb-3 pics animation all 2">
                    <img
                        class="img-fluid"
                        src={require('../../assets/image/galery/foto1.jpg')}
                        alt="foto5"
                    />
                </div>

                <div class="mb-3 pics animation all 1">
                    <img
                        class="img-fluid"
                        src={require('../../assets/image/galery/foto2.jpg')}
                        alt="foto6"
                    />
                </div>
            </div>
        )
    }
}
