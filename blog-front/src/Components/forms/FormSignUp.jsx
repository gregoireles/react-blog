import React from "react";

const FormSignUp = ({ img }) => {
  return (
    <div>
      <form>
        <h1>Sign Up</h1>

        <label for="email">
          <b>Email</b>
        </label>
        <input type="text" placeholder="Enter Email" name="email" required />

        <label for="psw">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="psw"
          required
        />

        <label for="psw-repeat">
          <b>Repeat Password</b>
        </label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        />
      </form>
    </div>
  );
};

export default FormSignUp;
