import React from 'react';

import Spinner from '../../images/spinner/loading_spinner.gif'

const Loading = () => {
    return (
        <div className=''>
            <img src={Spinner} className='block mx-auto' alt="" />
        </div>
    );
};

export default Loading;