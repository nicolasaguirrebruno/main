import { useDispatch, useSelector } from "react-redux";
import { onLogin } from "../store";

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const startLogin = ({ email, password }) => {
    dispatch(onLogin({ email, password }));
  };
  return {
    //* Properties
    status,
    user,
    errorMessage,
    //* Methods
    startLogin,
  };
};
