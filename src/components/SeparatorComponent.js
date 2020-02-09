import React from 'react'

export default class SeparatorComponent extends React.Component {
    styles = {
        div: {
            marginTop: 10,
            marginBottom: 10,
            height: 10,
            width: '100%',
            backgroundColor: 'transparent'
        }
    }
    render() {
        return <div style={this.styles.div}></div>
    }
}
