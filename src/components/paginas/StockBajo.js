import React, { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../../firebase';

import Item from '../ui/Item';

const StockBajo = () => {

    const [ items, setItems ] = useState([]);

    const { firebase } = useContext(FirebaseContext);

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