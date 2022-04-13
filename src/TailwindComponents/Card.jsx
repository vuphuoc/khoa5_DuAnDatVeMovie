import React from 'react'

export default function Card(props) {

    const { bottomLeftContent } = props;

    return (
        <div>
            <div className='card-top bg-gray-200 rounded-tl-lg rounded-tr-lg px-3 py-8 '>
                <h5 className='text-purple-800 font-bold'>Category</h5>
                <h3 className='font-bold text-black'>Cybersoft Frontend developer</h3>

                <p className='font-thin'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque nam possimus at perspiciatis quas aperiam quidem velit ipsam distinctio ullam?</p>
            </div>
            <div className="card-bottom flex justify-between items-center bg-gray-100 px-3 py-3 rounded-bl-lg rounded-br-lg">
                <span>{bottomLeftContent}</span>
                <button className='bg-purple-500 text-white py-2 px-3 rounded-lg hover:bg-gray-100 hover:text-purple-500 transition-all duration-500'>Register</button>
            </div>
        </div>
    )
}
