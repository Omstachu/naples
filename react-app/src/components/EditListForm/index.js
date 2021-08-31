import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateListName } from "../../store/list";
import { confirmButtonImage, cancelButtonImage } from "../images/imgSources";

const EditListForm = ({list, refresher}) => {
    const [name, setName] = useState("")
    const [showForm, setShowForm] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        setName(list?.name)
    }, [list, showForm])

    const handleSubmit = async (e) => {
        e.preventDefault();
        list.name = name
        await dispatch(updateListName(list))
        // hideForm()
        setShowForm(!showForm)
        refresher()
    }

    const handleFormToggle = async (e) => {
      e.preventDefault();
      setShowForm(!showForm)

    }

    const updateName = (e) => {
        const name = e.target.value;
        setName(name)
    }

    let formContent = null;

    if (showForm){
      formContent = (
        <>
        <form className="edit-item-form" onSubmit={handleSubmit}>

        <input
            placeholder={name}
            type="text"
            value={name}
            onChange={updateName}
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


    return (
        <form onSubmit={handleSubmit}>
          <input
            placeholder={name}
            type="text"
            value={name}
            onChange={updateName}
            maxLength="40"
          />
          {/* <div className="charcounter_description">Characters Remaining : {140 - description.length}</div> */}
          <button type="submit">
            Confirm
          </button>
        </form>
      );

}

export default EditListForm
