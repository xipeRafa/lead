import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    
    return ( 
        <div className="md:w-2/6 xl:w-1/5 bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide font-bold">nexGym ADMIN</p>

                <p className="mt-3 text-gray-600">Administra tu ecommerce en las siguientes opciones:</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a"  exact="true" to="/stock">Stock Global</NavLink>

                    <NavLink className="p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a"  exact="true" to="/">Ordenes Para Repartir</NavLink>

                    <NavLink className="p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a"  exact="true" to="/stock-bajo">Productos Stock Bajo</NavLink>

                <br/>

                    <NavLink className="p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a"  exact="true" to="/ordenes-tienda">Ordenes Tienda C Seri</NavLink>

                    <NavLink className="p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a"  exact="true" to="/ordenes-quiroga">Ordenes Tienda Quiroga</NavLink>

                    <NavLink className="p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a"  exact="true" to="/ordenes-perisur">Ordenes Tienda Perisur</NavLink>

                    <NavLink className="p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a"  exact="true" to="/ordenes-progreso">Ordenes Tienda Progreso</NavLink>

                    <NavLink className="p-1 text-gray-400 block text-yellow-500 hover:bg-orange-300 hover:text-gray-900 a"  exact="true" to="/ordenes-navojoa">Ordenes Tienda Navojoa</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;