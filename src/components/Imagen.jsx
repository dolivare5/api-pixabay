export const Imagen = ({ imagen, busqueda, key }) => {
    return (
        <div className='w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4'>
            <div className='bg-white'>
                <img className="w-full max-h-72" src={imagen.previewURL} alt={`Imagen relacionada con ${busqueda}`} />
                <div className='p-4'>
                    <p className='font-bold'> {imagen.likes} <span className='font-light'> Me Gusta</span></p>
                    <p className='font-bold'> {imagen.views} <span className='font-light'> Veces Vista</span></p>
                    <a
                        className='block w-full bg-blue-500 hover:bg-blue-700 text-white uppercase font-bold text-center rounded mt-5 p-1'
                        href={imagen.largeImageURL}
                        target='_blank'
                        rel='noopener noreferrer'
                    >Ver Imagen</a>
                </div>
            </div>
        </div>
    );
}