// Componente 3: Uso de archivo de importación bancos.js
import { bancos } from '../data/bancos';

const ComponenteBancos = () => {
  return (
    <div>
      <h2>Lista de Bancos</h2>
      <p>Total de bancos: {bancos.length}</p>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          <tr style={{ backgroundColor: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Nombre</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>País</th>
          </tr>
        </thead>
        <tbody>
          {bancos.map((banco) => (
            <tr key={banco.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                {banco.id}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {banco.name}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                {banco.country}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponenteBancos;
