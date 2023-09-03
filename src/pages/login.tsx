import { AuthContext } from "@/contexts/AuthContext";
import HTTPService from "@/services/HttpService";
import { setRoleLocal, setTokenLocal, setUser } from "@/utils/common";
import UrlConstants from "@/utils/constants/UrlConstants";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const authContext = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      let body = {
        email: username,
        password: password,
      };
      HTTPService(
        "POST",
        UrlConstants.base_url + UrlConstants.login,
        body,
        false,
        false
      )
        .then((res: any) => {
          setTokenLocal(res?.data?.token);
          setUser(res?.data?.user);
          setRoleLocal(res?.data?.user?.role);
          router.push("/dashboard");
          authContext?.setAuthenticated(true);
        })
        .catch((err: any) => {
          console.log(err);
        });
    } catch (error) {
      // Handle login error
      console.log(error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "183px",
            height: "44px",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "183px",
            height: "44px",
            marginTop: "20px",
          }}
        />
        <button
          onClick={handleLogin}
          style={{
            width: "183px",
            height: "44px",
            marginTop: "20px",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
