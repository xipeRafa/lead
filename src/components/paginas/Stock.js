import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FirebaseContext } from '../../firebase';

import Item from '../ui/Item';

const Stock = () => {

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
            <Link to="/nuevo" className="bg-blue-800 hover:bg-blue-600 inline-block mb-5 p-2 text-white uppercase font-bold ml-3">
                Agregar Producto +
            </Link>

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