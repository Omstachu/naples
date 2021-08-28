import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateItem } from "../../store/item";

const EditItemForm = ({item}) => {
    const [content, setContent] = useState("")

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

    return (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Content"
            type="text"
            value={content}
            onChange={updateContent}
            maxLength="40"
          />
          {/* <div className="charcounter_description">Characters Remaining : {140 - description.length}</div> */}
          <button type="submit">
            Confirm
          </button>
        </form>
      );
}

export default EditItemForm
