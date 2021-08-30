import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../../store/item";
import "./EditItemForm.css"
import deleteButton from '../images/delete-button.png'

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

    const updateContent = (e) => {
        const content = e.target.value;
        setContent(content)
    }

    let formContent = null;

    if (showForm){
      formContent = (
        <>
        <form onSubmit={handleSubmit}>

        <input className="item-input"
              placeholder="Content"
              type="text"
              value={content}
              onChange={updateContent}
              maxLength="40"
        />
        <button className="confirm-button" type="submit">
          Confirm
        </button>
        </form>
        </>
      )
    }

    let showFormButton = null;

    if (!showForm) {
      // showFormButton = <button id={`edit-toggle-button-${item.id}`} onClick={() => setShowForm(!showForm)}>Edit</button>
      showFormButton = <button className="edit-button" onClick={() => setShowForm(!showForm)}>
        <img className="edit-button-image" src={deleteButton} alt="edit-button"/>
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
