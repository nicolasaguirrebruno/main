import { useDispatch, useSelector } from "react-redux";
import { onCloseCart, onCloseWish, onOpenCart, onOpenWish } from "../store";

export const useModalStore = () => {
  const { showCart, showWish } = useSelector((state) => state.modal);

  const dispatch = useDispatch();

  const startDisplay = (displayed) => {
    displayed == "wish" ? dispatch(onOpenWish()) : dispatch(onOpenCart());
  };

  const startClose = (displayed) => {
    displayed == "cart" ? dispatch(onCloseCart()) : dispatch(onCloseWish());
  };
  return {
    //* Properties
    showCart,
    showWish,
    //* Methods
    startDisplay,
    startClose,
  };
};
