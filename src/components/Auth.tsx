import { navigate } from "@reach/router";
import { ME_QUERY } from "graphql/queries";
import { useLogInMutation, useSignUpMutation } from "graphql/types";
import React, { useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";
import { StyledButton } from "./StyledButton";

export default ({ mode, setMode }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const [logIn, { error: logInError, loading }] = useLogInMutation({
    update: (cache, res) => {
      const token = res.data?.logIn;
      if (token) {
        token && localStorage.setItem("token", token);
        cache.writeQuery<any, any>({ query: ME_QUERY, data: (meData: any) => { console.log(meData) } });
      }
    }, onCompleted: () => { navigate("/") }
  });




  //TODO: fix !
  const [signUp, { error: signUpError, loading: loading_s }] = useSignUpMutation();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await signUp({
        variables: {
          firstName,
          lastName,
          email,
          password
        }
      });
      console.log(data);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
    } catch (e) {
      console.log("Sign up failed");
      console.log("ERROR", e);
    }
  }


  const handleLogIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    logIn({ variables: { password, email } });
    setPassword("");
    setEmail("");
  }

  return (
    <StyledForm onSubmit={e => { mode === "logIn" ? handleLogIn(e) : handleSignUp(e) }} >
      <StyledButtonContainer>
        <StyledButton isCurrentMode={mode === "logIn"} type="button" onClick={() => setMode("logIn")}>Log in</StyledButton>
        <StyledButton isCurrentMode={mode === "signUp"} type="button" onClick={() => setMode("signUp")}>Sign up</StyledButton>
      </StyledButtonContainer>
      {logInError && <span>{logInError.message}</span>}
      {loading && <Loader></Loader>}

      {signUpError && <span>{signUpError.message}</span>}
      {loading_s && <Loader></Loader>}

      <div>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={e => setEmail((e.target as HTMLInputElement).value)}
          />
        </label>

        {mode === "signUp" &&
          (<><label>
            First name
            <input
              type="text"
              value={firstName}
              onChange={e => setFirstName((e.target as HTMLInputElement).value)}
            />
          </label>
            <label>
              Last name
              <input
                type="text"
                value={lastName}
                onChange={e => setLastName((e.target as HTMLInputElement).value)}
              />
            </label></>
          )}
        < label >
          Password
          < input
            type="password"
            value={password}
            onChange={e => setPassword((e.target as HTMLInputElement).value)}
          />
        </label>
        <StyledButton id="logIn" type="submit">{mode === "logIn" ? "log in" : "sign up"}</StyledButton>
      </div>
    </StyledForm >
  );
};




`




