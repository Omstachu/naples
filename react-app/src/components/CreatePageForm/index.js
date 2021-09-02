import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createPage} from '../../store/page';
import { confirmButtonImage, cancelButtonImage, createItemButtonImage } from '../images/imgSources';


function CreatePageForm({userId, refresher}){
    const [pageName, setPageName] = useState("")
    const [showForm, setShowForm] = useState(false)
    const [showFormName, setShowFormName] = useState(true)
    const [validationErrors, setValidationErrors] = useState([])

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await dispatch(createPage(userId, pageName))
        // history.push(`/pages/${res.data.id}`)
        setPageName("")
        if (res){
            setValidationErrors(res[0])
        }
        refresher()
    }

    const handleFormToggle = async (e) => {
        e.preventDefault();
        setShowForm(!showForm)
        setShowFormName(!showFormName)
        setPageName("")
        setValidationErrors([])
      }

    const updatePageName = e => {
        const name = e.target.value;
        setPageName(name)
    }

    let formContent = null;

    if(showForm){
        formContent = (
            <>
                <form onSubmit={handleSubmit}>
                    <input className="create-list-input"
                        placeholder="Page Name"
                        type="text"
                        value={pageName}
                        onChange={updatePageName}
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

    let formName = null;

    if (showFormName){
        formName = (
        <h3 className="create-form-button-name">New Page</h3>
        )
    }

    let showFormButton = null;

    if (!showForm) {
        showFormButton = <button className="create-list-button" onClick={() => {
            setShowForm(!showForm)
            setShowFormName(false)
        }}
        >
         <img className="create-list-button-image list-page" src={createItemButtonImage} alt="create button"/>
         {formName}
        </button>
      }



      return (
        <div className="page-create-content">
            {validationErrors}
            {formContent}
            {showFormButton}

        </div>
    )
}

export default CreatePageForm
