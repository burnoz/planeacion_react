// Componente 2: Uso de variables
const ComponenteVariables = () => {
  const nombre = "Bruno";
  const tecnologias = ["React", "TypeScript", "Vite"];

  return (
    <div>
      <h2>Componente con Variables</h2>
      <p>Nombre: {nombre}</p>
      <h3>Tecnologías:</h3>
      <ul>
        {tecnologias.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ComponenteVariables;
