import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CreateItemForm from '../CreateItemForm';
import DeleteItemButton from '../DeleteItemButton';
import { getAllLists } from '../../store/list';
import { getOneList } from '../../store/list';

function List(){
    // const [list, setList] = useState({});
    const { listId }  = useParams();
    const list = useSelector(state => state.list)

    const dispatch = useDispatch()

    useEffect(()=> {
      dispatch(getOneList(listId))
    }, [dispatch, listId])

    // useEffect(() => {
    //     if (!listId){
    //         return;
    //     }
    //     (async () => {
    //         const res = await fetch(`/api/lists/${listId}`)
    //         const list = await res.json()
    //         setList(list)
    //     })()
    // }, [listId])



    if(!list) {
        return null;
    }

    console.log(list)

    const itemContent = list.contents?.map((content, idx)=>{
      return (
        <li key={idx}>
          {content}
          {/* <DeleteItemButton /> */}
        </li>
      )
    })

    return (
        <ul>
        <h2>{list.name}</h2>
        <ul>
          {itemContent}
        </ul>
        <div>
        <CreateItemForm listId={listId} />
        </div>

      </ul>
    )
}

export default List
