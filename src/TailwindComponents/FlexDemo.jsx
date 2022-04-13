import React from 'react'

export default function FlexDemo() {
    return (
        <div className='w-screen h-screen bg-purple-400'>
            <h3>Flex theo row</h3>
            <div className="flex flex-row justify-start items-center flex-wrap h-1/2 w-full gap-4 bg-green-400">
                <div className="fItem w-1/4 h-10 bg-red-400">item 1</div>
                <div className="fItem w-1/4 h-10 bg-blue-400">item 2</div>
                <div className="fItem w-1/4 h-10 bg-yellow-400">item 3</div>
            </div>
            <br />
            <h3>Flex theo column</h3>
            <div className="flex flex-col justify-center items-center h-1/2 w-full bg-gray-400">
                <div className="fItem w-20 h-10 bg-red-400">item 4</div>
                <div className="fItem w-20 h-10 bg-blue-400">item 5</div>
                <div className="fItem w-20 h-10 bg-yellow-400">item 6</div>
            </div>
        </div>
    )
}
