import React from 'react'
import _ from 'lodash';

export default function Include() {

    const arr = ['1', '2', '3'];

    console.log(_.includes(arr, '1'));

    const object = {
        id: 1,
        name: 'Nguyễn Văn A',
        age: 18
    }

    console.log('Kết quả', _.includes(object, 'Nguyễn văn A'));

    return (
        <div>Include</div>
    )
}
