import React from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard.jsx';
import Companies from './pages/Companies.jsx';
import Employees from './pages/Employees.jsx';

const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
});


const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </ApolloProvider>
  );
};

export default App;