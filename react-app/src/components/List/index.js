import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CreateItemForm from '../CreateItemForm';
import DeleteItemButton from '../DeleteItemButton';
import DeleteListButton from '../DeleteListButton';
import EditListForm from '../EditListForm';
import EditItemForm from '../EditItemForm';
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

    const itemContent = list.items?.map((item)=>{
      item = {
        content: item[0],
        id: item[1]
      }
      return (
        <li key={item.id}>
          {item.content}
          <EditItemForm item={item}/>
          <DeleteItemButton item={item}/>
        </li>
      )
    })

    return (
        <ul>
        <div>
          <h2>{list.name}</h2>
          <EditListForm list={list}/>
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
