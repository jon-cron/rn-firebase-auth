import axios from "axios";

export const createUser = async (email, password) => {
  await axios.post(
    // NOTE you must have the proper url and must remove the [] around the key
    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBzR1ujCh9hi23QuF2jUDXguinFt6P-Jf4",
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};
export const loginUser = async (email, password) => {
  const res = await axios.post(
    // NOTE you must have the proper url and must remove the [] around the key
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBzR1ujCh9hi23QuF2jUDXguinFt6P-Jf4",
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
  console.log(res.data);
};
