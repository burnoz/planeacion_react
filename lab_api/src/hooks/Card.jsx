import React from 'react'

export const Card = ({id, author, image}) => {
    return (
        <section style = {{height:300}}>
            <h2 className="text-capitalize">#{id} - { author } </h2>
            
            { /*imagenes */ }
            <div>
                <img src={image} style={{height:230}} alt={author} />
            </div>
        </section>
    )
}
