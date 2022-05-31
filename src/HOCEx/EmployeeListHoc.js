import React, { Component } from 'react'
import TableRow from './TableRow';

export default class employeeListHoc extends Component {
    constructor(props) {
        super(props);
        console.log(props)
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
                        <tr><td>Employee ID</td></tr>
                        <tr><td>Employee name</td></tr>
                    </thead>
                    <tbody>{this.tabRow()}</tbody>
                </table>
            </div>
        )
    }
}