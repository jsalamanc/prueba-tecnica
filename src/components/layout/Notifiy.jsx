'use client';

import { X } from 'lucide-react';
import React, { useState } from 'react';

export const Notifiy = () => {
    const [open, setOpen] = useState(true);
    const handleNotify = () => setOpen(!open);
    return (
        <>
            {open && (
                <div className="fixed border-t border-gray-500 flex justify-between bottom-0 left-0 w-full px-4 py-10 bg-white ">
                    <div className="relative w-full">
                        <div className="flex justify-center items-center flex-wrap gap-2">
                            <p className="text-center md:text-left">
                                Regístrate en Oil Profit y recibe 20% en bonificación sobre tu
                                primera inversión.
                            </p>
                            <button className="rounded-lg bg-red-500 p-2 text-white">
                                Regístrate Ahora
                            </button>
                        </div>
                        <button className="absolute top-0 right-2" onClick={handleNotify}>
                            <X />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};
