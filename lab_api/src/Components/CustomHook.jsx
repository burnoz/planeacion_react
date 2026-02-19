import { useFetch } from '../hooks/useFetch.js';
import { useCounter } from '../hooks/useCounter.js';
import { Loading } from '../hooks/Loading.jsx';
import { Card } from '../hooks/Card.jsx';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(500);
    const {data, hasError, isLoading} = useFetch(`https://picsum.photos/id/${counter}/info`);
    
    return (
    <>
        <h1>Imágenes de lorem picsum</h1>
        <hr/>

        {isLoading ? <Loading/> : (<Card id={counter} author={data.author} image={data.download_url} />)}
    
        <button className='btn btn-primary' onClick= { ()=>decrement() } >Anterior</button>
        <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>
    </>
    )
}