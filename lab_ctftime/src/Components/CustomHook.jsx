import { useFetch } from '../hooks/useFetch.js';
import { useCounter } from '../hooks/useCounter.js';
import { Loading } from '../hooks/Loading.jsx';
import { Card } from '../hooks/Card.jsx';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(1005);
    const {data, hasError, isLoading} = useFetch(`https://ctftime.org/api/v1/teams/1005/`)
    
    return (
    <>
        <h1>Información de equipos en CTFtime</h1>
        <hr/>
        <h2>{data?.primary_alias}</h2>
        {isLoading ? <Loading/> : (<Card id={counter} name={data.primary_alias} sprites={ [
            data.logo
            ] } />)}
    
    
        <button className='btn btn-primary' onClick= { ()=>decrement() } >Anterior</button>
        <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>
    </>
    )
}