import React from 'react';
import '../../style/notFoundPage.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet'; //Este import permite que el Title de la página se modifique! usar en todas pages!

const PageNotFound = () => {
  return (
    <div className="not-found-container">
      <Helmet>
        <title>404 - Página no encontrada</title>
      </Helmet>
      <h1>404 - Página no encontrada</h1>
      <p>Lo sentimos, la página no está disponible.</p>
      <Link to="/home">
        <Button variant="primary" className="m-2">
          Volver a página principal
        </Button>
      </Link>
    </div>
  );
};

export default PageNotFound;
