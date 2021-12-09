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

    const [selectState, setSelectState] = useState('');
    console.log(selectState)

    const handleSelect = (e) => {
      setSelectState(e.target.value);
    }

    const handlerSubmit = (e)=>{
        e.preventDefault()
        UStock(editStockId, selectState)
    }

    const UStock = (Id, selectState) => {

        const db = firebase.db.collection('items');
    
        return db.doc(Id).update({
            [selectState]:Number(editStock)
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
            <input  className='m-2 p-2 w-1/4' type="text" 
                    placeholder='ID Producto'
                    onChange={e=>setEditStockId(e.target.value)}/>  

            <select className="m-1 w-1/4" onChange={handleSelect} value={selectState} style={{padding:'9.6px'}}>
                            <option value="" disabled selected>Elija una Sucursal</option>
                            <option value="stock">Stock Global</option>
                            <option value="cseri">Camino del Seri</option>
                            <option value="quiroga">Quiroga</option>
                            <option value="perisur">Perisur</option>
                            <option value="progreso">Progreso</option>
                            <option value="navojoa">Navojoa</option>
            </select> 

            <input  className='m-2 p-2 text-center' type="number" 
                    placeholder='Nueva Cantidad'
                    onChange={e=>setEditStock(e.target.value)}/>  
             
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