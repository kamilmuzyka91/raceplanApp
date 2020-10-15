import React from "react";
import "../scss/main.scss";
import "./register.scss";

function Register() {
  return (
    <>
      <div className="container">
        <div className="register">
          <form className="register__form">
            <label for="usrname">Nazwa użytkownika </label>
            <input type="text" id="usrname" name="usrname" />

            <label for="psw">Hasło</label>
            <input type="password" />

            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;
