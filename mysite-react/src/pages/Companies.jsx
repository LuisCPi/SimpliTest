import React from 'react';
import { useQuery, gql } from '@apollo/client';
import NewCompany from '../components/NewCompany';

const GET_DATA = gql`
  query Companies {
    listOfCompanies {
      address
      name
      phone
      rut
    }
  }
`;

const Companies = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const companies = data.listOfCompanies;

  return (
    <div>
      <h1>Mis Empresas</h1>
      {companies.length ? (
        <ul>
          {companies.map((company, index) => (
            <li key={index}>
              <strong>Nombre:</strong> {company.name}<br />
              <strong>Dirección:</strong> {company.address}<br />
              <strong>RUT:</strong> {company.rut}<br />
              <strong>Número:</strong> {company.phone}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay datos disponibles</p>
      )}
      <hr />
      <NewCompany />
    </div>
  );
};

export default Companies;
