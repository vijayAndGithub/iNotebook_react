import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config/config";
const { envVars } = config;

const Login = (props) => {
  const { showAlert } = props;

  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${envVars.apiUrl}/api/v1/auth/login`;
    const loginData = {
      email: credentials.email,
      password: credentials.password,
    };
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData), // body data type must match "Content-Type" header
    });
    let resData = await response.json();
    console.log(resData);
    setCredentials({
      email: "",
      password: "",
    });
    if (resData.success) {
      //save auth token and redirect
      showAlert(resData.message, "success");
      localStorage.setItem("access_token", resData.data.authToken);
      navigate("/");
    } else {
      showAlert(resData.message, "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            aria-describedby="emailHelp"
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={onChange}
            minLength={5}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
