import { bancos } from './data/bancos.js'

export const Bancos = () => {
  return (
    <div>
        <h2>Lista de bancos en el JS</h2>
        <ul>
            {bancos.map((banco) =>
                <li key={bancos.id}>
                    {banco.name} - {banco.country}
                </li>
            )}
        </ul>
    </div>
  )
}
