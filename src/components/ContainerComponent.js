import React from 'react'
import HeaderComponent from './HeaderComponent'
import FooterComponent from './FooterComponent'

export default class Container extends React.Component {
    styles = {
        divContainer: {
            marginTop: 75
        }
    }
    render() {
        const { fixedBottom } = this.props
        return (
            <div>
                <HeaderComponent />
                <div style={this.styles.divContainer}>{this.props.children}</div>
                <FooterComponent fixedBottom />
            </div>
        )
    }
}
