import React, { Component } from 'react'
import DatePicker from 'react-date-picker'

const dateObj = new Date();

    export default class AddRecord extends Component {
    state = {
        amount: 0,
        distance: 0,
        cost: 0,
        date: dateObj
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleDateChange = (e) => {
        this.setState({ date: e})
    }

    render() {
        return (
            <div style={{ display: 'flex', margin: '0 20px', background: '#aaa' }}>
                <div style={inputBlock}>
                    <label for="amount-input" style={inputLabel}>Amount</label>
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
                    <label for="distance-input" style={inputLabel}>Distance</label>
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
                    <label for="cost-input" style={inputLabel}>Cost</label>
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
                    <label for="date-input" style={inputLabel}>Date</label>
                    <DatePicker
                        id="date-input"
                        name="date"
                        value={this.state.date}
                        onChange={this.handleDateChange}
                        format="d-M-yyyy"
                        style={inputDisplay}
                    />
                </div>
            </div>
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