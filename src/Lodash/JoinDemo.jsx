import React from 'react'
import _ from 'lodash'

export default function JoinDemo() {

    let arr = ['khải', 'minh', 'oanh', 'thuận'];

    let arrPerson = [
        {
            id: '1',
            name: 'khải'
        },
        {
            id: '2',
            name: 'minh'
        },
        {
            id: '3',
            name: 'trang'
        }
    ]

    //es6 
    const result = arr.join('-');

    //lodash
    const resultLodash = _.join(arr, '*');



    //search with lodash
    const findWithLodash = _.find(arrPerson, item => item.id === '2');

    return (
        <div>
            <h3> array join with es6:</h3>
            {result}
            <br />
            <br />
            <h3>array join with lodash:</h3>
            {resultLodash}

            <br />
            <br />
            <h3>search person with lodash:</h3>
            Name: {findWithLodash.name} - id: {findWithLodash.id}
        </div>
    )
}
