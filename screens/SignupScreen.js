import AuthContent from "../components/Auth/AuthContent";
import { createUser } from "../util/auth";

function SignupScreen() {
  const signupHandler = async ({ email, password }) => {
    await createUser(email, password);
  };
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
