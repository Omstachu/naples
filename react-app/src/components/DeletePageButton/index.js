import React from "react";
import { useDispatch, } from "react-redux"
import { removePage } from "../../store/page";
import { deleteButtonImage } from "../images/imgSources";


const DeletePageButton = ({pageId, refresher}) => {
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removePage(pageId));
        refresher()
    };


    return (
        <>
        <form onSubmit={handleDelete}>
            <button className="delete-button" type="submit">
            <img className="delete-button-image" src={deleteButtonImage} alt="delete-button"/>
            </button>
        </form>
        </>
    );
}

export default DeletePageButton
