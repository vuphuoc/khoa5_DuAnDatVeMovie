import React from 'react'

export default function ResponsiveDemo() {
    return (
        <div className='container mt-5'>
            {/* tại màn hình nhỏ thì bg đỏ
                    màn hình medium thì bg xanh
                    màn hình lớn thì bg đỏ 300
            */}
            <button className='sm:bg-blue-400 md:bg-green-400 lg:bg-red-300 p-3'>Hi Cyberlearn</button>
        </div>
    )
}
