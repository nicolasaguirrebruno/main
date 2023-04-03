import { useDispatch, useSelector } from "react-redux";
import {
  onCloseCart,
  onCloseUser,
  onCloseWish,
  onOpenCart,
  onOpenUser,
  onOpenWish,
} from "../store";

export const useModalStore = () => {
  const { showCart, showWish, showUser } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const startDisplay = (displayed) => {
    displayed == "wish" ? dispatch(onOpenWish()) : dispatch(onOpenCart());
  };

  const startClose = (displayed) => {
    displayed == "cart" ? dispatch(onCloseCart()) : dispatch(onCloseWish());
  };

  const startUserDisplay = () => {
    dispatch(onOpenUser());
  };

  const startUserClose = () => {
    dispatch(onCloseUser());
  };
  return {
    //* Properties
    showCart,
    showWish,
    showUser,
    //* Methods
    startDisplay,
    startClose,
    startUserDisplay,
    startUserClose,
  };
};
