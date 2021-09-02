import React, { useState } from 'react';
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { createPage} from '../../store/page';
import { confirmButtonImage, cancelButtonImage, createItemButtonImage } from '../images/imgSources';


function CreatePageForm({userId, refresher}){
    const [pageName, setPageName] = useState("")
    const [showForm, setShowForm] = useState(false)

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await dispatch(createPage(userId, pageName))
        history.push(`/pages/${res.data.id}`)
        setPageName("")
        refresher()
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
                    <input
                        placeholder="Page Name"
                        type="text"
                        value={pageName}
                        onChange={updatePageName}
                        maxLength="40"
                    />
                    <button>New Page</button>
                    <button onClick={() => setShowForm(!showForm)}>Cancel</button>
                </form>
            </>
        )
    }

    let showFormButton = null;

    if (!showForm) {
        showFormButton = <button onClick={() => setShowForm(!showForm)}>New Page</button>
      }

      return (
        <div className="page-create-content">
            {formContent}
            {showFormButton}
        </div>
    )
}

export default CreatePageForm
