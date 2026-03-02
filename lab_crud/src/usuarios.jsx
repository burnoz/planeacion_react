import React from 'react'
import "./App.css";
import {
    Table, Button, Container, FormGroup,
    Modal, ModalHeader, ModalBody, ModalFooter,
} from "reactstrap";

const data = [
    { id: 1, nombre: "Jorge Carranza", empresa: "Tec", edad: 22, pais: "Mexico", contacto: "jorge@mail.com" },
    { id: 2, nombre: "Ramon Velez", empresa: "Banorte", edad: 35, pais: "Mexico", contacto: "ramon@mail.com" },
    { id: 3, nombre: "Hugo Sanchez", empresa: "Real Madrid", edad: 50, pais: "Mexico", contacto: "hugo@mail.com" },
    { id: 4, nombre: "Rafael Marquez", empresa: "Barcelona", edad: 45, pais: "Mexico", contacto: "rafael@mail.com" },
    { id: 5, nombre: "Carlos Alcaraz", empresa: "Mallorca", edad: 25, pais: "Spain", contacto: "carlos@mail.com" },
    { id: 6, nombre: "N. Djokovic", empresa: "Serbia", edad: 36, pais: "Serbia", contacto: "novak@mail.com" },
    { id: 7, nombre: "Sergio Perez", empresa: "Cadillac", edad: 34, pais: "Mexico", contacto: "sergio@mail.com" },
    { id: 8, nombre: "Max Verstapen", empresa: "Oracle Red Bull Racing", edad: 26, pais: "Netherlands", contacto: "max@mail.com" },
    { id: 9, nombre: "Carlos Sainz", empresa: "Williams Racing", edad: 29, pais: "Spain", contacto: "sainz@mail.com" },
];

class App extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            nombre: "",
            empresa: "",
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    insertar = () => {
        const valorNuevo = { ...this.state.form };
        valorNuevo.id = this.state.data.length + 1;
        const lista = [...this.state.data, valorNuevo];
        this.setState({ data: lista, modalInsertar: false, form: { id: "", nombre: "", empresa: "" } });
    };

    editar = (dato) => {
        const lista = this.state.data.map((registro) =>
            registro.id === dato.id ? dato : registro
        );
        this.setState({ data: lista, modalActualizar: false });
    };

    eliminar = (dato) => {
        const opcion = window.confirm("Estás seguro que deseas eliminar el registro " + dato.id);
        if (opcion) {
            const lista = this.state.data.filter((registro) => registro.id !== dato.id);
            this.setState({ data: lista });
        }
    };

    render() {
        return (
            <>
                <Container>
                    <br />
                    <Button color="success" onClick={() => this.mostrarModalInsertar()}>Crear</Button>
                    <br />
                    <br />
                    <Table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Empresa</th>
                                <th>Acción</th>
                                <th>Edad</th>
                                <th>País</th>
                                <th>Contacto</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((dato) => (
                                <tr key={dato.id}>
                                    <td>{dato.id}</td>
                                    <td>{dato.nombre}</td>
                                    <td>{dato.empresa}</td>
                                    <td>{dato.edad}</td>
                                    <td>{dato.pais}</td>
                                    <td>{dato.contacto}</td>
                                    <td>
                                        <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)} >Editar
                                        </Button>{" "}
                                        <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>

            <Modal isOpen={this.state.modalInsertar}>
                <ModalHeader>
                    <div><h3>Insertar nombre</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label>Id: </label>
                        <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
                    </FormGroup>

                    <FormGroup>
                        <label>Nombre: </label>
                        <input className="form-control" name="nombre" type="text" onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <label>Empresa: </label>
                        <input className="form-control" name="empresa" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>Edad: </label>
                        <input className="form-control" name="edad" type="number" onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>País: </label>
                        <input className="form-control" name="pais" type="text" onChange={this.handleChange}
                        />
                    </FormGroup>

                    <FormGroup>
                        <label>Contacto: </label>
                        <input className="form-control" name="contacto" type="email" onChange={this.handleChange}
                        />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => this.insertar()} >Insertar </Button>

                    <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()}>
                        Cancelar</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={this.state.modalActualizar}>
                <ModalHeader>
                    <div><h3>Editar Registro</h3></div>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <label> Id:</label>
                        <input className="form-control" readOnly type="text" value={this.state.form.id} />
                    </FormGroup>

                    <FormGroup>
                        <label>Nombre:</label>
                        <input className="form-control" name="nombre" type="text"
                            onChange={this.handleChange} value={this.state.form.nombre} />
                    </FormGroup>

                    <FormGroup>
                        <label>Empresa:</label>
                        <input className="form-control" name="empresa" type="text"
                            onChange={this.handleChange} value={this.state.form.empresa} />
                    </FormGroup>

                    <FormGroup>
                        <label>Edad:</label>
                        <input className="form-control" name="edad" type="number"
                            onChange={this.handleChange} value={this.state.form.edad} />
                    </FormGroup>

                    <FormGroup>
                        <label>País:</label>
                        <input className="form-control" name="pais" type="text"
                            onChange={this.handleChange} value={this.state.form.pais} />
                    </FormGroup>

                    <FormGroup>
                        <label>Contacto:</label>
                        <input className="form-control" name="contacto" type="email"
                            onChange={this.handleChange} value={this.state.form.contacto} />
                    </FormGroup>
                </ModalBody>

                <ModalFooter>
                    <Button color="primary" onClick={() => this.editar(this.state.form)} >
                        Editar</Button>

                    <Button color="danger" onClick={() => this.cerrarModalActualizar()} >
                        Cancelar</Button>
                </ModalFooter>
            </Modal>
        </>
        );
    }
}

export default App;