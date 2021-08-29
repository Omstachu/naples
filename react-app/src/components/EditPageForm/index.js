import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updatePageName } from "../../store/page";

const EditPageForm = ({page, refresher}) => {
    const [name, setName] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        setName(page?.name)
    }, [page])

    const handleSubmit = async (e) => {
        e.preventDefault();
        page.name = name
        await dispatch(updatePageName(page))
        refresher()
      }

    const updateName = (e) => {
        const name = e.target.value;
        setName(name)
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

export default EditPageForm
