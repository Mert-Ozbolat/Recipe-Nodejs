
import React from 'react'

const Error = ({ info, refetch }) => {
    return (
        <>
            <div className='my-36 bg-red-400 rounded-lg p-5 text-white text-lg text-center'>
                <h1>Üzgünüz bir hata oldu</h1>
                <h1>{info}</h1>
                <button className='mt-10 bg-blue-300 rounded-lg p-2 text-center hover:bg-blue-400' onClick={refetch}>
                    Tekrar Dene
                </button>
            </div>
        </>
    )
}

export default Error