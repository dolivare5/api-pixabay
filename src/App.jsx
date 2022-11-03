import './App.css';
import {useEffect, useState} from "react";

function App() {
    /* Realizar una pagina web que muestre por pagina 30 imagenes de pixabay*/

    const registrosPorPagina = 30;
    const [paginaActual, setPaginaActual] = useState(1);
    const [imagenes, setImagenes] = useState([]);
    const [totalPaginas, setTotalPaginas] = useState(1);
    const [busqueda, setBusqueda] = useState('');

    const consultarAPI = async () => {
        const key = '27831392-ee0593f708bc31745e094e459';
        const url = `https://pixabay.com/api/?key=${key}&q=$perro&per_page=${registrosPorPagina}&page=${paginaActual}`;

        const respuesta = await fetch(url);
        const resultado = await respuesta.json();

        console.log(resultado);
        setImagenes(resultado.hits);

    }

    useEffect(() => {
        consultarAPI();
    }, []);

    return (
        <div>
            <h1>React App</h1>
        </div>
    );
}

export default App;
