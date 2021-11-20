import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    
    return ( 
        <div className="md:w-2/6 xl:w-1/5 bg-gray-800">
            <div className="p-6">
                <p className="uppercase text-white text-2xl tracking-wide font-bold">nexGym ADMIN</p>

                <p className="mt-3 text-gray-600">Administra tu ecommerce en las siguientes opciones:</p>

                <nav className="mt-10">
                    <NavLink className="p-1 text-gray-400 block text-yellow-500 hover:bg-orange-500 hover:text-gray-900 "  exact="true" to="/stock">Stock</NavLink>

                    <NavLink className="p-1 text-gray-400 block text-yellow-500 hover:bg-orange-500 hover:text-gray-900"  exact="true" to="/">Ordenes</NavLink>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;