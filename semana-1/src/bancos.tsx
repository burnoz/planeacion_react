import React from 'react'
import { bancos } from './classes/bancos.js';

export const Bancos = () => {
  return (
    <div>
        <h1>Listado de bancos</h1>
        <ul>
            {bancos.map((banco) => (
                <li key={banco.id}>
                    {banco.name} - {banco.country}
                </li>
            ))}
        </ul>
    </div>
  )
}
