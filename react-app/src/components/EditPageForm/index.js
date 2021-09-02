import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePageName } from "../../store/page";
import { confirmButtonImage, cancelButtonImage, editButtonImage } from "../images/imgSources";

const EditPageForm = ({page, refresher}) => {
    const [name, setName] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [validationErrors, setValidationErrors] = useState([])

    const dispatch = useDispatch()

    useEffect(() => {
        setName(page?.name)
    }, [page])

    const handleSubmit = async (e) => {
        e.preventDefault();
        page.name = name
        const res = await dispatch(updatePageName(page))
        setShowForm(!showForm)
        if (res){
          setValidationErrors(res)
        }
        refresher()

      }

    const handleFormToggle = async (e) => {
      e.preventDefault();
      setShowForm(!showForm)
      setValidationErrors([])
    }

    const updateName = (e) => {
        const name = e.target.value;
        setName(name)
    }

    let formContent = null;

    if (showForm){

      formContent = (
        <>
        <form onSubmit={handleSubmit}>
          <input className="create-list-input"
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

    let showFormButton = null

    if (!showForm) {
      showFormButton = <button className="edit-button" onClick={handleFormToggle}>
        <img className="edit-button-image" src={editButtonImage} alt="edit-button"/>
      </button>
    }

    return (
      <>
        <div className="create-form-errors">
            {validationErrors}
        </div>
        {formContent}
        {showFormButton}
      </>
      );

}

export default EditPageForm
