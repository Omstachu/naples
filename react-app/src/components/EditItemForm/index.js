import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../../store/item";

const EditItemForm = ({item, hideForm}) => {
    const [content, setContent] = useState("")
    const [showForm, setShowForm] = useState(false)

    const dispatch = useDispatch()

    useEffect(()=>{
        setContent(item?.content)
    }, [item])

    const handleSubmit = async (e) => {
        e.preventDefault();
        item.content = content
        await dispatch(updateItem(item))
        // hideForm()
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

        <input
              placeholder="Content"
              type="text"
              value={content}
              onChange={updateContent}
              maxLength="40"
        />
        <button type="submit">
              Confirm
            </button>
        </form>
        </>
      )
    }

    // if (document.getElementById(item.id))

    return (
      <>
      {formContent}
      <button id={`edit-toggle-button-${item.id}`} onClick={() => setShowForm(!showForm)}>Edit</button>
      </>
      );
}

export default EditItemForm
