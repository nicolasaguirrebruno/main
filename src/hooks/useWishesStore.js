import { useDispatch, useSelector } from "react-redux";
import { onAddWish, onRemoveWish } from "../store";

export const useWishesStore = () => {
  const { wishes } = useSelector((state) => state.wishes);

  const dispatch = useDispatch();

  const startAddingWishes = ({ id, nombre, categoria, precio, image }) => {
    console.log(id, nombre, categoria, precio);
    dispatch(onAddWish({ id, nombre, categoria, precio, image }));
  };

  const startDeletingWishes = ({ id }) => {
    dispatch(onRemoveWish({ id }));
  };
  return {
    //* Properties
    wishes,
    //* Methods
    startAddingWishes,
    startDeletingWishes,
  };
};
