

export const MostrarAlerta = ({alerta}) => {
    return (
        <p className='bg-red-100 border-red-400 text-red-700 px-4 py-3 rounded max-w-lg mx-auto mt-6 text-center'>
            <strong className='font-bold'>Error!</strong>
            <span className='block sm:inline'>{alerta}</span>
        </p>
    );
}