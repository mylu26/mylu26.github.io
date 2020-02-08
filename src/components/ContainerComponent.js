import React from 'react'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'

export default class Container extends React.Component {
    render() {
        return (
            <div>
                <HeaderComponent />
                {this.props.children}
                <FooterComponent />
            </div>
        )
    }
}
