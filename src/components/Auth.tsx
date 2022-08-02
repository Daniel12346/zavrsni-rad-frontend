import { useNavigate } from "react-router";
import { ME_QUERY } from "graphql/queries";
import { useLogInMutation, useSignUpMutation } from "graphql/types";
import React, { useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";
import { StyledButton } from "./StyledButton";
import { StyledButtonContainer } from "./StyledButtonContainer";

export default ({ mode, setMode }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();


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
      

      <div className="formInside">
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
        <StyledButton id="submitButton" type="submit">{mode === "logIn" ? "log in" : "sign up"}</StyledButton>
      </div>
      {logInError && <span>{logInError.message}</span>}
      {loading && <Loader></Loader>}

      {signUpError && <span>{signUpError.message}</span>}
      {loading_s && <Loader></Loader>}
    </StyledForm >
  );

}



const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  max-width: 30rem;
  justify-content: space-evenly;
  label{
    display: flex;
   flex-flow: column nowrap;
   color: ${({ theme }) => theme.colors.primary4};
  }
  input{
    background: none;
    width: 100%;
    margin-bottom: 0.2rem;
    align-self: center;
    min-height: 1.4rem;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary4};
  }
  button{
    color: white;
    border-radius: 3px;
  }
  .formInside{
    padding: 0;
    display: flex;
    flex-flow: column wrap;
    min-height: 80%;
    justify-content: space-evenly;
    padding: 1rem;
    #submitButton{
      background: ${({ theme }) => theme.colors.primary4};
      margin-top: 5%;
       min-width: 20%;
    }
}
`




