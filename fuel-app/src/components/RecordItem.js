import React, { Component } from 'react'

export class RecordItem extends Component {
    render() {
        const { amount, distance, cost, date } = this.props.record
        return (
            <tr>
                <td id="display-date">{new Date(date).toLocaleDateString()}</td>
                <td id="display-distance">{distance}</td>
                <td id="display-cost">{cost}</td>
                <td id="display-amount">{amount}</td>
                <td id="remove-button">
                    <input
                        id="remove-button"
                        type="button"
                        name="remove"
                        value="X"
                        onClick={() => this.props.remove(this.props.record)} />
                </td>
            </tr>
        )
    }
}

export default RecordItem
