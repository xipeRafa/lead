import React from 'react';

const Item = ({item}) => {

    const { id,  name, details, pictureUrl, category, price, stock, description,
            cseri,
            quiroga,
            perisur,
            progreso,
            navojoa  } = item;

    return ( 
        <div className="w-full px-3 mb-4">
            <div className="p-5 shadow-md bg-white">
                <div className="lg:flex">
                    <div className="lg:w-5/12 xl:w-3/12">
                        <img src={pictureUrl[0]} alt="" />
                    </div>
                    <div className="lg:w-5/12 xl:w-7/12 pl-5 pr-5">
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

                        <p className="text-gray-600 mb-4">Stock Global: {''}
                            <span className={stock <= 10 ? 'bg-red-600 px-20 py-2 font-bold text-white' : 'text-gray-700 font-bold'}>
                                {stock}
                            </span> 
                        </p>
                    </div>
                    <div className="border xl:w-2/12 pl-4 pt-4">
                        <h3 className='mb-5'>Stock Local</h3>
                        <p className="text-gray-600 mb-4">
                            Cam Seri: <span className={cseri <= 10 ? 'bg-red-600 px-2 py-2 font-bold text-white' : 'text-gray-700 font-bold'}>
                                {cseri}
                            </span>
                        </p>
                        <p className="text-gray-600 mb-4">
                            Quiroga: <span className={quiroga <= 10 ? 'bg-red-600 px-2 py-2 font-bold text-white' : 'text-gray-700 font-bold'}>
                                {quiroga}
                            </span>
                        </p>
                        <p className="text-gray-600 mb-4">
                            Perisur: <span className={perisur <= 10 ? 'bg-red-600 px-2 py-2 font-bold text-white' : 'text-gray-700 font-bold'}>
                                {perisur}
                            </span>
                        </p>
                        <p className="text-gray-600 mb-4">
                            Progreso: <span className={progreso <= 10 ? 'bg-red-600 px-2 py-2 font-bold text-white' : 'text-gray-700 font-bold'}>
                                {progreso}
                            </span>
                        </p>
                        <p className="text-gray-600 mb-4">
                            Navojoa: <span className={navojoa <= 10 ? 'bg-red-600 px-2 py-2 font-bold text-white' : 'text-gray-700 font-bold'}>
                                {navojoa}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Item;