import React from 'react'

export const Card = ({id, name, logo}) => {
    return (
        <section style = {{height:200}}>
            <h2 className="text-capitalize">#{id} - { name } </h2>
            
            { /*imagenes */ }
            <div>
            {/* {
                sprites.map( sprite => (
                    <img src={sprite} key={sprite} alt={name}/>
                ))
            } */}
                <img src={logo} />
            </div>
        </section>
    )
}
