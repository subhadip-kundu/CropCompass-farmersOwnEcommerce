import React from 'react';

function Copyright() {
    return (
        <div className="m-4 text-center absolute left-[50%] " style={{ transform: 'translate(-50%,-50%)' }}>
            <p className="text-violet-900 font-semibold">&copy; 2023 <span className='text-orange-600'>CropCompass</span> . All rights reserved.</p>
        </div>
    );
}

export default Copyright;
