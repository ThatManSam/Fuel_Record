import React, { Component } from 'react'
import RecordItem from './RecordItem';

export class Records extends Component {
    constructor(props) {
        super(props)
        console.log(props.records)
    }

    render() {
        return (
            <table style={tableStyle}>
                <tbody>
                    <tr>
                        <th>Date</th>
                        <th>Distance</th>
                        <th>Cost</th>
                        <th>Amount</th>
                    </tr>

                    {this.props.records.map((rec) => (
                        <RecordItem
                            record={rec}
                            remove={this.props.remove}
                        />
                    ))}
                </tbody>
            </table>
        )
    }
}

const tableStyle = {
    width: '100%'
}

export default Records
