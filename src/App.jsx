import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./AppContext";
import PublicRouter from "./routes/PublicRouter";
import PrivateRouter from "./routes/PrivateRouter";
import jwt_decode from "jwt-decode";
import "./style/app.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenStudents, setIsModalOpenStudents] = useState(false);
  const [isModalOpenProfesor, setIsModalOpenProfesor] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const logged = localStorage.getItem("token");
  let decoded = [];
  if (logged) {
    decoded = jwt_decode(logged);
  }
  useEffect(() => {
    if (logged) {
      setIsUserLogged(true);
      setLoading(false);
    } else {
      setIsUserLogged(false);
      setLoading(false);
    }
  }, [logged]);

  useEffect(() => {
    if (isUserLogged) {
      const exp = new Date(decoded.exp * 1000);
      const currentDate = new Date();
      if (exp < currentDate) {
        localStorage.removeItem("token");
      }
    }
  }, [isUserLogged, logged]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <AppContext.Provider
      value={{
        isUserLogged,
        setIsUserLogged,
        isModalOpen,
        setIsModalOpen,
        decoded,
        isModalOpenStudents,
        setIsModalOpenStudents,
        isModalOpenProfesor,
        setIsModalOpenProfesor,
      }}
    >
      {isUserLogged ? (
        <BrowserRouter>
          <PrivateRouter />
        </BrowserRouter>
      ) : (
        <PublicRouter />
      )}
    </AppContext.Provider>
  );
}

export default App;
