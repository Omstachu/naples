import React, {useState }from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/item";

const DeleteItemButton = ({ item, refresher }) => {
    const dispatch = useDispatch();
    // const [showConfirmation, setShowConfirmation] = useState(true)

    const handleDelete = async (e) => {
        e.preventDefault();
        console.log(item)
        await dispatch(removeItem(item.id));
        refresher()
        // history.push("/pages/");
        // history.push("/");
      };

    // let deleteConfirmation = null;

    // if (showConfirmation){
    //     deleteConfirmation =
    // }

    return (
    <form onSubmit={handleDelete}>
        <button type="submit">
        Delete
        </button>
    </form>
    );
}

export default DeleteItemButton
