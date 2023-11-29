import React, { useState } from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_USERS = gql`
  query Employees($companyRut: String!) {
    listOfEmployees(companyRut: $companyRut) {
      email
      fullName
      rut
    }
  }
`;

const Textform = () => {
  const [searchUsername, setSearchUsername] = useState('');
  const { loading, error, data, refetch } = useQuery(GET_USERS, {
    variables: { companyRut: searchUsername },
  });

  const handleSearch = () => {
    // Lógica para realizar la consulta cuando el usuario hace clic en "OK"
    refetch();
  };

  return (
    <div>
      <h1>Buscar empleados por RUT de la empresa</h1>
      <label>
        Rut de la Empresa:
        <input
          type="text"
          value={searchUsername}
          onChange={(e) => setSearchUsername(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleSearch}>
        OK
      </button>
      {loading && <p>Cargando...</p>}
      {data && data.listOfEmployees.length > 0 ? (
        <ul>
          {data.listOfEmployees.map((item, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {item.fullName} <br />
              <strong>Email:</strong> {item.email} <br />
              <strong>RUT:</strong> {item.rut}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay datos disponibles</p>
      )}
    </div>
  );
};

export default Textform;
