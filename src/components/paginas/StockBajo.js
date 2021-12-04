import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../../firebase';

import Item from '../ui/Item';

const StockBajo = () => {

    const { firebase } = useContext(FirebaseContext);

    const [ items, setItems ] = useState([]);


    const [editStock, setEditStock]=useState()
    console.log(editStock)

    const [editStockId, setEditStockId]=useState()
    console.log(editStock)

    const handlerSubmit = (e)=>{
        e.preventDefault()
        UStock(editStockId)
    }
    const UStock = (Id) => {

        const db = firebase.db.collection('items');
    
        return db.doc(Id).update({
            stock:editStock
        });
      };

  

    useEffect(() => {
        const getItems =  () => {
           firebase.db.collection('items').onSnapshot(manejarSnapshot);
        }
        getItems();
        //eslint-disable-next-line
    }, []);

    function manejarSnapshot(snapshot) {
        const items = snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        });
        setItems(items);
    }


    return ( 
        <>
        <h1 className="text-3xl font-light mb-4 ml-3">Productos con Stock Bajo -10</h1>
        <div className='text-2xl text-yellow-600 ml-3'>{editStockId}</div>
        <form onSubmit={handlerSubmit} className='mb-5 border ml-3 d-flex'>
            <input className='m-2 p-1 w-1/4' type="text" onChange={e=>setEditStockId(e.target.value)}/>  
            <input className='m-2 p-1 text-center' type="number" onChange={e=>setEditStock(e.target.value)}/>                
            <input  className='p-2 bg-gray-600 text-white hover:bg-blue-400 rounded' 
                    type="submit" value='Actualizar Stock' />
        </form>


            {items.filter(el => el.stock < 11)
                  .map( item => (
                <Item
                    key={item.id}
                    item={item}
                />
            ))}

        </>
     );
}
 
export default StockBajo;