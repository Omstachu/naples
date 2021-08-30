import React, {useState }from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/item";
import "./DeleteItemButton.css"
import deleteButtonImage from "../images/trash-can-black.png"


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
        <button className="delete-button" type="submit">
        <img className="delete-button-image" src={deleteButtonImage} alt="delete-button"/>
        </button>
    </form>
    );
}

export default DeleteItemButton
