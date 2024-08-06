import React from 'react';
import { Header } from './Header';
import { X } from 'lucide-react';
import { Notifiy } from './Notifiy';

export const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div>{children}</div>
            { /* notification to register in Oil Profit */}
            <Notifiy />
        </>
    );
};
