import _ from 'lodash';
import React from 'react'

export default function CompareObjectArray() {


    const arrA = [1, 2];
    const arrB = [2, 1];
    //so sánh thường
    const result = [1, 2] === [1, 2]; //ra false vì so sánh vùng nhớ
    //so sánh bằng lodash
    const resultCompareLodash = _.isEqual(arrA.sort(), arrB.sort());

    console.log('result', resultCompareLodash);


    const arrObject1 = [{ id: 1, name: 'Khai' }, { id: 2, name: 'Minh' }];
    const arrObject2 = [{ id: 1, name: 'Khai' }, { id: 2, name: 'Hằng' }, { id: 3, name: 'Minh' }];

    //differentWith trả về array chứa object khác nhau giữa 2 mảng 
    const result1 = _.differenceWith(arrObject2, arrObject1, _.isEqual);

    console.log('result 1', result1);


    return (
        <div>CompareObjectArray</div>
    )
}
