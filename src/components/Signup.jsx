import { useState } from "react";
import { useNavigate } from "react-router-dom";
import config from "../config/config";
const { envVars } = config;

const Signup = (props) => {
  const { showAlert } = props;

  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${envVars.apiUrl}/api/v1/auth/createUser`;
    if (credentials.password == credentials.confirmPassword) {
      const signupData = {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      };
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData), // body data type must match "Content-Type" header
      });
      let resData = await response.json();
      console.log(resData);
      setCredentials({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      if (resData.success) {
        //save auth token and redirect
        showAlert(resData.message, "success");
        localStorage.setItem("access_token", resData.data.authToken);
        navigate("/");
      } else {
        showAlert(resData.message, "danger");
      }
    } else {
      showAlert("Password not matched, please enter again", "danger");
    }
  };
  const onChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="container">
      <h1>Signup - iNotebook</h1>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={credentials.name}
            onChange={onChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
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
          <label htmlFor="password" className="form-label">
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
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={credentials.confirmPassword}
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

export default Signup;
