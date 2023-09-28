import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import "./styles.css";
import Axios from "axios";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    let data = {
      email: "eve.holt@reqres.in",

      password: "cityslicka"
    };
    Axios.post(
      "https://reqres.in/api/login",
      {},
      {
        params: data
      }
    )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  submit();

  return (
    <div>
      <div className="formContainer">
        <div>
          <img src="https://drive.google.com/uc?export=view&id=1hvRAGrdq0SqFBZApx2--IcuDf-DOmOBH" />
        </div>
        <div>
          <h5>Hello there, Sign in to continue</h5>

          <div>
            <form>
              <div className="inputContainer">
                <label>Email</label>
                <input type="text" className="input" value={email} />
              </div>
              <div className="inputContainer">
                <label>Password</label>
                <input type="password" className="input" value={password} />
              </div>
              <div className="term">
                <h6>
                  <input type="checkbox" className="checkbox" />
                  By Creating and logging into account, you are aggreing with
                  our <strong>Terms and condition and Privecy policy</strong>
                </h6>
              </div>
              <div className="buttonContainer">
                <button className="loginButton">Next</button>
              </div>
            </form>
            <h5 className="sso"> Sign with comapny SSO</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
