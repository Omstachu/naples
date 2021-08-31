import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../../store/item";
import "./EditItemForm.css"
import editButton from '../images/edit-pencil.png'
import { confirmButtonImage, cancelButtonImage } from "../images/imgSources";

const EditItemForm = ({item, refresher}) => {
    const [content, setContent] = useState("")
    const [showForm, setShowForm] = useState(false)

    const dispatch = useDispatch()

    useEffect(()=>{
        setContent(item?.content)
    }, [item, showForm])

    const handleSubmit = async (e) => {
        e.preventDefault();
        item.content = content
        await dispatch(updateItem(item))
        // hideForm()
        setShowForm(!showForm)
        refresher()
    }

    const handleFormToggle = async (e) => {
      e.preventDefault();
      setShowForm(!showForm)

    }


    const updateContent = (e) => {
        const content = e.target.value;
        setContent(content)
    }

    let formContent = null;

    if (showForm){
      formContent = (
        <>
        <form className="edit-item-form" onSubmit={handleSubmit}>

        <input className="edit-item-input"
              placeholder="Content"
              type="text"
              value={content}
              onChange={updateContent}
              maxLength="40"
        />
        <button className="confirm-button" type="submit">
        <img className="confirm-button-image" src={confirmButtonImage} alt="confirm-button"/>
        </button>
        <button className="cancel-button" onClick={handleFormToggle}>
        <img className="cancel-button-image" src={cancelButtonImage} alt="cancel-button"/>
        </button>
        </form>
        </>
      )
    }

    let showFormButton = null;

    if (!showForm) {
      // showFormButton = <button id={`edit-toggle-button-${item.id}`} onClick={() => setShowForm(!showForm)}>Edit</button>
      showFormButton = <button className="edit-button" onClick={handleFormToggle}>
        <img className="edit-button-image" src={editButton} alt="edit-button"/>
      </button>
    }

    // if ((document.getElementById(`edit-toggle-button-${item.id}`) !== document.activeElement) && showForm){
    //   setShowForm(false)
    // }

    return (
      <>
      {formContent}
      {showFormButton}
      {/* <button id={`edit-toggle-button-${item.id}`} onClick={() => setShowForm(!showForm)}>Edit</button> */}
      </>
      );
}

export default EditItemForm
