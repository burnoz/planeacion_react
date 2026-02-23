import { useState, useEffect } from 'react'
import React from 'react'

export const LoginForm = () => {
    const [formState, setFormState] = useState({
        matricula: '',
        nombre: '',
        apellido: '',
        edad: '',
        universidad: '',
        carrera: ''
    });

    const { matricula, nombre, apellido, edad, universidad, carrera } = formState;
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({...formState, [name]: value});
    }

    useEffect(() => {
        // console.log('useEffect called!');
    }, []);

    useEffect(() => {
        // console.log('formState changed!');
    }, [formState]);

    return (
        <>
            <h1>Formulario</h1><hr />
            
            <form>
                <div class="mb-3">
                    <input type="text" className="form-control" placeholder="matricula" name="matricula"
                        value={matricula}
                        onChange={onInputChange}
                        />
                </div>

                <div class="mb-3">
                    <input type="text" className="form-control" placeholder="nombre" name="nombre"
                        value={nombre}
                        onChange={onInputChange}
                        />
                </div>
                
                <div class="mb-3">
                    <input type="text" className="form-control" placeholder="apellido" name="apellido"
                        value={apellido}
                        onChange={onInputChange}
                        />
                </div>
                
                <div class="mb-3">
                    <input type="text" className="form-control" placeholder="edad" name="edad"
                        value={edad}
                        onChange={onInputChange}
                        />
                </div>

                <div class="mb-3">
                    <input type="text" className="form-control" placeholder="universidad" name="universidad"
                        value={universidad}
                        onChange={onInputChange}
                        />
                </div>

                <div>
                    <input type="text" className="form-control" placeholder="carrera" name="carrera"
                        value={carrera}
                        onChange={onInputChange}
                        />
                </div>

                <button type="submit" className="btn btn-primary mt-3">Enviar</button>
            </form>

            <p className="mt-3">Matricula: {matricula}</p>
            <p>Nombre: {nombre}</p>
            <p>Apellido: {apellido}</p>
            <p>Edad: {edad}</p>
            <p>Universidad: {universidad}</p>
            <p>Carrera: {carrera}</p>
        </>
    )
}
