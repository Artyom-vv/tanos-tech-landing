import React, { ReactNode } from 'react';

interface TooltipProps {
    text: string;
    position?: 'top' | 'bottom';
    children: ReactNode;
}

export const Tooltip = ({ text, position = 'top', children }: TooltipProps) => {
    return (
        <div className="relative flex group">
            {children}
            <div
                className={`absolute ${
                    position === 'top' ? 'bottom-full mb-2' : 'top-full mt-2'
                } left-1/2 transform -translate-x-1/2 w-max px-2 py-1 text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity`}>
                {text}
                <div
                    className={`w-0 h-0 border-l-5 border-r-5 ${
                        position === 'top' ? 'border-b-5 border-b-black' : 'border-t-5 border-t-black'
                    } absolute left-1/2 transform -translate-x-1/2 ${position === 'top' ? 'top-full' : 'bottom-full'}`}></div>
            </div>
        </div>
    );
};