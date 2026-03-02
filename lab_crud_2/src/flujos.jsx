import React from 'react'
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Table, Button, Container, FormGroup,
    Modal, ModalHeader, ModalBody, ModalFooter,
} from "reactstrap";

const data = [
    { id: 1, flujo: "Resumen de correos", descripcion: "Muestra un resumen de los correos electrónicos recibidos en la bandeja de entrada, destacando los remitentes, asuntos y fechas de recepción." },
    { id: 2, flujo: "Reportes de logs del SIEM", descripcion: "Genera reportes detallados de los logs recopilados por el SIEM, proporcionando información sobre eventos de seguridad, actividades sospechosas y tendencias de amenazas." },
    { id: 3, flujo: "Resumen de tickets de Help Desk", descripcion: "Proporciona un resumen de los tickets de soporte técnico, incluyendo el estado de cada ticket, la prioridad asignada y el tiempo estimado de resolución." }
];

class App extends React.Component {
    state = {
        data: data,
        modalActualizar: false,
        modalInsertar: false,
        form: {
            id: "",
            flujo: "",
            descripcion: "",
        },
    };

    mostrarModalActualizar = (dato) => {
        this.setState({
            form: dato,
            modalActualizar: true,
        });
    }

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    }

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true,
        });
    }

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    }

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    }

    render() {
        return (
            <Container>
                <br />
                <Button color="success" onClick={() => this.mostrarModalInsertar()} >Insertar nuevo flujo</Button>
                <br /><br />
                <Table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Flujo</th>
                            <th>Descripción</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map((dato) => (
                            <tr key={dato.id}>
                                <td>{dato.id}</td>
                                <td>{dato.flujo}</td>
                                <td>{dato.descripcion}</td>
                                <td>
                                    <Button color="primary" onClick={() => this.mostrarModalActualizar(dato)} >Editar</Button>{" "}
                                    <Button color="danger" onClick={() => this.eliminar(dato)} >Eliminar</Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal isOpen={this.state.modalActualizar}>
                    <ModalHeader>
                        <div><h3>Editar Flujo</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>ID: </label>
                            <input className="form-control" readOnly type="text" value={this.state.form.id} />
                        </FormGroup>
                        <FormGroup>
                            <label>Flujo: </label>
                            <input className="form-control" name="flujo" type="text" onChange={this.handleChange} value={this.state.form.flujo} />
                        </FormGroup>
                        <FormGroup>
                            <label>Descripción: </label>
                            <input className="form-control" name="descripcion" type="text" onChange={this.handleChange} value={this.state.form.descripcion} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.editar(this.state.form)} >Editar</Button>
                        <Button color="danger" onClick={() => this.cerrarModalActualizar()} >Cancelar</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.state.modalInsertar}>
                    <ModalHeader>
                        <div><h3>Insertar Flujo</h3></div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>ID: </label>
                            <input className="form-control" readOnly type="text" value={this.state.data.length + 1} />
                        </FormGroup>
                        <FormGroup>
                            <label>Flujo: </label>
                            <input className="form-control" name="flujo" type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Descripción: </label>
                            <input className="form-control" name="descripcion" type="text" onChange={this.handleChange} />
                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={() => this.insertar()} >Insertar</Button>
                        <Button className="btn btn-danger" onClick={() => this.cerrarModalInsertar()} >Cancelar</Button>
                    </ModalFooter>
                </Modal>
            </Container>
        );
    }
}

export default App;