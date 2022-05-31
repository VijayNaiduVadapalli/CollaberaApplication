import React, { Component } from 'react'
import TableRow from './TableRow';

export default class UserListHoc extends Component {
    constructor(props) {
        super(props);
    }

    tabRow() {
        if (this.props.data instanceof Array) {
            return this.props.data.map(function (object, i) {
                return <TableRow obj={object} key={i} />
            })
        }
    }
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr><td>Stock Number</td></tr>
                        <tr><td>Stock name</td></tr>
                    </thead>
                    <tbody>{this.tabRow()}</tbody>
                </table>
            </div>
        )
    }
}

