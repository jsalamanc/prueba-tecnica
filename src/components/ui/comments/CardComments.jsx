import { ThumbsUp } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export const CardComments = ({ image, name, description, hour, likes }) => {
    return (
        <div className='flex gap-3 py-5'>
            <div>
                <Link href='#registro'>
                    <div className='rounded-full w-10 h-10 bg-cover bg-center bg-no-repeat' style={{
                        backgroundImage: `url(${image || ''})`
                    }} />
                </Link>
            </div>
            <div>
                <p className='font-bold text-sky-700'>{name}</p>
                <p>{description}</p>
                <p className='font-bold'>{hour}</p>
                <button className='flex items-center gap-2 text-sky-700'>
                    <Link href='#registro'>
                        <p className='cursor-pointer'>Me gusta</p>
                    </Link>
                    <Link href='#registro'>
                        <p className='cursor-pointer'>Respuesta</p>
                    </Link>
                    <Link href='#registro'>
                        <button className='flex items-center gap-1 cursor-pointer'><ThumbsUp size={16} /> {likes}</button>
                    </Link>
                </button>
            </div>
        </div>
    )
}
