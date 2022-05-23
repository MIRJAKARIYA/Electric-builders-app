import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { toolId } = useParams();
    
    return (
        <div>
            <h1>{toolId}</h1>
        </div>
    );
};

export default Purchase;