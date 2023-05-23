import { useContext } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";
import { AuthContext } from "../store/auth-context";

function SignupScreen() {
  const authContext = useContext(AuthContext);
  const signupHandler = async ({ email, password }) => {
    try {
      const token = await createUser(email, password);
      console.log(token);
      authContext.authenticate(token);
    } catch (error) {
      console.log(error.message);
    }
  };
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
