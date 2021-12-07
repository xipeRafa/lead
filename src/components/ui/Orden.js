import React from 'react';

const Orden = ({ orden, arrItems }) => {
    const hora = orden.date.toDate().toLocaleTimeString() /* hora, min, sec */

    const fullDate = orden.date.toDate().toLocaleDateString("es-CL", {
        weekday: "long", // narrow, short
        year: "numeric", // 2-digit
        month: "short", // numeric, 2-digit, narrow, long
        day: "numeric" // 2-digit
   });

    /* const date = orden.date.toDate().toDateString() */ /* dia, mes, dia#, año */

    /* const time = orden.date.toDate().toTimeString() */ /* GMT-0700 (hora estándar del Pacífico de México) */

    let img

   /*  {
        arrItems.map((el) => el.id === orden.items[0].id ? img = el.pictureUrl[0] : el)
    }
 */

    return ( 
    <div className="w-full px-3 mb-4">
        <div className="p-5 shadow-md bg-white">
            <div className="lg:flex">
              
                <div className="lg:w-7/12 xl:w-9/12 pl-5">

                    <h1>Id-Orden: <span className="text-yellow-600 text-lg">{orden.id}</span>  </h1>

                    <p> <span className='text-gray-600'>comprador:</span> {orden.buyer.name} </p>
                    <p><span className='text-gray-600'>correo:</span>  {orden.buyer.email} </p>
                    <p><span className='text-gray-600'>telefono:</span> {orden.buyer.phone} </p>
                    <p><span className='text-gray-600'>fecha:</span>  {fullDate}, {hora}</p>
                    <p><span className='text-gray-600'>direccion:</span>  {orden.buyer.adress}</p>
                    <br/>

                    {orden.items.map((el, i) => (
                        <div key={i}>
                    <p>Id-producto: <span className="text-yellow-600 text-lg">{el.id}</span> </p>
                         <p><span className='text-gray-600'>producto:</span>  {el.item}</p>
                         <p><span className='text-gray-600'>precio:</span>  {el.price}</p>
                         <p><span className='text-gray-600'>cantidad:</span>  {el.qty}</p>
                       {
                            arrItems.map(item => (
                                 console.log(item.id === el.id ? img = item.pictureUrl[0] : null)
                            ))
                       }
                       <img className="w-2/12" src={img} alt="" />
                       
                         </div>
                    ))}
                    <p className="text-gray-800 font-bold">Total a Pagar: $ {orden.total}</p>
           
                </div>
                <div className="lg:w-5/12 xl:w-3/12 m-2 text-center text-white">
                    <p className={orden.entregado ? 'bg-blue-500 p-5' : 'bg-gray-500 p-5'} >
                      {orden.entregado ? 'Entregado por' : 'Sin Entregar'} {orden.deliver.slice(0, -10)}
                    </p>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default Orden;

