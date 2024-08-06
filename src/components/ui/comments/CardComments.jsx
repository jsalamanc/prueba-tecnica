import { ThumbsUp } from 'lucide-react'
import React from 'react'

export const CardComments = ({ image, name, description, hour, likes }) => {
    return (
        <div className='flex gap-3 py-5'>
            <div>
                <div className='rounded-full w-10 h-10 bg-cover bg-center bg-no-repeat' style={{
                    backgroundImage: `url(${image || ''})`
                }} />
            </div>
            <div>
                <p className='font-bold text-sky-700'>{name}</p>
                <p>{description}</p>
                <p className='font-bold'>{hour}</p>
                <button className='flex items-center gap-2 text-sky-700'>
                    <p className='cursor-pointer'>Me gusta</p>
                    <p className='cursor-pointer'>Respuesta</p>
                    <div className='flex items-center gap-1 cursor-pointer'><ThumbsUp size={16} /> {likes}</div>
                </button>
            </div>
        </div>
    )
}
