import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateListName } from "../../store/list";

const EditListForm = ({list}) => {
    const [name, setName] = useState("")

    const dispatch = useDispatch()

    useEffect(() => {
        setName(list?.name)
    }, [list])

    const handleSubmit = async (e) => {
        e.preventDefault();
        list.name = name
        await dispatch(updateListName(list))
        // hideForm()
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

export default EditListForm
