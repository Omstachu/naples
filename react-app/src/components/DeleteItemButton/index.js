import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/item";

const DeleteItemButton = ({ item }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeItem(item));
        history.push("/pages/");
        history.push("/");
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
