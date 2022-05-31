import React, { Component } from 'react'


import HOCEx from "./HOCEx"
import StockListHOC from "./StockListHOC";
import UserListHoc from "./UserListHoc";
import EmployeeListHoc from './EmployeeListHoc';



const StocksData = [
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
];
const UsersData = [
    {
        id: 1,
        name: 'Krunal'

    },
    {
        id: 2,
        name: 'Ankit'
    },
    {
        id: 3,
        name: 'Rushabh'
    }
];

const EmployeeData = [
    {
        id: 1,
        name: 'vijay'

    },
    {
        id: 2,
        name: 'john'
    },
    {
        id: 3,
        name: 'khan'
    }
];
const Stock = HOCEx(
    StockListHOC,
    StocksData
)

const Users = HOCEx(
    UserListHoc,
    UsersData
)

const Employee = HOCEx(
    EmployeeListHoc,
    EmployeeData
)

export default class HOCApp extends Component {
    render() {
        return (
            <div>
                <Employee />
            </div>
        )
    }
}