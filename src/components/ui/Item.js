import React from 'react';

const Item = ({item}) => {

    const { id,  name, details, pictureUrl, category, price, stock, description } = item;

    return ( 
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">
                        <img src={pictureUrl[0]} alt="" />
                    </div>
                    <div className="lg:w-7/12 xl:w-9/12 pl-5">
                        <p className="text-2xl mb-4">{name} </p>
                        
                        <p className="text-2xl text-yellow-600 mb-4">{id} </p>

                        <p className="text-gray-600 mb-4">Detalles: {''}
                            <span className="text-gray-700 font-bold">{details}</span> 
                        </p>

                        <p className="text-gray-600 mb-4">Categoría: {''}
                            <span className="text-gray-700 font-bold">{category}</span> 
                        </p>

                        <p className="text-gray-600 mb-4">Descripcion: {''}
                            <span className="text-gray-700 font-bold">{description}</span> 
                        </p>

                        <p className="text-gray-600 mb-4">Precio: {''}
                            <span className="text-gray-700 font-bold">$ {price}</span> 
                        </p>

                        <p className="text-gray-600 mb-4">Stock: {''}
                            <span className="text-gray-700 font-bold">{stock}</span> 
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Item;