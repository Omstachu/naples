import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CreateItemForm from '../CreateItemForm';
import DeleteItemButton from '../DeleteItemButton';
import DeleteListButton from '../DeleteListButton';
import { getOneList } from '../../store/list';


function List(){
    // const [list, setList] = useState({});
    const { listId }  = useParams();
    const list = useSelector(state => state.list)
    const pageId = list.pageId
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

    const itemContent = list.items?.map((item)=>{
      return (
        <li key={item[1]}>
          {item[0]}
          <DeleteItemButton item={item}/>
        </li>
      )
    })

    return (
        <ul>
        <div>
          <h2>{list.name}</h2>
          <DeleteListButton listId={listId} pageId={pageId}/>
        </div>

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
