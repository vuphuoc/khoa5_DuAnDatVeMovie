import React from 'react'
import _ from 'lodash'

export default function FillLodash() {

  var arr = [
    { id: '1', name: 'iphone' },
    { id: '2', name: 'iphone X' },
    { id: '3', name: 'iphone XS' },
    { id: '4', name: 'iphone Pro' },
    { id: '5', name: 'iphone Pro max' },

  ]

  _.fill(arr, { id: '5', name: 'Samsung galaxy Note 10' }, 1, 4);

  console.log(arr);

  return (
    <div>Fill</div>
  )
}
