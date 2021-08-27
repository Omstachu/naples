import React from "react";
import { useDispatch, } from "react-redux"
import { removePage } from "../../store/page";

const DeletePageButton = ({pageId, refresh}) => {
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        e.preventDefault();
        await dispatch(removePage(pageId));
    };


    return (
    <form onSubmit={handleDelete}>
        <button type="submit">
        Delete Page
        </button>
    </form>
    );
}

export default DeletePageButton
