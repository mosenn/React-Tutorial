import axios from "axios";

const baseUrl = (axios.defaults.baseURL = "http://localhost:2023");
axios.defaults.withCredentials = true;

//* register api user
export const RegisterUser = async (UserRegisterData, setRegisterError) => {
  console.log(UserRegisterData, "values");
  const { username, password, confirmPassword, pic } = UserRegisterData;
  console.log(
    username,
    password,
    confirmPassword,
    pic,
    "input values in api function"
  );
  try {
    const user = await axios.post(
      `${baseUrl}/register`,
      {
        username,
        password,
        confirmPassword,
        pic,
      },
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
      }
    );
    // console.log(user);
    // const response = user.data;
    // console.log(response);
    return user;
  } catch (err) {
    console.log(err);
    setRegisterError(err?.response?.data);
  }
};

//* login api user
export const loginUser = async (userLoginValue) => {
  const { username, password } = userLoginValue;
  try {
    const user = await axios.post(
      `${baseUrl}/login`,
      {
        username,
        password,
      },
      { method: "post", headers: { "Content-Type": "application/json" } }
    );
    console.log("User in api function", user);

    return user;
  } catch (err) {
    console.log(err);
  }
};
