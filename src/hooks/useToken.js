import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const email = user?.email;

    const enteredUser = { email: email };

    if (email) {
      fetch(`https://pure-mountain-19265.herokuapp.com/user/${email}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(enteredUser),
      })
        .then((res) => res.json())
        .then((data) => {
          const accessToken = data.token;
          localStorage.setItem("ACCESS_TOKEN", accessToken);
          setToken(accessToken);
        });
    }
  }, [user]);

  return [token];
};

export default useToken;
