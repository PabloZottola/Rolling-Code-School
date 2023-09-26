import CustomImputCrearAlumnos from "../../components/CustomImputCrearAlumnos";
import fondoRegistro from "../../img/fondoCrearAlumnos.jpg";
import "../css/crearAlumnos.css";
import { Container, Row, Col } from "react-bootstrap";


function CrearAlumnos() {
  return (
    <main>
      <>
        <section className="register">
          <Container fluid>
            <Row className="justify-content-center">
              <Col md={8} lg={4} sm={12}>
                <div className="wrapper">
                  <div className="top">
                    <h2 className="display-2 font-weight-bold">Registro de alumno</h2>
                    <img
                      src={fondoRegistro}
                      alt="Formulario de registro de alumnos"
                      className="img-cover max-width-100"
                    />
                  </div>
                  <CustomImputCrearAlumnos />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </>
    </main>
  );
}

export default CrearAlumnos;
