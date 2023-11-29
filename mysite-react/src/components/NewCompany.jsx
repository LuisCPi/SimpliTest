import React, { useState } from 'react';
import { useMutation, gql } from '@apollo/client';

const CREATE_COMPANY = gql`
mutation AddCompany (
    $companyAddress: String!
    $companyName: String!
    $companyPhone: Int!
    $companyRut: String!
) {
    AddCompany(
      companyAddress: $companyAddress
      companyName: $companyName
      companyPhone: $companyPhone
      companyRut: $companyRut
    ){
    success
  }
}
`;

const NewCompany = () => {
  const [companyAddress, setCompanyAddress] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyPhone, setCompanyPhone] = useState('');
  const [companyRut, setCompanyRut] = useState('');

  const [createUser, { data, loading, error }] = useMutation(CREATE_COMPANY);

  const handleCreateUser = async () => {
    try {
      const result = await createUser({
        variables: {
            companyAddress: companyAddress,
            companyName: companyName,
            companyPhone: Number(companyPhone),
            companyRut: companyRut
        },
      });
    } catch (error) {
      console.error('Error al crear usuario:', error.message);
    }
  };

  return (
    <div>
      <h1>Crear Empresa</h1>
      <form>
        <label>
          Nombre de empresa:
          <input type="text" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
        </label>
        <label>
          Dirección de la empresa:
          <input type="text" value={companyAddress} onChange={(e) => setCompanyAddress(e.target.value)} />
        </label>
        <label>
          Número de la empresa:
          <input type="text" value={companyPhone} onChange={(e) => setCompanyPhone(e.target.value)} />
        </label>
        <label>
          Rut de la empresa:
          <input type="text" value={companyRut} onChange={(e) => setCompanyRut(e.target.value)} />
        </label>
        <button type="button" onClick={handleCreateUser} disabled={loading}>
          Crear Empresa
        </button>
      </form>
      {loading && <p>Cargando...</p>}
      {error && <p>Error: {error.message}</p>}
    </div>
  );
};

export default NewCompany;
