import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
export const useSignup = () => {
  const [error, setError] = useState(null);
  const signup = async (email, password) => {
    try {
      const user = await auth().createUserWithEmailAndPassword(email, password);
      if (user) {
        firestore().collection("users").add({
          uid: user.uid,
          email: user.email,
        });
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return { signup, error };
};
