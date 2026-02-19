import { useFetch } from '../hooks/useFetch.js';
import { useCounter } from '../hooks/useCounter.js';
import { Loading } from '../hooks/Loading.jsx';
import { Card } from '../hooks/Card.jsx';

export const CustomHook = () => {
    const { counter, decrement, increment } = useCounter(959);
    const {data, hasError, isLoading} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
    
    return (
    <>
        <h1>Información de Pokemon</h1>
        <hr/>
        <h2>{data?.name}</h2>
        {isLoading ? <Loading/> : (<Card id={counter} name={data.name} sprites={ [
            data.sprites.front_default,
            data.sprites.front_shiny,
            data.sprites.back_default,
            data.sprites.back_shiny,
            ] } />)}
    
    
        <button className='btn btn-primary' onClick= { ()=>decrement() } >Anterior</button>
        <button className='btn btn-primary' onClick= { ()=>increment() } >Siguiente</button>
    </>
    )
}