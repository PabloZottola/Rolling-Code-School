import { useState } from "react";
import EscuelaApi from "../api/EscuelaApi.js";

export function useStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [, setError] = useState(null);

  const getStudents = async (search) => {
    setStudents([])
    try {
      setLoading(true);
      setError(null);
      const students = await EscuelaApi.get("/admin/students");
      const leakedStudents = students.data.students.filter((student) => {
        if (search.length == 1) {
          if (student.yearOfStudy.trim().includes(search.trim())) {
            console.log(search.length == 1);
            return student;
          }
          return;
        }
        if (
          student.firstName
            .toLowerCase()
            .trim()
            .includes(search.toLowerCase().trim()) ||
          student.lastName
            .toLowerCase()
            .trim()
            .includes(search.toLowerCase().trim()) ||
          student._id.toLowerCase().trim().includes(search.toLowerCase().trim())
        )
          return student;
      });
      setStudents(leakedStudents);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { students, setStudents, getStudents, loading };
}
