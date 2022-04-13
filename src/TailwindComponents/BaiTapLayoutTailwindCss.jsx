import React from 'react'
import Card from './Card'

export default function BaiTapLayoutTailwindCss() {
    return (
        <div className='container'>
            <h3 className='text-center text-2xl text-green-400'>Welcome to the cybersoft frontend with tailwindcss</h3>
            <div className="grid grid-cols-3 gap-2 text-center mt-3">
                <div>
                    <Card bottomLeftContent='1 BTC' />
                </div>
                <div><Card bottomLeftContent='Free' /></div>
                <div><Card bottomLeftContent='5$' /></div>
            </div>
        </div>
    )
}
