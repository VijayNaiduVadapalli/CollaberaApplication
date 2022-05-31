import React, { Component } from 'react'
import TableRow from './Tablerow';
export default class StockList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stock: [
                {
                    id: 1,
                    name: 'TCS'
                },
                {
                    id: 2,
                    name: 'Infosys'
                },
                {
                    id: 3,
                    name: 'Reliance'
                }
            ]
        }
    }

    tabRow() {
        if (this.state.stock instanceof Array) {
            return this.state.stock.map(function (object, i) {
                return <TableRow obj={object} key={i} />
            })
        }
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>Stock Number</tr>
                        <tr>Stock name</tr>
                    </thead>
                    <tbody>{this.tabRow()}</tbody>
                </table>
            </div>
        )
    }
}