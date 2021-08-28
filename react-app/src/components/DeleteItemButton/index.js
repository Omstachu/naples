import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/item";

const DeleteItemButton = ({ item }) => {
    const dispatch = useDispatch();

    const handleDelete = async (e) => {
        e.preventDefault();
        console.log(item)
        await dispatch(removeItem(item.id));
        // history.push("/pages/");
        // history.push("/");
      };


    return (
    <form onSubmit={handleDelete}>
        <button type="submit">
        Delete
        </button>
    </form>
    );
}

export default DeleteItemButton
