import React from 'react'
import _ from 'lodash'

export default function SortLodash() {

    const users = [
        { id: 5, name: 'fred', age: 48 },
        { id: 3, name: 'abert', age: 24 },
        { id: 7, name: 'manila', age: 16 },
        { id: 4, name: 'manila', age: 20 }
    ]

    const resultSort = _.sortBy(users, [item => item.name]);

    console.log(resultSort);

    const result = _.sortBy(users, ['name', 'id']);

    console.log(result);

    return (
        <div>SortLodash</div>
    )
}
