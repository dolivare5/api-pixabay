export const Formulario = ({busqueda, setBusqueda, setBuscarImagen, buscar }) => {
    let buscarImagen;
    const validarFormulario = (e) => {
        e.preventDefault();
        buscarImagen = busqueda.trim() === '' ? buscarImagen = false : buscarImagen = true;
        console.log('buscarImagen', buscarImagen);
        setBuscarImagen(buscarImagen);
        buscar(e);

    }
    return (
        <div className='buscador max-w-lg mx-auto'>
            <form onSubmit={validarFormulario}>
                <div className='mb-4'>
                    <label className='block text-white text-sm font-bold mb-2' htmlFor='busqueda'>Busqueda</label>
                    <input
                        type='text'
                        className='p-3 bg-gray-100 rounded form-input w-full'
                        id='busqueda'
                        placeholder='Busca una imagen, ejemplo: futbol o café'
                        onChange={e => setBusqueda(e.target.value)}
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='submit'
                        className='bg-blue-500 hover:bg-blue-700 w-full p-3 text-white uppercase font-bold'
                        value='Buscar'
                    />
                </div>
            </form>
        </div>

    );
}

