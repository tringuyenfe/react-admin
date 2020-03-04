import React from 'react';
import { DateField, TextField } from 'react-admin'; 

const datakeyOrder = [
    {
        key: 'date',
    },
    {
        key: 'Reference',
    },
    {
        key: 'Customer',
    },
    {
        key: 'NbItems',
    },
    {
        key: 'Total',
    },
];


const key = [];

class Table extends React.Component {
    foreachData = (datas) => {
        var result = datas.map((data, index) => {
            switch (data.key) {
                case 'date':
                    key.push(<DateField key={index} source="date" showTime />)
                    break;
                case 'Reference':
                    key.push(<TextField key={index} source="reference" />)
                default:
                    break;
            }
        });
        
        return key;
    }

    render () {
        return ( 
            <DateField source="date" showTime />
        )
    }
}

export default Table;