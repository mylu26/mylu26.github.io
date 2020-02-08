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
                        alt="Card image cap"
                    />
                </div>

                <div class="mb-3 pics animation all 1">
                    <img
                        class="img-fluid"
                        src={require('../../assets/image/galery/foto2.jpg')}
                        alt="Card image cap"
                    />
                </div>

                <div class="mb-3 pics animation all 1">
                    <img
                        class="img-fluid"
                        src={require('../../assets/image/galery/foto3.jpg')}
                        alt="Card image cap"
                    />
                </div>

                <div class="mb-3 pics animation all 2">
                    <img
                        class="img-fluid"
                        src={require('../../assets/image/galery/foto4.jpg')}
                        alt="Card image cap"
                    />
                </div>

                <div class="mb-3 pics animation all 2">
                    <img
                        class="img-fluid"
                        src={require('../../assets/image/galery/foto1.jpg')}
                        alt="Card image cap"
                    />
                </div>

                <div class="mb-3 pics animation all 1">
                    <img
                        class="img-fluid"
                        src={require('../../assets/image/galery/foto2.jpg')}
                        alt="Card image cap"
                    />
                </div>
            </div>
        )
    }
}
