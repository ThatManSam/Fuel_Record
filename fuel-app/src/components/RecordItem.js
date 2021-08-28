import React, { Component } from 'react'
import { FaTimes } from 'react-icons/fa'

export class RecordItem extends Component {
    render() {
        const { amount, distance, cost, date } = this.props.record
        const edit = this.props.edit
        return (
            <div className="record-container">
                <div className="record">
                    <h2>{amount + 'L for ' + distance + 'km'}</h2>
                    <h3>{new Date(date).toLocaleDateString() + ' $' + cost}</h3>
                </div>
                {edit &&
                    <div className="record-delete-icon" onClick={() => this.props.remove(this.props.record)}>
                        <FaTimes />
                    </div>
                }
            </div>

        )
    }
}

export default RecordItem
