import React from "react";
import { useDispatch, } from "react-redux";
import {useHistory} from "react-router-dom"
import { removeList } from "../../store/list";
import { deleteButtonImage } from "../images/imgSources";
const DeleteListButton = ({ listId, pageId, refresher }) => {
    const dispatch = useDispatch()
    const history = useHistory()



    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removeList(listId));
        // history.push(`/pages/${pageId}`)
        refresher()
    };


    return (
    <form onSubmit={handleDelete}>
        <button className="delete-button" type="submit">
        <img className="delete-button-image" src={deleteButtonImage} alt="delete-button"/>
        </button>
    </form>
    );
}

export default DeleteListButton
