import { AlignJustify } from 'lucide-react'
import React from 'react'

export const MenuMobile = ({ handleOpenMenu }) => {
    return (
        <aside className='fixed z-10 left-0 w-full top-0 bottom-0 bg-[red] md:hidden'>
            <button className="absolute md:hidden top-10 right-5 z-30" onClick={handleOpenMenu}>
                <AlignJustify color="#ffffff" />
            </button>
            <div className='pt-[6rem] flex flex-col'>
                <ul className='flex flex-col items-center [&>p]:p-4 [&>p]:text-white [&>p]:cursor-pointer'>
                    <li className='text-white mb-5'>Nacionales</li>
                    <li className='text-white mb-5'>Mundo</li>
                    <li className='text-white mb-5'>Tecnología</li>
                    <li className='text-white mb-5'>Economía</li>
                    <li className='text-white mb-5'>Entretenimiento</li>
                </ul>
                <div className="absolute bottom-7 w-full text-center text-white">
                    <p>De Lunes a Domingo</p>
                    <p>6:30am - 12md - 6pm</p>
                </div>
            </div>
        </aside>
    )
}