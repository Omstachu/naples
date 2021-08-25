import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function List(){
    const [list, setList] = useState({});
    const { listId }  = useParams();

    useEffect(() => {
        if (!listId){
            return;
        }
        (async () => {
            const res = await fetch(`/api/lists/${listId}`)
            const list = await res.json()
            // console.log(list)s
            setList(list)
        })()
    }, [listId])

    if(!list) {
        return null;
    }

    // console.log(list)

    return (
        <ul>
        <li>
          <strong>List Id</strong> {listId}
        </li>
        <li>
          <strong>list</strong> {list.name}
        </li>
      </ul>
    )
}

export default List
