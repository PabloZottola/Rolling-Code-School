import { useState } from "react";
import EscuelaApi from "../api/EscuelaApi.js";

export function useTeacher() {
  const [teachers, setTeachers] = useState([]);
  const [loadingTeacher, setLoadingTeacher] = useState(false);
  const [, setError] = useState(null);

  const getTeacher = async () => {
    setTeachers([]);
    try {
      setLoadingTeacher(true);
      setError(null);
      const teacher = await EscuelaApi.get("/admin/teacher");
      setTeachers(teacher.data.teacher)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoadingTeacher(false);
    }

  };

  return { teachers, setTeachers, getTeacher, loadingTeacher };
}
