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
            setList(list)
        })()
    }, [listId])

    if(!list) {
        return null;
    }

    const itemContent = list.contents?.map((content,idx)=>{
      return (
        <li key={idx}>
          {content}
        </li>
      )
    })

    return (
        <ul>
        <li>
          <strong>List Id</strong> {listId}
        </li>
        {/* <li>
          <strong>list</strong> {list.name}
        </li> */}
        <h2>{list.name}</h2>
        <ul>
          {itemContent}
        </ul>

      </ul>
    )
}

export default List
