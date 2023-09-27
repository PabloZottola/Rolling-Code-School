import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./AppContext";
import PublicRouter from "./routes/PublicRouter";
import PrivateRouter from "./routes/PrivateRouter";
import jwt_decode from "jwt-decode";
import "./style/app.css";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const logged = localStorage.getItem("token");

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
      const decoded = jwt_decode(logged);
      let exp = decoded.exp * 1000;
    }
  }, [isUserLogged]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <AppContext.Provider
      value={{ isUserLogged, setIsUserLogged, isModalOpen, setIsModalOpen }}
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
