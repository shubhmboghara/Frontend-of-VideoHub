import { useEffect, useState } from "react";
import axios from "../hooks/axios";
import { useDispatch } from "react-redux";
import { login, logout } from "../redux/slices/authSlice";
import Loader from "./Loader";

const AuthLoader = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const res = await axios.get("/users/current-user", { withCredentials: true });
        const userData = res.data.data;
        if (userData) {
          dispatch(login(userData));
        }
      } catch (err) {
        console.error("Error in AuthLoader:", err);
        dispatch(logout());
      } finally {
        setIsLoading(false);
      }
    };

    fetchCurrentUser();
  }, [dispatch]);

  if (isLoading) {
    return <Loader message="Authenticating..." />;
  }

  return <>{children}</>;
};

export default AuthLoader;
