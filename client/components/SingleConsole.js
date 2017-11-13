import React from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class SingleConsole extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.match.params.name)
        return (
            <div>
            </div>
        )
    }
}

export default SingleConsole
