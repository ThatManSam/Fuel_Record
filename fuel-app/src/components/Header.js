import React, { Component } from 'react'
import propTypes from 'prop-types'


export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <h1>{this.props.title}</h1>
                <button className="btn" onClick={this.props.onAddLog} 
                    style={{backgroundColor: this.props.showAddLog ? "darkRed" : "green"}}>
                    {this.props.showAddLog ? "Close" : "Log Fill-up"}
                </button>
                <button className="btn" onClick={this.props.toggleEdit} 
                    style={{backgroundColor: this.props.edit ? "darkRed" : "green"}}>
                    {this.props.edit ? "Done" : "Edit"}
                </button>
            </header>
        )
    }
}

Header.defaultProps = {
    title: 'Fuel Fill-up',
}

Header.propTypes = {
    title: propTypes.string.isRequired,
}