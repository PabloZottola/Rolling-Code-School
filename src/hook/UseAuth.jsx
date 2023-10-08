import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function UseAuth() {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [loading, setLoading] = useState(true);
  const logged = localStorage.getItem("token");
  let decoded = [];
  if (logged) {
    decoded = jwt_decode(logged);
  }
  useEffect(() => {
    if (logged) {
      const exp = new Date(decoded.exp * 1000);
      const currentDate = new Date();

      if (exp >= currentDate) {
        setIsUserLogged(true);
      }
    }
    setLoading(false);
  }, []);

  return { isUserLogged, setIsUserLogged, loading, decoded };
}

export default UseAuth;
