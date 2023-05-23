import { useContext } from "react";
import AuthContent from "../components/Auth/AuthContent";
import { loginUser } from "../util/auth";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const authContext = useContext(AuthContext);
  const loginHandler = async ({ email, password }) => {
    try {
      const token = await loginUser(email, password);
      authContext.authenticate(token);
    } catch (error) {
      console.log(error.message);
    }
  };
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
