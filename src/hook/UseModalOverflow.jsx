import { useEffect } from "react";

function UseModalOverflow(
  isModalOpen,
  isModalOpenProfesor,
  isModalOpenStudents,
  isModalOpenEdit,
  isModalOpenEditNote
) {
  useEffect(() => {
    const shouldDisableOverflow =
      isModalOpen ||
      isModalOpenProfesor ||
      isModalOpenStudents ||
      isModalOpenEdit ||
      isModalOpenEditNote;

    if (shouldDisableOverflow) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [
    isModalOpen,
    isModalOpenProfesor,
    isModalOpenStudents,
    isModalOpenEdit,
    isModalOpenEditNote,
  ]);
}

export default UseModalOverflow;
