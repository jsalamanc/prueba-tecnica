'use client';
import React, { useEffect, useState } from 'react'


// Pure function to shuffle an array
const shuffleArray = (array) => {
    return array
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
};

/**
 * JSX Component
 */
export const DataTable = ({ data }) => {
    const [shuffledUsers, setShuffledUsers] = useState([]);

    useEffect(() => {
        if (data) {
            setShuffledUsers(data);
        }
    }, [data]);

    useEffect(() => {
        const interval = setInterval(() => {
            setShuffledUsers((prevUsers) => shuffleArray(prevUsers));
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    // Formatear como moneda costarricense
    const formatoColones = (number) => new Intl.NumberFormat('es-CR', {
        style: 'currency',
        currency: 'CRC',
        minimumFractionDigits: 0, // Para no mostrar decimales
    }).format(number);


    /**
     * return HTML
     */
    return (
        <div className='py-4 container flex flex-col gap-2'>
            <div className='border border-gray-400 rounded-lg p-3 w-full grid grid-cols-3 bg-gray-200'>
                <div className='flex items-center gap-2'>
                    <span className='p-2 rounded-full bg-green-400' />
                    <p className='font-medium'>Nombre</p>
                </div>
                <div className='flex items-center'>
                    <p className='font-medium'>Ganancia</p>
                </div>
                <div className='flex items-center'>
                    <p className='font-medium'>Ciudad</p>
                </div>
            </div>
            {shuffledUsers?.map((user, index) => (
                <div key={index} className='border border-gray-400 rounded-lg p-3 w-full grid grid-cols-3 bg-white'>
                    <div className='flex items-center gap-2'>
                        <span className='p-2 rounded-full bg-green-400' />
                        <p className='font-medium'>{user.name}</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='font-medium'>{formatoColones(user.earning)}</p>
                    </div>
                    <div className='flex items-center'>
                        <p className='font-medium'>{user.city}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
