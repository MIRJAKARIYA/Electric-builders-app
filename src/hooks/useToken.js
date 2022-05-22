import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      if (email) {
        const { data } = await axios.post(
          "http://localhost:5000/getToken",
          { email }
        );
        setToken(data.accessToken);
        localStorage.setItem("ACCESS_TOKEN", data.accessToken);
      }
    };
    getToken();
  }, [email]);
  return [token];
};

export default useToken;