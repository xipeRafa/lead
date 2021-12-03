import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { FirebaseContext } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import FileUploader from 'react-firebase-file-uploader';

const Nuevo = () => {

    const [subiendo, guardarSubiendo] = useState(false);
    const [progreso, guardarProgreso ] = useState(0);
    const [urlimagen, guardarUrlimagen] = useState([]);
    const [details, setDetails] = useState('');

    const { firebase } = useContext(FirebaseContext); 

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: '',
            price: '',
            category: '',
            pictureUrl: [],
            description: '',
            initial:1,
            stock:'',
            details: [],
        }, 
        validationSchema: Yup.object({
            name: Yup.string()
                        .min(3, 'Los Platillos deben tener al menos 3 caracteres')
                        .required('El Nombre del platillo es obligatorio'),
            stock: Yup.number()
                        .min(1, 'Debes agregar un stock')
                        .required('El stock es obligatorio'),
            price: Yup.number()
                        .min(1, 'Debes agregar un número')
                        .required('El Precio es obligatorio'),
            details: Yup.string()
                        .required('La details es obligatoria'),
            category: Yup.string()
                        .required('La Categoría es obligatoria'),
            description: Yup.string()
                        .min(10, 'La descripción debe ser más larga')
                        .required('La descripción es obligatoria'),
        }),
        onSubmit: name => {
            try {
                name.pictureUrl = urlimagen;
                name.details = details.split(',')

                firebase.db.collection('items').add(name);

                navigate('/stock'); // Redireccionar
            } catch (error) {
              /*   console.log(error); */
            }
        }
    });

    // Todo sobre las imagenes
    const handleUploadStart = () => {
        guardarProgreso(0);
        guardarSubiendo(true);
    }
    const handleUploadError = error => {
        guardarSubiendo(false);
       /*  console.log(error); */
    }
    const handleUploadSuccess = async name => {
        guardarProgreso(100);
        guardarSubiendo(false);

        const url = await firebase
                .storage
                .ref("items")
                .child(name)
                .getDownloadURL();

        guardarUrlimagen([url]);
    }
    const handlerDetail = v =>{
   /*      console.log(v) */
        setDetails([...details, v].join('')) 
    }

    const handleProgress = progreso => { guardarProgreso(progreso) }


    return ( 
        <>
            <div className="flex justify-center">
                <div className="w-full max-w-3xl">
                    <form onSubmit={formik.handleSubmit} >

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Nombre
                            </label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="name"
                                type="text"
                                placeholder="Nombre"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.name && formik.errors.name ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.name} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="details">Detalles</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="details"
                                name="details"
                                type="text"
                                placeholder="Detalle"
                                value={formik.values.details}
                                onChange={formik.handleChange}
                                onBlur={e=>handlerDetail(e.target.value)} 
                            />
                        </div>
                        { formik.touched.details && formik.errors.details ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>Anota algun Dato como Detalle</p>
                            </div>
                        ) : null }
 
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">Precio</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                type="number"
                                placeholder="$"
                                min="0"
                                value={formik.values.price}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.price && formik.errors.price ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.price} </p>
                            </div>
                        ) : null }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="stock">Stock</label>
                            <input 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="stock"
                                type="number"
                                placeholder="stock"
                                min="0"
                                value={formik.values.stock}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </div>
                        { formik.touched.stock && formik.errors.stock ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.stock} </p>
                            </div>
                        ) : null }
                        

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">Categoría</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="category"
                                name="category"
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="">-- Seleccione --</option>
                                <option value="suplementos">Suplementos</option>
                                <option value="articulos">Articulos</option>

                            </select>
                        </div>
                        { formik.touched.category && formik.errors.category ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.category} </p>
                            </div>
                        ) : null }


                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="pictureUrl">Imagen</label>
                            <FileUploader
                                accept="image/*"
                                id="pictureUrl"
                                name="pictureUrl"
                                randomizeFilename
                                storageRef={firebase.storage.ref("items")}
                                onUploadStart={handleUploadStart}
                                onUploadError={handleUploadError}
                                onUploadSuccess={handleUploadSuccess}
                                onProgress={handleProgress}
                            />
                        </div>

                        { subiendo && (
                            <div className="h-12 relative w-full border">
                                <div className="bg-green-500 absolute left-0 top-0 text-white px-2 text-sm h-12 flex items-center" style={{ width: `${progreso}%` }}>
                                    {progreso} % 
                                </div>
                            </div>
                        ) }

                        {urlimagen.length !== 0 && (
                            <p className="bg-green-500 text-white p-3 text-center my-5">
                                La Imagen se subió correctamente
                            </p>
                        ) }

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">Descripción</label>
                            <textarea 
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
                                id="description"
                                placeholder="Descripción"
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            ></textarea>
                        </div>

                        { formik.touched.description && formik.errors.description ? (
                            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-5" role="alert">
                                <p className="font-bold">Hubo un error:</p>
                                <p>{formik.errors.description} </p>
                            </div>
                        ) : null }

                        <input
                            type="submit"
                            className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                            value="Agregar"
                        />
                    </form>
                </div>
            </div>
        </>
     );
}
 
export default Nuevo;