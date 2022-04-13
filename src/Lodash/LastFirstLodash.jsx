import React from 'react'
import _ from 'lodash'

export default function LastFirstLodash() {

    const arrStudent = [
        { id: 1, name: 'Peter' },
        { id: 2, name: 'Barry' },
        { id: 3, name: 'Iris' },
    ]

    const firstItem = _.first(arrStudent);
    const lastItem = _.last(arrStudent);

    //tuple
    const arr = [['001', 'Leona'], ['002', 'Maragetha'], ['003', 'Anna']];


    const [id, name] = _.first(arr);
    const [id2, name2] = _.last(arr);

    return (
        <div>
            <div>First item: {firstItem.name}</div>
            <div>Last item: {lastItem.name}</div>
            <hr />
            <div>First item: {id} - {name}</div>
            <div>Last item: {id2} - {name2}</div>
        </div>
    )
}
