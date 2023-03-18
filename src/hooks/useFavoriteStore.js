import { useDispatch, useSelector } from "react-redux";
import { onAddFavorite, onRemoveFavorite } from "../store";

export const useFavoriteStore = () => {
  const { favorites } = useSelector((state) => state.favorites);

  const dispatch = useDispatch();

  const startAdding = ({ id, nombre, categoria, precio, image }) => {
    console.log(id, nombre, categoria, precio);
    dispatch(onAddFavorite({ id, nombre, categoria, precio, image }));
  };

  const startDeleting = ({ id }) => {
    dispatch(onRemoveFavorite({ id }));
  };
  return {
    //* Properties
    favorites,
    //* Methods
    startAdding,
    startDeleting,
  };
};
