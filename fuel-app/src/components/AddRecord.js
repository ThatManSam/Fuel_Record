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
            <form onSubmit={this.handleSubmit} className="input-form">
                <div className="input-block">
                    <label htmlFor="amount-input">Amount</label>
                    <input
                        className="num-input"
                        id="amount-input"
                        type="number"
                        name="amount"
                        placeholder="00.00"
                        value={this.state.amount}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="distance-input">Distance</label>
                    <input
                        className="num-input"
                        id="distance-input"
                        type="number"
                        name="distance"
                        placeholder="000.0"
                        value={this.state.distance}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="cost-input">Cost</label>
                    <input
                        className="num-input"
                        id="cost-input"
                        type="number"
                        name="cost"
                        placeholder="00.00"
                        value={this.state.cost}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="input-block">
                    <label htmlFor="date-input">Date</label>
                    <DatePicker
                        id="date-input"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleDateChange}
                        format="d-M-yyyy"
                    />
                </div>
                <input
                    id="submit-button"
                    type="submit"
                    name="submit"
                    value="Add Record"
                />
            </form>
        )
    }


}

AddRecord.propTypes = {
    addRecord: PropTypes.func.isRequired
}