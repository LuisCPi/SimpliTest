import React from 'react';
import TextForm from '../components/EmployeeFormulary';
import NewEmployee from '../components/NewEmployee';

const Employees = () => {
    return (
        <div>
            <h1>Mis empleados</h1>
            <TextForm></TextForm>
            <NewEmployee></NewEmployee>
        </div>
    );
};

export default Employees;