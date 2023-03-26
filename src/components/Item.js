import React from 'react';
import { addToCart, removeCart } from '../utilities/calculate';

const item = ({ name, id, picture }) => {

    const addNow = (id) => {
        addToCart(id);
    }

    const remove = (id) => {
        removeCart(id);
    }

    return (
        <div className='m-9 border rounded bg-sky-100 rounded-lg'>
            <h1 className='font-bold'>This is from Item</h1>
            <h1><span className='font-bold'>Name: </span>{name}</h1>
            <h2 > <span className='font-bold'>ID:</span> {id}</h2>
            <img className='mx-auto p-2' src={picture} alt="" />
            <button onClick={() => addNow(id)} className='btn btn-primary btn-sm m-2'>Add Now</button>
            <button onClick={() => remove(id)} className='btn btn-error btn-sm m-2'>Remove</button>
        </div>
    );
};

export default item;