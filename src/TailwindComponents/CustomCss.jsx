import React from 'react'
import './CustomCss.css';

export default function CustomCss() {
    return (
        <div className='container mt-5'>
            <article className='bg-gray-500 p-5 shadow-lg'>
                <h4 className='text-4xl text-white'>Responsive</h4>
                {/* thay vì phải viết rất nhiều class name ở đây ta dùng @apply [tên class] bên Custom.css */}
                <p className='text-sm text-white pl-5 pt-5'>Lorem, ipsum dolor. (Not applied tailwind @apply) </p>

                <p className='content'>Lorem, ipsum dolor. (Applied tailwind @apply)</p>

                <button className='text-white p-3 rounded-xl ml-5 mt-5 animation-scale'>Save changes</button>
            </article>
        </div>
    )
}
