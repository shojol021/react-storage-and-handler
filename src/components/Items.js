import React, { useEffect, useState } from 'react';
import { addData, difference } from '../utilities/calculate';
import Item from './Item';
import Remove from './remove';

const removeName = (idz, info2, setInfo2) => {
    setInfo2(info2.filter(p => p.id !== idz))
}


const Items = () => {
    const a = 10;
    const b = 12;

    const [info, setInfo] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInfo(data))

    }, [])


    const [info2, setInfo2] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setInfo2(data))

    }, [])
    const removeAll = () => {
        setInfo2([])
    }

    // const removeName = (id) => {
    //     setInfo2([info2.filter(p => p.id !== id)])
    // }

    return (
        <div className='border rounded bg-lime-100'>
            <h1>This is from Items compo</h1>
            <h2>Total: {addData(a, b)}</h2>
            <h2>DIfference: {difference(a, b)}</h2>
            <div className='grid grid-cols-4'>
                {
                    info.map(person => <Item {...person} key={person.id} ></Item>)
                }
            </div>
            <div className='bg-orange-200 text-2xl'>
                {
                   info2 && info2.map(p => <Remove {...p} key={p.id} info2 = {info2} setInfo2 = {setInfo2}></Remove>)
                }
            </div>
            <button onClick={removeAll} className='btn btn-error m-2'>Remove All { }</button>
        </div>
    );
};

export {removeName}
export default Items;