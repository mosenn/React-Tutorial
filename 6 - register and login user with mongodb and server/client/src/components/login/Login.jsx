import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/user";

const Login = () => {
  const navigate = useNavigate();

  const [toast, setToast] = useState(false);
  const [loginValue, setLoginValue] = useState({
    username: "",
    password: "",
  });
  const handleOnchangeLogin = (inputs) => {
    setLoginValue({
      ...loginValue,
      [inputs.target.name]: inputs.target.value,
    });
  };
  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    const user = await loginUser(loginValue);
    console.log("User data in Submit form", user);
    if (user?.status === 200 && user?.data) {
      //*Todo reidrect to login page
      setToast(true);
      localStorage.setItem("user", JSON.stringify(user?.data));
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // console.log(registerError, "register in submit function");
  };
  return (
    <div>
      {toast && (
        <div
          style={{
            backgroundColor: "green",
            padding: "12px",
            color: "black",
            textAlign: "center",
          }}
        >
          login is sucess redirect be home page
        </div>
      )}
      <form
        action=""
        onSubmit={handleSubmitRegister}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleOnchangeLogin}
          value={loginValue.username}
        />
        <label htmlFor="password">password</label>
        <input
          type="text"
          name="password"
          id="password"
          onChange={handleOnchangeLogin}
          value={loginValue.password}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "blue",
            color: "whitesmoke",
            marginTop: "10px",
          }}
        >
          login
        </button>
      </form>
    </div>
  );
};

export default Login;
