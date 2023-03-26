import React from 'react';
import { removeName } from './Items';

const Remove = ({name, id, info2, setInfo2}) => {
    return (
        <div className='bg-sky-200 m-5'>
            <h1>Name: {name}</h1>
            <button onClick={() => removeName(id, info2, setInfo2) } className='btn btn-warning m-2'>Remove</button>
        </div>
    );
};

export default Remove;