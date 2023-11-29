import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_EMPLOYEE = gql`
  mutation AddEmployee(
    $employeeCompany: String!
    $employeeEmail: String!
    $employeeName: String!
    $employeeRut: String!
  ) {
    AddEmployee(
      employeeCompany: $employeeCompany
      employeeEmail: $employeeEmail
      employeeName: $employeeName
      employeeRut: $employeeRut
    ) {
      success
    }
  }
`;

const NewEmployee = () => {
  const [employeeCompany, setEmployeeCompany] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [employeeRut, setEmployeeRut] = useState('');

  const [createUser, { loading, error }] = useMutation(CREATE_EMPLOYEE);

  const handleCreateUser = async () => {
    try {
      await createUser({
        variables: {
          employeeCompany,
          employeeEmail,
          employeeName,
          employeeRut,
        },
      });
    } catch (error) {
      console.error('Error al crear empleado:', error.message);
    }
  };

  return (
    <div>
      <h1>Crear Empleado</h1>
      <form>
        <label>
          Nombre del empleado:
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </label>
        <label>
          RUT del empleado:
          <input
            type="text"
            value={employeeRut}
            onChange={(e) => setEmployeeRut(e.target.value)}
          />
        </label>
        <label>
          Email del empleado:
          <input
            type="text"
            value={employeeEmail}
            onChange={(e) => setEmployeeEmail(e.target.value)}
          />
        </label>
        <label>
          Rut de la empresa:
          <input
            type="text"
            value={employeeCompany}
            onChange={(e) => setEmployeeCompany(e.target.value)}
          />
        </label>
        <button type="button" onClick={handleCreateUser} disabled={loading}>
          Crear Empleado
        </button>
      </form>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default NewEmployee;
