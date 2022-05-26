import { useEffect, useState } from "react";


const useToken = (user) => {
  const [token, setToken] = useState("");
  console.log(user)
  
  useEffect(() => {
    const email = user?.email;
  const name = user?.displayName;
    const enteredUser = { name: name, email: email };
      
      if (email) {
        fetch(`http://localhost:5000/user/${email}`, {
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
