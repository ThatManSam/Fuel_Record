import React, { Component } from 'react'
import DatePicker from 'react-date-picker'
import PropTypes from 'prop-types'

const dateObj = new Date();

export default class AddRecord extends Component {
    state = {
        id: 0,
        amount: 0,
        distance: 0,
        cost: 0,
        date: dateObj
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleDateChange = (e) => {
        this.setState({ date: e })
    }

    handleSubmit = (e) => {
        console.log("Form was submitted")
        e.preventDefault()
        let newState = {
            id: this.state.date,
            amount: this.state.amount,
            distance: this.state.distance,
            cost: this.state.cost,
            date: this.state.date
        }
        this.props.addRecord(newState)
        this.setState(newState)
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} style={{ display: 'flex', margin: '0 20px', background: '#aaa' }}>
                <div style={inputBlock}>
                    <label htmlFor="amount-input" style={inputLabel}>Amount</label>
                    <input
                        id="amount-input"
                        type="number"
                        name="amount"
                        placeholder="00.00"
                        value={this.state.amount}
                        onChange={this.handleChange}
                        style={inputDisplay}
                    />
                </div>
                <div style={inputBlock}>
                    <label htmlFor="distance-input" style={inputLabel}>Distance</label>
                    <input
                        id="distance-input"
                        type="number"
                        name="distance"
                        placeholder="000.0"
                        value={this.state.distance}
                        onChange={this.handleChange}
                        style={inputDisplay}
                    />
                </div>
                <div style={inputBlock}>
                    <label htmlFor="cost-input" style={inputLabel}>Cost</label>
                    <input
                        id="cost-input"
                        type="number"
                        name="cost"
                        placeholder="00.00"
                        value={this.state.cost}
                        onChange={this.handleChange}
                        style={inputDisplay}
                    />
                </div>
                <div style={inputBlock}>
                    <label htmlFor="date-input" style={inputLabel}>Date</label>
                    <DatePicker
                        id="date-input"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleDateChange}
                        format="d-M-yyyy"
                        style={inputDisplay}
                    />
                </div>
                <input
                    id="submit-button"
                    type="submit"
                    name="submit"
                    value="Submit"
                    style={submitButton}
                />
            </form>
        )
    }


}


const inputDisplay = {
    padding: '5px',
}

const inputBlock = {
    flex: '1',
    padding: '5px',
}

const inputLabel = {
    padding: '5px',
}

const submitButton = {
    background: '#555',
    border: 'none',
    padding: '5px',
    color: 'white',
    flex: '1'
}

AddRecord.propTypes = {
    addRecord: PropTypes.func.isRequired
}