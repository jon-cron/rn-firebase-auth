import axios from "axios";

export const createUser = async (email, password) => {
  const res = await axios.post(
    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=[AIzaSyCx-2STkC-PDCRzZF1MLRTywkfrG4WBu6A]",
    {
      email: email,
      password: password,
      returnSecureToken: true,
    }
  );
};
