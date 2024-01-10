import { useState } from "react";
import PrivateRouter from "./routes/PrivateRouter";
import { BrowserRouter } from "react-router-dom";
import PublicRouter from "./routes/PublicRouter";
import AppContext from "./AppContext";
import "./style/app.css";
import UseModalOverflow from "./hook/UseModalOverflow";
import UseAuth from "./hook/UseAuth";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenStudents, setIsModalOpenStudents] = useState(false);
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);
  const [isModalOpenEditNote, setIsModalOpenEditNote] = useState(false);
  const [isModalOpenDelete, setIsModalOpenDelete] = useState(false);
  const [isModalOpenProfesor, setIsModalOpenProfesor] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState({});

  UseModalOverflow(
    isModalOpen,
    isModalOpenProfesor,
    isModalOpenStudents,
    isModalOpenEdit,
    isModalOpenEditNote
  );
  const { isUserLogged, setIsUserLogged, loading, decoded } = UseAuth();

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
        isModalOpenEdit,
        setIsModalOpenEdit,
        selectedStudent,
        setSelectedStudent,
        isEdit,
        setIsEdit,
        isModalOpenEditNote,
        setIsModalOpenEditNote,
        isModalOpenDelete,
        setIsModalOpenDelete,
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
