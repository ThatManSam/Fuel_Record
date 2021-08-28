import React, { Component } from 'react'
import RecordItem from './RecordItem';

export class Records extends Component {
    constructor(props) {
        super(props)
        console.log(props.records)
    }

    render() {
        return (
            <div>
                {this.props.records.map((rec) => (
                    <RecordItem
                        record={rec}
                        remove={this.props.remove}
                        edit={this.props.edit}
                    />
                ))}
            </div>
        )
    }
}

export default Records
