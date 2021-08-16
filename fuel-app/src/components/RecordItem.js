import React, { Component } from 'react'

export class RecordItem extends Component {
    constructor(props) {
        super(props)
        this.setState({
            id: this.props.id,
            amount: this.props.amount,
            distance: this.props.distance,
            cost: this.props.cost,
            date: this.props.date
        })
    }

    state = {
        id: 0,
        amount: 0,
        distance: 0,
        cost: 0,
        date: ""
    }

    render() {
        const { amount, distance, cost, date } = this.props.record
        return (
            <tr>
                <td id="display-date">date</td>
                <td id="display-distance">{distance}</td>
                <td id="display-cost">{cost}</td>
                <td id="display-amount">{amount}</td>
            </tr>
        )
    }
}

export default RecordItem
