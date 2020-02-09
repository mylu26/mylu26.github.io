import React from 'react'

export default class TitleComponent extends React.Component {
    styles = {
        color: '#d6ac20',
        fontWeight: 100
    }

    render() {
        return <h2 style={this.styles}>{this.props.children}</h2>
    }
}
