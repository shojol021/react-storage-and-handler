import React, { useEffect, useState } from 'react';
import { addData, difference } from '../utilities/calculate';
import Item from './Item';

const Items = () => {
    const a = 10;
    const b = 12;

    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInfo(data))
    }, [])

    // console.log(info)

    return (
        <div className='border rounded bg-lime-100'>
            <h1>This is from Items compo</h1>
            <h2>Total: {addData(a, b)}</h2>
            <h2>DIfference: {difference(a, b)}</h2>
            <div className='grid grid-cols-4'>
                {
                    info.map(person => <Item {...person} key= {person.id} ></Item>)
                }
            </div>
        </div>
    );
};

export default Items;