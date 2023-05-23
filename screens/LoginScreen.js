import AuthContent from "../components/Auth/AuthContent";
import { loginUser } from "../util/auth";

function LoginScreen() {
  const loginHandler = async ({ email, password }) => {
    await loginUser(email, password);
  };
  return <AuthContent isLogin onAuthenticate={loginHandler} />;
}

export default LoginScreen;
