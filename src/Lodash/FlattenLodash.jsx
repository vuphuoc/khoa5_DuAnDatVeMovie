import _ from 'lodash';
import React from 'react'

export default function FlattenLodash() {

    //flatten: giải nén mảng trong mảng thành một mảng lớn (chỉ giải nén 1 cấp)
    //flattenDeep: giải nén mảng trong mảng thành một mảng lớn (giải nén tối đa)

    const arr = [[1, [2, [3, [4]]], 5]];

    const resultFlatten = _.flatten(arr);

    const resultFlattenDeep = _.flattenDeep(arr);

    console.log('flatten', resultFlatten);
    console.log('flattenDeep', resultFlattenDeep);

    return (
        <div>FlattenLodash</div>
    )
}
