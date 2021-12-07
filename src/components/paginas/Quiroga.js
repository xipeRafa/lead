import React, { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../../firebase';
import Orden from '../ui/Orden';

const Quiroga = () => {

    const { firebase } = useContext(FirebaseContext);

    const [arrOrders, setArrOrders] = useState([]);
    const [arrItems, setArrItems] = useState([]);

    useEffect(() => {
        const obtenerOrdenes = () => {
            firebase.db.collection('orders').onSnapshot(manejarSnapshot);
        }
        obtenerOrdenes();

        const obtenerItems = () => {
            firebase.db.collection('items').onSnapshot(manejarSnapshotItems);
        }
        obtenerItems()
        //eslint-disable-next-line
    }, []);

    function manejarSnapshot(snapshot) {
        const orders = snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        });

        setArrOrders(orders);
    } 

    function manejarSnapshotItems(snapshot) {
        const items = snapshot.docs.map(doc => {
            return { id: doc.id, ...doc.data() }
        });

        setArrItems(items);
    } 

    return ( 
        <div className="w-full">
            <h1 className="text-3xl font-light mb-4 ml-3 border">Ordenes Para Recoger en Tienda Quiroga</h1>
            

            <div className="sm:w-full sm:flex-wrap">
                {arrOrders
                    .filter(el => el.noDeliver === true)
                    .filter(el => el.sucursal === 'quiroga')
                    .map(orden => (
                    <Orden
                        key={orden.id}
                        orden={orden}
                        arrItems={arrItems}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default Quiroga;