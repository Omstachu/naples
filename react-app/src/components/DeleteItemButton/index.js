import React, {useState }from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../store/item";
import "./DeleteItemButton.css"
import { deleteButtonImage } from "../images/imgSources";


const DeleteItemButton = ({ item, refresher, hideDelete }) => {
    const dispatch = useDispatch();
    // const [showConfirmation, setShowConfirmation] = useState(true)

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeItem(item.id));
        refresher()
        // history.push("/pages/");
        // history.push("/");
      };

    // let deleteConfirmation = null;

    // if (showConfirmation){
    //     deleteConfirmation =
    // }

    let deleteContent = (
        <form onSubmit={handleDelete}>
        <button className="delete-button" type="submit">
        <img className="delete-button-image" src={deleteButtonImage} alt="delete-button"/>
        </button>
    </form>
    )

    if (hideDelete){
        deleteContent = null
    }

    return (
        <>
            {deleteContent}
        </>
    );
}

export default DeleteItemButton
