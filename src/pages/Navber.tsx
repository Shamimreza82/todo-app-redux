import { ModeToggle } from '@/components/ui/mode-toggle';
import React from 'react';

const Navber = () => {
    return (
        <div className='flex justify-between container m-auto py-4 bg-slate-700 px-5'>
           <div>
                Navber
           </div>
           <div>
                <ModeToggle></ModeToggle>
           </div>
        </div>
    );
};

export default Navber;