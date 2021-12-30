import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../../firebase';

import Item from '../ui/Item';

const Stock = () => {

    const [ items, setItems ] = useState([]);

    const { firebase } = useContext(FirebaseContext);

    const [editStock, setEditStock]=useState()

    const [editStockId, setEditStockId]=useState()

    const [selectState, setSelectState] = useState('');

    const handleSelect = (e) => {
      setSelectState(e.target.value);
    }

    const handlerSubmit = (e)=>{
        e.preventDefault()
        
        if(editStock === '' || editStockId === '' || selectState === ''){
                alert('Campo Vacio')
                return
        }
        
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
        <h1 className="text-3xl font-light mb-4 ml-3">Stock Global</h1>

<form onSubmit={handlerSubmit} className='mb-5 ml-1 d-flex'>
    <input  className='m-1 p-2 w-full md:w-1/4'
             placeholder='ID Producto'
            type="text" onChange={e=>setEditStockId(e.target.value)}/>  

    <select className="m-1 w-full md:w-1/4" onChange={handleSelect} value={selectState} style={{padding:'9.6px'}}>
                    <option value="" disabled selected>Elija una Sucursal</option>
                    <option value="stock">Stock Global</option>
                    <option value="cseri">Camino del Seri</option>
                    <option value="quiroga">Quiroga</option>
                    <option value="perisur">Perisur</option>
                    <option value="progreso">Progreso</option>
                    <option value="navojoa">Navojoa</option>
    </select> 

    <input  className='m-1 p-2 text-center w-full md:w-1/5' 
             placeholder='Nueva Cantidad'
            type="number" onChange={e=>setEditStock(e.target.value)}/>  
     
    <input  className='p-2 m-1 bg-blue-700 text-white hover:bg-blue-400 rounded w-full md:w-1/4' 
            type="submit" value='Actualizar Stock'/>
</form>

            {items.map( item => (
                <Item
                    key={item.id}
                    item={item}
                />
            ))}

        </>
     );
}
 
export default Stock;