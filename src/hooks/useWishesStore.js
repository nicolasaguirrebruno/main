import { useDispatch, useSelector } from "react-redux";
import { chalesApi } from "../api";
import { onAddWish, onLoadWishes, onRemoveWish } from "../store";

export const useWishesStore = () => {
  const { wishes } = useSelector((state) => state.wishes);
  const { user, status } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const startAddingWishes = async ({
    nombre,
    categoria,
    caracteristicas,
    descripcion,
    precio,
    image,
  }) => {
    const { data } = await chalesApi.post("/favorites", {
      nombre,
      categoria,
      caracteristicas,
      descripcion,
      precio,
      image,
    });

    dispatch(
      onAddWish({
        nombre,
        categoria,
        caracteristicas,
        descripcion,
        precio,
        image,
        id: data.favorito._id,
        user,
      })
    );
  };

  const startDeletingWishes = async ({ id }) => {
    try {
      await chalesApi.delete(`/favorites/${id}`, {});
      dispatch(onRemoveWish({ id }));
    } catch (error) {}
  };

  const startLoadingWishes = async () => {
    try {
      if (status == "authenticated") {
        const { data } = await chalesApi.get("/favorites");
        const wishes = data.favoritos;
        console.log(wishes);
        const userWishes = wishes.filter((wish) => wish.user._id === user.uid);
        console.log(userWishes);
        dispatch(onLoadWishes({ userWishes }));
      }
    } catch (error) {
      console.log("Error cargando eventos");
      console.log(error);
    }
  };
  return {
    //* Properties
    wishes,
    //* Methods
    startAddingWishes,
    startDeletingWishes,
    startLoadingWishes,
  };
};
