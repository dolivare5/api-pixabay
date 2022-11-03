import {useState} from "react";
import {Formulario} from "./Formulario";
import {Imagen} from "./Imagen";
import {MostrarAlerta} from "./MostrarAlerta";

export const Pixabay = () => {
    const registrosPorPagina = 30;
    const [paginaActual, setPaginaActual] = useState(1);
    const [imagenes, setImagenes] = useState([]);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [busqueda, setBusqueda] = useState('');
    const [buscarImagen, setBuscarImagen] = useState(true);

    const calcularTotalPaginas = (total) => {
        return Math.ceil(total / registrosPorPagina);
    }

    const consultarAPI = async (pagina) => {
        if (buscarImagen){
            const key = '27831392-ee0593f708bc31745e094e459';
            const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${registrosPorPagina}&page=${paginaActual}`;

            const respuesta = await fetch(url);
            const resultado = await respuesta.json();

            setTotalPaginas(calcularTotalPaginas(resultado.totalHits));
            setPaginaActual(pagina);
            setImagenes(resultado.hits);
        }

    }


    const buscar = async (e) => {
        e.preventDefault();
        await consultarAPI();
    }

    const crearPaginacion = () => {
        const paginas = [];
        for(let i = 1; i <= totalPaginas; i++) {
            paginas.push(i);
        }
        return paginas;
    }

    const imprimirPaginacion = () => {
        const paginas = crearPaginacion();
        // Para colucarle un dataset a un elemento de react se usa el atributo data- y el nombre del atributo
        return paginas.map((pagina) => (
            <a
                className={`siguiente bg-yellow-400 px-4 py-1 mr-2 font-bold mb-10 rounded ${paginaActual === pagina ? 'bg-red-400' : ''}`}
                data-pagina={pagina.toString()}
                onClick= { () => {
                    consultarAPI(pagina);
                }}
                href={`pagina#${pagina}`}
            >{pagina}</a>
        ))
    }

    return (
        <>
            <h1 className='text-center text-3xl text-white my-10 font-bold uppercase'>Buscador de Imágenes Pixabay</h1>
            <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setBuscarImagen={setBuscarImagen}
                buscar={buscar}
            />
            {
                buscarImagen && (
                    <>
                        <div className='"container mx-auto mt-10 flex flex-wrap'>
                            {
                                imagenes.map(imagen => (

                                    <Imagen
                                        imagen={imagen}
                                        key={imagen.id}
                                        busqueda={busqueda}
                                    />
                                ))
                            }
                        </div>
                        {
                            imagenes.length >0 && (
                                <div className='paginacion container mx-auto mb-10 text-center'>
                                    {
                                        imprimirPaginacion()
                                    }
                                </div>
                            )
                        }
                    </>

                )
            }
        </>
    );

}