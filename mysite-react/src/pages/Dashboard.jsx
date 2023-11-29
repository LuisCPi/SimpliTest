import React from 'react';

const Dashboard = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Novedades</h1>
      <p style={styles.paragraph}>
        ¡Próximamente estarán disponibles las funcionalidades de editar y eliminar tanto empresas como empleados!
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '16px',
  },
  paragraph: {
    fontSize: '18px',
    lineHeight: '1.5',
  },
};

export default Dashboard;
